// Pakistan - Executive: themed color sidebar, education+certs prominent
const TemplatePakistan = ({ data, resumeRef, themeColors }) => {
    const { personalInfo: p, experience, education, skills, projects, certifications } = data;
    const emerald = themeColors?.primary ?? '#047857';
    const light = `${themeColors?.primary ?? '#047857'}18`;
    return (
        <div ref={resumeRef} style={{ fontFamily: "'Arial', sans-serif", background: '#fff', maxWidth: 850, margin: '0 auto', minHeight: 1056, color: '#222', fontSize: 12.5 }}>
            {/* Header with emerald sidebar stripe */}
            <div style={{ display: 'flex', background: emerald, color: '#fff', padding: '28px 0', alignItems: 'stretch' }}>
                <div style={{ padding: '0 36px', flex: 1 }}>
                    <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: 0.5 }}>{p?.fullName}</div>
                    <div style={{ fontSize: 14, color: '#a7f3d0', marginTop: 3, fontStyle: 'italic' }}>{p?.jobTitle}</div>
                    <div style={{ marginTop: 12, display: 'flex', flexWrap: 'wrap', gap: '4px 20px', fontSize: 12, color: '#d1fae5' }}>
                        {p?.email && <span>✉ {p.email}</span>}
                        {p?.phone && <span>☎ {p.phone}</span>}
                        {p?.location && <span>📍 {p.location}</span>}
                        {p?.links && <span>🔗 {p.links}</span>}
                    </div>
                </div>
                <div style={{ width: 6, background: '#a7f3d0', marginRight: 0, flexShrink: 0 }} />
            </div>

            <div style={{ display: 'flex' }}>
                {/* Left main */}
                <div style={{ flex: 1, padding: '24px 32px' }}>
                    {p?.summary && (
                        <PkSection title="Professional Summary" emerald={emerald}>
                            <p style={{ margin: 0, lineHeight: 1.7, color: '#444' }}>{p.summary}</p>
                        </PkSection>
                    )}

                    {experience?.length > 0 && (
                        <PkSection title="Work Experience" emerald={emerald}>
                            {experience.map((ex, i) => (
                                <div key={i} style={{ marginBottom: 15 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span style={{ fontWeight: 700, fontSize: 13.5, color: '#111' }}>{ex.role}</span>
                                        <span style={{ color: '#888', fontSize: 11, whiteSpace: 'nowrap', marginLeft: 8 }}>{ex.startDate} – {ex.endDate || 'Present'}</span>
                                    </div>
                                    <div style={{ color: emerald, fontWeight: 600, fontSize: 12, marginBottom: 5 }}>{ex.company} · {ex.location}</div>
                                    <ul style={{ margin: 0, padding: '0 0 0 18px' }}>
                                        {ex.achievements?.map((a, j) => <li key={j} style={{ marginBottom: 3, lineHeight: 1.6 }}>{a}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </PkSection>
                    )}

                    {projects?.length > 0 && (
                        <PkSection title="Key Projects" emerald={emerald}>
                            {projects.map((pr, i) => (
                                <div key={i} style={{ marginBottom: 11, padding: '8px 12px', background: light, borderLeft: `3px solid ${emerald}`, borderRadius: 3 }}>
                                    <div style={{ fontWeight: 700, color: '#111' }}>{pr.name} <span style={{ fontWeight: 400, color: '#666', fontSize: 11 }}>| {pr.technologies}</span></div>
                                    <div style={{ color: '#555', lineHeight: 1.55, marginTop: 4 }}>{pr.description}</div>
                                </div>
                            ))}
                        </PkSection>
                    )}
                </div>

                {/* Right sidebar - education and certs prominent */}
                <div style={{ width: '36%', background: '#f9fafb', borderLeft: `3px solid ${emerald}20`, padding: '24px 18px' }}>
                    {education?.length > 0 && (
                        <PkSide title="Education" emerald={emerald}>
                            {education.map((ed, i) => (
                                <div key={i} style={{ marginBottom: 12, padding: '10px 12px', background: '#fff', border: `1px solid ${emerald}30`, borderRadius: 6 }}>
                                    <div style={{ fontWeight: 700, color: '#111', fontSize: 12 }}>{ed.degree}</div>
                                    <div style={{ color: emerald, fontWeight: 600, fontSize: 11, marginTop: 2 }}>{ed.institution}</div>
                                    {ed.gpa && <div style={{ fontWeight: 700, color: '#f59e0b', fontSize: 12, marginTop: 2 }}>GPA: {ed.gpa}</div>}
                                    <div style={{ color: '#999', fontSize: 11, marginTop: 2 }}>{ed.startDate} – {ed.endDate}</div>
                                </div>
                            ))}
                        </PkSide>
                    )}

                    {certifications?.length > 0 && (
                        <PkSide title="Certifications" emerald={emerald}>
                            {certifications.map((c, i) => (
                                <div key={i} style={{ marginBottom: 7, padding: '7px 10px', background: light, border: `1px solid ${emerald}40`, borderRadius: 4 }}>
                                    <div style={{ fontWeight: 700, fontSize: 12, color: '#111' }}>{c.name}</div>
                                    <div style={{ color: emerald, fontSize: 11 }}>{c.issuer}</div>
                                </div>
                            ))}
                        </PkSide>
                    )}

                    {skills?.length > 0 && (
                        <PkSide title="Technical Skills" emerald={emerald}>
                            {skills.map((s, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: 5, fontSize: 12 }}>
                                    <span style={{ width: 5, height: 5, background: emerald, borderRadius: '50%', marginRight: 8, flexShrink: 0 }} />
                                    {s}
                                </div>
                            ))}
                        </PkSide>
                    )}
                </div>
            </div>
        </div>
    );
};

const PkSection = ({ title, emerald, children }) => (
    <div style={{ marginBottom: 20 }}>
        <div style={{ fontWeight: 700, fontSize: 13.5, color: emerald, textTransform: 'uppercase', letterSpacing: 0.8, borderBottom: `2px solid ${emerald}`, paddingBottom: 5, marginBottom: 12 }}>{title}</div>
        {children}
    </div>
);

const PkSide = ({ title, emerald, children }) => (
    <div style={{ marginBottom: 18 }}>
        <div style={{ fontWeight: 700, fontSize: 11.5, color: emerald, textTransform: 'uppercase', letterSpacing: 1, borderBottom: `2px solid ${emerald}60`, paddingBottom: 4, marginBottom: 8 }}>{title}</div>
        {children}
    </div>
);

export default TemplatePakistan;
