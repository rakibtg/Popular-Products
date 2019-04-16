import React, { Component } from 'react'
import PostData from './data'
import Header from './components/Header/Header'
import PostLists from './components/PostLists/PostLists'
import Search from './components/Search/Search'

class App extends Component {

  state = {
    posts: [],
    loading: true,
  }

  componentDidMount() {
    document.title = 'Popular Products'
    this.setState({
      posts: PostData.sort((a, b) => b.votes_count - a.votes_count)
    }, () => {
      this.setState({
        loading: false,
      })
    })
    console.log(PostData)
  }

  handleSorting(type, sort) {
    const { posts } = this.state
    const sortKey = type === 'votes'
      ? 'votes_count'
      : 'comments_count'
    const sorted = posts.sort(
      (a, b) => sort 
        ? a[sortKey] - b[sortKey]
        : b[sortKey] - a[sortKey]
    )
    this.setState({
      posts: sorted,
      loading: true,
    }, () => {
      this.setState({
        loading: false,
      })
    })
  }

  render() {
    const { posts, loading } = this.state
    return (
      <div className="App">
        
        <Header />
        <Search 
          sorting={ this.handleSorting.bind(this) }/>
        
        {
          loading 
            ? <div>Please wait</div>
            : <PostLists posts={posts} />
        }
        
      </div>
    )
  }
}

export default App