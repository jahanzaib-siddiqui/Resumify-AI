import { useState } from 'react'
import ResumeForm from './components/ResumeForm'
import TemplatePreview from './components/TemplatePreview'
import TemplateLibrary from './components/TemplateLibrary'

function App() {
  const [resumeData, setResumeData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [region, setRegion] = useState('USA')
  const [profileImage, setProfileImage] = useState(null)
  const [rightPanel, setRightPanel] = useState('templates') // templates | preview
  const [theme, setTheme] = useState('classic')

  const themesList = [
      { id: 'classic', color: 'bg-gray-900', name: 'Classic Dark' },
      { id: 'navy', color: 'bg-blue-900', name: 'Executive Navy' },
      { id: 'emerald', color: 'bg-emerald-700', name: 'Emerald Minimal' },
      { id: 'burgundy', color: 'bg-rose-900', name: 'Burgundy Professional' },
      { id: 'teal', color: 'bg-teal-600', name: 'Modern Teal' }
  ]

  const handleGenerate = async (formData) => {
    setIsLoading(true);
    setError(null);
    setRightPanel('preview'); // Automatically switch to preview upon generation
    try {
      const response = await fetch('http://localhost:5001/api/resume/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ targetRegion: region, rawData: formData })
      });
      const result = await response.json();
      if (!response.ok) {
         throw new Error(result.error || 'Failed to generate');
      }
      setResumeData(result.data);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row font-sans">
      <div className="w-full md:w-[45%] lg:w-[40%] p-6 lg:p-10 border-r border-gray-200 overflow-y-auto h-screen bg-white shadow-2xl z-10 relative">
         <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -z-10 opacity-70"></div>
         <h1 className="text-3xl lg:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-indigo-700 to-blue-500 mb-2">
            AI Resume Builder
         </h1>
         <p className="text-gray-500 text-sm mb-8 font-medium">Tailor your CV perfectly for any global region.</p>
         
         <ResumeForm onGenerate={handleGenerate} isLoading={isLoading} region={region} setRegion={setRegion} profileImage={profileImage} setProfileImage={setProfileImage} />
         
         {error && (
            <div className="mt-6 p-4 bg-red-50 text-red-700 text-sm font-medium rounded-xl border border-red-100 flex items-start">
              <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path></svg>
              <span>{error}</span>
            </div>
         )}
      </div>
      <div className="w-full md:w-[55%] lg:w-[60%] bg-gradient-to-br from-gray-100 to-gray-200 overflow-y-auto h-screen relative">
         <div className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200 p-4 flex justify-center items-center shadow-sm">
            <div className="bg-gray-100 p-1 rounded-xl flex space-x-1">
               <button 
                 onClick={() => setRightPanel('templates')}
                 className={`px-6 py-2 rounded-lg font-bold text-sm transition-all ${rightPanel === 'templates' ? 'bg-white text-indigo-700 shadow-sm' : 'text-gray-500 hover:text-gray-800'}`}
               >
                  1. Template Library
               </button>
               <button 
                 onClick={() => setRightPanel('preview')}
                 className={`px-6 py-2 rounded-lg font-bold text-sm transition-all ${rightPanel === 'preview' ? 'bg-white text-indigo-700 shadow-sm' : 'text-gray-500 hover:text-gray-800'}`}
               >
                  2. Live Preview
               </button>
            </div>
            
            {/* Theme Selector UI */}
            <div className="hidden lg:flex items-center space-x-2 border-l border-gray-300 pl-4 ml-4">
               {themesList.map(t => (
                  <button 
                     key={t.id} 
                     onClick={() => setTheme(t.id)}
                     title={t.name}
                     className={`w-6 h-6 rounded-full shadow-sm border-2 transition-transform ${theme === t.id ? 'border-primary-500 scale-110 ring-2 ring-indigo-200' : 'border-white hover:scale-110'} ${t.color}`} 
                  />
               ))}
            </div>
         </div>
         
         <div className="p-4 lg:p-8">
           {rightPanel === 'templates' ? (
              <TemplateLibrary activeRegion={region} setRegion={setRegion} />
           ) : (
              <TemplatePreview data={resumeData} isLoading={isLoading} region={region} profileImage={profileImage} theme={theme} />
           )}
         </div>
      </div>
    </div>
  )
}

export default App
