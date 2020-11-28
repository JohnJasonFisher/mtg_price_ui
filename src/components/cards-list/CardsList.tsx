import React, { useState, useEffect } from 'react'

export default function CardsList() {


	const [ cardsData ] = useState({
	"fetch_lands": [
		{"name": "Flooded Strand", "set": "ktk", "multiverse_id": 386537}, // https://api.scryfall.com/cards/multiverse/386537
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

	// useEffect(() => {
	// 	const fetchUsers = async () => {
	// 		const result = await axios(
	// 			{ baseURL: 'http://localhost:8000/users' }
	// 		)
	// 		setUsers(result.data)
	// 	}
	// 	fetchUsers()
	// }, [])

	const cardsList = cardsData.fetch_lands.map(card => <li key={card.multiverse_id}>{card.name}</li>)

	return (
		<div className="CardsList">
			<ul>
				{ cardsList }
			</ul>
		</div>
	)
}