import React, { Component } from 'react'
import PostThumbnail from '../PostThumbnail/PostThumbnail'
import './PostLists.css'
import { Pane } from 'evergreen-ui'

class PostLists extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    const { posts } = this.props
    this.setState({ posts })
  }

  render() {
    const { posts } = this.state
    return (
      <Pane className="post-container">
        {
          posts.map( (post, index) => <Pane key={index}>
            <PostThumbnail post={post}/>
          </Pane>)
        }
      </Pane>
    )
  }
}

export default PostLists