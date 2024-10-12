import {useContext} from "react"
import UserContext from "../user.context";



const Exercise11 = () => {
  const data = useContext(UserContext);
  return(
    <div>
      <h1>USER DATA</h1>
      <h2>Name: {data.name}</h2>
      <h2>Email: {data.email}</h2>
      <h2>Age: {data.age}</h2>

    </div>
  )
}

export default Exercise11