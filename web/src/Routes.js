// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import MainLayout from './layouts/MainLayout/MainLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/nu-vibe" page={NewUserPage} name="newUser" />
      <Set wrap={MainLayout}>
        <Route path="/yr-vibe" page={InputPrefsPage} name="inputPrefs" />
        <Route path="/vibe-check" page={DisclaimerPage} name="disclaimer" />
        <Route path="/home" page={HomePage} name="home" />
        <Route path="/" page={LandingPage} name="landing" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
