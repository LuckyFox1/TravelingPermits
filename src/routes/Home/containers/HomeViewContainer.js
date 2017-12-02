import { connect } from 'react-redux'
import { test } from '../modules/homeView'

import HomeView from '../components/HomeView'

const mapDispatchToProps = {
  test
}

const mapStateToProps = (state) => ({
  homeView: state.homeView
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
