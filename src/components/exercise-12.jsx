import { useState } from "react";


const Exercise12 = ({handleEditUser}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState(0)

  const handleChangeName = (name) => {
    setName(name)
  }

  const handleChangeEmail = (email) => {
    setEmail(email)
  }

  const handleChangeAge = (age) => {
    setAge(age)
  }

  const handleSubmit = () => {
    const newUserData = {
      name: name,
      email: email,
      age: age
    }

    handleEditUser(newUserData)
  }
  return(
    <div>
      <input type="text" value={name} onChange={(e) => handleChangeName(e.target.value)}/>
      <input type="email" value={email} onChange={(e) =>handleChangeEmail(e.target.value)}/>
      <input type="number" value={age} onChange={(e) =>handleChangeAge(e.target.value)}/>

      <button onClick={handleSubmit}>Edit</button>
    </div>
  )
}

export default Exercise12;