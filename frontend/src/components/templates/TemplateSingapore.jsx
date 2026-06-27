// Singapore - Detailed prestige, metrics-heavy, themed palette
const TemplateSingapore = ({ data, resumeRef, themeColors }) => {
    const { personalInfo: p, experience, education, skills, projects, certifications } = data;
    const dark   = themeColors?.primary ?? '#0f2b3d';
    const silver = '#64748b';
    const accent = themeColors?.accent  ?? '#0ea5e9';
    return (
        <div ref={resumeRef} style={{ fontFamily: "'Arial', sans-serif", background: '#fff', maxWidth: 850, margin: '0 auto', minHeight: 1056, color: '#1e293b', fontSize: 12.5 }}>
            {/* Header */}
            <div style={{ background: dark, padding: '28px 44px', color: '#fff', borderBottom: `4px solid ${accent}` }}>
                <div style={{ fontSize: 26, fontWeight: 700 }}>{p?.fullName}</div>
                <div style={{ fontSize: 13, color: accent, marginTop: 3, fontWeight: 600 }}>{p?.jobTitle}</div>
                <div style={{ display: 'flex', gap: 20, marginTop: 10, fontSize: 12, color: '#94a3b8', flexWrap: 'wrap' }}>
                    {p?.email && <span>✉ {p.email}</span>}
                    {p?.phone && <span>☎ {p.phone}</span>}
                    {p?.location && <span>📍 {p.location}</span>}
                    {p?.links && <span>🔗 {p.links}</span>}
                </div>
            </div>

            <div style={{ display: 'flex' }}>
                {/* Left */}
                <div style={{ flex: 1, padding: '24px 36px' }}>
                    {p?.summary && (
                        <div style={{ marginBottom: 20, padding: '12px 16px', background: '#f0f9ff', border: `1px solid ${accent}30`, borderLeft: `4px solid ${accent}`, borderRadius: 4 }}>
                            <div style={{ fontWeight: 700, fontSize: 11.5, color: dark, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 5 }}>Professional Summary</div>
                            <p style={{ margin: 0, lineHeight: 1.7, color: '#444', fontSize: 12 }}>{p.summary}</p>
                        </div>
                    )}

                    {experience?.length > 0 && (
                        <SgSection title="Career History" dark={dark} accent={accent}>
                            {experience.map((ex, i) => (
                                <div key={i} style={{ marginBottom: 16, padding: '12px 14px', background: '#f8fafc', border: `1px solid #e2e8f0`, borderRadius: 6 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                        <div style={{ fontWeight: 700, color: dark, fontSize: 13 }}>{ex.role}</div>
                                        <div style={{ fontSize: 11, color: '#888', whiteSpace: 'nowrap', marginLeft: 10 }}>{ex.startDate} – {ex.endDate || 'Present'}</div>
                                    </div>
                                    <div style={{ color: accent, fontWeight: 600, fontSize: 12, marginBottom: 6 }}>{ex.company} | {ex.location}</div>
                                    <ul style={{ margin: 0, padding: '0 0 0 16px' }}>
                                        {ex.achievements?.map((a, j) => <li key={j} style={{ marginBottom: 3, lineHeight: 1.55, fontSize: 12 }}>{a}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </SgSection>
                    )}

                    {projects?.length > 0 && (
                        <SgSection title="Projects & Achievements" dark={dark} accent={accent}>
                            {projects.map((pr, i) => (
                                <div key={i} style={{ marginBottom: 10, padding: '10px 12px', background: '#f8fafc', border: `1px solid #e2e8f0`, borderRadius: 6 }}>
                                    <div style={{ fontWeight: 700, color: dark }}>{pr.name} <span style={{ fontWeight: 400, color: '#64748b', fontSize: 11 }}>| {pr.technologies}</span></div>
                                    <div style={{ lineHeight: 1.55, marginTop: 3, fontSize: 12 }}>{pr.description}</div>
                                </div>
                            ))}
                        </SgSection>
                    )}
                </div>

                {/* Right sidebar */}
                <div style={{ width: '33%', background: '#f8fafc', borderLeft: `2px solid ${dark}15`, padding: '24px 16px' }}>
                    {education?.length > 0 && (
                        <SgSide title="Education" dark={dark} accent={accent}>
                            {education.map((ed, i) => (
                                <div key={i} style={{ marginBottom: 12, padding: '8px 10px', background: '#fff', border: `1px solid #e2e8f0`, borderRadius: 5 }}>
                                    <div style={{ fontWeight: 700, fontSize: 12, color: dark }}>{ed.degree}</div>
                                    <div style={{ color: accent, fontWeight: 600, fontSize: 11 }}>{ed.institution}</div>
                                    {ed.gpa && <div style={{ fontWeight: 700, color: '#f59e0b', fontSize: 12 }}>GPA: {ed.gpa}</div>}
                                    <div style={{ color: '#999', fontSize: 11 }}>{ed.startDate} – {ed.endDate}</div>
                                </div>
                            ))}
                        </SgSide>
                    )}

                    {skills?.length > 0 && (
                        <SgSide title="Technical Skills" dark={dark} accent={accent}>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                                {skills.map((s, i) => (
                                    <span key={i} style={{ background: `${accent}15`, color: dark, border: `1px solid ${accent}40`, padding: '2px 8px', borderRadius: 3, fontSize: 11 }}>{s}</span>
                                ))}
                            </div>
                        </SgSide>
                    )}

                    {certifications?.length > 0 && (
                        <SgSide title="Professional Certifications" dark={dark} accent={accent}>
                            {certifications.map((c, i) => (
                                <div key={i} style={{ marginBottom: 8, padding: '6px 10px', background: '#fff', border: `1px solid #e2e8f0`, borderRadius: 4 }}>
                                    <div style={{ fontWeight: 700, fontSize: 12, color: dark }}>{c.name}</div>
                                    <div style={{ color: '#64748b', fontSize: 11 }}>{c.issuer}</div>
                                </div>
                            ))}
                        </SgSide>
                    )}
                </div>
            </div>
        </div>
    );
};

const SgSection = ({ title, dark, accent, children }) => (
    <div style={{ marginBottom: 20 }}>
        <div style={{ fontWeight: 700, fontSize: 13.5, color: dark, textTransform: 'uppercase', letterSpacing: 0.8, borderBottom: `2px solid ${accent}`, paddingBottom: 4, marginBottom: 10 }}>{title}</div>
        {children}
    </div>
);

const SgSide = ({ title, dark, accent, children }) => (
    <div style={{ marginBottom: 16 }}>
        <div style={{ fontWeight: 700, fontSize: 11.5, color: dark, textTransform: 'uppercase', letterSpacing: 0.8, borderBottom: `2px solid ${accent}`, paddingBottom: 3, marginBottom: 8 }}>{title}</div>
        {children}
    </div>
);

export default TemplateSingapore;
