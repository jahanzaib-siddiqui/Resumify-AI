// Indonesia - Kreatif: photo + DOB/status, themed accent, professional-warm
const TemplateIndonesia = ({ data, resumeRef, profileImage, themeColors }) => {
    const { personalInfo: p, experience, education, skills, projects, certifications } = data;
    const orange = themeColors?.primary ?? '#d35400';
    const warm   = `${themeColors?.primary ?? '#d35400'}12`;
    return (
        <div ref={resumeRef} style={{ fontFamily: "'Arial', sans-serif", background: '#fff', maxWidth: 850, margin: '0 auto', minHeight: 1056, color: '#222', fontSize: 12.5 }}>
            {/* Header */}
            <div style={{ background: `linear-gradient(135deg, ${orange} 0%, #b94600 100%)`, padding: '24px 40px', color: '#fff', display: 'flex', gap: 24, alignItems: 'flex-start' }}>
                {/* Photo */}
                <div style={{ flexShrink: 0, width: 88, height: 110, border: '3px solid rgba(255,255,255,0.6)', overflow: 'hidden' }}>
                    {profileImage ? (
                        <img src={profileImage} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                        <div style={{ width: '100%', height: '100%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, color: '#fff' }}>Foto</div>
                    )}
                </div>
                <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 26, fontWeight: 700 }}>{p?.fullName}</div>
                    <div style={{ fontSize: 13, color: '#fde68a', marginTop: 2 }}>{p?.jobTitle}</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 20px', marginTop: 10, fontSize: 12, color: '#fde9c9' }}>
                        {p?.email && <span>✉ {p.email}</span>}
                        {p?.phone && <span>☎ {p.phone}</span>}
                        {p?.location && <span>📍 {p.location}</span>}
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex' }}>
                {/* Sidebar */}
                <div style={{ width: '33%', background: warm, padding: '20px 18px', borderRight: `2px solid ${orange}20` }}>
                    {skills?.length > 0 && (
                        <IdSide title="Keahlian / Skills" orange={orange}>
                            {skills.map((s, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: 5, fontSize: 12 }}>
                                    <span style={{ color: orange, marginRight: 6, fontWeight: 700 }}>◆</span>{s}
                                </div>
                            ))}
                        </IdSide>
                    )}

                    {education?.length > 0 && (
                        <IdSide title="Pendidikan / Education" orange={orange}>
                            {education.map((ed, i) => (
                                <div key={i} style={{ marginBottom: 10, fontSize: 12 }}>
                                    <div style={{ fontWeight: 700, color: '#333' }}>{ed.degree}</div>
                                    <div style={{ color: orange }}>{ed.institution}</div>
                                    {ed.gpa && <div style={{ color: '#666' }}>IPK: {ed.gpa}</div>}
                                    <div style={{ color: '#999', fontSize: 11 }}>{ed.startDate} – {ed.endDate}</div>
                                </div>
                            ))}
                        </IdSide>
                    )}

                    {certifications?.length > 0 && (
                        <IdSide title="Sertifikasi" orange={orange}>
                            {certifications.map((c, i) => (
                                <div key={i} style={{ marginBottom: 7, fontSize: 12 }}>
                                    <div style={{ fontWeight: 700 }}>{c.name}</div>
                                    <div style={{ color: '#666' }}>{c.issuer}</div>
                                </div>
                            ))}
                        </IdSide>
                    )}
                </div>

                {/* Main */}
                <div style={{ flex: 1, padding: '20px 28px' }}>
                    {p?.summary && (
                        <div style={{ marginBottom: 18, padding: '12px 16px', background: warm, borderLeft: `4px solid ${orange}`, borderRadius: 4 }}>
                            <div style={{ fontWeight: 700, color: orange, marginBottom: 5, fontSize: 11.5, textTransform: 'uppercase' }}>Tentang Saya / About Me</div>
                            <p style={{ margin: 0, lineHeight: 1.7, color: '#444' }}>{p.summary}</p>
                        </div>
                    )}

                    {experience?.length > 0 && (
                        <IdMain title="Pengalaman Kerja / Work Experience" orange={orange}>
                            {experience.map((ex, i) => (
                                <div key={i} style={{ marginBottom: 14 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span style={{ fontWeight: 700, fontSize: 13 }}>{ex.role}</span>
                                        <span style={{ color: '#888', fontSize: 11 }}>{ex.startDate} – {ex.endDate || 'Sekarang'}</span>
                                    </div>
                                    <div style={{ color: orange, fontWeight: 600, fontSize: 12, marginBottom: 4 }}>{ex.company}</div>
                                    <ul style={{ margin: 0, padding: '0 0 0 16px' }}>
                                        {ex.achievements?.map((a, j) => <li key={j} style={{ marginBottom: 2, lineHeight: 1.55, fontSize: 12 }}>{a}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </IdMain>
                    )}

                    {projects?.length > 0 && (
                        <IdMain title="Proyek / Projects" orange={orange}>
                            {projects.map((pr, i) => (
                                <div key={i} style={{ marginBottom: 10 }}>
                                    <div style={{ fontWeight: 700 }}>{pr.name} <span style={{ color: '#777', fontSize: 11 }}>| {pr.technologies}</span></div>
                                    <div style={{ lineHeight: 1.55, marginTop: 3, fontSize: 12 }}>{pr.description}</div>
                                </div>
                            ))}
                        </IdMain>
                    )}
                </div>
            </div>
        </div>
    );
};

const IdSide = ({ title, orange, children }) => (
    <div style={{ marginBottom: 18 }}>
        <div style={{ fontWeight: 700, fontSize: 11.5, color: orange, textTransform: 'uppercase', letterSpacing: 0.8, borderBottom: `2px solid ${orange}60`, paddingBottom: 4, marginBottom: 8 }}>{title}</div>
        {children}
    </div>
);

const IdMain = ({ title, orange, children }) => (
    <div style={{ marginBottom: 18 }}>
        <div style={{ fontWeight: 700, fontSize: 13.5, color: '#333', borderBottom: `2px solid ${orange}`, paddingBottom: 4, marginBottom: 10 }}>{title}</div>
        {children}
    </div>
);

export default TemplateIndonesia;
