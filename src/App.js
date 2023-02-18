import React from 'react';
import Header from './components/Header'
import Hero from './components/Hero'
import Emp from './components/Emp'
import Services from './components/Services'
import Footer from './components/Footer'
import TidioChatbot from './components/Chatbot';


function App() {
  return (
    <div id='app-div w-100vw h-100vh' className='overflow-x-hidden' >
  <div><TidioChatbot /></div> 
    <Header />
    <Hero />
    <Services />
    <Emp />
    <Footer />
    </div>
  );
}

export default App;

/*

*/