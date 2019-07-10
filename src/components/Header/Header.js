import React, { Component } from 'react'
import './Header.css'
import { Pane, Heading, Button } from 'evergreen-ui'

import { AppContext } from '../../contexts'

class Header extends Component {
  
  render() {
    return <AppContext.Consumer>
      { context => {
        const { handleModal } = context
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
            <Button onClick={handleModal} appearance="primary">
              Login
            </Button>
          </Pane>
        </Pane>
      }}
    </AppContext.Consumer>
  }
}

export default Header