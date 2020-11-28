import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function CardsList() {


	const [ cardsData ] = useState({
	"fetch_lands": [
		{"name": "Flooded Strand", "set": "ktk", "multiverse_id": 386537},
		{"name": "Polluted Delta", "set": "ktk", "multiverse_id": 386627},
		{"name": "Bloodstained Mire", "set": "ktk", "multiverse_id": 386495},
		{"name": "Wooded Foothills", "set": "ktk", "multiverse_id": 386729},
		{"name": "Windswept Heath", "set": "ktk", "multiverse_id": 386725},
		{"name": "Marsh Flats", "set": "mm3", "multiverse_id": 426064},
		{"name": "Scalding Tarn", "set": "mm3", "multiverse_id": 426069},
		{"name": "Verdant Catacombs", "set": "mm3", "multiverse_id": 426074},
		{"name": "Arid Mesa", "set": "mm3", "multiverse_id": 426054},
		{"name": "Misty Rainforest", "set": "mm3", "multiverse_id": 426065}
	]
})
const [ fetchedCardsData, setFetchedCards ] = useState({name: "loading..."})

	useEffect(() => {
		const fetchCards = async () => {
			const result = await axios(
				{ baseURL: 'https://api.scryfall.com/cards/multiverse/386537' }
			)
			console.log(result.data)
			setFetchedCards(result.data)
		}
		fetchCards()
		// console.log(fetchedCardsData)
	}, [])

	const cardsList = cardsData.fetch_lands.map(card => <li key={card.multiverse_id}>{card.name}</li>)

	return (
		<div className="CardsList">
			<h1>{fetchedCardsData.name}</h1>
			<ul>
				{ cardsList }
			</ul>
		</div>
	)
}