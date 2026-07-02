import React, { useEffect, useRef, useState } from 'react';
import { generateAltText } from './altTextApi';
import { AltTextLanguage, AltTextMode, AltTextResult, Page } from './types';

interface ImageAltTextGeneratorPageProps {
  setPage: (page: Page) => void;
}

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const ACCEPTED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

const modeOptions: { value: AltTextMode; label: string; hint: string }[] = [
  { value: 'general', label: 'General', hint: 'Balanced output for most pages.' },
  { value: 'seo', label: 'SEO', hint: 'A bit more keyword-aware when relevant.' },
  { value: 'accessibility', label: 'Accessibility', hint: 'Clarity first for screen readers.' },
  { value: 'ecommerce', label: 'E-commerce', hint: 'Better for product imagery.' },
];

const languageOptions: { value: AltTextLanguage; label: string }[] = [
  { value: 'english', label: 'English' },
  { value: 'roman_urdu', label: 'Roman Urdu' },
  { value: 'hindi', label: 'Hindi' },
];

const resultCards: { key: keyof AltTextResult; title: string }[] = [
  { key: 'short_alt_text', title: 'Short Alt Text' },
  { key: 'seo_alt_text', title: 'SEO Alt Text' },
  { key: 'accessibility_alt_text', title: 'Accessibility Alt Text' },
  { key: 'ecommerce_alt_text', title: 'E-commerce Alt Text' },
];

const faqs = [
  {
    question: 'What is alt text?',
    answer:
      'Alt text is the written description attached to an image so search engines and screen readers can understand what is shown.',
  },
  {
    question: 'Should I add keywords in alt text?',
    answer:
      'Only when they naturally match what is visible. Forced keywords usually make alt text worse for both SEO and accessibility.',
  },
  {
    question: 'Do you store uploaded images?',
    answer:
      'This tool is designed for temporary processing only. Uploaded files should not be stored permanently.',
  },
  {
    question: 'Which image formats work?',
    answer:
      'For the MVP, use JPG, PNG, or WebP files under 5 MB.',
  },
];

const relatedTools = [
  'AI Meta Description Generator',
  'SEO Title Generator',
  'Image Caption Generator',
  'Product Description Generator',
];

const copyIcon = (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="9" y="9" width="11" height="11" rx="2" />
    <path d="M5 15V6a2 2 0 0 1 2-2h9" />
  </svg>
);

const uploadIcon = (
  <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 16V4" />
    <path d="m7 9 5-5 5 5" />
    <path d="M5 20h14" />
  </svg>
);

