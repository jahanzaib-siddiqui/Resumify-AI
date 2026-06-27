import { useRef } from 'react';
import html2pdf from 'html2pdf.js';

import TemplateUSA from './templates/TemplateUSA';
import TemplateCanada from './templates/TemplateCanada';
import TemplateUK from './templates/TemplateUK';
import TemplateGermany from './templates/TemplateGermany';
import TemplateEurope from './templates/TemplateEurope';
import TemplateRussia from './templates/TemplateRussia';
import TemplateAustralia from './templates/TemplateAustralia';
import TemplatePakistan from './templates/TemplatePakistan';
import TemplateIndia from './templates/TemplateIndia';
import TemplateChina from './templates/TemplateChina';
import TemplateIndonesia from './templates/TemplateIndonesia';
import TemplateJapan from './templates/TemplateJapan';
import TemplateKorea from './templates/TemplateKorea';
import TemplateSingapore from './templates/TemplateSingapore';
import TemplateMalaysia from './templates/TemplateMalaysia';
import TemplateThailand from './templates/TemplateThailand';
import TemplateUAE from './templates/TemplateUAE';
import TemplateTurkey from './templates/TemplateTurkey';

const TEMPLATE_MAP = {
    'USA': TemplateUSA,
    'Canada': TemplateCanada,
    'UK': TemplateUK,
    'Germany': TemplateGermany,
    'Europe': TemplateEurope,
    'Russia': TemplateRussia,
    'Australia': TemplateAustralia,
    'Pakistan': TemplatePakistan,
    'India': TemplateIndia,
    'China': TemplateChina,
    'Indonesia': TemplateIndonesia,
    'Japan': TemplateJapan,
    'Korea': TemplateKorea,
    'Singapore': TemplateSingapore,
    'Malaysia': TemplateMalaysia,
    'Thailand': TemplateThailand,
    'UAE': TemplateUAE,
    'Turkey': TemplateTurkey,
};

// primary = dominant header/sidebar/border color
// accent  = secondary highlight / link / sub-heading color
const THEME_COLORS = {
    classic:  { primary: '#1c1c1c', accent: '#4b5563' },
    navy:     { primary: '#1e3a5f', accent: '#3b82f6' },
    emerald:  { primary: '#065f46', accent: '#10b981' },
    burgundy: { primary: '#7f1d1d', accent: '#e11d48' },
    teal:     { primary: '#0f766e', accent: '#14b8a6' },
};

const TemplatePreview = ({ data, isLoading, region, profileImage, theme }) => {
    const resumeRef = useRef(null);
    const themeColors = THEME_COLORS[theme] || THEME_COLORS.classic;

    const handleDownloadPDF = () => {
        const element = resumeRef.current;
        if (!element) return;
        const opt = {
            margin: 0,
            filename: `${data?.personalInfo?.fullName || 'Resume'}_${region}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true, letterRendering: true },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().set(opt).from(element).save();
    };

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center h-full space-y-6">
                <div className="relative">
                    <div className="w-24 h-24 border-4 border-indigo-100 rounded-full"></div>
                    <div className="w-24 h-24 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
                </div>
                <div className="text-center">
                    <p className="text-indigo-800 font-bold text-lg tracking-wide">AI is crafting your {region} resume...</p>
                    <p className="text-sm text-gray-500 mt-1">Applying regional formatting &amp; cultural standards.</p>
                </div>
            </div>
        );
    }

    if (!data) {
        return (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
                <svg className="w-24 h-24 mb-6 text-indigo-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-2xl font-bold text-gray-400">Live Document Preview</p>
                <p className="text-sm mt-2 text-gray-500">Select a country template and fill the form to generate.</p>
            </div>
        );
    }

    const ActiveTemplate = TEMPLATE_MAP[region] || TemplateUSA;
    // Europass keeps its fixed EU blue/yellow – pass null so the template ignores theming
    const templateThemeColors = region === 'Europe' ? null : themeColors;

    return (
        <div className="relative group">
            <button
                onClick={handleDownloadPDF}
                className="mb-4 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md flex items-center gap-2 transition-all ml-auto"
                style={{ background: themeColors.primary }}
            >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
            </button>

            <div className="mb-3 flex items-center gap-2">
                <span
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wide"
                    style={{ background: themeColors.primary }}
                >
                    {region} — Unique Regional Design
                </span>
            </div>

            <div className="shadow-2xl rounded-lg overflow-hidden border border-gray-200">
                <ActiveTemplate
                    data={data}
                    resumeRef={resumeRef}
                    profileImage={profileImage}
                    themeColors={templateThemeColors}
                />
            </div>
        </div>
    );
};

export default TemplatePreview;
