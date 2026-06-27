// Canada - Reverse chronological, no photo, accent strip
const TemplateCanada = ({ data, resumeRef, themeColors }) => {
    const { personalInfo: p, experience, education, skills, projects, certifications } = data;
    const red = themeColors?.primary ?? '#c0392b';
    return (
        <div ref={resumeRef} style={{ fontFamily: "'Calibri', 'Arial', sans-serif", background: '#fff', maxWidth: 850, margin: '0 auto', minHeight: 1056, color: '#222', fontSize: 13 }}>
            {/* Red top bar */}
            <div style={{ background: red, height: 8 }} />
            <div style={{ padding: '40px 52px' }}>
                <div style={{ marginBottom: 20 }}>
                    <div style={{ fontSize: 28, fontWeight: 700, color: '#111' }}>{p?.fullName}</div>
                    <div style={{ fontSize: 13, color: red, fontWeight: 600, marginTop: 2 }}>{p?.jobTitle}</div>
                    <div style={{ marginTop: 6, fontSize: 12, color: '#555', display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                        {p?.email && <span>✉ {p.email}</span>}
                        {p?.phone && <span>☎ {p.phone}</span>}
                        {p?.location && <span>📍 {p.location}</span>}
                        {p?.links && <span>🔗 {p.links}</span>}
                    </div>
                </div>

                {p?.summary && <CaSection title="Summary" color={red}><p style={{ margin: 0, lineHeight: 1.65 }}>{p.summary}</p></CaSection>}

                {experience?.length > 0 && (
                    <CaSection title="Work Experience" color={red}>
                        {experience.map((ex, i) => (
                            <div key={i} style={{ marginBottom: 14 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ fontWeight: 700, fontSize: 14 }}>{ex.role}</span>
                                    <span style={{ color: '#666', fontSize: 12 }}>{ex.startDate} – {ex.endDate || 'Present'}</span>
                                </div>
                                <div style={{ color: red, fontWeight: 600, fontSize: 12, marginBottom: 4 }}>{ex.company} | {ex.location}</div>
                                <ul style={{ margin: '2px 0 0 18px', padding: 0 }}>
                                    {ex.achievements?.map((a, j) => <li key={j} style={{ marginBottom: 2, lineHeight: 1.55 }}>{a}</li>)}
                                </ul>
                            </div>
                        ))}
                    </CaSection>
                )}

                {projects?.length > 0 && (
                    <CaSection title="Key Projects" color={red}>
                        {projects.map((pr, i) => (
                            <div key={i} style={{ marginBottom: 10 }}>
                                <span style={{ fontWeight: 700 }}>{pr.name}</span> <span style={{ color: '#666', fontSize: 12 }}>| {pr.technologies}</span>
                                <div style={{ lineHeight: 1.55, marginTop: 2 }}>{pr.description}</div>
                            </div>
                        ))}
                    </CaSection>
                )}

                {education?.length > 0 && (
                    <CaSection title="Education" color={red}>
                        {education.map((ed, i) => (
                            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                                <div>
                                    <div style={{ fontWeight: 700 }}>{ed.degree} {ed.gpa && <span style={{ fontWeight: 400, color: '#555' }}>| GPA: {ed.gpa}</span>}</div>
                                    <div style={{ color: '#555', fontSize: 12 }}>{ed.institution}</div>
                                </div>
                                <div style={{ color: '#666', fontSize: 12, whiteSpace: 'nowrap' }}>{ed.startDate} – {ed.endDate}</div>
                            </div>
                        ))}
                    </CaSection>
                )}

                {skills?.length > 0 && (
                    <CaSection title="Technical Skills" color={red}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                            {skills.map((s, i) => (
                                <span key={i} style={{ background: '#f4f4f4', border: '1px solid #ddd', borderRadius: 4, padding: '2px 10px', fontSize: 12 }}>{s}</span>
                            ))}
                        </div>
                    </CaSection>
                )}

                {certifications?.length > 0 && (
                    <CaSection title="Certifications" color={red}>
                        {certifications.map((c, i) => (
                            <div key={i} style={{ marginBottom: 4 }}><strong>{c.name}</strong> <span style={{ color: '#666' }}>— {c.issuer}</span></div>
                        ))}
                    </CaSection>
                )}
            </div>
        </div>
    );
};

const CaSection = ({ title, color, children }) => (
    <div style={{ marginBottom: 18 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color, borderBottom: `2px solid ${color}`, paddingBottom: 3, marginBottom: 10, textTransform: 'uppercase', letterSpacing: 0.8 }}>{title}</div>
        {children}
    </div>
);

export default TemplateCanada;
