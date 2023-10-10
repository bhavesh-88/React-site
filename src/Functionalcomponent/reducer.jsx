import React, { memo } from 'react'

const Reducer = (props) => {
  return (
    <div>
      <h1>Reducer</h1>
      <h3>{props.state}</h3>
    </div>
  )
}

export default memo(Reducer)
