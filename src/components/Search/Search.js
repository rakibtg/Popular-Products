import React, { Component } from 'react'
import './Search.css'
import { Pane, Button, Text, SearchInput } from 'evergreen-ui'

class Search extends Component {

  state = {
    voteAsc: false,
    commentsAsc: true,
    active: 'votes',
  }

  handleSorting(type) {
    const { sorting } = this.props
    if( type === 'votes' ) {
      this.setState({
        active: 'votes',
        voteAsc: !this.state.voteAsc
      }, () => {
        sorting(type, this.state.voteAsc)
      })
    } else {
      this.setState({
        active: 'comments',
        commentsAsc: !this.state.commentsAsc
      }, () => {
        sorting(type, this.state.commentsAsc)
      })
    }
  }

  render() {
    const { voteAsc, commentsAsc, active } = this.state
    return <Pane 
      display="flex" 
      padding={16} 
      justifyContent="center" 
      borderRadius={3}
      borderBottom="muted">
      <Pane className="app-header" display="flex" flexGrow={1}>
        <Pane flex={1} alignItems="center" display="flex">
          <SearchInput placeholder="Search products..." height={45} width="100%" />
        </Pane>
        <Pane marginLeft={25}>
          <Pane marginBottom={2} marginTop={-2}>
            <Text size={300}>Sort products by</Text>
          </Pane>
          <Button 
            height={22} 
            width={110} 
            isActive={active === 'votes'}
            iconBefore={voteAsc ? "arrow-down" : "arrow-up"}
            onClick={() => this.handleSorting('votes')}>
            Vote
          </Button>
          <Button 
            height={22} 
            width={110} 
            marginLeft={20}
            isActive={active === 'comments'}
            iconBefore={commentsAsc ? "arrow-down" : "arrow-up"}
            onClick={() => this.handleSorting('comments')}>
            Comments
          </Button>
        </Pane>
      </Pane>
    </Pane>
  }
}

export default Search