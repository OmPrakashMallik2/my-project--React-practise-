import React from 'react'
import PropTypes from 'prop-types'

function UserGreeting(props) {

    const loggedIn = <h1 className='bg-green-500 p-5 text-white'>Welcome {props.username}</h1>
    const loggedout = <h1 className='bg-red-500 p-5 text-white'>Please login to continue</h1>

    return (props.isLoggedIn ? loggedIn : loggedout);
}

UserGreeting.propTypes = {
    username: PropTypes.string,
    isLoggedIn: PropTypes.bool,
}

UserGreeting.defaultProps = {
    username: "Username",
    isLoggedIn: false,
}

export default UserGreeting
