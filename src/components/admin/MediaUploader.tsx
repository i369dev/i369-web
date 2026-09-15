import React, { useState, useRef, useEffect } from 'react';
import { Upload, Image as ImageIcon, Video, FileText, CheckCircle2, AlertCircle, X, ExternalLink } from 'lucide-react';
import { supabase } from '../../lib/supabase';

export interface MediaMeta {
  width?: number;
  height?: number;
  sizeBytes?: number;
  sizeFormatted?: string;
  mimeType?: string;
  duration?: number;
  aspectRatio?: string;
}

interface MediaUploaderProps {
  label?: string;
  value: string;
  onChange: (url: string, meta?: MediaMeta) => void;
  accept?: string;
  mediaType?: 'image' | 'video' | 'any';
  placeholder?: string;
  helpText?: string;
}

export const formatFileSize = (bytes?: number): string => {
  if (!bytes || bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
};

export const MediaUploader: React.FC<MediaUploaderProps> = ({
  label,
  value,
  onChange,
  accept = 'image/*,video/*',
  mediaType = 'any',
  placeholder = 'Paste URL or select file...',
  helpText,
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [meta, setMeta] = useState<MediaMeta | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Extract dimensions from existing URL when value changes
  useEffect(() => {
    if (!value) {
      setMeta(null);
      return;
    }

    if (value.startsWith('data:image/svg+xml') || value.endsWith('.svg')) {
      setMeta({
        mimeType: 'image/svg+xml',
        sizeFormatted: formatFileSize(value.length),
      });
      return;
    }

    const isVid = value.match(/\.(mp4|webm|ogg|mov)(\?.*)?$/i) || mediaType === 'video';
    if (isVid) {
      const vid = document.createElement('video');
      vid.src = value;
      vid.onloadedmetadata = () => {
        setMeta({
          width: vid.videoWidth,
          height: vid.videoHeight,
          duration: Math.round(vid.duration),
          aspectRatio: vid.videoWidth && vid.videoHeight ? `${(vid.videoWidth / vid.videoHeight).toFixed(2)}:1` : undefined,
          mimeType: 'video/mp4',
        });
      };
      vid.onerror = () => {
        // Fallback meta
      };
    } else {
      const img = new Image();
      img.src = value;
      img.onload = () => {
        setMeta({
          width: img.naturalWidth,
          height: img.naturalHeight,
          aspectRatio: img.naturalWidth && img.naturalHeight ? `${(img.naturalWidth / img.naturalHeight).toFixed(2)}:1` : undefined,
          mimeType: 'image/jpeg',
        });
      };
    }
  }, [value, mediaType]);

  // Handle file inspection and upload
  const handleProcessFile = async (file: File) => {
    setErrorMsg(null);
    setIsUploading(true);

    const sizeBytes = file.size;
    const sizeFormatted = formatFileSize(sizeBytes);
    const mimeType = file.type;

    try {
      // 1. Extract Dimensions in browser immediately
      let width = 0;
      let height = 0;
      let duration: number | undefined;

      if (file.type.startsWith('video/')) {
        const url = URL.createObjectURL(file);
        const vid = document.createElement('video');
        vid.preload = 'metadata';
        vid.src = url;
        await new Promise<void>((resolve) => {
          vid.onloadedmetadata = () => {
            width = vid.videoWidth;
            height = vid.videoHeight;
            duration = Math.round(vid.duration);
            URL.revokeObjectURL(url);
            resolve();
          };
          vid.onerror = () => {
            URL.revokeObjectURL(url);
            resolve();
          };
        });
      } else if (file.type.startsWith('image/')) {
        const url = URL.createObjectURL(file);
        const img = new Image();
        img.src = url;
        await new Promise<void>((resolve) => {
          img.onload = () => {
            width = img.naturalWidth;
            height = img.naturalHeight;
            URL.revokeObjectURL(url);
            resolve();
          };
          img.onerror = () => {
            URL.revokeObjectURL(url);
            resolve();
          };
        });
      }

      const calculatedMeta: MediaMeta = {
        width: width || undefined,
        height: height || undefined,
        sizeBytes,
        sizeFormatted,
        mimeType,
        duration,
        aspectRatio: width && height ? `${(width / height).toFixed(2)}:1` : undefined,
      };
      setMeta(calculatedMeta);

      // 2. Upload to Supabase Storage or convert to Data URL fallback
      let finalUrl = '';
      try {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}_${Math.random().toString(36).substring(2, 8)}.${fileExt}`;
        const filePath = `uploads/${fileName}`;

        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('media')
          .upload(filePath, file, { cacheControl: '3600', upsert: true });

        if (!uploadError && uploadData) {
          const { data: publicUrlData } = supabase.storage.from('media').getPublicUrl(filePath);
          finalUrl = publicUrlData.publicUrl;
        } else {
          // Fallback: If 'media' storage bucket is not created, encode as Data URL
          finalUrl = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(file);
          });
        }
      } catch (uploadErr) {
        // Fallback to Data URL
        finalUrl = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      }

      onChange(finalUrl, calculatedMeta);
    } catch (err: any) {
      console.error('Error processing media file:', err);
      setErrorMsg(err.message || 'Failed to process media file');
    } finally {
      setIsUploading(false);
    }
  };

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleProcessFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleProcessFile(file);
    }
  };

  const isVideo = value?.match(/\.(mp4|webm|ogg|mov)(\?.*)?$/i) || mediaType === 'video';

  return (
    <div className="space-y-2">
      {label && (
        <div className="flex items-center justify-between">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-700">{label}</label>
          {meta && (
            <span className="text-[11px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              Verified Dimensions
            </span>
          )}
        </div>
      )}

      {/* Media Dimension & Weight Extraction Bar */}
      {meta && (
        <div className="flex flex-wrap items-center gap-2 p-2 bg-slate-50 rounded border border-slate-200 text-xs text-slate-700">
          {meta.width && meta.height && (
            <div className="inline-flex items-center gap-1 font-mono bg-white px-2 py-1 rounded border border-slate-300 shadow-xs">
              <span className="text-slate-400">Dim:</span>
              <span className="font-bold text-slate-900">{meta.width} × {meta.height} px</span>
            </div>
          )}
          {meta.aspectRatio && (
            <div className="inline-flex items-center gap-1 font-mono bg-white px-2 py-1 rounded border border-slate-300 shadow-xs">
              <span className="text-slate-400">Ratio:</span>
              <span className="font-semibold text-slate-800">{meta.aspectRatio}</span>
            </div>
          )}
          {meta.sizeFormatted && (
            <div className="inline-flex items-center gap-1 font-mono bg-white px-2 py-1 rounded border border-slate-300 shadow-xs">
              <span className="text-slate-400">Weight:</span>
              <span className="font-bold text-indigo-700">{meta.sizeFormatted}</span>
            </div>
          )}
          {meta.duration && (
            <div className="inline-flex items-center gap-1 font-mono bg-white px-2 py-1 rounded border border-slate-300 shadow-xs">
              <span className="text-slate-400">Duration:</span>
              <span className="font-semibold text-slate-800">{meta.duration}s</span>
            </div>
          )}
          {meta.mimeType && (
            <span className="font-mono text-[10px] text-slate-500 uppercase px-1.5 py-0.5 bg-slate-200/70 rounded">
              {meta.mimeType}
            </span>
          )}
        </div>
      )}

      {/* Preview Box & Upload Area */}
      <div
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-lg p-3 transition-colors ${
          dragOver ? 'border-indigo-500 bg-indigo-50/50' : 'border-slate-300 bg-white hover:border-slate-400'
        }`}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          {/* Visual Thumbnail */}
          <div className="relative w-20 h-20 rounded bg-slate-100 border border-slate-200 shrink-0 overflow-hidden flex items-center justify-center">
            {value ? (
              isVideo ? (
                <video src={value} className="w-full h-full object-cover" muted loop autoPlay />
              ) : (
                <img
                  src={value}
                  alt="Thumbnail"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              )
            ) : (
              <div className="text-slate-400 flex flex-col items-center">
                {mediaType === 'video' ? <Video className="w-6 h-6" /> : <ImageIcon className="w-6 h-6" />}
              </div>
            )}

            {isUploading && (
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              </div>
            )}
          </div>

          {/* Controls & URL input */}
          <div className="flex-1 w-full space-y-2">
            <div className="flex gap-2">
              <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="flex-1 px-3 py-1.5 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 text-slate-800 font-mono"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={isUploading}
                className="px-3 py-1.5 text-xs font-medium bg-slate-900 text-white rounded hover:bg-slate-800 transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer disabled:opacity-50"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Upload</span>
              </button>
              {value && (
                <button
                  type="button"
                  onClick={() => onChange('', undefined)}
                  className="p-1.5 text-slate-400 hover:text-red-500 rounded border border-slate-200 hover:border-red-200"
                  title="Clear media"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <p className="text-[11px] text-slate-500">
              {helpText || 'Upload JPG, PNG, WebP, SVG, MP4, or paste an external URL. Dimensions & size will be extracted automatically.'}
            </p>
          </div>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          onChange={onFileInputChange}
          className="hidden"
        />
      </div>

      {errorMsg && (
        <div className="flex items-center gap-1.5 text-xs text-red-600 bg-red-50 p-2 rounded border border-red-200">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}
    </div>
  );
};
