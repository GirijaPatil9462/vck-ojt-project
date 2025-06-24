// import {  Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";
// import CoursesPage from "./pages/CoursesPage";
// import ContactPage from "./pages/ContactPage";
// import '/src/styles/pages.css';

// const App = () => {
  


//   return(

//     <div>
//         <Router>
//           <Routes>
//             <Route path="/" element={<HomePage/>}/>
//             <Route path="/about" element={<AboutPage/>}/>
//             <Route path="/courses" element={<CoursesPage/>}/>
//             <Route path="/contact" element={<ContactPage/>}/>
      
//           </Routes>
//         </Router>

//     </div>
//   )

// }
// export default App;


import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AdmissionsPage from './pages/AdmissionsPage';
import ContactPage from './pages/ContactPage';
import CoursesPage from './pages/CoursesPage';

import NotFoundPage from './pages/NotFoundPage';
//import ChatbotComponent from './components/Chatbot/ChatbotComponents';
//import DeveloperInfoPopup from './components/Developerlnfo/DeveloperInfoPopup';

function App() {
  // const [showPopup, setShowPopup] = useState(true);

  // const handleClosePopup = () => {
  //   setShowPopup(false);
  // };
  return (
    <>
    <div>
        {/* Your main application content
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Girija Bajirao Patil"
          studentPhotoUrl="C:\OJT\vck-react-project\vck-react-app\public\images\myimage.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        /> */}
      </div>
    <Router>
     
      
      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/apply" element={<AdmissionsPage />} />
          <Route path="/contact" element={<ContactPage />} />
           <Route path="/courses" element={<CoursesPage/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    {/* <ChatbotComponent/>  */}
    </Router>
    </>
  );
}

export default App;


