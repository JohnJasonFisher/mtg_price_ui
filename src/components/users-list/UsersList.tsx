import React, { useState } from 'react'

export default function UsersList() {

	const [ usersData ] = useState(['john', 'paul', 'max'])

	// useEffect(() => {
	// 	const fetchUsers = async () => {
	// 		const result = await axios(
	// 			{ baseURL: 'http://localhost:8000/users' }
	// 		)
	// 		setUsers(result.data)
	// 	}
	// 	fetchUsers()
	// }, [])

	const usersList = usersData.map(user => <li key={user}>{user}</li>)

	return (
		<div className="UsersList">
			<ul>
				{ usersList }
			</ul>
		</div>
	)
}