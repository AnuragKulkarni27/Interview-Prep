import React from 'react'

const ListItem = ({rank,username,taken,score}) => {
  return (
    <div>{rank}-{username}-{score}-{taken}</div>
  )
}

export default ListItem