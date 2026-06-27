// Malaysia - Professional British-English, themed palette, academic + skills focused
const TemplateMalaysia = ({ data, resumeRef, themeColors }) => {
    const { personalInfo: p, experience, education, skills, projects, certifications } = data;
    const maroon = themeColors?.primary ?? '#7c2d12';
    const blue   = themeColors?.accent  ?? '#1e40af';
    return (
        <div ref={resumeRef} style={{ fontFamily: "'Arial', sans-serif", background: '#fff', maxWidth: 850, margin: '0 auto', minHeight: 1056, color: '#222', fontSize: 12.5 }}>
            {/* Header */}
            <div style={{ borderTop: `8px solid ${maroon}`, padding: '26px 44px 20px', background: '#fafafa', borderBottom: `1px solid #e5e7eb` }}>
                <div style={{ fontSize: 26, fontWeight: 700, color: maroon }}>{p?.fullName}</div>
                <div style={{ fontSize: 13, color: blue, fontWeight: 600, marginTop: 2 }}>{p?.jobTitle}</div>
                <div style={{ display: 'flex', gap: 16, marginTop: 8, fontSize: 12, color: '#555', flexWrap: 'wrap' }}>
                    {p?.email && <span>✉ {p.email}</span>}
                    {p?.phone && <span>☎ {p.phone}</span>}
                    {p?.location && <span>📍 {p.location}</span>}
                    {p?.links && <span>🔗 {p.links}</span>}
                </div>
            </div>

            <div style={{ padding: '24px 44px', display: 'flex', gap: 28 }}>
                {/* Main */}
                <div style={{ flex: 1 }}>
                    {p?.summary && (
                        <MySection title="Personal Statement" maroon={maroon} blue={blue}>
                            <p style={{ margin: 0, lineHeight: 1.7, color: '#444' }}>{p.summary}</p>
                        </MySection>
                    )}

                    {experience?.length > 0 && (
                        <MySection title="Work Experience" maroon={maroon} blue={blue}>
                            {experience.map((ex, i) => (
                                <div key={i} style={{ marginBottom: 14 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span style={{ fontWeight: 700, color: '#111', fontSize: 13 }}>{ex.role}</span>
                                        <span style={{ color: '#888', fontSize: 11 }}>{ex.startDate} – {ex.endDate || 'Present'}</span>
                                    </div>
                                    <div style={{ color: maroon, fontWeight: 600, fontSize: 12, marginBottom: 5 }}>{ex.company} | {ex.location}</div>
                                    <ul style={{ margin: 0, padding: '0 0 0 18px' }}>
                                        {ex.achievements?.map((a, j) => <li key={j} style={{ marginBottom: 3, lineHeight: 1.55, fontSize: 12 }}>{a}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </MySection>
                    )}

                    {projects?.length > 0 && (
                        <MySection title="Projects" maroon={maroon} blue={blue}>
                            {projects.map((pr, i) => (
                                <div key={i} style={{ marginBottom: 10, borderLeft: `3px solid ${maroon}`, paddingLeft: 10 }}>
                                    <div style={{ fontWeight: 700, color: '#111' }}>{pr.name} <span style={{ color: '#777', fontWeight: 400, fontSize: 11 }}>| {pr.technologies}</span></div>
                                    <div style={{ lineHeight: 1.55, marginTop: 3, fontSize: 12 }}>{pr.description}</div>
                                </div>
                            ))}
                        </MySection>
                    )}
                </div>

                {/* Right */}
                <div style={{ width: '34%' }}>
                    {education?.length > 0 && (
                        <MySide title="Education" maroon={maroon} blue={blue}>
                            {education.map((ed, i) => (
                                <div key={i} style={{ marginBottom: 12, padding: '8px 10px', background: '#fdf2f2', border: `1px solid ${maroon}20`, borderRadius: 4 }}>
                                    <div style={{ fontWeight: 700, color: maroon, fontSize: 12 }}>{ed.degree}</div>
                                    <div style={{ color: blue, fontSize: 11, marginTop: 2 }}>{ed.institution}</div>
                                    {ed.gpa && <div style={{ fontWeight: 700, color: '#f59e0b', fontSize: 12 }}>GPA: {ed.gpa}</div>}
                                    <div style={{ color: '#999', fontSize: 11 }}>{ed.startDate} – {ed.endDate}</div>
                                </div>
                            ))}
                        </MySide>
                    )}

                    {skills?.length > 0 && (
                        <MySide title="Skills" maroon={maroon} blue={blue}>
                            {skills.map((s, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: 5, fontSize: 12 }}>
                                    <span style={{ width: 5, height: 5, background: maroon, borderRadius: '50%', marginRight: 8, flexShrink: 0 }} />
                                    {s}
                                </div>
                            ))}
                        </MySide>
                    )}

                    {certifications?.length > 0 && (
                        <MySide title="Certifications" maroon={maroon} blue={blue}>
                            {certifications.map((c, i) => (
                                <div key={i} style={{ marginBottom: 7, fontSize: 12 }}>
                                    <div style={{ fontWeight: 700, color: maroon }}>{c.name}</div>
                                    <div style={{ color: '#666' }}>{c.issuer}</div>
                                </div>
                            ))}
                        </MySide>
                    )}
                </div>
            </div>
        </div>
    );
};

const MySection = ({ title, maroon, blue, children }) => (
    <div style={{ marginBottom: 20 }}>
        <div style={{ fontWeight: 700, fontSize: 13.5, color: blue, textTransform: 'uppercase', letterSpacing: 0.8, borderBottom: `2px solid ${maroon}`, paddingBottom: 5, marginBottom: 10 }}>{title}</div>
        {children}
    </div>
);

const MySide = ({ title, maroon, blue, children }) => (
    <div style={{ marginBottom: 16 }}>
        <div style={{ fontWeight: 700, fontSize: 11.5, color: blue, textTransform: 'uppercase', letterSpacing: 0.8, borderBottom: `2px solid ${maroon}60`, paddingBottom: 4, marginBottom: 8 }}>{title}</div>
        {children}
    </div>
);

export default TemplateMalaysia;
