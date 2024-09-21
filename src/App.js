import React, { useState } from 'react';
import EditableOptions from './components/EditableOptions';
import FormPreview from './components/FormPreview';
import EditableWelcomeOptions from './components/EditableWelcomeOptions';
import WelcomePreview from './components/WelcomePreview';
import { MdSettings } from "react-icons/md";
import { HiMiniBars4 } from "react-icons/hi2";

function App() {
  const [activeSection, setActiveSection] = useState('welcome');
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const [welcomeData, setWelcomeData] = useState({
    heading: 'Welcome to our form',
    description: 'This is a description of the form',
    imageFile: null,
    buttonLabel: 'Start',
    text: 'press Enter↵',
  });

  const [emailData, setEmailData] = useState({
    title: 'Enter Your Email',
    description: 'Please enter email address',
    email: '',
  });

  const handleWelcomeChange = (newData) => setWelcomeData(newData);
  const handleEmailChange = (newData) => setEmailData(newData);

  const openSideNav = (section) => {
    setActiveSection(section);
    setIsSideNavOpen(true);
  };

  const closeSideNav = () => setIsSideNavOpen(false);

  return (
    <div className="relative flex h-screen">
      <div className="w-1/4 bg-[#ffffff] p-4">
        <h2 className="flex text-xl font-semibold mb-4 items-center gap-2"><HiMiniBars4 /> Steps</h2>
        <button
          className={`w-full mb-4 p-2 ${activeSection === 'welcome' ? 'bg-[#fafafa] text-black' : 'bg-[#fafafa]'} hover:bg-gray-200 border border-gray-300 rounded-md transition duration-200`}
          onClick={() => openSideNav('welcome')}
        >
          Welcome Page
        </button>
        <button
          className={`w-full mb-4 p-2 ${activeSection === 'email' ? 'bg-[#fafafa] text-black' : 'bg-[#fafafa]'} hover:bg-gray-200 border border-gray-300 rounded-md transition duration-200`}
          onClick={() => openSideNav('email')}
        >
          Email
        </button>
      </div>

      <div className="w-3/4 p-4 border-l border-gray-300">
        {activeSection === 'welcome' && <WelcomePreview data={welcomeData} />}
        {activeSection === 'email' && <FormPreview data={emailData} />}
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-full md:w-1/4 bg-white shadow-lg z-50 transition-transform duration-500 transform ${
          isSideNavOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ opacity: 0.95 }}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-300">
          <h2 className="flex text-lg font-semibold items-center gap-2">
            <MdSettings />
            {activeSection === 'welcome' ? 'Settings' : 'Settings'}
          </h2>
          <button
            onClick={closeSideNav}
            className="text-red-500 hover:text-red-700 transition duration-300"
          >
            ✖
          </button>
        </div>

        <div className="p-4">
          {activeSection === 'welcome' && (
            <EditableWelcomeOptions
              data={welcomeData}
              onWelcomeChange={handleWelcomeChange}
            />
          )}
          {activeSection === 'email' && (
            <EditableOptions data={emailData} onEmailChange={handleEmailChange} />
          )}
        </div>
      </div>

      {isSideNavOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeSideNav}
        ></div>
      )}
    </div>
  );
}

export default App;
