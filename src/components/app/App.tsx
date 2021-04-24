import React from 'react'
import UsersList from '../users-list/UsersList'
import CardsList from '../cards-list/CardsList'
import packageJson from '../../../package.json';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        Welcome to the MTG Price UI!
      </header>
      <UsersList></UsersList>
      <CardsList></CardsList>
      <footer>version {packageJson.version}</footer>
    </div>
  )
}