import React, { Component } from 'react'
import './Search.css'
import { Pane, SegmentedControl, Text, SearchInput } from 'evergreen-ui'

class Search extends Component {

  state = {
    options: [
      { label: 'Votes', value: 'hourly' },
      { label: 'Comments', value: 'daily' }
    ],
    value: 'hourly',
  }

  render() {
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
          <SegmentedControl
            width={240}
            height={20}
            options={this.state.options}
            value={this.state.value}
            onChange={value => this.setState({ value })}
          />
        </Pane>
      </Pane>
    </Pane>
  }
}

export default Search