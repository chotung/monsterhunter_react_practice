import React from 'react';



const Header = (props) => {
  // console.log(props.leLogo);
  return (
    <div className="App-header">
      <img src={props.leLogo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to testing</h1>
    </div>

  )
}


export default Header;
