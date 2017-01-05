import React from 'react';
import CreateIdeaForm from './components/CreateIdeaForm'
import IdeaList from './IdeaList'

class App extends React.Component {
  constructor(){
    super()
    this.state = { ideas: [] }
  }

  componentDidMount(){
    const ideas = JSON.parse(localStorage.getItem('ideas'))

    this.setState({ ideas: ideas || [] } )
  }

  storeIdea(idea){
    this.state.ideas.push( idea )

    let ideas = this.state.ideas

    this.setState({ ideas: ideas },  () => this.lstore(ideas))
  }

  lstore(ideas){
    localStorage.setItem('ideas', JSON.stringify(ideas))
  }

  destroyIdea(id){
    let ideas = this.state.ideas.filter( idea => idea.id !== id )
    this.setState({ideas: ideas}, () => this.lstore(ideas))
  }

  updateIdea(id){
    console.log("Updating idea " + id)
  }

  selectActive(id){
    let ideas = this.state.ideas.map( idea => {
      return Object.assign(idea, {active: id === idea.id ? !idea.active : false})
    })

    this.setState({ideas: ideas}, () => this.lStore(ideas))
  }


  render() {
    return (
      <div>
        <CreateIdeaForm saveIdea={ this.storeIdea.bind(this) }  />

        <IdeaList ideas={ this.state.ideas }
                  destroy={ this.destroyIdea.bind(this) }
                  selectActive={ this.selectActive.bind(this) } />

      </div>
    );
  }
}

export default App;
