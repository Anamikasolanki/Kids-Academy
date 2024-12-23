import React from 'react'
import Banner from './Banner'
import Features from './Features'
import Aboutus from './Aboutus'
import PopularClass from '../Popular/PopularClass'
import Teacher from '../Teacher/Teacher'
import Gallery from '../Gallery/Gallery'
import Total from '../Total/Total'
import Partner from '../Partner/Partner'
import Parent from '../Parent/Parent'
import Newsletter from './Newsletter'
import ParentSay from './ParentSay'

export default function Home() {
  return (
    <>
      <Banner/>
      <Features/>
      <Aboutus/>
      <PopularClass/>
      <Teacher/>
      <Gallery/>
      <Total/>
      <ParentSay/>
      <Partner/>
      <Parent/>
      <Newsletter/>
    </>
  )
}
