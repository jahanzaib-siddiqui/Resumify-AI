// Europe (Europass) - standardized blue/white, language-focused, EU format
const TemplateEurope = ({ data, resumeRef }) => {
    const { personalInfo: p, experience, education, skills, projects, certifications } = data;
    const euBlue = '#003399';
    const euYellow = '#FFCC00';
    return (
        <div ref={resumeRef} style={{ fontFamily: "'Arial', sans-serif", background: '#fff', maxWidth: 850, margin: '0 auto', minHeight: 1056, color: '#222', fontSize: 12.5 }}>
            {/* EU-style header */}
            <div style={{ background: euBlue, padding: '24px 40px', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <div style={{ fontSize: 10, color: euYellow, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 6 }}>Europass Curriculum Vitae</div>
                    <div style={{ fontSize: 26, fontWeight: 700 }}>{p?.fullName}</div>
                    <div style={{ fontSize: 13, color: '#93c5fd', marginTop: 2 }}>{p?.jobTitle}</div>
                </div>
                {/* EU Stars decoration */}
                <div style={{ fontSize: 28, letterSpacing: 2, color: euYellow }}>★★★<br/>★★★</div>
            </div>
            <div style={{ height: 5, background: euYellow }} />

            <div style={{ display: 'flex' }}>
                {/* Left sidebar */}
                <div style={{ width: '33%', background: '#f0f4ff', padding: '20px 18px', borderRight: '1px solid #dde3f0' }}>
                    <EuSide title="Personal Info" euBlue={euBlue} euYellow={euYellow}>
                        {p?.email && <EuInfo label="Email" value={p.email} />}
                        {p?.phone && <EuInfo label="Phone" value={p.phone} />}
                        {p?.location && <EuInfo label="Address" value={p.location} />}
                        {p?.links && <EuInfo label="Website" value={p.links} />}
                    </EuSide>

                    {skills?.length > 0 && (
                        <EuSide title="Skills" euBlue={euBlue} euYellow={euYellow}>
                            {skills.map((s, i) => (
                                <div key={i} style={{ marginBottom: 5, fontSize: 12 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                        <span style={{ color: euBlue, fontWeight: 700 }}>·</span>
                                        {s}
                                    </div>
                                </div>
                            ))}
                        </EuSide>
                    )}

                    {certifications?.length > 0 && (
                        <EuSide title="Qualifications" euBlue={euBlue} euYellow={euYellow}>
                            {certifications.map((c, i) => (
                                <div key={i} style={{ marginBottom: 7, fontSize: 12 }}>
                                    <div style={{ fontWeight: 700, color: euBlue }}>{c.name}</div>
                                    <div style={{ color: '#555' }}>{c.issuer}</div>
                                </div>
                            ))}
                        </EuSide>
                    )}
                </div>

                {/* Main content */}
                <div style={{ flex: 1, padding: '20px 28px' }}>
                    {p?.summary && (
                        <EuMain title="Personal Statement" euBlue={euBlue} euYellow={euYellow}>
                            <p style={{ margin: 0, lineHeight: 1.7, color: '#444' }}>{p.summary}</p>
                        </EuMain>
                    )}

                    {experience?.length > 0 && (
                        <EuMain title="Work Experience" euBlue={euBlue} euYellow={euYellow}>
                            {experience.map((ex, i) => (
                                <div key={i} style={{ marginBottom: 14, display: 'flex', gap: 12 }}>
                                    <div style={{ minWidth: 90, color: '#666', fontSize: 11, borderRight: `2px solid ${euYellow}`, paddingRight: 10 }}>
                                        {ex.startDate}<br/>–<br/>{ex.endDate || 'Present'}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontWeight: 700, color: euBlue }}>{ex.role}</div>
                                        <div style={{ color: '#555', fontSize: 12, marginBottom: 4 }}>{ex.company}, {ex.location}</div>
                                        <ul style={{ margin: 0, padding: '0 0 0 16px' }}>
                                            {ex.achievements?.map((a, j) => <li key={j} style={{ marginBottom: 2, lineHeight: 1.55, fontSize: 12 }}>{a}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </EuMain>
                    )}

                    {education?.length > 0 && (
                        <EuMain title="Education & Training" euBlue={euBlue} euYellow={euYellow}>
                            {education.map((ed, i) => (
                                <div key={i} style={{ marginBottom: 10, display: 'flex', gap: 12 }}>
                                    <div style={{ minWidth: 90, color: '#666', fontSize: 11, borderRight: `2px solid ${euYellow}`, paddingRight: 10 }}>
                                        {ed.startDate} – {ed.endDate}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontWeight: 700, color: euBlue }}>{ed.degree}</div>
                                        <div style={{ color: '#555', fontSize: 12 }}>{ed.institution}{ed.gpa ? ` — GPA: ${ed.gpa}` : ''}</div>
                                    </div>
                                </div>
                            ))}
                        </EuMain>
                    )}

                    {projects?.length > 0 && (
                        <EuMain title="Projects" euBlue={euBlue} euYellow={euYellow}>
                            {projects.map((pr, i) => (
                                <div key={i} style={{ marginBottom: 10 }}>
                                    <span style={{ fontWeight: 700, color: euBlue }}>{pr.name}</span>
                                    <span style={{ color: '#666', fontSize: 12 }}> | {pr.technologies}</span>
                                    <div style={{ lineHeight: 1.55, marginTop: 2, fontSize: 12 }}>{pr.description}</div>
                                </div>
                            ))}
                        </EuMain>
                    )}
                </div>
            </div>
        </div>
    );
};

const EuSide = ({ title, euBlue, euYellow, children }) => (
    <div style={{ marginBottom: 18 }}>
        <div style={{ fontWeight: 700, fontSize: 12, color: euBlue, textTransform: 'uppercase', letterSpacing: 0.8, borderBottom: `3px solid ${euYellow}`, paddingBottom: 4, marginBottom: 8 }}>{title}</div>
        {children}
    </div>
);

const EuMain = ({ title, euBlue, euYellow, children }) => (
    <div style={{ marginBottom: 18 }}>
        <div style={{ fontWeight: 700, fontSize: 13.5, color: euBlue, textTransform: 'uppercase', letterSpacing: 0.8, borderBottom: `3px solid ${euYellow}`, paddingBottom: 4, marginBottom: 10 }}>{title}</div>
        {children}
    </div>
);

const EuInfo = ({ label, value }) => (
    <div style={{ marginBottom: 6, fontSize: 12 }}>
        <span style={{ fontWeight: 700, color: '#333' }}>{label}: </span>
        <span style={{ color: '#555', wordBreak: 'break-all' }}>{value}</span>
    </div>
);

export default TemplateEurope;
