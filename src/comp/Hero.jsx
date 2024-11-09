import React from 'react';
import cloudImg from '../assets/images/cloud.png';
import cloudGirlImg from '../assets/images/cloudGirl.png';

const Hero = () => {
  const handleMouseMove = (e) => {
    const heroSection = e.currentTarget;
    const girlImage = heroSection.querySelector('.girl-image');
    const cloudImage = heroSection.querySelector('.cloud-image');

    const { width, height } = heroSection.getBoundingClientRect();
    const x = e.clientX - width / 2;
    const y = e.clientY - height / 2;

    girlImage.style.transform = `translate(${-x * 0.05}px, ${-y * 0.05}px)`;
    cloudImage.style.transform = `translate(${x * 0.04}px, ${y * 0.04}px)`;
  };

  return (
    <div
      style={{ backgroundColor: '#fd8368' }}
      className="hero-section flex items-center justify-between h-screen overflow-hidden relative"
      onMouseMove={handleMouseMove}
    >
      <div className="h-full flex flex-col justify-between p-16 font-poppins font-light w-[40%]">
        <div>
          <h1 className="text-7xl text-white uppercase leading-tight">Emma Rose Photography</h1>
          <p className="text-2xl text-white mt-4">Visual stories, creative intent</p>
          <div className="mt-4 w-24 border-t-2 border-white"></div>
        </div>
        <div className="mt-8 text-white text-lg">
          <p className="mb-2">Keep scrolling to see some of my favorite projects! Or, <a href="#" className="underline">get in touch</a> so we can create a new one!</p>
          <p className="opacity-75">309ATL | ERPHOTOGRAPHY</p>
        </div>
      </div>
      <div className="image-container relative flex-1 w-1/2 top-[50%] left-[-5%]">
        <img
          src={cloudGirlImg}
          alt="Girl"
          className="girl-image absolute bottom-0 left-0 object-cover transition-transform duration-500 ease-out w-[90%]"
        />
        <img
          src={cloudImg}
          alt="Cloud"
          className="cloud-image absolute bottom-0 left-0 w-[80%] object-cover transition-transform duration-500 ease-out z-10"
        />
      </div>
    </div>
  );
};

export default Hero;
