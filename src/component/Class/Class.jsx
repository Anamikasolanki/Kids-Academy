import React from 'react'
import ClassWelcome from './ClassWelcome'
import Newsletter from '../Home/Newsletter'
import PopularClass from '../Popular/PopularClass'
import Parent from '../Parent/Parent'

function Class() {
  return (
    <div>
      <ClassWelcome/>
      <PopularClass/>
      <Parent/>
      <Newsletter/>
    </div>
  )
}

export default Class
