import React from 'react'

export const AppContext = React.createContext()

export default class AppProvider extends React.Component {
  state = {
    showModal: false,
    isLoggedIn: false,
    user: '',
  }
  handleModal () {
    this.setState({ showModal: !this.state.showModal })
  }
  handleLoggedIn (user) {
    console.log('handleLoggedIn', user)
    this.setState({ 
      user,
      isLoggedIn: !this.state.isLoggedIn,
    })
  }
  render () {
    const { children } = this.props
    return <AppContext.Provider value={{
      state: this.state,
      handleModal: () => this.handleModal(),
      handleLoggedIn: (user) => this.handleLoggedIn(user),
    }}>
      { children }
    </AppContext.Provider>
  }
}