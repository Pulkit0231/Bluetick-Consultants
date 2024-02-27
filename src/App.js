import './App.css';
import AppAppBar from './appBar';
import BlogSection from './BlogSection';
import Footer from './Footer';
import Hero from './Hero';
import LetsConnectForm from './LetsConnectForm';
import WhatWeOfferSection from './whatWeofferSection';

function App() {
  return (
    <div className="App">
      <AppAppBar />
      <Hero />
      <WhatWeOfferSection />
      <BlogSection />
      <LetsConnectForm />
      <hr style={{ background: "rgba(255, 255, 255, 0.5)" }}></hr>
      <Footer />
    </div >
  );
}

export default App;
