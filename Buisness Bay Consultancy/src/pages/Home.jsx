import React from 'react'
import Hero from '../components/Hero'
import GetInTouch from '../components/FreeConsultation'
import VisaService from '../components/VisaService'
import WhatsApp from '../components/WhatsApp'
import HaveABusiness from '../components/HaveABusiness'
import Reviews from '../components/Reviews'
import BankingPartners from '../components/BankingPartners'
import RegisterPopup from '../components/RegisterPopup'
import AchievementDashboard from '../components/AchievementDashboard'
import CostCalculator from '../components/CostCalculator'
import ServiceDashboard from '../components/ServiceDashboard'
import TeamCarousel from '../components/TeamCarousel'

const Home = () => {
  return (
    <div>
      <RegisterPopup/>
      <WhatsApp/>
      <Hero/>
      <VisaService/>
      <ServiceDashboard/>
      {/* <CostCalculator/> */}
      <BankingPartners/>
       <Reviews/>
        <AchievementDashboard/>
       <TeamCarousel />
       <HaveABusiness/>
      <GetInTouch/>
    </div>
  )
}

export default Home
