import React from "react";
import ReactDOM from "react-dom";
import { Pane, Heading, Button, Dialog } from 'evergreen-ui';

import { AppContext } from '../../contexts'

export default class Modal extends React.Component {
  render() {
    return <AppContext.Consumer>
      { context => {
        const { showModal } = context.state
        const { handleModal } = context
        return showModal 
          ? ReactDOM.createPortal(
            <div>
              <Dialog
                isShown={showModal}
                title="Dialog title"
                onCloseComplete={handleModal}
                confirmLabel="Custom Label"
              >
                Dialog content
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