import React from 'react';


const ArmorCard = (props) => {
  // console.log(props.armor)
  const skills = props.armor.skills.map(skill => {
    return (
      <div>
        <br></br>
        <h4> Skill Name: {skill.skillName} </h4>
        <small>{skill.description}</small>
      </div>
    )
  })


  const craft = props.armor.crafting.materials.map(material => {
    return (
      <div>
        <ul>
          <li>{material.quantity} {material.item.name} </li>
        </ul>
      </div>
    )
  })

  const defense = <div> Base: {props.armor.defense.base}  Max: {props.armor.defense.max} Augmented: {props.armor.defense.augmented}</div>

  const resistances = <small>Fire: {props.armor.resistances.fire} Water: {props.armor.resistances.water} Ice: {props.armor.resistances.ice} Thunder: {props.armor.resistances.thunder} Dragon: {props.armor.resistances.dragon}</small>

  return (
    <div className="Armor-Card">
      <h3> Name: {props.armor.name}</h3>
      <img src={props.armor.assets.imageMale} alt={`${props.armor.name}`}/>
      <img src={props.armor.assets.imageFemale} alt={`${props.armor.name}`}/>
      {defense}
      {resistances}
      {skills}
      <br></br>
      Materials
      {craft}
    </div>
  )
}


export default ArmorCard;



//pass down the whole object
//choose which things you want to display
// and
