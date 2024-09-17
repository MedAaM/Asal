import React from 'react'
import ProfileHeader from "./components/profileheader/ProfileHeader"
import GiftTarget from '../../../components/gift/GiftTarget'
import Target from '../../../components/targets/Target'
import News from '../../../components/news/News'
import TopContributor from '../../../components/top-contributor/TopContributor'
import Contributor from '../../../components/Contributor/Contributor'
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