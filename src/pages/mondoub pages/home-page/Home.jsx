import React from 'react'
import ProfileHeader from "../../../components/mandoub-components/profileheader/ProfileHeader"
import GiftTarget from '../../../components/mandoub-components/gift/GiftTarget'
import Target from '../../../components/mandoub-components/targets/Target'
import News from '../../../components/mandoub-components/news/News'
import TopContributor from '../../../components/mandoub-components/top-contributor/TopContributor'
import TransactionContributions from './components/transaction-contributions/TransactionContributions'

function Home() {
  return (
    <div className='df-c'>

      <ProfileHeader />
      <TransactionContributions />
      <News />
      <GiftTarget />
      <Target />
      <TopContributor />

    </div>
  )
}

export default Home