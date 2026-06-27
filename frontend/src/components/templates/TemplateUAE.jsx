// UAE - Multinational: themed luxury header, comprehensive personal details, photo
const TemplateUAE = ({ data, resumeRef, profileImage, themeColors }) => {
    const { personalInfo: p, experience, education, skills, projects, certifications } = data;
    const purple = themeColors?.primary ?? '#4a235a';
    const gold   = '#c9a84c';
    return (
        <div ref={resumeRef} style={{ fontFamily: "'Arial', sans-serif", background: '#fff', maxWidth: 850, margin: '0 auto', minHeight: 1056, color: '#222', fontSize: 12.5 }}>
            {/* Luxury header */}
            <div style={{ background: `linear-gradient(135deg, ${purple} 0%, #2d1537 100%)`, padding: '0', color: '#fff' }}>
                <div style={{ borderBottom: `3px solid ${gold}`, padding: '28px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 20 }}>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: 1 }}>{p?.fullName}</div>
                        <div style={{ color: gold, fontWeight: 600, fontSize: 14, marginTop: 4 }}>{p?.jobTitle}</div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5px 20px', marginTop: 12, fontSize: 12, color: '#ddd6fe' }}>
                            {p?.email && <span>✉ {p.email}</span>}
                            {p?.phone && <span>☎ {p.phone}</span>}
                            {p?.location && <span>📍 {p.location}</span>}
                            {p?.links && <span>🔗 {p.links}</span>}
                        </div>
                    </div>
                    {/* Photo */}
                    <div style={{ flexShrink: 0, width: 92, height: 115, border: `3px solid ${gold}`, overflow: 'hidden' }}>
                        {profileImage ? (
                            <img src={profileImage} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        ) : (
                            <div style={{ width: '100%', height: '100%', background: '#5e2d7a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: gold, fontSize: 10 }}>Photo</div>
                        )}
                    </div>
                </div>
                {/* Gold bottom stripe */}
                <div style={{ height: 4, background: `linear-gradient(90deg, transparent, ${gold}, transparent)` }} />
            </div>

            <div style={{ display: 'flex' }}>
                {/* Sidebar */}
                <div style={{ width: '35%', padding: '22px 18px', background: '#faf5ff', borderRight: `1px solid ${purple}20` }}>
                    {skills?.length > 0 && (
                        <UaeSide title="Core Competencies" purple={purple} gold={gold}>
                            {skills.map((s, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: 5, fontSize: 12 }}>
                                    <span style={{ width: 6, height: 6, background: gold, borderRadius: '50%', marginRight: 8, flexShrink: 0 }} />
                                    {s}
                                </div>
                            ))}
                        </UaeSide>
                    )}

                    {education?.length > 0 && (
                        <UaeSide title="Education" purple={purple} gold={gold}>
                            {education.map((ed, i) => (
                                <div key={i} style={{ marginBottom: 10, padding: '8px 10px', background: '#fff', border: `1px solid ${purple}20`, borderRadius: 4 }}>
                                    <div style={{ fontWeight: 700, fontSize: 12, color: purple }}>{ed.degree}</div>
                                    <div style={{ color: '#555', fontSize: 11 }}>{ed.institution}</div>
                                    {ed.gpa && <div style={{ color: gold, fontWeight: 700, fontSize: 11 }}>GPA: {ed.gpa}</div>}
                                    <div style={{ color: '#999', fontSize: 11 }}>{ed.startDate} – {ed.endDate}</div>
                                </div>
                            ))}
                        </UaeSide>
                    )}

                    {certifications?.length > 0 && (
                        <UaeSide title="Certifications" purple={purple} gold={gold}>
                            {certifications.map((c, i) => (
                                <div key={i} style={{ marginBottom: 7, borderLeft: `3px solid ${gold}`, paddingLeft: 8, fontSize: 12 }}>
                                    <div style={{ fontWeight: 700, color: purple }}>{c.name}</div>
                                    <div style={{ color: '#666' }}>{c.issuer}</div>
                                </div>
                            ))}
                        </UaeSide>
                    )}
                </div>

                {/* Main */}
                <div style={{ flex: 1, padding: '22px 30px' }}>
                    {p?.summary && (
                        <div style={{ marginBottom: 20, padding: '12px 16px', background: `${purple}08`, borderLeft: `4px solid ${gold}`, borderRadius: 4 }}>
                            <div style={{ fontWeight: 700, color: purple, marginBottom: 5, fontSize: 12, textTransform: 'uppercase', letterSpacing: 0.8 }}>Executive Profile</div>
                            <p style={{ margin: 0, lineHeight: 1.7, color: '#444' }}>{p.summary}</p>
                        </div>
                    )}

                    {experience?.length > 0 && (
                        <UaeMain title="Professional Experience" purple={purple} gold={gold}>
                            {experience.map((ex, i) => (
                                <div key={i} style={{ marginBottom: 16 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span style={{ fontWeight: 700, fontSize: 13, color: purple }}>{ex.role}</span>
                                        <span style={{ color: '#888', fontSize: 11 }}>{ex.startDate} – {ex.endDate || 'Present'}</span>
                                    </div>
                                    <div style={{ color: gold, fontWeight: 600, fontSize: 12, marginBottom: 5 }}>{ex.company} | {ex.location}</div>
                                    <ul style={{ margin: 0, padding: '0 0 0 18px' }}>
                                        {ex.achievements?.map((a, j) => <li key={j} style={{ marginBottom: 3, lineHeight: 1.6 }}>{a}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </UaeMain>
                    )}

                    {projects?.length > 0 && (
                        <UaeMain title="Key Projects & Initiatives" purple={purple} gold={gold}>
                            {projects.map((pr, i) => (
                                <div key={i} style={{ marginBottom: 11, padding: '8px 12px', background: '#faf5ff', border: `1px solid ${purple}20`, borderRadius: 4 }}>
                                    <div style={{ fontWeight: 700, color: purple }}>{pr.name} <span style={{ fontWeight: 400, color: '#666', fontSize: 11 }}>| {pr.technologies}</span></div>
                                    <div style={{ lineHeight: 1.55, marginTop: 4, color: '#555' }}>{pr.description}</div>
                                </div>
                            ))}
                        </UaeMain>
                    )}
                </div>
            </div>
        </div>
    );
};

const UaeSide = ({ title, purple, gold, children }) => (
    <div style={{ marginBottom: 18 }}>
        <div style={{ fontWeight: 700, fontSize: 11.5, color: purple, textTransform: 'uppercase', letterSpacing: 1, borderBottom: `2px solid ${gold}`, paddingBottom: 4, marginBottom: 8 }}>{title}</div>
        {children}
    </div>
);

const UaeMain = ({ title, purple, gold, children }) => (
    <div style={{ marginBottom: 18 }}>
        <div style={{ fontWeight: 700, fontSize: 13.5, color: purple, borderBottom: `2px solid ${gold}`, paddingBottom: 5, marginBottom: 12, textTransform: 'uppercase', letterSpacing: 0.8 }}>{title}</div>
        {children}
    </div>
);

export default TemplateUAE;
