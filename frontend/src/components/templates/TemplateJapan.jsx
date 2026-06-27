// Japan - Rirekisho: rigid grid, ultra formal, photo mandatory, structured rows
const TemplateJapan = ({ data, resumeRef, profileImage, themeColors }) => {
    const { personalInfo: p, experience, education, skills, projects, certifications } = data;
    const primary = themeColors?.primary ?? '#c0392b';
    return (
        <div ref={resumeRef} style={{ fontFamily: "'Arial', 'Helvetica', sans-serif", background: '#fff', maxWidth: 850, margin: '0 auto', minHeight: 1056, color: '#111', fontSize: 12 }}>
            {/* Title bar */}
            <div style={{ background: primary, padding: '10px 0', textAlign: 'center' }}>
                <span style={{ color: '#fff', fontSize: 18, fontWeight: 700, letterSpacing: 6 }}>履 歴 書 / CURRICULUM VITAE</span>
            </div>

            <div style={{ padding: '20px 36px' }}>
                {/* Top info block */}
                <div style={{ display: 'flex', gap: 24, marginBottom: 20 }}>
                    <div style={{ flex: 1 }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
                            <tbody>
                                <JpRow label="氏名 / Full Name" value={p?.fullName} />
                                <JpRow label="応募職種 / Position" value={p?.jobTitle} />
                                <JpRow label="住所 / Address" value={p?.location} />
                                <JpRow label="電話 / Tel" value={p?.phone} />
                                <JpRow label="Email" value={p?.email} />
                                {p?.links && <JpRow label="Web / Links" value={p.links} />}
                            </tbody>
                        </table>
                    </div>
                    {/* Photo box */}
                    <div style={{ flexShrink: 0, border: '2px solid #333', width: 90, height: 115, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                        {profileImage ? (
                            <img src={profileImage} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        ) : (
                            <div style={{ textAlign: 'center', color: '#999', fontSize: 10, padding: 4 }}>証明写真<br/>Photo</div>
                        )}
                    </div>
                </div>

                {/* Summary */}
                {p?.summary && (
                    <JpSection title="志望動機 / Career Summary">
                        <div style={{ padding: '10px 12px', border: '1px solid #ccc', lineHeight: 1.7, background: '#fafafa' }}>{p.summary}</div>
                    </JpSection>
                )}

                {/* Education */}
                {education?.length > 0 && (
                    <JpSection title="学歴 / Education">
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ background: '#f0f0f0' }}>
                                    <th style={{ ...thStyle, width: '20%' }}>期間 / Period</th>
                                    <th style={{ ...thStyle, width: '50%' }}>学校名 / Institution</th>
                                    <th style={{ ...thStyle }}>学位 / Degree</th>
                                </tr>
                            </thead>
                            <tbody>
                                {education.map((ed, i) => (
                                    <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#fafafa' }}>
                                        <td style={tdStyle}>{ed.startDate} – {ed.endDate}</td>
                                        <td style={tdStyle}>{ed.institution}</td>
                                        <td style={tdStyle}>{ed.degree}{ed.gpa ? ` (${ed.gpa})` : ''}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </JpSection>
                )}

                {/* Experience */}
                {experience?.length > 0 && (
                    <JpSection title="職歴 / Work History">
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ background: '#f0f0f0' }}>
                                    <th style={{ ...thStyle, width: '20%' }}>期間</th>
                                    <th style={{ ...thStyle, width: '25%' }}>会社名</th>
                                    <th style={{ ...thStyle, width: '20%' }}>役職</th>
                                    <th style={{ ...thStyle }}>業務内容</th>
                                </tr>
                            </thead>
                            <tbody>
                                {experience.map((ex, i) => (
                                    <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#fafafa' }}>
                                        <td style={tdStyle}>{ex.startDate}<br/>– {ex.endDate || '現在'}</td>
                                        <td style={{ ...tdStyle, fontWeight: 600 }}>{ex.company}</td>
                                        <td style={tdStyle}>{ex.role}</td>
                                        <td style={tdStyle}><ul style={{ margin: 0, padding: '0 0 0 14px' }}>{ex.achievements?.map((a, j) => <li key={j}>{a}</li>)}</ul></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </JpSection>
                )}

                {/* Skills */}
                {skills?.length > 0 && (
                    <JpSection title="スキル / Skills">
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, padding: '8px 0' }}>
                            {skills.map((s, i) => (
                                <span key={i} style={{ border: `1px solid ${primary}`, color: primary, padding: '2px 10px', borderRadius: 2, fontSize: 12 }}>{s}</span>
                            ))}
                        </div>
                    </JpSection>
                )}

                {/* Certifications */}
                {certifications?.length > 0 && (
                    <JpSection title="資格・免許 / Certifications">
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <tbody>
                                {certifications.map((c, i) => (
                                    <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#fafafa' }}>
                                        <td style={{ ...tdStyle, fontWeight: 600 }}>{c.name}</td>
                                        <td style={tdStyle}>{c.issuer}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </JpSection>
                )}

                {/* Projects */}
                {projects?.length > 0 && (
                    <JpSection title="主要プロジェクト / Key Projects">
                        {projects.map((pr, i) => (
                            <div key={i} style={{ marginBottom: 8, padding: '8px 12px', border: '1px solid #ddd', background: '#fafafa' }}>
                                <span style={{ fontWeight: 700 }}>{pr.name}</span>
                                <span style={{ marginLeft: 10, color: primary, fontSize: 11 }}>{pr.technologies}</span>
                                <div style={{ marginTop: 4, lineHeight: 1.5 }}>{pr.description}</div>
                            </div>
                        ))}
                    </JpSection>
                )}
            </div>
        </div>
    );
};

const thStyle = { border: '1px solid #bbb', padding: '6px 8px', textAlign: 'left', fontWeight: 700, fontSize: 11 };
const tdStyle = { border: '1px solid #ddd', padding: '6px 8px', verticalAlign: 'top', lineHeight: 1.5 };

const JpSection = ({ title, children }) => (
    <div style={{ marginBottom: 16 }}>
        <div style={{ background: '#1a1a1a', color: '#fff', padding: '5px 12px', fontSize: 12, fontWeight: 700, letterSpacing: 0.5 }}>{title}</div>
        {children}
    </div>
);

const JpRow = ({ label, value }) => (
    <tr>
        <td style={{ border: '1px solid #ccc', padding: '5px 8px', background: '#f5f5f5', fontWeight: 700, width: '35%', fontSize: 11 }}>{label}</td>
        <td style={{ border: '1px solid #ccc', padding: '5px 8px', fontSize: 12 }}>{value || '—'}</td>
    </tr>
);

export default TemplateJapan;
