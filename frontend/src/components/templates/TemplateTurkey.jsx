// Turkey - Modern sidebar, photo-inclusive, themed color
const TemplateTurkey = ({ data, resumeRef, profileImage, themeColors }) => {
    const { personalInfo: p, experience, education, skills, projects, certifications } = data;
    const turquoise = themeColors?.primary ?? '#0a7c8c';
    const light     = `${themeColors?.primary ?? '#0a7c8c'}15`;
    return (
        <div ref={resumeRef} style={{ fontFamily: "'Arial', sans-serif", background: '#fff', maxWidth: 850, margin: '0 auto', minHeight: 1056, color: '#222', fontSize: 12.5, display: 'flex' }}>
            {/* Sidebar */}
            <div style={{ width: '34%', background: turquoise, color: '#fff', padding: '32px 20px', display: 'flex', flexDirection: 'column', gap: 20 }}>
                {/* Photo */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}>
                    {profileImage ? (
                        <img src={profileImage} alt="" style={{ width: 110, height: 130, objectFit: 'cover', border: '4px solid rgba(255,255,255,0.4)', borderRadius: 4 }} />
                    ) : (
                        <div style={{ width: 110, height: 130, background: 'rgba(255,255,255,0.2)', border: '3px dashed rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: '#cff', borderRadius: 4 }}>Fotoğraf<br/>Photo</div>
                    )}
                </div>

                <div>
                    <div style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.2 }}>{p?.fullName}</div>
                    <div style={{ fontSize: 12, color: '#a5f3f3', marginTop: 4 }}>{p?.jobTitle}</div>
                </div>

                <TrContact label="✉" value={p?.email} />
                <TrContact label="☎" value={p?.phone} />
                <TrContact label="📍" value={p?.location} />
                <TrContact label="🔗" value={p?.links} />

                {skills?.length > 0 && (
                    <TrSideSection title="Yetkinlikler / Skills">
                        {skills.map((s, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: 5, fontSize: 12 }}>
                                <span style={{ width: 6, height: 6, background: '#a5f3f3', borderRadius: '50%', marginRight: 8, flexShrink: 0 }} />
                                {s}
                            </div>
                        ))}
                    </TrSideSection>
                )}

                {certifications?.length > 0 && (
                    <TrSideSection title="Sertifikalar">
                        {certifications.map((c, i) => (
                            <div key={i} style={{ marginBottom: 7, fontSize: 12 }}>
                                <div style={{ fontWeight: 700 }}>{c.name}</div>
                                <div style={{ color: '#cff', fontSize: 11 }}>{c.issuer}</div>
                            </div>
                        ))}
                    </TrSideSection>
                )}
            </div>

            {/* Main content */}
            <div style={{ flex: 1, padding: '28px 28px' }}>
                {p?.summary && (
                    <div style={{ marginBottom: 20, padding: '12px 16px', background: light, borderLeft: `4px solid ${turquoise}`, borderRadius: 4 }}>
                        <div style={{ fontWeight: 700, color: turquoise, marginBottom: 4, fontSize: 12, textTransform: 'uppercase' }}>Özet / Summary</div>
                        <p style={{ margin: 0, lineHeight: 1.7, color: '#444' }}>{p.summary}</p>
                    </div>
                )}

                {experience?.length > 0 && (
                    <TrMain title="İş Deneyimi / Experience" turquoise={turquoise}>
                        {experience.map((ex, i) => (
                            <div key={i} style={{ marginBottom: 14 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ fontWeight: 700, color: '#111', fontSize: 13 }}>{ex.role}</span>
                                    <span style={{ color: '#888', fontSize: 11 }}>{ex.startDate} – {ex.endDate || 'Devam'}</span>
                                </div>
                                <div style={{ color: turquoise, fontWeight: 600, fontSize: 12, marginBottom: 4 }}>{ex.company}</div>
                                <ul style={{ margin: 0, padding: '0 0 0 16px' }}>
                                    {ex.achievements?.map((a, j) => <li key={j} style={{ marginBottom: 2, lineHeight: 1.55, fontSize: 12 }}>{a}</li>)}
                                </ul>
                            </div>
                        ))}
                    </TrMain>
                )}

                {education?.length > 0 && (
                    <TrMain title="Eğitim / Education" turquoise={turquoise}>
                        {education.map((ed, i) => (
                            <div key={i} style={{ marginBottom: 10, display: 'flex', gap: 10 }}>
                                <div style={{ minWidth: 80, color: '#999', fontSize: 11 }}>{ed.startDate} – {ed.endDate}</div>
                                <div>
                                    <div style={{ fontWeight: 700 }}>{ed.degree}</div>
                                    <div style={{ color: turquoise, fontSize: 12 }}>{ed.institution}</div>
                                    {ed.gpa && <div style={{ color: '#777', fontSize: 11 }}>GPA: {ed.gpa}</div>}
                                </div>
                            </div>
                        ))}
                    </TrMain>
                )}

                {projects?.length > 0 && (
                    <TrMain title="Projeler / Projects" turquoise={turquoise}>
                        {projects.map((pr, i) => (
                            <div key={i} style={{ marginBottom: 10 }}>
                                <div style={{ fontWeight: 700 }}>{pr.name} <span style={{ fontWeight: 400, color: '#666', fontSize: 11 }}>| {pr.technologies}</span></div>
                                <div style={{ lineHeight: 1.55, marginTop: 2, fontSize: 12 }}>{pr.description}</div>
                            </div>
                        ))}
                    </TrMain>
                )}
            </div>
        </div>
    );
};

const TrContact = ({ label, value }) => value ? (
    <div style={{ fontSize: 12, color: '#e0fafa', display: 'flex', gap: 6, alignItems: 'flex-start', marginTop: -12 }}>
        <span>{label}</span><span style={{ wordBreak: 'break-all' }}>{value}</span>
    </div>
) : null;

const TrSideSection = ({ title, children }) => (
    <div>
        <div style={{ fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: 0.8, borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: 4, marginBottom: 8, color: '#a5f3f3' }}>{title}</div>
        {children}
    </div>
);

const TrMain = ({ title, turquoise, children }) => (
    <div style={{ marginBottom: 18 }}>
        <div style={{ fontWeight: 700, fontSize: 13.5, color: turquoise, textTransform: 'uppercase', letterSpacing: 0.8, borderBottom: `2px solid ${turquoise}`, paddingBottom: 4, marginBottom: 10 }}>{title}</div>
        {children}
    </div>
);

export default TemplateTurkey;
