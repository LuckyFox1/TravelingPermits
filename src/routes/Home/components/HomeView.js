import React from 'react'
import './HomeView.scss'

class HomeView extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    console.log(this.props)

    const { test } = this.props

    return (
      <div className='home'>
        <h1 className='title'>Traveling Permits</h1>
        <button onClick={test}>Click</button>
      </div>
    )
  }
}

HomeView.propTypes = {

}
export default HomeView
