const TemplateLibrary = ({ activeRegion, setRegion }) => {
    const templates = [
        { id: 'USA', name: 'USA (Strict ATS)', country: 'Americas', desc: 'No photo, highly metric driven. Perfect for automated systems.' },
        { id: 'Canada', name: 'Canada (Standard)', country: 'Americas', desc: 'Reverse-chronological, strict rules against photos.' },
        { id: 'UK', name: 'UK (Professional)', country: 'Europe', desc: '2 pages, strong objective summary, British English.' },
        { id: 'Germany', name: 'Germany (Lebenslauf)', country: 'Europe', desc: 'Detailed, highly structured, includes photo placeholder.' },
        { id: 'Europe', name: 'Europass (General)', country: 'Europe', desc: 'Standardized European framework, language focus.' },
        { id: 'Russia', name: 'Russia (Professional)', country: 'Europe', desc: 'High structure, focusing on "Key Results" and citizenship data.' },
        { id: 'Australia', name: 'Australia (Direct)', country: 'Oceania', desc: 'Clear, concise, 1-2 pages strictly. Australian terminology.' },
        { id: 'Pakistan', name: 'Pakistan (Executive)', country: 'Asia', desc: 'Modern layout emphasizing education and technical certifications.' },
        { id: 'India', name: 'India (Standard)', country: 'Asia', desc: 'Comprehensive, focusing on academic prestige and engineering depth.' },
        { id: 'China', name: 'China (Chuan Tong)', country: 'Asia', desc: 'Photo-inclusive, summary-heavy, focusing on tenure and hierarchy.' },
        { id: 'Indonesia', name: 'Indonesia (Kreatif)', country: 'Asia', desc: 'Professional with social data requirements (DOB, status).' },
        { id: 'Japan', name: 'Japan (Rirekisho)', country: 'Asia', desc: 'Highly formal, rigid grid structure, photo mandatory.' },
        { id: 'Korea', name: 'Korea (Myeongseong)', country: 'Asia', desc: 'Formal, photo-focused, emphasizing exams and certificates.' },
        { id: 'Singapore', name: 'Singapore (Detailed)', country: 'Asia', desc: 'Highly granular, highlights prestige and pure metrics.' },
        { id: 'Malaysia', name: 'Malaysia (Professional)', country: 'Asia', desc: 'English-focused, detailed academic and skills sections.' },
        { id: 'Thailand', name: 'Thailand (Sway)', country: 'Asia', desc: 'Modern, visually clean with emphasis on professional portrait.' },
        { id: 'UAE', name: 'UAE (Multinational)', country: 'Middle East', desc: 'Comprehensive personal details, multinational focus.' },
        { id: 'Turkey', name: 'Turkey (Modern)', country: 'Middle East', desc: 'Clean, photo-inclusive, balanced sidebar layout style.' },
    ];

    const categories = ['Americas', 'Europe', 'Asia', 'Oceania', 'Middle East'];

    return (
        <div className="p-4 lg:p-8 animate-fade-in w-full max-w-5xl mx-auto h-full pb-32">
            <div className="mb-10 text-center sm:text-left">
                <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-purple-600 mb-2 tracking-tight">Template Gallery</h2>
                <p className="text-gray-500 font-medium text-lg">Choose a target region to automatically format your data to their strict local ATS requirements.</p>
            </div>
            
            {categories.map(cat => (
                <div key={cat} className="mb-12">
                    <h3 className="text-xl font-bold border-b border-gray-200 pb-3 mb-6 flex items-center text-gray-800 uppercase tracking-widest">
                        <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-lg flex items-center justify-center mr-3 text-sm">📍</span>
                        {cat}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                        {templates.filter(t => t.country === cat).map(t => (
                            <button 
                                key={t.id} 
                                onClick={() => setRegion(t.id)}
                                className={`text-left p-6 rounded-2xl border-2 transition-all duration-300 relative overflow-hidden group ${activeRegion === t.id ? 'border-indigo-600 bg-indigo-50/70 shadow-lg ring-4 ring-indigo-100 scale-[1.02]' : 'border-white bg-white hover:border-indigo-200 hover:shadow-xl hover:-translate-y-1'}`}
                                style={activeRegion !== t.id ? { boxShadow: '0 4px 20px -2px rgba(0,0,0,0.05)' } : {}}
                            >
                                <div className="relative z-10">
                                    <div className="text-xs font-bold tracking-widest text-indigo-600 mb-2 uppercase">{t.id}</div>
                                    <div className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors">{t.name}</div>
                                    <div className="text-sm text-gray-500 font-medium leading-relaxed">{t.desc}</div>
                                    
                                    {activeRegion === t.id && (
                                        <div className="mt-5 text-sm font-bold uppercase text-indigo-700 flex items-center bg-white w-max px-3 py-1.5 rounded-full shadow-sm">
                                            <svg className="w-4 h-4 mr-1.5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg> 
                                            Selected Template
                                        </div>
                                    )}
                                </div>
                                {activeRegion === t.id && (
                                    <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-indigo-100 rounded-full opacity-50 blur-2xl z-0"></div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TemplateLibrary;
