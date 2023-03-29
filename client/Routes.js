import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import { Login, Signup } from './components/AuthForm';
import Home from './components/Home';
import FetchSongs from './components/FetchSongs';
import PlayListCreator from './components/PlaylistCreator'
import SearchList from './components/SearchList';
import CreatePlaylist from './components/CreatePlaylist';
import Playlists from './components/Playlists';
import PlaylistDetail from './components/PlaylistDetail';
import PlaylistComparison from './components/PlaylistComparison';
import {me} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route  exact path="/home" component={Home} />
            <Route  exact path="/songs" component={FetchSongs} />
            <Route  exact path="/playlist" component={PlayListCreator} />
            <Route  exact path="/search" component={SearchList} />
            <Route  exact path="/compare" component={PlaylistComparison} />
            <Route  exact path="/playlists" component={Playlists} />
            <Route  exact path="/playlists/:playlistId" component={PlaylistDetail} />
            <Route  exact path="/create" component={CreatePlaylist} />
            <Redirect to="/home" />
          </Switch>
        ) : (
          <Switch>
            <Route path='/' exact component={ Login } />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        )}
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))
