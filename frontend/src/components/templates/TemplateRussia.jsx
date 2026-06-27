// Russia - Structured, result-driven, themed palette, "Key Results" emphasis
const TemplateRussia = ({ data, resumeRef, profileImage, themeColors }) => {
    const { personalInfo: p, experience, education, skills, projects, certifications } = data;
    const steel = themeColors?.primary ?? '#1e3a5f';
    const accent = themeColors?.accent  ?? '#e74c3c';
    return (
        <div ref={resumeRef} style={{ fontFamily: "'Arial', sans-serif", background: '#f4f5f7', maxWidth: 850, margin: '0 auto', minHeight: 1056, color: '#222', fontSize: 12.5 }}>
            {/* Header */}
            <div style={{ background: steel, color: '#fff', padding: '28px 40px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 20 }}>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: 0.5 }}>{p?.fullName}</div>
                        <div style={{ color: '#93c5fd', fontSize: 14, marginTop: 3 }}>{p?.jobTitle}</div>
                        <div style={{ marginTop: 10, display: 'flex', flexWrap: 'wrap', gap: '3px 20px', fontSize: 12, color: '#bfdbfe' }}>
                            {p?.email && <span>{p.email}</span>}
                            {p?.phone && <span>{p.phone}</span>}
                            {p?.location && <span>{p.location}</span>}
                            {p?.links && <span>{p.links}</span>}
                        </div>
                    </div>
                    {profileImage && (
                        <div style={{ width: 85, height: 105, border: '2px solid #93c5fd', overflow: 'hidden', flexShrink: 0 }}>
                            <img src={profileImage} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    )}
                </div>
            </div>
            <div style={{ height: 4, background: accent }} />

            <div style={{ padding: '24px 40px', display: 'flex', gap: 28 }}>
                {/* Sidebar */}
                <div style={{ width: '34%' }}>
                    {skills?.length > 0 && (
                        <RuCard title="Компетенции / Skills" steel={steel} accent={accent}>
                            {skills.map((s, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: 5, fontSize: 12 }}>
                                    <span style={{ width: 8, height: 2, background: accent, marginRight: 8, flexShrink: 0 }} />
                                    {s}
                                </div>
                            ))}
                        </RuCard>
                    )}

                    {education?.length > 0 && (
                        <RuCard title="Образование / Education" steel={steel} accent={accent}>
                            {education.map((ed, i) => (
                                <div key={i} style={{ marginBottom: 10, fontSize: 12 }}>
                                    <div style={{ fontWeight: 700 }}>{ed.degree}</div>
                                    <div style={{ color: steel }}>{ed.institution}</div>
                                    <div style={{ color: '#999', fontSize: 11 }}>{ed.startDate} – {ed.endDate}</div>
                                </div>
                            ))}
                        </RuCard>
                    )}

                    {certifications?.length > 0 && (
                        <RuCard title="Сертификаты" steel={steel} accent={accent}>
                            {certifications.map((c, i) => (
                                <div key={i} style={{ marginBottom: 7, fontSize: 12 }}>
                                    <div style={{ fontWeight: 700 }}>{c.name}</div>
                                    <div style={{ color: '#666' }}>{c.issuer}</div>
                                </div>
                            ))}
                        </RuCard>
                    )}
                </div>

                {/* Main */}
                <div style={{ flex: 1 }}>
                    {p?.summary && (
                        <div style={{ marginBottom: 20, padding: '12px 14px', background: '#fff', borderLeft: `4px solid ${steel}`, borderRadius: 3 }}>
                            <div style={{ fontWeight: 700, color: steel, marginBottom: 5, fontSize: 12, textTransform: 'uppercase' }}>Профиль / Profile</div>
                            <p style={{ margin: 0, lineHeight: 1.65 }}>{p.summary}</p>
                        </div>
                    )}

                    {experience?.length > 0 && (
                        <RuMain title="Опыт работы / Experience" steel={steel} accent={accent}>
                            {experience.map((ex, i) => (
                                <div key={i} style={{ marginBottom: 16, background: '#fff', padding: '12px 14px', borderRadius: 4, borderLeft: `3px solid ${accent}` }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span style={{ fontWeight: 700, color: steel }}>{ex.role}</span>
                                        <span style={{ color: '#888', fontSize: 11 }}>{ex.startDate} – {ex.endDate || 'по н.в.'}</span>
                                    </div>
                                    <div style={{ color: '#555', fontWeight: 600, fontSize: 12, marginBottom: 5 }}>{ex.company}</div>
                                    <div style={{ fontWeight: 700, fontSize: 11, color: accent, marginBottom: 4, textTransform: 'uppercase' }}>Key Results:</div>
                                    <ul style={{ margin: 0, padding: '0 0 0 16px' }}>
                                        {ex.achievements?.map((a, j) => <li key={j} style={{ marginBottom: 2, lineHeight: 1.55 }}>{a}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </RuMain>
                    )}

                    {projects?.length > 0 && (
                        <RuMain title="Проекты / Projects" steel={steel} accent={accent}>
                            {projects.map((pr, i) => (
                                <div key={i} style={{ marginBottom: 10, background: '#fff', padding: '10px 12px', borderRadius: 4 }}>
                                    <div style={{ fontWeight: 700, color: steel }}>{pr.name} <span style={{ fontWeight: 400, color: '#666', fontSize: 11 }}>| {pr.technologies}</span></div>
                                    <div style={{ lineHeight: 1.55, marginTop: 3 }}>{pr.description}</div>
                                </div>
                            ))}
                        </RuMain>
                    )}
                </div>
            </div>
        </div>
    );
};

const RuCard = ({ title, steel, accent, children }) => (
    <div style={{ background: '#fff', borderRadius: 4, padding: '12px 14px', marginBottom: 14 }}>
        <div style={{ fontWeight: 700, fontSize: 11.5, color: steel, textTransform: 'uppercase', letterSpacing: 0.8, borderBottom: `2px solid ${accent}`, paddingBottom: 4, marginBottom: 8 }}>{title}</div>
        {children}
    </div>
);

const RuMain = ({ title, steel, accent, children }) => (
    <div style={{ marginBottom: 20 }}>
        <div style={{ fontWeight: 700, fontSize: 13.5, color: steel, borderBottom: `2px solid ${steel}`, paddingBottom: 4, marginBottom: 10 }}>{title}</div>
        {children}
    </div>
);

export default TemplateRussia;
