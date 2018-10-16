import React from 'react';
import ArmorCard from './ArmorCard.jsx';


const Content = (props) => {
  // console.log(props)

  const mappedArmors = props.armors.map(armor => {
    return <ArmorCard key={armor.id} armor={armor} />
  })


  return(
    <div className="container">
      {mappedArmors}
    </div>

  )
}

export default Content;
