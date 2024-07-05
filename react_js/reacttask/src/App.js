import { useState } from 'react'

const users = [
  { firstName: "Banana", id: 1 },
  { firstName: "Apple", id: 2 },
  { firstName: "Orange", id: 3 },
  { firstName: "Mango", id: 4 },
  { firstName: "Pineapple", id: 5 },
  { firstName: "Watermelon", id: 6 },
]

function App() {
  const [searchItem, setSearchItem] = useState('')
  const [filteredUsers, setFilteredUsers] = useState(users)

  const handleInputChange = (e) => { 
    const searchTerm = e.target.value;
    setSearchItem(searchTerm)

    const filteredItems = users.filter((user) =>
    user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredUsers(filteredItems);
  }

  return (
    <>
    <label>Search : </label>
      <input
        type="text"
        value={searchItem}
        onChange={handleInputChange}
        placeholder='Type to search'
      />
      <ul>
      {filteredUsers.map(user => <li key={user.id}>{user.firstName}</li>)}
      </ul>
    </>
  )
}

export default App