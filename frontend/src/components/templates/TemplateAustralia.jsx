// Australia - Direct, 1-2 pages, themed color, clean and concise
const TemplateAustralia = ({ data, resumeRef, themeColors }) => {
    const { personalInfo: p, experience, education, skills, projects, certifications } = data;
    const teal   = themeColors?.primary ?? '#0c7a7a';
    const orange = themeColors?.accent  ?? '#e85d04';
    return (
        <div ref={resumeRef} style={{ fontFamily: "'Arial', sans-serif", background: '#fff', maxWidth: 850, margin: '0 auto', minHeight: 1056, color: '#222', fontSize: 13 }}>
            {/* Bold header strip */}
            <div style={{ background: teal, padding: '26px 44px 20px', color: '#fff', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', right: -20, top: -20, width: 120, height: 120, background: orange, borderRadius: '50%', opacity: 0.3 }} />
                <div style={{ fontSize: 28, fontWeight: 700 }}>{p?.fullName}</div>
                <div style={{ fontSize: 14, color: '#99e6e6', marginTop: 3 }}>{p?.jobTitle}</div>
                <div style={{ display: 'flex', gap: 16, marginTop: 10, fontSize: 12, color: '#cffafa', flexWrap: 'wrap' }}>
                    {p?.email && <span>✉ {p.email}</span>}
                    {p?.phone && <span>☎ {p.phone}</span>}
                    {p?.location && <span>📍 {p.location}</span>}
                    {p?.links && <span>🔗 {p.links}</span>}
                </div>
            </div>
            <div style={{ height: 4, background: orange }} />

            <div style={{ padding: '28px 44px' }}>
                {p?.summary && (
                    <div style={{ marginBottom: 22, padding: '12px 16px', background: '#f0fdfa', border: `1px solid ${teal}30`, borderLeft: `4px solid ${teal}`, borderRadius: 4 }}>
                        <p style={{ margin: 0, lineHeight: 1.7 }}>{p.summary}</p>
                    </div>
                )}

                {/* Two-column lower section */}
                <div style={{ display: 'flex', gap: 32 }}>
                    <div style={{ flex: 1 }}>
                        {experience?.length > 0 && (
                            <AuSection title="Experience" teal={teal} orange={orange}>
                                {experience.map((ex, i) => (
                                    <div key={i} style={{ marginBottom: 14 }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <span style={{ fontWeight: 700, fontSize: 13 }}>{ex.role}</span>
                                            <span style={{ color: '#888', fontSize: 11 }}>{ex.startDate} – {ex.endDate || 'Present'}</span>
                                        </div>
                                        <div style={{ color: orange, fontWeight: 600, fontSize: 12, marginBottom: 4 }}>{ex.company} · {ex.location}</div>
                                        <ul style={{ margin: 0, padding: '0 0 0 18px' }}>
                                            {ex.achievements?.map((a, j) => <li key={j} style={{ marginBottom: 2, lineHeight: 1.55, fontSize: 12 }}>{a}</li>)}
                                        </ul>
                                    </div>
                                ))}
                            </AuSection>
                        )}

                        {projects?.length > 0 && (
                            <AuSection title="Projects" teal={teal} orange={orange}>
                                {projects.map((pr, i) => (
                                    <div key={i} style={{ marginBottom: 10 }}>
                                        <span style={{ fontWeight: 700 }}>{pr.name}</span>
                                        <span style={{ color: '#666', fontSize: 11 }}> | {pr.technologies}</span>
                                        <div style={{ lineHeight: 1.55, marginTop: 2, fontSize: 12 }}>{pr.description}</div>
                                    </div>
                                ))}
                            </AuSection>
                        )}
                    </div>

                    <div style={{ width: '33%' }}>
                        {skills?.length > 0 && (
                            <AuSide title="Skills" teal={teal}>
                                {skills.map((s, i) => (
                                    <div key={i} style={{ fontSize: 12, marginBottom: 4, display: 'flex', alignItems: 'center' }}>
                                        <span style={{ color: orange, marginRight: 6, fontWeight: 700 }}>▸</span>{s}
                                    </div>
                                ))}
                            </AuSide>
                        )}

                        {education?.length > 0 && (
                            <AuSide title="Education" teal={teal}>
                                {education.map((ed, i) => (
                                    <div key={i} style={{ marginBottom: 10, fontSize: 12 }}>
                                        <div style={{ fontWeight: 700 }}>{ed.degree}</div>
                                        <div style={{ color: teal }}>{ed.institution}</div>
                                        {ed.gpa && <div style={{ color: '#666' }}>GPA: {ed.gpa}</div>}
                                        <div style={{ color: '#999', fontSize: 11 }}>{ed.startDate} – {ed.endDate}</div>
                                    </div>
                                ))}
                            </AuSide>
                        )}

                        {certifications?.length > 0 && (
                            <AuSide title="Certifications" teal={teal}>
                                {certifications.map((c, i) => (
                                    <div key={i} style={{ marginBottom: 6, fontSize: 12 }}>
                                        <div style={{ fontWeight: 700 }}>{c.name}</div>
                                        <div style={{ color: '#666' }}>{c.issuer}</div>
                                    </div>
                                ))}
                            </AuSide>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const AuSection = ({ title, teal, orange, children }) => (
    <div style={{ marginBottom: 20 }}>
        <div style={{ fontWeight: 700, fontSize: 14, color: teal, textTransform: 'uppercase', borderBottom: `2px solid ${orange}`, paddingBottom: 4, marginBottom: 12 }}>{title}</div>
        {children}
    </div>
);

const AuSide = ({ title, teal, children }) => (
    <div style={{ marginBottom: 16 }}>
        <div style={{ fontWeight: 700, fontSize: 12, color: teal, textTransform: 'uppercase', letterSpacing: 1, borderBottom: `1px solid #ddd`, paddingBottom: 4, marginBottom: 8 }}>{title}</div>
        {children}
    </div>
);

export default TemplateAustralia;
