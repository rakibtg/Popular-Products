import React from 'react'

export const AppContext = React.createContext()

export default class AppProvider extends React.Component {
  state = {
    showModal: false,
  }
  handleModal () {
    console.log('inside handle modal')
    this.setState({ showModal: !this.state.showModal })
  }
  render () {
    const { children } = this.props
    return <AppContext.Provider value={{
      state: this.state,
      handleModal: () => this.handleModal()
    }}>
      { children }
    </AppContext.Provider>
  }
}