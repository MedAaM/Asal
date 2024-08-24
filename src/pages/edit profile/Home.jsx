import React from 'react'
import ProfileHeader from "../../components/profileheader/ProfileHeader"
import GiftTarget from '../../components/gift/GiftTarget'
import Target from '../../components/targets/Target'
import News from '../../components/news/News'
import TopContributor from '../../components/top-contributor/TopContributor'

function Home() {
  return (
    <div className='df-c'>

      <ProfileHeader />
      <News />
      <GiftTarget />
      <Target />
      <TopContributor />

    </div>
  )
}

export default Home