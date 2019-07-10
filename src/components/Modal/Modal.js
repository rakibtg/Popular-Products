import React from "react";
import ReactDOM from "react-dom";
import { Pane, Heading, Button, Dialog, TextInput } from 'evergreen-ui';

import { AppContext } from '../../contexts'

export default class Modal extends React.Component {

  state = {
    username: '',
    password: '',
  }

  render() {
    return <AppContext.Consumer>
      { context => {
        const { showModal } = context.state
        const { handleModal, handleLoggedIn } = context
        return showModal 
          ? ReactDOM.createPortal(
            <div>
              <Dialog
                isShown={showModal}
                title="Login"
                onCloseComplete={handleModal}
                hasFooter={false}
              >
                <TextInput
                  onChange={e => this.setState({ username: e.target.value })}
                  value={this.state.username}
                  placeholder="Username"
                  marginBottom={15}
                />
                <TextInput
                  onChange={e => this.setState({ password: e.target.value })}
                  value={this.state.password}
                  placeholder="Password"
                  marginBottom={15}
                  type="password"
                />
                <Pane>
                  <Button onClick={() => {
                    handleModal()
                    handleLoggedIn(this.state.username)
                  }} appearance="primary">
                    Login
                  </Button>
                </Pane>
              </Dialog>
              {this.props.children}
            </div>,
            document.body
          )
          : null;
      }}
    </AppContext.Consumer>
  }
}