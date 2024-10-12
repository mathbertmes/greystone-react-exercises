


const Exercise8 = () => {
  const users = [
    { name: 'John Doe', age: 35}, { name: 'alex', age: 40}
  ]

  return(
    <div>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <p>
              {user.name} - {user.age}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Exercise8