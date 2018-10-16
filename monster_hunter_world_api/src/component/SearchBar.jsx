import React from 'react';


const SearchBar = ( props ) => {
  // console.log(props);
  return (
    <div>
      <div>
        <div>
          <form onSubmit={props.handleClick} >
            <div className="ui input">
              <input onChange={props.handleChange} value={props.searchTerm} className="ui input" type="text"/>
            </div>
            <input type="submit" className="ui red button" value="Search"></input>
          </form>
        </div>
      </div>
    </div>

  )
}


export default SearchBar;
