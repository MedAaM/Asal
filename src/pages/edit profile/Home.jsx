import React from 'react'
import ProfileHeader from "../../components/profileheader/ProfileHeader"
import GiftTarget from '../../components/gift/GiftTarget'
import Target from '../../components/targets/Target'

function Home() {
  return (
    <div className='df-c'>
      <ProfileHeader />
      <GiftTarget />
      <Target />
    </div>
  )
}

export default Home