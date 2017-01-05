import React from 'react'
import Idea from './Idea'

const IdeaList = ({ideas, destroy, update, selectActive}) => {
  return(
    <div className='IdeaList'>
      { ideas.map( idea => <Idea { ...idea }
                            key={idea.id}
                            destroy={ destroy }
                            selectActive={ selectActive }/> ) }
    </div>
  )
}


export default IdeaList
