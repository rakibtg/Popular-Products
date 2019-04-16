import React, { Component } from 'react'
import { Pane, Button, Text, Heading } from 'evergreen-ui'
import './PostThumbnail.css'

class PostThumbnail extends Component {

  state = {
    post: null
  }

  componentDidMount() {
    const { post } = this.props
    this.setState({ post })
  }

  render() {
    const { post } = this.state
    if( post !== null ) {
      return (
        <Pane 
          display="flex" 
          padding={16}
          justifyContent="center" 
          borderRadius={0}
          borderBottom="muted"
          borderLeft="muted"
          borderRight="muted">
          <Pane className="app-header" display="flex" flexGrow={1}>
            <Pane marginRight={20}>
              <img className="product-image" src={post.thumbnail} alt={post.title} />
            </Pane>
            <Pane flex={1} display="flex" flexDirection="column" justifyContent="center">
              <Heading size={600}>{post.title}</Heading>
              <Text>{post.snippet}</Text>
            </Pane>
            <Pane alignItems="center" display="flex">
              <Button marginRight={12} iconBefore="symbol-triangle-up" appearance="minimal">{post.votes_count}</Button>
              <Button marginRight={12} iconBefore="comment" appearance="minimal" intent="warning">{post.comments_count}</Button>
            </Pane>
          </Pane>
        </Pane>
      )
    } else {
      return <div></div>
    }
  }
}

export default PostThumbnail