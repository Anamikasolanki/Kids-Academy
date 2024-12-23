import React from 'react'
import ContactWelcome from './ContactWelcome'
import Newsletter from '../Home/Newsletter'
import Map from './Map'
import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <div>
      <ContactWelcome/>
      <ContactForm/>
      <Map/>
      <Newsletter/>
    </div>
  )
}
