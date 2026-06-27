// Korea - Myeongseong: formal photo-centered top, themed accents, certificate-heavy
const TemplateKorea = ({ data, resumeRef, profileImage, themeColors }) => {
    const { personalInfo: p, experience, education, skills, projects, certifications } = data;
    const teal = themeColors?.primary ?? '#0d7377';
    const dark = '#1a1a2e';
    return (
        <div ref={resumeRef} style={{ fontFamily: "'Arial', sans-serif", background: '#fff', maxWidth: 850, margin: '0 auto', minHeight: 1056, color: '#222', fontSize: 12.5 }}>
            {/* Top band */}
            <div style={{ background: dark, height: 10 }} />

            {/* Header block with photo centered */}
            <div style={{ display: 'flex', alignItems: 'center', padding: '24px 40px', gap: 24, background: '#f8fafc', borderBottom: `3px solid ${teal}` }}>
                <div style={{ width: 100, height: 125, border: `3px solid ${teal}`, flexShrink: 0, overflow: 'hidden' }}>
                    {profileImage ? (
                        <img src={profileImage} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                        <div style={{ width: '100%', height: '100%', background: '#e8f4f4', display: 'flex', alignItems: 'center', justifyContent: 'center', color: teal, fontSize: 10 }}>사진</div>
                    )}
                </div>
                <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 26, fontWeight: 700, color: dark }}>{p?.fullName}</div>
                    <div style={{ color: teal, fontWeight: 600, fontSize: 14, marginTop: 2 }}>{p?.jobTitle}</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px 24px', marginTop: 10, fontSize: 12, color: '#555' }}>
                        {p?.email && <span>✉ {p.email}</span>}
                        {p?.phone && <span>☎ {p.phone}</span>}
                        {p?.location && <span>📍 {p.location}</span>}
                        {p?.links && <span>🔗 {p.links}</span>}
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex' }}>
                {/* Sidebar */}
                <div style={{ width: '36%', padding: '20px 20px', background: '#f0f9f9', borderRight: `2px solid ${teal}20` }}>
                    {skills?.length > 0 && (
                        <KrSide title="기술 / Skills" teal={teal}>
                            {skills.map((s, i) => (
                                <div key={i} style={{ background: '#fff', border: `1px solid ${teal}40`, borderRadius: 4, padding: '4px 10px', marginBottom: 5, fontSize: 12, color: dark }}>{s}</div>
                            ))}
                        </KrSide>
                    )}

                    {certifications?.length > 0 && (
                        <KrSide title="자격증 / Certificates" teal={teal}>
                            {certifications.map((c, i) => (
                                <div key={i} style={{ marginBottom: 8, padding: '6px 10px', background: '#fff', border: `1px solid ${teal}30`, borderLeft: `3px solid ${teal}`, borderRadius: 3 }}>
                                    <div style={{ fontWeight: 700, fontSize: 12, color: dark }}>{c.name}</div>
                                    <div style={{ color: '#666', fontSize: 11 }}>{c.issuer}</div>
                                </div>
                            ))}
                        </KrSide>
                    )}
                </div>

                {/* Main content */}
                <div style={{ flex: 1, padding: '20px 28px' }}>
                    {p?.summary && (
                        <div style={{ marginBottom: 18, padding: '12px 16px', background: `${teal}10`, borderLeft: `4px solid ${teal}`, borderRadius: 4 }}>
                            <div style={{ fontWeight: 700, color: teal, marginBottom: 5, fontSize: 12, textTransform: 'uppercase', letterSpacing: 0.8 }}>자기소개 / Summary</div>
                            <p style={{ margin: 0, lineHeight: 1.65, fontSize: 12 }}>{p.summary}</p>
                        </div>
                    )}

                    {experience?.length > 0 && (
                        <KrMain title="경력 / Experience" teal={teal}>
                            {experience.map((ex, i) => (
                                <div key={i} style={{ marginBottom: 14 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span style={{ fontWeight: 700, color: dark }}>{ex.role}</span>
                                        <span style={{ color: '#888', fontSize: 11 }}>{ex.startDate} – {ex.endDate || '현재'}</span>
                                    </div>
                                    <div style={{ color: teal, fontWeight: 600, fontSize: 12, marginBottom: 4 }}>{ex.company}</div>
                                    <ul style={{ margin: 0, padding: '0 0 0 16px' }}>
                                        {ex.achievements?.map((a, j) => <li key={j} style={{ marginBottom: 2, lineHeight: 1.5, fontSize: 12 }}>{a}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </KrMain>
                    )}

                    {education?.length > 0 && (
                        <KrMain title="학력 / Education" teal={teal}>
                            {education.map((ed, i) => (
                                <div key={i} style={{ marginBottom: 10, display: 'flex', gap: 12 }}>
                                    <div style={{ width: 90, color: '#888', fontSize: 11, paddingTop: 2 }}>{ed.startDate} – {ed.endDate}</div>
                                    <div>
                                        <div style={{ fontWeight: 700, color: dark }}>{ed.degree}</div>
                                        <div style={{ color: teal, fontSize: 12 }}>{ed.institution}</div>
                                        {ed.gpa && <div style={{ color: '#777', fontSize: 11 }}>GPA: {ed.gpa}</div>}
                                    </div>
                                </div>
                            ))}
                        </KrMain>
                    )}

                    {projects?.length > 0 && (
                        <KrMain title="프로젝트 / Projects" teal={teal}>
                            {projects.map((pr, i) => (
                                <div key={i} style={{ marginBottom: 10, padding: '8px 12px', background: '#f8fafa', borderRadius: 4 }}>
                                    <div style={{ fontWeight: 700, color: dark }}>{pr.name} <span style={{ color: teal, fontWeight: 400, fontSize: 11 }}>{pr.technologies}</span></div>
                                    <div style={{ lineHeight: 1.55, marginTop: 3, fontSize: 12 }}>{pr.description}</div>
                                </div>
                            ))}
                        </KrMain>
                    )}
                </div>
            </div>
            <div style={{ background: dark, height: 6 }} />
        </div>
    );
};

const KrSide = ({ title, teal, children }) => (
    <div style={{ marginBottom: 18 }}>
        <div style={{ fontWeight: 700, fontSize: 11.5, color: teal, textTransform: 'uppercase', letterSpacing: 1, borderBottom: `2px solid ${teal}`, paddingBottom: 4, marginBottom: 8 }}>{title}</div>
        {children}
    </div>
);

const KrMain = ({ title, teal, children }) => (
    <div style={{ marginBottom: 18 }}>
        <div style={{ fontWeight: 700, fontSize: 13, color: '#1a1a2e', paddingBottom: 5, marginBottom: 10, borderBottom: `2px solid ${teal}` }}>{title}</div>
        {children}
    </div>
);

export default TemplateKorea;
