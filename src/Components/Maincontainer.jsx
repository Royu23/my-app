import React from 'react'
import ButtonList from './Buttonlist'
import VideoContainer from './Videocontainer'

const MainContainer = () => {
  return (
    <div className='col-span-10'>
        <ButtonList />
        <VideoContainer />
    </div>
  )
}

export default MainContainer