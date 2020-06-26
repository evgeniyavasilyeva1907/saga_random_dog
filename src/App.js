import React from 'react';
import './App.css';
import { connect } from 'react-redux';

function App({ getURL, url }) {
  const getInfo = () => {
    getURL();
    console.log(url)

  }

  return (
    <div>
      <button onClick={getInfo.bind(this)}>Dog Show</button>
      <img src={url}></img>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    url: state.url
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getURL: () => dispatch({ type: 'FETCHED_DOG' })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
