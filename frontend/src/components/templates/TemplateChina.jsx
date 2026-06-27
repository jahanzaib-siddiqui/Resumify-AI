// China - Chuan Tong: photo-inclusive, themed color, formal header, hierarchical
const TemplateChina = ({ data, resumeRef, profileImage, themeColors }) => {
    const { personalInfo: p, experience, education, skills, projects, certifications } = data;
    const red  = themeColors?.primary ?? '#b91c1c';
    const gold = '#d4a017';
    return (
        <div ref={resumeRef} style={{ fontFamily: "'Arial', sans-serif", background: '#fff', maxWidth: 850, margin: '0 auto', minHeight: 1056, color: '#222', fontSize: 13 }}>
            {/* Header */}
            <div style={{ background: `linear-gradient(135deg, ${red} 0%, #7f1d1d 100%)`, padding: '28px 40px', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: 1 }}>{p?.fullName}</div>
                    <div style={{ fontSize: 14, color: gold, marginTop: 4, fontWeight: 600 }}>{p?.jobTitle}</div>
                    <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 3, fontSize: 12, color: '#fecaca' }}>
                        {p?.email && <span>✉ {p.email}</span>}
                        {p?.phone && <span>☎ {p.phone}</span>}
                        {p?.location && <span>📍 {p.location}</span>}
                        {p?.links && <span>🔗 {p.links}</span>}
                    </div>
                </div>
                {/* Photo */}
                <div style={{ flexShrink: 0, width: 88, height: 110, border: `3px solid ${gold}`, overflow: 'hidden', marginLeft: 24 }}>
                    {profileImage ? (
                        <img src={profileImage} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                        <div style={{ width: '100%', height: '100%', background: '#5b1010', display: 'flex', alignItems: 'center', justifyContent: 'center', color: gold, fontSize: 10, textAlign: 'center' }}>照片<br/>Photo</div>
                    )}
                </div>
            </div>

            {/* Gold accent stripe */}
            <div style={{ height: 5, background: `linear-gradient(90deg, ${gold}, ${red}, ${gold})` }} />

            <div style={{ padding: '28px 40px' }}>
                {p?.summary && (
                    <CnSection title="个人简介 / Profile" red={red} gold={gold}>
                        <div style={{ background: '#fff9f0', border: `1px solid ${gold}40`, borderLeft: `4px solid ${gold}`, padding: '10px 14px', lineHeight: 1.7 }}>{p.summary}</div>
                    </CnSection>
                )}

                {experience?.length > 0 && (
                    <CnSection title="工作经历 / Work Experience" red={red} gold={gold}>
                        {experience.map((ex, i) => (
                            <div key={i} style={{ marginBottom: 14, paddingLeft: 14, borderLeft: `3px solid ${gold}` }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ fontWeight: 700, fontSize: 14, color: red }}>{ex.role}</span>
                                    <span style={{ color: '#666', fontSize: 12 }}>{ex.startDate} — {ex.endDate || '至今'}</span>
                                </div>
                                <div style={{ fontWeight: 600, color: '#444', marginBottom: 5 }}>{ex.company} · {ex.location}</div>
                                <ul style={{ margin: 0, padding: '0 0 0 16px' }}>
                                    {ex.achievements?.map((a, j) => <li key={j} style={{ marginBottom: 3, lineHeight: 1.6 }}>{a}</li>)}
                                </ul>
                            </div>
                        ))}
                    </CnSection>
                )}

                <div style={{ display: 'flex', gap: 24 }}>
                    <div style={{ flex: 1 }}>
                        {education?.length > 0 && (
                            <CnSection title="教育背景 / Education" red={red} gold={gold}>
                                {education.map((ed, i) => (
                                    <div key={i} style={{ marginBottom: 10 }}>
                                        <div style={{ fontWeight: 700, color: red }}>{ed.degree}</div>
                                        <div style={{ color: '#444' }}>{ed.institution}</div>
                                        {ed.gpa && <div style={{ color: gold, fontSize: 12 }}>GPA: {ed.gpa}</div>}
                                        <div style={{ color: '#888', fontSize: 11 }}>{ed.startDate} – {ed.endDate}</div>
                                    </div>
                                ))}
                            </CnSection>
                        )}

                        {projects?.length > 0 && (
                            <CnSection title="项目经验 / Projects" red={red} gold={gold}>
                                {projects.map((pr, i) => (
                                    <div key={i} style={{ marginBottom: 10 }}>
                                        <div style={{ fontWeight: 700, color: red }}>{pr.name}</div>
                                        <div style={{ color: '#666', fontSize: 12, marginBottom: 2 }}>{pr.technologies} | {pr.role}</div>
                                        <div style={{ lineHeight: 1.55 }}>{pr.description}</div>
                                    </div>
                                ))}
                            </CnSection>
                        )}
                    </div>

                    <div style={{ width: '38%' }}>
                        {skills?.length > 0 && (
                            <CnSection title="专业技能 / Skills" red={red} gold={gold}>
                                {skills.map((s, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: 6, fontSize: 12 }}>
                                        <span style={{ width: 6, height: 6, background: red, borderRadius: '50%', marginRight: 8, flexShrink: 0 }} />
                                        {s}
                                    </div>
                                ))}
                            </CnSection>
                        )}

                        {certifications?.length > 0 && (
                            <CnSection title="证书 / Certifications" red={red} gold={gold}>
                                {certifications.map((c, i) => (
                                    <div key={i} style={{ marginBottom: 6, padding: '6px 10px', background: '#fff9f0', border: `1px solid ${gold}50`, borderRadius: 3 }}>
                                        <div style={{ fontWeight: 700, fontSize: 12 }}>{c.name}</div>
                                        <div style={{ color: '#666', fontSize: 11 }}>{c.issuer}</div>
                                    </div>
                                ))}
                            </CnSection>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const CnSection = ({ title, red, gold, children }) => (
    <div style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
            <div style={{ width: 4, height: 18, background: red, marginRight: 8 }} />
            <div style={{ fontWeight: 700, fontSize: 14, color: '#1a1a1a' }}>{title}</div>
            <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${gold}80, transparent)`, marginLeft: 10 }} />
        </div>
        {children}
    </div>
);

export default TemplateChina;
