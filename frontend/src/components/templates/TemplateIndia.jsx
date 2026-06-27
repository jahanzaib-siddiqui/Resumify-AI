// India - Standard: two-column, themed palette, academic pedigree focus
const TemplateIndia = ({ data, resumeRef, themeColors }) => {
    const { personalInfo: p, experience, education, skills, projects, certifications } = data;
    const saffron = themeColors?.primary ?? '#e67e22';
    const green   = themeColors?.accent  ?? '#27ae60';
    const dark = '#1a1a1a';
    return (
        <div ref={resumeRef} style={{ fontFamily: "'Arial', sans-serif", background: '#fff', maxWidth: 850, margin: '0 auto', minHeight: 1056, color: '#222', fontSize: 12.5 }}>
            {/* Header */}
            <div style={{ background: dark, padding: '24px 40px', color: '#fff', borderBottom: `5px solid ${saffron}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <div>
                        <div style={{ fontSize: 28, fontWeight: 700 }}>{p?.fullName}</div>
                        <div style={{ color: saffron, fontWeight: 600, fontSize: 14, marginTop: 3 }}>{p?.jobTitle}</div>
                    </div>
                    <div style={{ textAlign: 'right', fontSize: 12, color: '#94a3b8' }}>
                        {p?.email && <div>{p.email}</div>}
                        {p?.phone && <div>{p.phone}</div>}
                        {p?.location && <div>{p.location}</div>}
                        {p?.links && <div style={{ color: saffron }}>{p.links}</div>}
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex' }}>
                {/* Left main */}
                <div style={{ flex: 1, padding: '24px 32px' }}>
                    {p?.summary && (
                        <InSection title="Objective" saffron={saffron} green={green}>
                            <p style={{ margin: 0, lineHeight: 1.65, color: '#444' }}>{p.summary}</p>
                        </InSection>
                    )}

                    {experience?.length > 0 && (
                        <InSection title="Professional Experience" saffron={saffron} green={green}>
                            {experience.map((ex, i) => (
                                <div key={i} style={{ marginBottom: 14 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                                        <span style={{ fontWeight: 700, color: dark, fontSize: 13 }}>{ex.role}</span>
                                        <span style={{ color: '#888', fontSize: 11 }}>{ex.startDate} – {ex.endDate || 'Present'}</span>
                                    </div>
                                    <div style={{ color: saffron, fontWeight: 600, fontSize: 12, marginBottom: 5 }}>{ex.company} | {ex.location}</div>
                                    <ul style={{ margin: 0, padding: '0 0 0 18px' }}>
                                        {ex.achievements?.map((a, j) => <li key={j} style={{ marginBottom: 3, lineHeight: 1.55 }}>{a}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </InSection>
                    )}

                    {projects?.length > 0 && (
                        <InSection title="Projects" saffron={saffron} green={green}>
                            {projects.map((pr, i) => (
                                <div key={i} style={{ marginBottom: 11, padding: '8px 12px', background: '#fffbf5', borderLeft: `3px solid ${saffron}`, borderRadius: 3 }}>
                                    <div style={{ fontWeight: 700, color: dark }}>{pr.name}</div>
                                    <div style={{ color: saffron, fontSize: 11, marginBottom: 3 }}>{pr.technologies} | {pr.role}</div>
                                    <div style={{ lineHeight: 1.55, color: '#555' }}>{pr.description}</div>
                                </div>
                            ))}
                        </InSection>
                    )}
                </div>

                {/* Right sidebar */}
                <div style={{ width: '35%', background: '#f9fafb', borderLeft: '1px solid #e5e7eb', padding: '24px 20px' }}>
                    {education?.length > 0 && (
                        <InSide title="Education" green={green}>
                            {education.map((ed, i) => (
                                <div key={i} style={{ marginBottom: 12, padding: '8px 10px', background: '#fff', border: `1px solid ${green}30`, borderRadius: 4 }}>
                                    <div style={{ fontWeight: 700, color: dark, fontSize: 12 }}>{ed.degree}</div>
                                    <div style={{ color: green, fontWeight: 600, fontSize: 11 }}>{ed.institution}</div>
                                    {ed.gpa && <div style={{ color: saffron, fontWeight: 700, fontSize: 12 }}>CGPA: {ed.gpa}</div>}
                                    <div style={{ color: '#999', fontSize: 11 }}>{ed.startDate} – {ed.endDate}</div>
                                </div>
                            ))}
                        </InSide>
                    )}

                    {skills?.length > 0 && (
                        <InSide title="Technical Skills" green={green}>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                                {skills.map((s, i) => (
                                    <span key={i} style={{ background: `${saffron}15`, color: dark, border: `1px solid ${saffron}50`, padding: '2px 8px', borderRadius: 3, fontSize: 11, fontWeight: 600 }}>{s}</span>
                                ))}
                            </div>
                        </InSide>
                    )}

                    {certifications?.length > 0 && (
                        <InSide title="Certifications" green={green}>
                            {certifications.map((c, i) => (
                                <div key={i} style={{ marginBottom: 7 }}>
                                    <div style={{ fontWeight: 700, fontSize: 12, color: dark }}>{c.name}</div>
                                    <div style={{ color: '#666', fontSize: 11 }}>{c.issuer}</div>
                                </div>
                            ))}
                        </InSide>
                    )}
                </div>
            </div>
        </div>
    );
};

const InSection = ({ title, saffron, green, children }) => (
    <div style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
            <span style={{ width: 4, height: 18, background: saffron, marginRight: 10, borderRadius: 2, display: 'inline-block' }} />
            <span style={{ fontWeight: 700, fontSize: 13.5, color: '#1a1a1a', textTransform: 'uppercase', letterSpacing: 0.8 }}>{title}</span>
            <div style={{ flex: 1, height: 1, background: green, marginLeft: 10, opacity: 0.3 }} />
        </div>
        {children}
    </div>
);

const InSide = ({ title, green, children }) => (
    <div style={{ marginBottom: 18 }}>
        <div style={{ fontWeight: 700, fontSize: 12, color: green, textTransform: 'uppercase', letterSpacing: 0.8, borderBottom: `2px solid ${green}`, paddingBottom: 4, marginBottom: 8 }}>{title}</div>
        {children}
    </div>
);

export default TemplateIndia;
