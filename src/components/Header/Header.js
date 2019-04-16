import React, { Component } from 'react'
import './Header.css'
import { Pane, Button, Text, Heading } from 'evergreen-ui'

class Header extends Component {
  
  render() {
    return <Pane 
      display="flex" 
      padding={16} 
      background="tint1" 
      justifyContent="center" 
      borderRadius={3}
      borderBottom="muted">
      <Pane className="app-header" display="flex" flexGrow={1}>
        <Pane flex={1} alignItems="center" display="flex">
          <Heading size={600}>Popular Products</Heading>
        </Pane>
      </Pane>
    </Pane>
  }
}

export default Header