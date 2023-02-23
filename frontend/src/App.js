import React from 'react'
import LandingPage from './components/LandingPage'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import PublicRoutes from './routes/PublicRoutes'
import Greetings from './components/Greetings'
import Introduction from './components/Introduction'
import Background from './components/Background'
import Works from './components/Works'
import Example from './components/Example'
import Practice from './components/Practice'
import Quiz from './components/Quiz'
import Closing from './components/Closing'

function App() {
    return (
        <div>
            {/* <LandingPage /> */}

            <Router>
                <Switch>
                    <Route path={'/'} exact={true} component={LandingPage}></Route>
                    <Route path={'/members'} exact={true} component={Greetings}></Route>
                    <Route path={'/introduction'} exact={true} component={Introduction}></Route>
                    <Route path={'/background'} exact={true} component={Background}></Route>
                    <Route path={'/works'} exact={true} component={Works}></Route>
                    <Route path={'/example'} exact={true} component={Example}></Route>
                    <Route path={'/practice'} exact={true} component={Practice}></Route>
                    <Route path={'/quiz'} exact={true} component={Quiz}></Route>
                    <Route path={'/closing'} exact={true} component={Closing}></Route>

                    <Redirect from={'/'} to={'/'} />
                </Switch>
            </Router>
        </div>
    )
}

export default App