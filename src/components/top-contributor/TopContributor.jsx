import React from 'react'
import "./topcontributor.css"
import Contributor from '../Contributor/Contributor'

function TopContributor() {
  return (
    <div className='top--weekly'>
        <h1>أكثر الموظفين إسهامًا هذا الأسبوع</h1>
        <div className="df contributors--container">
            <Contributor />
            <Contributor />
            <Contributor />
        </div>
    </div>
  )
}

export default TopContributor