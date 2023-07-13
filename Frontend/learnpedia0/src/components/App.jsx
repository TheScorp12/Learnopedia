import { Outlet } from 'react-router-dom';
import '../css/App.css';
import Nav from './Nav';
import { connect } from 'react-redux'
import { signIn } from '../action/learnpedia'
import { useEffect } from 'react';

function App({signIn}) {
  useEffect(() => {
    const token = localStorage.getItem('jwt')
    if (token) {
      const user = JSON.parse(localStorage.getItem('user'))
      signIn({user, token})
    }
  }, [])

  return (
    <div className="App body">
        <header className="App-header">
          <Nav></Nav>
        </header>
        <Outlet />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    userDetails: state.userDetails
  }
}

const mapDispatchToProps = dispatch => ({
  signIn: (userDetails) => {
    dispatch(signIn(userDetails))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App;
