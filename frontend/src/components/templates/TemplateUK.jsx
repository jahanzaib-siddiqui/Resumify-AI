// UK - Two-column, themed header, strong personal statement, British style
const TemplateUK = ({ data, resumeRef, themeColors }) => {
    const { personalInfo: p, experience, education, skills, projects, certifications } = data;
    const navy = themeColors?.primary ?? '#1a2e5a';
    const gold = '#c8a951';
    return (
        <div ref={resumeRef} style={{ fontFamily: "'Georgia', serif", background: '#fff', maxWidth: 850, margin: '0 auto', minHeight: 1056, color: '#222', fontSize: 13 }}>
            {/* Navy header */}
            <div style={{ background: navy, color: '#fff', padding: '32px 48px', borderBottom: `5px solid ${gold}` }}>
                <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: 1 }}>{p?.fullName}</div>
                <div style={{ fontSize: 15, color: gold, marginTop: 4, fontStyle: 'italic' }}>{p?.jobTitle}</div>
                <div style={{ display: 'flex', gap: 20, marginTop: 10, fontSize: 12, flexWrap: 'wrap', color: '#cbd5e1' }}>
                    {p?.email && <span>{p.email}</span>}
                    {p?.phone && <span>{p.phone}</span>}
                    {p?.location && <span>{p.location}</span>}
                    {p?.links && <span>{p.links}</span>}
                </div>
            </div>

            <div style={{ display: 'flex', minHeight: 900 }}>
                {/* Left sidebar */}
                <div style={{ width: '35%', background: '#f0f4f8', padding: '28px 24px', borderRight: '1px solid #dde3ea' }}>
                    {skills?.length > 0 && (
                        <UkSide title="Core Skills" gold={gold} navy={navy}>
                            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                                {skills.map((s, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: 5, fontSize: 12 }}>
                                        <span style={{ width: 6, height: 6, background: gold, borderRadius: '50%', marginRight: 8, flexShrink: 0 }} />
                                        {s}
                                    </li>
                                ))}
                            </ul>
                        </UkSide>
                    )}

                    {education?.length > 0 && (
                        <UkSide title="Education" gold={gold} navy={navy}>
                            {education.map((ed, i) => (
                                <div key={i} style={{ marginBottom: 10, fontSize: 12 }}>
                                    <div style={{ fontWeight: 700, color: navy }}>{ed.degree}</div>
                                    <div style={{ color: '#555' }}>{ed.institution}</div>
                                    {ed.gpa && <div style={{ color: gold, fontStyle: 'italic' }}>GPA: {ed.gpa}</div>}
                                    <div style={{ color: '#777', fontSize: 11 }}>{ed.startDate} – {ed.endDate}</div>
                                </div>
                            ))}
                        </UkSide>
                    )}

                    {certifications?.length > 0 && (
                        <UkSide title="Qualifications" gold={gold} navy={navy}>
                            {certifications.map((c, i) => (
                                <div key={i} style={{ marginBottom: 7, fontSize: 12 }}>
                                    <div style={{ fontWeight: 700, color: navy }}>{c.name}</div>
                                    <div style={{ color: '#666' }}>{c.issuer}</div>
                                </div>
                            ))}
                        </UkSide>
                    )}
                </div>

                {/* Main content */}
                <div style={{ flex: 1, padding: '28px 36px' }}>
                    {p?.summary && (
                        <div style={{ background: '#f8f9ff', border: `1px solid ${navy}20`, borderLeft: `4px solid ${gold}`, padding: '14px 18px', marginBottom: 22, borderRadius: 4 }}>
                            <div style={{ fontWeight: 700, fontSize: 13, color: navy, marginBottom: 4, textTransform: 'uppercase', letterSpacing: 0.8 }}>Personal Statement</div>
                            <p style={{ margin: 0, lineHeight: 1.7, color: '#444', fontStyle: 'italic' }}>{p.summary}</p>
                        </div>
                    )}

                    {experience?.length > 0 && (
                        <UkMain title="Professional Experience" navy={navy} gold={gold}>
                            {experience.map((ex, i) => (
                                <div key={i} style={{ marginBottom: 16, paddingBottom: 14, borderBottom: i < experience.length - 1 ? '1px solid #e8edf2' : 'none' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                        <div style={{ fontWeight: 700, fontSize: 14, color: navy }}>{ex.role}</div>
                                        <div style={{ fontSize: 11, color: '#888', whiteSpace: 'nowrap', marginLeft: 10 }}>{ex.startDate} – {ex.endDate || 'Present'}</div>
                                    </div>
                                    <div style={{ color: gold, fontWeight: 600, fontSize: 12, marginBottom: 6 }}>{ex.company}, {ex.location}</div>
                                    <ul style={{ margin: '0 0 0 18px', padding: 0 }}>
                                        {ex.achievements?.map((a, j) => <li key={j} style={{ marginBottom: 3, lineHeight: 1.55, fontSize: 12 }}>{a}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </UkMain>
                    )}

                    {projects?.length > 0 && (
                        <UkMain title="Key Projects" navy={navy} gold={gold}>
                            {projects.map((pr, i) => (
                                <div key={i} style={{ marginBottom: 12 }}>
                                    <span style={{ fontWeight: 700, color: navy }}>{pr.name}</span>
                                    <span style={{ color: '#666', fontSize: 12 }}> — {pr.technologies}</span>
                                    <div style={{ lineHeight: 1.55, fontSize: 12, marginTop: 3 }}>{pr.description}</div>
                                </div>
                            ))}
                        </UkMain>
                    )}
                </div>
            </div>
        </div>
    );
};

const UkSide = ({ title, gold, navy, children }) => (
    <div style={{ marginBottom: 20 }}>
        <div style={{ fontWeight: 700, fontSize: 12, color: navy, textTransform: 'uppercase', letterSpacing: 1, borderBottom: `2px solid ${gold}`, paddingBottom: 4, marginBottom: 10 }}>{title}</div>
        {children}
    </div>
);

const UkMain = ({ title, navy, gold, children }) => (
    <div style={{ marginBottom: 20 }}>
        <div style={{ fontWeight: 700, fontSize: 14, color: navy, textTransform: 'uppercase', letterSpacing: 0.8, paddingBottom: 4, marginBottom: 12, borderBottom: `2px solid ${gold}` }}>{title}</div>
        {children}
    </div>
);

export default TemplateUK;
