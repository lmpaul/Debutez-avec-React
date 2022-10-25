import CareScale from "./CareScale.js";

function PlantItem (props) {
  const { name, cover, id, light, water } = props;

  return (
    <li key={id} className='lmj-plant-item'>
      <img src={cover} className='lmj-plant-item-cover' alt={`${name} cover`}/>
      {name}
      <CareScale careType='water' scaleValue={water} />
      <CareScale careType='light' scaleValue={light} />
		</li>
  )
}

export default PlantItem;
