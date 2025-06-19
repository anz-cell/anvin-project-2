import React from 'react'
import Hero from '../components/Hero'
import GetInTouch from '../components/FreeConsultation'
import VisaService from '../components/VisaService'
import WhatsApp from '../components/WhatsApp'
import HaveABusiness from '../components/HaveABusiness'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'
import BankingPartners from '../components/BankingPartners'
import RegisterPopup from '../components/RegisterPopup'

const Home = () => {
  return (

    <div>
      <RegisterPopup/>
      <Hero/>
      <WhatsApp/>
      <BankingPartners/>
      <VisaService/>
      <Reviews/>
      <HaveABusiness/>
      <GetInTouch/>
      <Footer/>
    </div>
  )
}

export default Home
