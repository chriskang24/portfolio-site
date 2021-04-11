import React from 'react';
import Title from '../Components/title';
import ImageSection from './ImageSection';

export default function AboutPage() {
  return (
    <div className="AboutPage">
      <Title title={'About Me'} span={'About Me 2'}/>
      <ImageSection/>
    </div>
  )
}