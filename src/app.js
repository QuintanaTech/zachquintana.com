import "./assets/css/app.scss";

import React from 'react'
import createAppStore from './store'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import Main from './components/main'
import Navigation from './components/navigation'
import { Route } from 'react-router'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import ContactPanel from './components/panels/contact_panel'
import SocialPanel from './components/panels/social_panel'
import TwitterPanel from './components/panels/twitter_panel'

const history = createHistory({
    basename: '/#'
})
const store   = createAppStore(history)

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Navigation history={history}/>
                <div className={"container-fluid"}>
                    <Main>
                        <Route exact path="/" component={ContactPanel}/>
                        <Route path="/social" component={SocialPanel}/>
                        <Route path="/twitter" component={TwitterPanel}/>
                    </Main>
                </div>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)
