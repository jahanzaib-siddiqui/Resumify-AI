// USA - Strict ATS: No photo, black/white, ultra-clean single-column
const TemplateUSA = ({ data, resumeRef, themeColors }) => {
    const { personalInfo: p, experience, education, skills, projects, certifications } = data;
    const primary = themeColors?.primary ?? '#111111';
    const accent  = themeColors?.accent  ?? '#374151';
    return (
        <div ref={resumeRef} style={{ fontFamily: "'Times New Roman', serif", background: '#fff', padding: '48px 56px', maxWidth: 850, margin: '0 auto', minHeight: 1056, color: '#111', fontSize: 13 }}>
            <div style={{ textAlign: 'center', borderBottom: `2px solid ${primary}`, paddingBottom: 12, marginBottom: 14 }}>
                <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: primary }}>{p?.fullName}</div>
                <div style={{ fontSize: 12, marginTop: 4, color: '#333' }}>
                    {[p?.email, p?.phone, p?.location, p?.links].filter(Boolean).join(' | ')}
                </div>
            </div>

            {p?.summary && (
                <Section title="PROFESSIONAL SUMMARY" primary={primary}>
                    <p style={{ margin: 0, lineHeight: 1.6 }}>{p.summary}</p>
                </Section>
            )}

            {experience?.length > 0 && (
                <Section title="EXPERIENCE" primary={primary}>
                    {experience.map((ex, i) => (
                        <div key={i} style={{ marginBottom: 12 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
                                <span>{ex.role}</span><span>{ex.startDate} – {ex.endDate || 'Present'}</span>
                            </div>
                            <div style={{ fontStyle: 'italic', marginBottom: 4, color: accent }}>{ex.company}, {ex.location}</div>
                            <ul style={{ margin: '4px 0 0 18px', padding: 0 }}>
                                {ex.achievements?.map((a, j) => <li key={j} style={{ marginBottom: 2, lineHeight: 1.5 }}>{a}</li>)}
                            </ul>
                        </div>
                    ))}
                </Section>
            )}

            {projects?.length > 0 && (
                <Section title="PROJECTS" primary={primary}>
                    {projects.map((pr, i) => (
                        <div key={i} style={{ marginBottom: 10 }}>
                            <div style={{ fontWeight: 700 }}>{pr.name} <span style={{ fontWeight: 400, fontStyle: 'italic' }}>| {pr.technologies}</span></div>
                            <div style={{ fontStyle: 'italic', fontSize: 12, color: accent }}>{pr.role}</div>
                            <div style={{ marginTop: 2, lineHeight: 1.5 }}>{pr.description}</div>
                        </div>
                    ))}
                </Section>
            )}

            {education?.length > 0 && (
                <Section title="EDUCATION" primary={primary}>
                    {education.map((ed, i) => (
                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                            <div>
                                <div style={{ fontWeight: 700 }}>{ed.degree} {ed.gpa && <span style={{ fontWeight: 400 }}>— GPA: {ed.gpa}</span>}</div>
                                <div style={{ fontStyle: 'italic', color: accent }}>{ed.institution}</div>
                            </div>
                            <div style={{ textAlign: 'right', whiteSpace: 'nowrap', color: '#555' }}>{ed.startDate} – {ed.endDate}</div>
                        </div>
                    ))}
                </Section>
            )}

            {skills?.length > 0 && (
                <Section title="SKILLS" primary={primary}>
                    <p style={{ margin: 0 }}>{skills.join(' • ')}</p>
                </Section>
            )}

            {certifications?.length > 0 && (
                <Section title="CERTIFICATIONS" primary={primary}>
                    {certifications.map((c, i) => (
                        <div key={i}><strong>{c.name}</strong> — {c.issuer}</div>
                    ))}
                </Section>
            )}
        </div>
    );
};

const Section = ({ title, children, primary = '#111' }) => (
    <div style={{ marginBottom: 14 }}>
        <div style={{ fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: 1, borderBottom: `1px solid ${primary}`, paddingBottom: 2, marginBottom: 8, color: primary }}>{title}</div>
        {children}
    </div>
);

export default TemplateUSA;
