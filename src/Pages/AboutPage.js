import React from 'react';
import Title from '../Components/title';
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServiceSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

export default function AboutPage() {
  return (
    <div className="AboutPage">
      <Title title={'About Me'} span={'About Me'} />
      <ImageSection />
      <Title title={'My Skills:'} span={'My Skills'} />
      <div className="skillsContainer">
        <SkillsSection skill={'JavaScript'} progress={'85%'} width={'85%'} />
        <SkillsSection skill={'NodeJS/ExpressJS'} progress={'80%'} width={'80%'} />
        <SkillsSection skill={'ReactJS/Redux'} progress={'75%'} width={'75%'} />
        <SkillsSection skill={'jQuery/AJAX'} progress={'70%'} width={'70%'} />
        <SkillsSection skill={'Ruby/Rails'} progress={'50%'} width={'50%'} />
        <SkillsSection skill={'TypeScript'} progress={'30%'} width={'30%'} />
      </div>

      <Title title={'Services:'} span={'Services'} />
      <div className="services-container">
        <ServiceSection image={design} title={'Web Development'} text={'Experienced in creating smooth website designs & applications.'} />
        <ServiceSection image={intelligence} title={'Single Page Applications'} text={'Using ReactJS, Redux, and other Front-end frameworks to create responsive single-page applications.'} />
        <ServiceSection image={gamedev} title={'Full Stack Developer'} text={'Front to Back-End developer with previous experience using ReactJS, Ruby/Rails, NodeJS/Express to service full-stack applications.'} />
      </div>
    </div>
  )
}