import React, { Component } from 'react'
import Title from '../components/Title'
import Description from '../components/Description'
import Image from '../components/Image'

class SimpleCard extends Component {
  render() {
    return (
      <div className='container'>
        <Title/>
        <Description/>
        <Image/>

      </div>
    )
  }
}

export default SimpleCard
