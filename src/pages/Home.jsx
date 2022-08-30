import React from 'react'
import CoinTable from '../components/CoinTable'
import Earning from '../components/Earning'
import Header from '../components/Header'
import LargeTitle from '../components/LargeTitle'
import Services from '../components/Services'
import Steps from '../components/Steps'

function Home() {
  return (
    <div>
        <Header/>
        <CoinTable/>
        <Earning/>
        <LargeTitle title='Create your cryptocurrency portfolio today' subTitle='Coinbase has a variety of features that make it the best place to start trading'/>
        <Steps/>
        <LargeTitle title='The most trusted cryptocurrency platform' subTitle='Here are a few reasons why you should choose Coinbase '/>
        <Services/>
    </div>
  )
}

export default Home