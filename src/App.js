import React, { Component } from 'react'
import PostData from './data'
import Header from './components/Header/Header'
import PostLists from './components/PostLists/PostLists'
import Search from './components/Search/Search'
import SearchResults from './components/Search/SearchResults'
import { compareTwoStrings } from 'string-similarity'
import Modal from './components/Modal/Modal'

import AppProvider from './contexts'

class App extends Component {

  state = {
    posts: [],
    searching: false,
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

  handleSearching(keyword) {
    const filters = keyword !== ''
      ? PostData.filter( post => {
        const titleScore = compareTwoStrings(post.title, keyword)
        const snippetScore = compareTwoStrings(post.snippet, keyword)
        return titleScore >= 0.3 || snippetScore >= 0.2
      })
      : PostData
    this.setState({
      posts: filters,
      loading: true,
      searching: keyword,
    }, () => {
      this.setState({
        loading: false,
      })
    })
  }

  render() {
    const { posts, searching, loading } = this.state
    return (
      <AppProvider>
        <div className="App">
          
          <Header />
          <Search 
            sorting={this.handleSorting.bind(this)}
            searching={this.handleSearching.bind(this)} />
          { searching && <SearchResults total={posts.length} /> }
          {
            loading 
              ? <div>Please wait</div>
              : <PostLists posts={posts} />
          }
          <Modal />
        </div>
      </AppProvider>
    )
  }
}

export default App