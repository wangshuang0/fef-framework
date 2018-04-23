
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Users from '../components/pages/Users'
// import { bindActionCreators } from 'redux'

class UsersContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    // console.log(this.props.Users)
    return <Users {...this.props} />
  }
}

export default connect(
  state => ({
    Users: state.Users
  })
)(UsersContainer)

