import React from 'react'
import ProfileHeader from "../../../components/mandoub-components/profileheader/ProfileHeader"
import GiftTarget from '../../../components/mandoub-components/gift/GiftTarget'
import Target from '../../../components/mandoub-components/targets/Target'
import News from '../../../components/mandoub-components/news/News'
import TopContributor from '../../../components/mandoub-components/top-contributor/TopContributor'
import TransactionContributions from './components/transaction-contributions/TransactionContributions'
import SalaryChart from '../../../components/home-charts/SalaryChart'
import OrdersChart from '../../../components/home-charts/OrdersChart'

function Home() {
  return (
    <div className='df-c'>

      <ProfileHeader />
      <News />
      <div className="df jc-sb ai-stretch">
      <TransactionContributions />
      <SalaryChart />
      <OrdersChart />

      </div>
      <GiftTarget isHidden={true}/>
      <GiftTarget />
      <Target />
      <TopContributor />

    </div>
  )
}

export default Home