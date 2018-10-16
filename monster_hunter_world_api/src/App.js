import React, { Component } from 'react';
import logo from './MHW_logo.png';
import './App.css';
import Header from './component/Header.jsx'
// import NavBar from './component/NavBar.jsx'
import Content from './component/Content.jsx'
import SearchBar from './component/SearchBar.jsx'



class App extends Component {

  state = {
      armors: [], //6000 or so armors
      weapons:[],
      term: '',
      filterBy: 'name'
    }

componentDidMount() {
  this.getArmors()

}

getArmors(){
   fetch("https://mhw-db.com/armor")
    .then(res => res.json())
    .then(armors => {
      this.setState({armors:armors})
  })
}

getWeapons(){
  fetch('https://mhw-db.com/weapons')
    .then(res => res.json())
    .then(weapons => {
      this.setState({weapons:weapons})
    })
}



handleChange = (e) => {
    // setState of term
    this.setState({
      term: e.target.value
    })
  }

handleClick = (e) => {
  e.preventDefault()
  // on click
  // rather than a new fetch
  // use existing state data
  // filter the armors by a specific attribute (like name)
  //  set new armors state ?


  // alternatively get rid of submit button altogether
  // as a user types in the search our list automatically filters
}

// filterArmors function that takes state and filters it by the searchTerm  returns new filtered array of armors
filterArmors = () => {
  // if (this.state.term === '') {
  //   return this.state.armors.slice(69,88)
  // }
  // else{
    return this.state.armors.filter(armor => {
      return armor[this.state.filterBy].toLowerCase().includes(this.state.term.toLowerCase())
    }).slice(0,20)
  // }
}

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Header leLogo = {logo}/>
        <p className="App-intro"></p>
        <SearchBar handleClick={this.handleClick} handleChange={this.handleChange} searchTerm={this.state.term}/>

        <Content armors={this.filterArmors()}/>

      </div>
    );
  }
}

export default App;
// can't implement a real search bar at the moment
// current knowledge is not enough unless I changed all the input to match the slug/ids

// .slice(0,30)
























// let allArmor = armors.map(armor => {
// console.log(armor)
//     return (
//     <div>
//     <Content key={armor.id} armorName={armor.name} />
//     </div>
//   )
// })
// this.setState({armors:allArmor})
// console.log("state", this.state.armors);
// console.log(armor)
// console.log(armor.name)
// console.log(armor.rarity)
// console.log(armor.slots)
// console.log(armor.skills)
// console.log(armor.defense)
// console.log(armor.resistances)




// how do i do a fetch
// how do i create component
// how do i add listeners
// How do i pass props and state around
// go over preState
// excute a call back instead of passing a reference
