

export const Exercise6 = () => {
  const user = {
    name: "Jane Doe",
    job: "Designer",
    age: 14
  }
  return(
    <div>
      <h1>{user.name}</h1>
      <p>{user.job}</p>
      {user.age >= 18 ? (
        <p>
          {user.age}
        </p>
      ): (
        <p>
          Sorry, you are too young to view this information
        </p>
      )}
    </div>
  )
}

export default Exercise6