import React from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import Login from '@/views/login'
import Dashboard from '@/views/dashboard'
import Form from '@/views/examples/form'

const constantRouter = () => (
  <HashRouter>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard}>
        {/* <Dashboard></Dashboard> */}
      </Route>

      <Redirect from="/" to="/login" />
    </Switch>
  </HashRouter>
)

export default constantRouter
