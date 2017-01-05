import React from 'react'

const ActiveIdea = ({idea, updateIdea}) => {

// if there is an active idea - render title and body input
  if(!idea) {
    return <p className='ActivateIdeaStatement'>Please Select an Idea</p>
  }


  return (
    <div>
      <input className='ActiveIdea-title'
             name='title'
             value={ idea.title }
             onChange={ (event) => updateIdea(event, idea.id) }
      />
      <textarea className='ActiveIdea-body'
                name='body'
                value={idea.body}
                onChange={ (event) => updateIdea(event, idea.id) }
      />
    </div>
  )
}


export default ActiveIdea
