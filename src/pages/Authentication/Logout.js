import PropTypes from 'prop-types'
import React, { useEffect } from "react"
import { connect, useDispatch } from "react-redux"
import { withRouter, useHistory } from "react-router-dom"

import { logoutUser } from "../../store/actions"

const Logout = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  useEffect(() => {
    dispatch(logoutUser(history))
  })

  return <></>
}



export default withRouter(connect(null, null)(Logout))
