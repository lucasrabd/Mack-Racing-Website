import React from 'react';
import Hero from '../components/Hero.jsx';
import Stats from '../components/Stats.jsx';
import About from '../components/About.jsx';
import Competition from '../components/Competition.jsx';
import Project from '../components/Project.jsx';
import CTA from '../components/CTA.jsx';

// Home page composed of the main sections. This page will be rendered at '/' route.
const HomePage = () => {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Competition />
      <Project />
      <CTA />
    </>
  );
};

export default HomePage;