import React from 'react'
import PropTypes from 'prop-types'

function Student(props) {
  return (
    <div className='text-xl font-bold p-5 border-solid border-2 border-blue-500 m-5 rounded bg-purple-100'>
      <h1>Name: {props.name}</h1>
      <h1>Age: {props.age}</h1>
      <h1>Student: {props.isStudent ? "True" : "False"}</h1>
    </div>
  )
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool
}

Student.defaultProps = {
  name: "Unknown",
  age: 25,
  isStudent: false
}

export default Student
