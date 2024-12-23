import React from 'react'
import Teacher from '../Teacher/Teacher'
import AboutWelcome from './AboutWelcome'
import Features from '../Home/Features'
import Aboutus from '../Home/Aboutus'
import WhyChoose from './WhyChoose'
import ParentSay from '../Home/ParentSay'
import Newsletter from '../Home/Newsletter'

export default function About() {
  return (
    <div>
      <AboutWelcome/>
      <Features/>
      <Aboutus/>
      <WhyChoose/>
      <Teacher/>
      <ParentSay/>
      <Newsletter/>
    </div>
  )
}