const ImageAltTextGeneratorPage: React.FC<ImageAltTextGeneratorPageProps> = ({ setPage }) => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [keyword, setKeyword] = useState('');
  const [mode, setMode] = useState<AltTextMode>('general');
  const [language, setLanguage] = useState<AltTextLanguage>('english');
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AltTextResult | null>(null);
  const [copiedCard, setCopiedCard] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const validateFile = (candidate: File): string | null => {
    const hasValidExtension = ACCEPTED_EXTENSIONS.some((ext) =>
      candidate.name.toLowerCase().endsWith(ext)
    );

    if (!ACCEPTED_TYPES.includes(candidate.type) || !hasValidExtension) {
      return 'Only JPG, PNG, and WebP images are supported.';
    }

    if (candidate.size > MAX_FILE_SIZE) {
      return 'Images must be smaller than 5MB.';
    }

    return null;
  };

  const handleFileSelection = (candidate: File | null) => {
    if (!candidate) {
      return;
    }

    const validationError = validateFile(candidate);
    if (validationError) {
      setError(validationError);
      return;
    }

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    setError(null);
    setResult(null);
    setCopiedCard(null);
    setFile(candidate);
    setPreviewUrl(URL.createObjectURL(candidate));
  };

  const handleCopy = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedCard(label);
      window.setTimeout(() => setCopiedCard((current) => (current === label ? null : current)), 1600);
    } catch {
      setError('Clipboard access failed. Please copy the text manually.');
    }
  };

  const handleGenerate = async () => {
    if (!file) {
      setError('Please upload an image.');
      return;
    }

    if (keyword.length > 120) {
      setError('Keyword should stay under 120 characters.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const generated = await generateAltText({ file, keyword, mode, language });
      setResult(generated);
    } catch (apiError) {
      const message =
        apiError instanceof Error
          ? apiError.message
          : 'The AI could not generate alt text right now. Please try again.';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-slate-50 pt-28 md:pt-36 pb-20 md:pb-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal mb-10">
          <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.35em] mb-4">
            Free Traffic Tool
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-none max-w-4xl">
            Free AI Image <span className="text-blue-600">Alt Text Generator</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg md:text-xl text-slate-500 font-medium leading-relaxed">
            Upload an image and generate natural, SEO-friendly, and accessibility-friendly alt text in seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
          <div className="reveal bg-white border border-slate-200 rounded-[2rem] p-5 md:p-8 shadow-xl shadow-slate-200/60">
            <div
              role="button"
              tabIndex={0}
              onClick={() => inputRef.current?.click()}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  inputRef.current?.click();
                }
              }}
              onDragOver={(event) => {
                event.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={(event) => {
                event.preventDefault();
                setIsDragging(false);
                handleFileSelection(event.dataTransfer.files?.[0] || null);
              }}
              className={`rounded-[1.75rem] border-2 border-dashed px-6 py-10 md:px-10 md:py-14 text-center transition-all ${
                isDragging ? 'border-blue-600 bg-blue-50' : 'border-slate-200 bg-slate-50'
              }`}
            >
              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-white text-blue-600 shadow-lg shadow-slate-200">
                {uploadIcon}
              </div>
              <p className="text-xl font-black text-slate-900 uppercase tracking-tight">
                Drag and drop your image
              </p>
              <p className="mt-3 text-sm font-medium text-slate-500">
                JPG, PNG, or WebP up to 5MB.
              </p>
              <button
                type="button"
                className="mt-6 rounded-2xl bg-blue-600 px-6 py-4 text-[11px] font-black uppercase tracking-[0.25em] text-white transition hover:bg-slate-900"
              >
                Choose Image
              </button>
              <input
                ref={inputRef}
                type="file"
                accept={ACCEPTED_EXTENSIONS.join(',')}
                className="hidden"
                onChange={(event) => handleFileSelection(event.target.files?.[0] || null)}
              />
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
              <label className="block">
                <span className="mb-2 block text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">
                  Target Keyword
                </span>
                <input
                  value={keyword}
                  onChange={(event) => setKeyword(event.target.value.slice(0, 120))}
                  placeholder="Optional SEO keyword"
                  className="w-full rounded-[1.25rem] border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-900 outline-none transition focus:border-blue-600 focus:bg-white"
                />
              </label>

              <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50 px-5 py-4">
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">
                  Privacy
                </p>
                <p className="mt-2 text-sm font-medium text-slate-600 leading-relaxed">
                  Images are processed temporarily and are not stored permanently.
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div>
                <p className="mb-3 text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">
                  Generation Mode
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {modeOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setMode(option.value)}
                      className={`rounded-[1.25rem] border px-4 py-4 text-left transition ${
                        mode === option.value
                          ? 'border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <span className="block text-xs font-black uppercase tracking-widest">{option.label}</span>
                      <span className={`mt-2 block text-[11px] font-medium leading-relaxed ${mode === option.value ? 'text-blue-100' : 'text-slate-500'}`}>
                        {option.hint}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">
                  Output Language
                </p>
                <div className="flex flex-wrap gap-3">
                  {languageOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setLanguage(option.value)}
                      className={`rounded-full px-5 py-3 text-[11px] font-black uppercase tracking-[0.2em] transition ${
                        language === option.value
                          ? 'bg-slate-900 text-white shadow-lg'
                          : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {error ? (
              <div aria-live="polite" className="mt-6 rounded-[1.25rem] border border-red-200 bg-red-50 px-5 py-4 text-sm font-semibold text-red-700">
                {error}
              </div>
            ) : null}

            <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <button
                type="button"
                onClick={handleGenerate}
                disabled={isLoading}
                className="rounded-[1.3rem] bg-blue-600 px-7 py-4 text-[11px] font-black uppercase tracking-[0.25em] text-white transition hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? 'Generating Alt Text...' : 'Generate Alt Text'}
              </button>
              <p className="text-sm font-medium text-slate-500" aria-live="polite">
                {result ? 'Fresh results are ready below.' : 'You will receive four alt text variations.'}
              </p>
            </div>
          </div>

          <div className="reveal delay-100 space-y-6">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
              <div className="border-b border-slate-200 px-6 py-4">
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">
                  Upload Preview
                </p>
              </div>
              <div className="aspect-[4/3] bg-slate-100">
                {previewUrl ? (
                  <img src={previewUrl} alt="" className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full items-center justify-center px-8 text-center text-sm font-medium text-slate-400">
                    Your uploaded image preview will appear here.
                  </div>
                )}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-2xl">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">
                Why This Helps
              </p>
              <ul className="mt-4 space-y-4 text-sm font-medium text-slate-300">
                <li>Improve accessibility for screen reader users.</li>
                <li>Speed up image optimization for blogs, products, and landing pages.</li>
                <li>Turn a traffic tool into a trust-building entry point for your AI services.</li>
              </ul>
            </div>
          </div>
        </div>

        <div aria-live="polite" className="reveal delay-200 mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {resultCards.map(({ key, title }) => {
            const value = result?.[key] ?? '';
            const characters = value.length;

            return (
              <article key={key} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-black uppercase tracking-tight text-slate-900">{title}</h2>
                    <p className="mt-2 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
                      {characters} characters
                    </p>
                  </div>
                  <button
                    type="button"
                    disabled={!value}
                    onClick={() => handleCopy(key, value)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 text-slate-500 transition hover:border-blue-600 hover:text-blue-600 disabled:opacity-40"
                    aria-label={`Copy ${title}`}
                  >
                    {copyIcon}
                  </button>
                </div>
                <p className="mt-5 min-h-24 text-sm font-medium leading-7 text-slate-600">
                  {value || 'Your generated alt text will appear here after you run the tool.'}
                </p>
                {copiedCard === key ? (
                  <p className="mt-4 text-[11px] font-black uppercase tracking-[0.25em] text-blue-600">
                    Copied
                  </p>
                ) : null}
              </article>
            );
          })}
        </div>

        {result?.notes ? (
          <div className="reveal mt-6 rounded-[1.5rem] border border-blue-200 bg-blue-50 px-6 py-5 text-sm font-medium text-slate-700">
            <span className="font-black uppercase tracking-[0.2em] text-blue-700">Notes:</span> {result.notes}
          </div>
        ) : null}

        <div className="reveal mt-16 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8">
          <div className="rounded-[2.5rem] bg-white px-6 py-8 md:px-8 md:py-10 border border-slate-200 shadow-xl shadow-slate-200/60">
            <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.35em] mb-4">SEO Content</p>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">What is an AI Image Alt Text Generator?</h3>
                <p className="mt-3 text-slate-600 font-medium leading-7">
                  It is a simple utility that reads the visual content of an image and proposes multiple alt text options for SEO, accessibility, and commerce use cases.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Why image alt text matters for SEO</h3>
                <p className="mt-3 text-slate-600 font-medium leading-7">
                  Strong alt text helps search engines understand your imagery, improves topical relevance, and creates cleaner metadata for image-heavy pages.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Why alt text matters for accessibility</h3>
                <p className="mt-3 text-slate-600 font-medium leading-7">
                  Clear descriptions make content more usable for screen reader users and reduce ambiguity when visual context is essential.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">How to write good alt text</h3>
                <p className="mt-3 text-slate-600 font-medium leading-7">
                  Stay faithful to what is visible, avoid keyword stuffing, and lead with the subject a real person would need in order to understand the image.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-[2.5rem] bg-slate-950 px-6 py-8 md:px-8 md:py-10 text-white shadow-2xl">
              <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.35em] mb-4">FAQs</p>
              <div className="space-y-5">
                {faqs.map((faq) => (
                  <div key={faq.question} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                    <h3 className="text-sm font-black uppercase tracking-wide">{faq.question}</h3>
                    <p className="mt-3 text-sm font-medium leading-7 text-slate-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2.5rem] bg-white px-6 py-8 md:px-8 md:py-10 border border-slate-200 shadow-xl shadow-slate-200/60">
              <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.35em] mb-4">Related Tools</p>
              <div className="space-y-3">
                {relatedTools.map((tool) => (
                  <button
                    key={tool}
                    type="button"
                    onClick={() => setPage('resources')}
                    className="flex w-full items-center justify-between rounded-[1.35rem] border border-slate-200 px-5 py-4 text-left transition hover:border-blue-600 hover:bg-blue-50"
                  >
                    <span className="text-sm font-black uppercase tracking-wide text-slate-900">{tool}</span>
                    <span className="text-blue-600 text-lg leading-none">+</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="reveal mt-10 rounded-[2.5rem] bg-blue-600 px-6 py-8 md:px-10 md:py-10 text-white shadow-2xl shadow-blue-500/30">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-blue-100">Upgrade Path</p>
              <h3 className="mt-3 text-2xl md:text-3xl font-black uppercase tracking-tight">
                Need bulk alt text? Upgrade to Pro
              </h3>
              <p className="mt-3 max-w-2xl text-sm md:text-base font-medium leading-7 text-blue-100">
                Turn this free tool into a lead magnet, then upsell bulk processing, e-commerce catalog enrichment, and API access.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setPage('book-call')}
              className="rounded-[1.35rem] bg-white px-7 py-4 text-[11px] font-black uppercase tracking-[0.25em] text-blue-700 transition hover:bg-slate-900 hover:text-white"
            >
              Talk to JentoAI
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageAltTextGeneratorPage;
