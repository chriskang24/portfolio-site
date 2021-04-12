import React from 'react';
import Title from '../Components/title';
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';

export default function AboutPage() {
  return (
    <div className="AboutPage">
      <Title title={'About Me'} span={'About Me 2'} />
      <ImageSection />
      <Title title={'My Skills'} span={'My Skills 2'} />
      <div className="skillsContainer">
        <SkillsSection skill={'Javascript'} progress={'85%'} width={'85%'} />
        <SkillsSection skill={'Typescript'} progress={'30%'} width={'30%'} />
        <SkillsSection skill={'ReactJS'} progress={'75%'} width={'75%'} />
        <SkillsSection skill={'NodeJS/ExpressJS'} progress={'80%'} width={'80%'} />
        <SkillsSection skill={'Web Design'} progress={'70%'} width={'70%'} />
        <SkillsSection skill={'Ruby/Rails'} progress={'50%'} width={'50%'} />
      </div>
    </div>
  )
}