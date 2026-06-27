// Thailand - Sway: themed gradient, visual clarity, photo-centric
const TemplateThailand = ({ data, resumeRef, profileImage, themeColors }) => {
    const { personalInfo: p, experience, education, skills, projects, certifications } = data;
    const purple = themeColors?.primary ?? '#6d28d9';
    const pink   = themeColors?.accent  ?? '#db2777';
    const light  = `${themeColors?.primary ?? '#6d28d9'}12`;
    return (
        <div ref={resumeRef} style={{ fontFamily: "'Arial', sans-serif", background: '#fff', maxWidth: 850, margin: '0 auto', minHeight: 1056, color: '#222', fontSize: 12.5 }}>
            {/* Header */}
            <div style={{ background: `linear-gradient(135deg, ${purple} 0%, ${pink} 100%)`, padding: '28px 40px', color: '#fff', display: 'flex', gap: 24, alignItems: 'center' }}>
                {/* Photo */}
                <div style={{ flexShrink: 0, width: 100, height: 120, border: '4px solid rgba(255,255,255,0.5)', borderRadius: 8, overflow: 'hidden' }}>
                    {profileImage ? (
                        <img src={profileImage} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                        <div style={{ width: '100%', height: '100%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: '#fff' }}>รูปถ่าย<br/>Photo</div>
                    )}
                </div>
                <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 26, fontWeight: 700 }}>{p?.fullName}</div>
                    <div style={{ fontSize: 14, color: '#f9a8d4', marginTop: 3 }}>{p?.jobTitle}</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 20px', marginTop: 10, fontSize: 12, color: '#e9d5ff' }}>
                        {p?.email && <span>✉ {p.email}</span>}
                        {p?.phone && <span>☎ {p.phone}</span>}
                        {p?.location && <span>📍 {p.location}</span>}
                        {p?.links && <span>🔗 {p.links}</span>}
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex' }}>
                {/* Left main */}
                <div style={{ flex: 1, padding: '24px 32px' }}>
                    {p?.summary && (
                        <div style={{ marginBottom: 20, padding: '12px 16px', background: light, border: `1px solid ${purple}30`, borderLeft: `4px solid ${purple}`, borderRadius: 4 }}>
                            <div style={{ fontWeight: 700, color: purple, marginBottom: 4, fontSize: 12, textTransform: 'uppercase' }}>About Me</div>
                            <p style={{ margin: 0, lineHeight: 1.7, color: '#444' }}>{p.summary}</p>
                        </div>
                    )}

                    {experience?.length > 0 && (
                        <ThSection title="Work Experience" purple={purple} pink={pink}>
                            {experience.map((ex, i) => (
                                <div key={i} style={{ marginBottom: 14, padding: '10px 14px', background: light, borderRadius: 6, border: `1px solid ${purple}20` }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span style={{ fontWeight: 700, color: purple }}>{ex.role}</span>
                                        <span style={{ color: '#888', fontSize: 11 }}>{ex.startDate} – {ex.endDate || 'Present'}</span>
                                    </div>
                                    <div style={{ color: pink, fontWeight: 600, fontSize: 12, marginBottom: 4 }}>{ex.company}</div>
                                    <ul style={{ margin: 0, padding: '0 0 0 16px' }}>
                                        {ex.achievements?.map((a, j) => <li key={j} style={{ marginBottom: 2, lineHeight: 1.55, fontSize: 12 }}>{a}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </ThSection>
                    )}

                    {projects?.length > 0 && (
                        <ThSection title="Projects" purple={purple} pink={pink}>
                            {projects.map((pr, i) => (
                                <div key={i} style={{ marginBottom: 10, padding: '10px 12px', background: light, borderRadius: 6, border: `1px solid ${pink}20` }}>
                                    <div style={{ fontWeight: 700, color: purple }}>{pr.name} <span style={{ fontWeight: 400, color: '#777', fontSize: 11 }}>| {pr.technologies}</span></div>
                                    <div style={{ lineHeight: 1.55, marginTop: 3, fontSize: 12 }}>{pr.description}</div>
                                </div>
                            ))}
                        </ThSection>
                    )}
                </div>

                {/* Right sidebar */}
                <div style={{ width: '34%', background: '#fafafa', borderLeft: `2px solid ${purple}15`, padding: '24px 16px' }}>
                    {skills?.length > 0 && (
                        <ThSide title="Skills" purple={purple} pink={pink}>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                                {skills.map((s, i) => (
                                    <span key={i} style={{ background: `${purple}15`, color: purple, border: `1px solid ${purple}30`, padding: '2px 8px', borderRadius: 12, fontSize: 11 }}>{s}</span>
                                ))}
                            </div>
                        </ThSide>
                    )}

                    {education?.length > 0 && (
                        <ThSide title="Education" purple={purple} pink={pink}>
                            {education.map((ed, i) => (
                                <div key={i} style={{ marginBottom: 10, padding: '8px 10px', background: '#fff', border: `1px solid ${purple}20`, borderRadius: 5 }}>
                                    <div style={{ fontWeight: 700, color: purple, fontSize: 12 }}>{ed.degree}</div>
                                    <div style={{ color: pink, fontSize: 11 }}>{ed.institution}</div>
                                    {ed.gpa && <div style={{ color: '#666', fontSize: 11 }}>GPA: {ed.gpa}</div>}
                                    <div style={{ color: '#999', fontSize: 11 }}>{ed.startDate} – {ed.endDate}</div>
                                </div>
                            ))}
                        </ThSide>
                    )}

                    {certifications?.length > 0 && (
                        <ThSide title="Certifications" purple={purple} pink={pink}>
                            {certifications.map((c, i) => (
                                <div key={i} style={{ marginBottom: 7, fontSize: 12 }}>
                                    <div style={{ fontWeight: 700, color: purple }}>{c.name}</div>
                                    <div style={{ color: '#666' }}>{c.issuer}</div>
                                </div>
                            ))}
                        </ThSide>
                    )}
                </div>
            </div>
        </div>
    );
};

const ThSection = ({ title, purple, pink, children }) => (
    <div style={{ marginBottom: 20 }}>
        <div style={{ fontWeight: 700, fontSize: 13.5, color: purple, borderBottom: `2px solid ${pink}`, paddingBottom: 4, marginBottom: 10 }}>{title}</div>
        {children}
    </div>
);

const ThSide = ({ title, purple, pink, children }) => (
    <div style={{ marginBottom: 16 }}>
        <div style={{ fontWeight: 700, fontSize: 11.5, color: purple, textTransform: 'uppercase', letterSpacing: 0.8, borderBottom: `2px solid ${pink}60`, paddingBottom: 3, marginBottom: 8 }}>{title}</div>
        {children}
    </div>
);

export default TemplateThailand;
