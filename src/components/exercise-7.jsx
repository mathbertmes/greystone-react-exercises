import { useState } from "react"

const Exercise7 = () => {
  const [weather, setWeather] = useState("Sunny")

  const handleSelectWeather = (e) => {

    setWeather(e.target.value)
  }

  return(
    <div>
      <p>Choose the current weather:</p>
      <select onChange={(e) => handleSelectWeather(e)} value={weather} name="wheater" id="">
        <option value="Sunny">Sunny</option>
        <option value="Raining">Raining</option>
        <option value="Snowing">Snowing</option>
      </select>
      <h2>it's {weather} outside!</h2>
    </div>
  )
}

export default Exercise7