import React from 'react'
import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'
import cover from '../assets/monstera.jpg'


function ShoppingList() {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map((plant) => (
            <PlantItem name={plant.name} cover={cover} id={plant.id} light={plant.light} water={plant.water} />
				))}
			</ul>
		</div>
	)
}

export default ShoppingList
