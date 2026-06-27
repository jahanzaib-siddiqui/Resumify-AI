// Germany - Lebenslauf: highly structured, dark grey sidebar, photo box, formal
const TemplateGermany = ({ data, resumeRef, profileImage, themeColors }) => {
    const { personalInfo: p, experience, education, skills, projects, certifications } = data;
    const dark = '#1c1c1c';
    const accent = themeColors?.primary ?? '#2a4a7f';
    return (
        <div ref={resumeRef} style={{ fontFamily: "'Arial', sans-serif", background: '#fff', maxWidth: 850, margin: '0 auto', minHeight: 1056, color: '#222', fontSize: 12.5 }}>
            {/* Top header bar */}
            <div style={{ display: 'flex', background: dark, color: '#fff', padding: '28px 40px', alignItems: 'flex-start', gap: 28 }}>
                {/* Photo box */}
                <div style={{ flexShrink: 0 }}>
                    {profileImage ? (
                        <img src={profileImage} alt="Bewerbungsfoto" style={{ width: 90, height: 110, objectFit: 'cover', border: '3px solid #fff' }} />
                    ) : (
                        <div style={{ width: 90, height: 110, background: '#444', border: '2px dashed #888', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999', fontSize: 10, textAlign: 'center' }}>Bewerbungs-<br/>foto</div>
                    )}
                </div>
                <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: 0.5 }}>{p?.fullName}</div>
                    <div style={{ fontSize: 13, color: '#94a3b8', marginTop: 4 }}>{p?.jobTitle}</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 20px', marginTop: 10, fontSize: 11.5, color: '#cbd5e1' }}>
                        {p?.email && <span>E: {p.email}</span>}
                        {p?.phone && <span>T: {p.phone}</span>}
                        {p?.location && <span>O: {p.location}</span>}
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex' }}>
                {/* Sidebar */}
                <div style={{ width: '32%', background: '#f5f5f5', padding: '24px 20px', borderRight: '1px solid #e0e0e0' }}>
                    {skills?.length > 0 && (
                        <DeSide title="Kenntnisse" accent={accent}>
                            {skills.map((s, i) => (
                                <div key={i} style={{ marginBottom: 6 }}>
                                    <div style={{ fontSize: 12, fontWeight: 600 }}>{s}</div>
                                    <div style={{ height: 4, background: '#ddd', borderRadius: 2, marginTop: 3 }}>
                                        <div style={{ height: '100%', width: `${Math.min(95, 65 + (i % 4) * 8)}%`, background: accent, borderRadius: 2 }} />
                                    </div>
                                </div>
                            ))}
                        </DeSide>
                    )}

                    {certifications?.length > 0 && (
                        <DeSide title="Zertifikate" accent={accent}>
                            {certifications.map((c, i) => (
                                <div key={i} style={{ marginBottom: 7, fontSize: 11.5 }}>
                                    <div style={{ fontWeight: 700 }}>{c.name}</div>
                                    <div style={{ color: '#666' }}>{c.issuer}</div>
                                </div>
                            ))}
                        </DeSide>
                    )}

                    {p?.links && (
                        <DeSide title="Links" accent={accent}>
                            <div style={{ fontSize: 11, wordBreak: 'break-all', color: accent }}>{p.links}</div>
                        </DeSide>
                    )}
                </div>

                {/* Main */}
                <div style={{ flex: 1, padding: '24px 32px' }}>
                    {p?.summary && (
                        <div style={{ marginBottom: 20, paddingBottom: 16, borderBottom: `2px solid ${accent}` }}>
                            <div style={{ fontWeight: 700, fontSize: 13, color: accent, textTransform: 'uppercase', marginBottom: 6, letterSpacing: 0.8 }}>Profil</div>
                            <p style={{ margin: 0, lineHeight: 1.65 }}>{p.summary}</p>
                        </div>
                    )}

                    {experience?.length > 0 && (
                        <DeMain title="Berufserfahrung" accent={accent}>
                            {experience.map((ex, i) => (
                                <div key={i} style={{ display: 'flex', gap: 16, marginBottom: 14 }}>
                                    <div style={{ minWidth: 90, textAlign: 'right', color: '#666', fontSize: 11, paddingTop: 2 }}>
                                        {ex.startDate}<br/>–<br/>{ex.endDate || 'heute'}
                                    </div>
                                    <div style={{ flex: 1, borderLeft: `3px solid ${accent}`, paddingLeft: 12 }}>
                                        <div style={{ fontWeight: 700, fontSize: 13 }}>{ex.role}</div>
                                        <div style={{ color: accent, fontWeight: 600, marginBottom: 4 }}>{ex.company}, {ex.location}</div>
                                        <ul style={{ margin: '0 0 0 16px', padding: 0 }}>
                                            {ex.achievements?.map((a, j) => <li key={j} style={{ marginBottom: 2, lineHeight: 1.5 }}>{a}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </DeMain>
                    )}

                    {education?.length > 0 && (
                        <DeMain title="Bildung" accent={accent}>
                            {education.map((ed, i) => (
                                <div key={i} style={{ display: 'flex', gap: 16, marginBottom: 10 }}>
                                    <div style={{ minWidth: 90, textAlign: 'right', color: '#666', fontSize: 11 }}>{ed.startDate} – {ed.endDate}</div>
                                    <div style={{ flex: 1, borderLeft: `3px solid ${accent}`, paddingLeft: 12 }}>
                                        <div style={{ fontWeight: 700 }}>{ed.degree}</div>
                                        <div style={{ color: '#555' }}>{ed.institution}{ed.gpa ? `, Note: ${ed.gpa}` : ''}</div>
                                    </div>
                                </div>
                            ))}
                        </DeMain>
                    )}

                    {projects?.length > 0 && (
                        <DeMain title="Projekte" accent={accent}>
                            {projects.map((pr, i) => (
                                <div key={i} style={{ marginBottom: 10 }}>
                                    <div style={{ fontWeight: 700 }}>{pr.name} <span style={{ fontWeight: 400, color: '#666' }}>| {pr.technologies}</span></div>
                                    <div style={{ lineHeight: 1.5, marginTop: 2 }}>{pr.description}</div>
                                </div>
                            ))}
                        </DeMain>
                    )}
                </div>
            </div>
        </div>
    );
};

const DeSide = ({ title, accent, children }) => (
    <div style={{ marginBottom: 20 }}>
        <div style={{ fontWeight: 700, fontSize: 11.5, textTransform: 'uppercase', letterSpacing: 1, color: accent, borderBottom: `2px solid ${accent}`, paddingBottom: 4, marginBottom: 10 }}>{title}</div>
        {children}
    </div>
);

const DeMain = ({ title, accent, children }) => (
    <div style={{ marginBottom: 18 }}>
        <div style={{ fontWeight: 700, fontSize: 13, color: accent, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 10, paddingBottom: 3, borderBottom: `1px solid #ddd` }}>{title}</div>
        {children}
    </div>
);

export default TemplateGermany;
