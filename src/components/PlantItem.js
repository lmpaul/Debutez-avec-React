import CareScale from './CareScale'
import PlantModal from './PlantModal'
import '../styles/PlantItem.css'
import { useState } from 'react'

function PlantItem({ cover, name, water, light, price, addToCart }) {

  const [modal, updateModal] = useState(false);

	return (
    <>
		<li className='lmj-plant-item'>
			<span className='lmj-plant-item-price'>{price}€</span>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
      <button className='my-1 btn btn-primary' onClick={() => addToCart(name, price)}>Ajouter</button>
      <button className="my-1 btn btn-secondary" onClick={() => updateModal(true)}>Plus d'infos</button>
		</li>
    {modal && <PlantModal updateModal={updateModal} name={name} />}
    </>
	)
}

export default PlantItem
