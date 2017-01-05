import React from 'react'

const Idea = ({title, body, id, destroy, selectActive}) => {
  return(
    <div className='Idea'>
      <h3>{title}</h3>
      <p>{body}</p>
      <button onClick={ () => destroy(id) } >Destroy</button>
      <button onClick={ () => selectActive(id)  }>Active</button>
    </div>
  )
}

export default Idea
