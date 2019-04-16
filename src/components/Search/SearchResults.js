import React, { Component } from 'react'
import { Pane, Icon, Heading } from 'evergreen-ui'

class SearchResults extends Component {

  state = {
    total: 0
  }

  render() {
    const { total } = this.props
    return <Pane 
      display="flex" 
      padding={16}
      justifyContent="center" 
      alignItems="center"
      borderRadius={0}
      borderBottom="muted"
      borderLeft="muted"
      borderRight="muted">
      {
        total > 0
          ? <><Icon icon="search" color="success" marginRight={16} /> <Heading size={500}>{ total } result{total > 1 && 's'} found</Heading></>
          : <><Icon icon="search" color="danger" marginRight={16} /> <Heading size={500}>No search result found</Heading></>
      }
    </Pane>
  }
}

export default SearchResults