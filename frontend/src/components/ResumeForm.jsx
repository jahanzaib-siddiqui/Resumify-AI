import { useState, useRef } from 'react';

const ResumeForm = ({ onGenerate, isLoading, region, setRegion, profileImage, setProfileImage }) => {
  const [personalInfo, setPersonalInfo] = useState({ fullName: '', jobTitle: '', email: '', phone: '', location: '', links: '', summaryIntro: '' });
  const [education, setEducation] = useState([{ degree: '', institution: '', duration: '', gpa: '' }]);
  const [skills, setSkills] = useState('');
  const [projects, setProjects] = useState([{ name: '', description: '', technologies: '', role: '' }]);
  const [experience, setExperience] = useState([{ company: '', role: '', duration: '', description: '' }]);
  const [certifications, setCertifications] = useState([{ name: '', issuer: '' }]);
  const [isImporting, setIsImporting] = useState(false);
  const importRef = useRef(null);

  const handleDynamic = (setter, idx, field, val) => setter(p => { const n = [...p]; n[idx][field] = val; return n; });
  const addDynamic = (setter, obj) => setter(p => [...p, obj]);

  const cleanArray = (arr, key) => arr.filter(item => item[key] && item[key].trim() !== '');

  const handleImportFile = async (e) => {
    if (!e.target.files?.[0]) return;
    setIsImporting(true);
    const formData = new FormData();
    formData.append('resume', e.target.files[0]);

    try {
      const resp = await fetch('http://localhost:5001/api/resume/import', {
        method: 'POST',
        body: formData
      });
      const result = await resp.json();
      if (resp.ok && result.success && result.data) {
        const d = result.data;
        if (d.personalInfo) setPersonalInfo(d.personalInfo);
        if (d.education) setEducation(d.education.length ? d.education : [{ degree: '', institution: '', duration: '', gpa: '' }]);
        if (d.skills) setSkills(typeof d.skills === 'string' ? d.skills : d.skills.join(', '));
        if (d.projects) setProjects(d.projects.length ? d.projects : [{ name: '', description: '', technologies: '', role: '' }]);
        if (d.experience) setExperience(d.experience.length ? d.experience : [{ company: '', role: '', duration: '', description: '' }]);
        if (d.certifications) setCertifications(d.certifications.length ? d.certifications : [{ name: '', issuer: '' }]);
      } else {
        throw new Error(result.error || result.details || "Failed to parse resume");
      }
    } catch (err) {
      console.error("Import failed:", err);
      alert(`Import Failed: ${err.message}`);
    } finally {
      setIsImporting(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate({ 
        personalInfo, 
        skills, 
        education: cleanArray(education, 'degree'),
        projects: cleanArray(projects, 'name'), 
        experience: cleanArray(experience, 'company'), 
        certifications: cleanArray(certifications, 'name') 
    });
  };

  const SectionHeader = ({ title }) => (
    <h3 className="text-sm font-extrabold text-gray-400 uppercase tracking-widest mt-8 mb-4 border-b border-gray-100 pb-2">{title}</h3>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-6 pb-20">
      
      {/* 0. Import Resume */}
      <div className="bg-gradient-to-br from-indigo-700 to-blue-600 rounded-3xl p-6 shadow-xl text-white mb-10 overflow-hidden relative">
        <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
            Import From Existing CV
        </h4>
        <p className="text-xs text-indigo-100 mb-5 font-medium opacity-90 leading-relaxed">Let AI parse your old resume and automatically fill the form for you in seconds.</p>
        <input type="file" ref={importRef} onChange={handleImportFile} accept=".pdf" className="hidden" />
        <button 
            type="button" 
            disabled={isImporting}
            onClick={() => importRef.current.click()}
            className={`w-full py-3 px-4 rounded-xl font-extrabold text-sm transition-all shadow-lg flex items-center justify-center gap-2 ${isImporting ? 'bg-white/20 text-white cursor-not-allowed' : 'bg-white text-indigo-700 hover:bg-indigo-50 active:scale-95'}`}
        >
          {isImporting ? (
            <>
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                AI is parsing PDF...
            </>
          ) : "Upload Old PDF Resume"}
        </button>
      </div>
      
      {/* 1. Target Market */}
      <div>
        <SectionHeader title="1. Target Market" />
        <select 
          className="w-full p-4 border border-gray-200 rounded-2xl bg-white shadow-sm font-medium text-gray-800 focus:ring-4 focus:ring-indigo-100 transition-all cursor-pointer"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option value="USA">🇺🇸 United States (Strict ATS, No Photo)</option>
          <option value="UK">🇬🇧 United Kingdom (Professional, 2 Pages)</option>
          <option value="Germany">🇩🇪 Germany (Lebenslauf, Detailed)</option>
          <option value="UAE">🇦🇪 UAE (Multinational, Comprehensive)</option>
          <option value="Australia">🇦🇺 Australia (Direct, Clear)</option>
          <option value="Europe">🇪🇺 Europe (Europass Standard)</option>
          <option value="Canada">🇨🇦 Canada (Strict ATS, Inclusive)</option>
          <option value="Singapore">🇸🇬 Singapore (Detailed, Prestige Focus)</option>
          <option value="Pakistan">🇵🇰 Pakistan (Executive, Education Focus)</option>
          <option value="India">🇮🇳 India (Standard, Academic Depth)</option>
          <option value="China">🇨🇳 China (Traditional, Photo-Inclusive)</option>
          <option value="Indonesia">🇮🇩 Indonesia (Professional, Social Data)</option>
          <option value="Japan">🇯🇵 Japan (Formal Rirekisho Style)</option>
          <option value="Korea">🇰🇷 Korea (Myeongseong, Certificate Focus)</option>
          <option value="Russia">🇷🇺 Russia (Structured, Result-Driven)</option>
          <option value="Turkey">🇹🇷 Turkey (Modern, Sidebar Layout)</option>
          <option value="Malaysia">🇲🇾 Malaysia (International Standard)</option>
          <option value="Thailand">🇹🇭 Thailand (Visual, Photo-Centric)</option>
        </select>
      </div>

      {/* 2. Personal Details */}
      <div>
        <SectionHeader title="2. Personal & Contact Info" />
        <div className="grid grid-cols-2 gap-4">
          <input className="p-4 border border-gray-200 rounded-xl bg-gray-50/50" placeholder="Full Name" value={personalInfo.fullName} onChange={e => setPersonalInfo({...personalInfo, fullName: e.target.value})} required />
          <input className="p-4 border border-gray-200 rounded-xl bg-gray-50/50" placeholder="Job Title" value={personalInfo.jobTitle} onChange={e => setPersonalInfo({...personalInfo, jobTitle: e.target.value})} required />
          <input className="p-4 border border-gray-200 rounded-xl bg-gray-50/50" placeholder="Email Address" type="email" value={personalInfo.email} onChange={e => setPersonalInfo({...personalInfo, email: e.target.value})} />
          <input className="p-4 border border-gray-200 rounded-xl bg-gray-50/50" placeholder="Phone Number" value={personalInfo.phone} onChange={e => setPersonalInfo({...personalInfo, phone: e.target.value})} />
          <input className="p-4 border border-gray-200 rounded-xl bg-gray-50/50" placeholder="Location (City, Country)" value={personalInfo.location} onChange={e => setPersonalInfo({...personalInfo, location: e.target.value})} />
          <input className="p-4 border border-gray-200 rounded-xl bg-gray-50/50" placeholder="Links (LinkedIn, GitHub...)" value={personalInfo.links} onChange={e => setPersonalInfo({...personalInfo, links: e.target.value})} />
          
          <textarea className="col-span-2 p-4 border border-gray-200 rounded-xl bg-gray-50/50 h-24" placeholder="Short Intro / Career Goal (e.g. Computer Science student passionate about AI...)" value={personalInfo.summaryIntro} onChange={e => setPersonalInfo({...personalInfo, summaryIntro: e.target.value})} />

          <div className="col-span-2 p-5 border border-dashed border-indigo-200 rounded-xl bg-indigo-50/30">
            <label className="block text-sm font-bold text-gray-700 mb-2">Profile Photo (Optional)</label>
            <p className="text-xs text-indigo-600 mb-4 bg-white px-2 py-1 rounded inline-block shadow-sm">Hidden automatically on strict ATS templates (USA/UK/Canada).</p>
            <div className="flex items-center gap-4">
              {profileImage && <img src={profileImage} className="w-12 h-12 rounded-full object-cover border-2 border-indigo-200" alt="Profile" />}
              <input type="file" accept="image/*" className="text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-indigo-600 file:text-white cursor-pointer" onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                      const reader = new FileReader();
                      reader.onload = (ev) => setProfileImage(ev.target.result);
                      reader.readAsDataURL(e.target.files[0]);
                  }
              }} />
            </div>
          </div>
        </div>
      </div>

      {/* 3. Education */}
      <div>
        <SectionHeader title="3. Education" />
        {education.map((edu, idx) => (
          <div key={idx} className="p-4 border border-gray-100 rounded-2xl bg-white shadow-sm mb-4 space-y-3">
             <div className="grid grid-cols-2 gap-3">
               <input className="p-3 border rounded-lg bg-gray-50 text-sm" placeholder="Degree (e.g. BSCS)" value={edu.degree} onChange={e => handleDynamic(setEducation, idx, 'degree', e.target.value)} />
               <input className="p-3 border rounded-lg bg-gray-50 text-sm" placeholder="University" value={edu.institution} onChange={e => handleDynamic(setEducation, idx, 'institution', e.target.value)} />
               <input className="p-3 border rounded-lg bg-gray-50 text-sm" placeholder="Duration (2020 - 2024)" value={edu.duration} onChange={e => handleDynamic(setEducation, idx, 'duration', e.target.value)} />
               <input className="p-3 border rounded-lg bg-gray-50 text-sm" placeholder="GPA (Optional)" value={edu.gpa} onChange={e => handleDynamic(setEducation, idx, 'gpa', e.target.value)} />
             </div>
          </div>
        ))}
        <button type="button" onClick={() => addDynamic(setEducation, { degree: '', institution: '', duration: '', gpa: '' })} className="text-sm font-bold text-indigo-600 flex items-center p-2 hover:bg-indigo-50 rounded-lg transition-colors">+ Add Education</button>
      </div>

      {/* 4. Skills */}
      <div>
        <SectionHeader title="4. Core Skills" />
        <textarea className="w-full p-4 border border-gray-200 rounded-xl bg-gray-50/50" placeholder="Technical & Soft Skills (e.g. JavaScript, Python, Leadership...)" value={skills} onChange={e => setSkills(e.target.value)} />
      </div>

      {/* 5. Projects */}
      <div>
        <SectionHeader title="5. Key Projects (Crucial for Students)" />
        {projects.map((proj, idx) => (
          <div key={idx} className="p-4 border border-gray-100 rounded-2xl bg-white shadow-sm mb-4 space-y-3">
             <div className="grid grid-cols-2 gap-3">
               <input className="p-3 border rounded-lg bg-gray-50 text-sm font-bold" placeholder="Project Name" value={proj.name} onChange={e => handleDynamic(setProjects, idx, 'name', e.target.value)} />
               <input className="p-3 border rounded-lg bg-gray-50 text-sm text-indigo-600" placeholder="Technologies (React, Python...)" value={proj.technologies} onChange={e => handleDynamic(setProjects, idx, 'technologies', e.target.value)} />
               <input className="p-3 border rounded-lg bg-gray-50 text-sm col-span-2" placeholder="Your Role (Frontend Lead, Solo Developer...)" value={proj.role} onChange={e => handleDynamic(setProjects, idx, 'role', e.target.value)} />
             </div>
             <textarea className="w-full p-3 border rounded-lg bg-gray-50 text-sm h-20" placeholder="Describe the project and its impact..." value={proj.description} onChange={e => handleDynamic(setProjects, idx, 'description', e.target.value)} />
          </div>
        ))}
        <button type="button" onClick={() => addDynamic(setProjects, { name: '', description: '', technologies: '', role: '' })} className="text-sm font-bold text-indigo-600 flex items-center p-2 hover:bg-indigo-50 rounded-lg transition-colors">+ Add Project</button>
      </div>

      {/* 6. Experience */}
      <div>
        <SectionHeader title="6. Experience (Jobs / Internships)" />
        {experience.map((exp, idx) => (
          <div key={idx} className="p-4 border border-gray-100 rounded-2xl bg-white shadow-sm mb-4 space-y-3">
             <div className="grid grid-cols-2 gap-3">
               <input className="p-3 border rounded-lg bg-gray-50 text-sm font-bold" placeholder="Company Name" value={exp.company} onChange={e => handleDynamic(setExperience, idx, 'company', e.target.value)} />
               <input className="p-3 border rounded-lg bg-gray-50 text-sm" placeholder="Job Title" value={exp.role} onChange={e => handleDynamic(setExperience, idx, 'role', e.target.value)} />
               <input className="col-span-2 p-3 border rounded-lg bg-gray-50 text-sm" placeholder="Duration (e.g. Summer 2023)" value={exp.duration} onChange={e => handleDynamic(setExperience, idx, 'duration', e.target.value)} />
             </div>
             <textarea className="w-full p-3 border rounded-lg bg-gray-50 text-sm h-20" placeholder="Describe your achievements..." value={exp.description} onChange={e => handleDynamic(setExperience, idx, 'description', e.target.value)} />
          </div>
        ))}
        <button type="button" onClick={() => addDynamic(setExperience, { company: '', role: '', duration: '', description: '' })} className="text-sm font-bold text-indigo-600 flex items-center p-2 hover:bg-indigo-50 rounded-lg transition-colors">+ Add Experience</button>
      </div>

      {/* 7. Certifications */}
      <div>
        <SectionHeader title="7. Certifications" />
        {certifications.map((cert, idx) => (
          <div key={idx} className="p-4 border border-gray-100 rounded-2xl bg-white shadow-sm mb-4 flex gap-3">
             <input className="w-1/2 p-3 border rounded-lg bg-gray-50 text-sm font-bold" placeholder="Certificate Name" value={cert.name} onChange={e => handleDynamic(setCertifications, idx, 'name', e.target.value)} />
             <input className="w-1/2 p-3 border rounded-lg bg-gray-50 text-sm" placeholder="Issuer (e.g. LinkedIn Learning)" value={cert.issuer} onChange={e => handleDynamic(setCertifications, idx, 'issuer', e.target.value)} />
          </div>
        ))}
        <button type="button" onClick={() => addDynamic(setCertifications, { name: '', issuer: '' })} className="text-sm font-bold text-indigo-600 flex items-center p-2 hover:bg-indigo-50 rounded-lg transition-colors">+ Add Certification</button>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-indigo-700 to-blue-600 hover:from-indigo-800 hover:to-blue-700 text-white font-extrabold py-5 rounded-2xl shadow-xl transition-all transform hover:-translate-y-1 active:scale-95 text-lg mt-8"
      >
        {isLoading ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Generating AI Resume...
          </span>
        ) : "Generate Regional Resume"}
      </button>

    </form>
  );
};

export default ResumeForm;
