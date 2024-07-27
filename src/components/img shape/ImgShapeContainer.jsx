import React from 'react'
import "./imgshape.css"


function ImgShapeContainer({path}) {
  return (
    <div className="shape"><img src={path}/></div>
  )
}

export default ImgShapeContainer