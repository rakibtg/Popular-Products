import React, { Component } from 'react'
import PostData from './data'
import Header from './components/Header/Header'
import PostLists from './components/PostLists/PostLists'
import Search from './components/Search/Search'

class App extends Component {

  componentDidMount() {
    document.title = 'Popular Products'
  }

  render() {
    return (
      <div className="App">
        
        <Header />
        <Search />
        <PostLists posts={PostData} />
        
      </div>
    )
  }
}

export default App