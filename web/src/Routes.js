// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Private, Router, Route, Set } from '@redwoodjs/router'

import MainLayout from './layouts/MainLayout/MainLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={MainLayout}>
        <Route path="/existing-vibe" page={LoginPage} name="login" />
        <Route path="/new-vibe" page={SignupPage} name="signup" />
        <Route path="/forgot-vibe" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-vibe" page={ResetPasswordPage} name="resetPassword" />
        <Private unauthenticated="landing">
          <Route path="/yr-vibe" page={CreateVibePage} name="createVibe" />
        </Private>
        <Route path="/vibe-check" page={DisclaimerPage} name="disclaimer" />
        <Route path="/" page={LandingPage} name="landing" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
