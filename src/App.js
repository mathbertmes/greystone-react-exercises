import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import PassengerTicket from './components/passenger-ticket';
import Counter from './components/counter';
import Exercise6 from './components/exercise-6';
import Exercise7 from './components/exercise-7';
import Exercise8 from './components/exercise-8';
import Exercise9 from './components/exercise-9';
import Exercise10 from './components/exercise-10';
import Exercise11 from './components/exercise-11';
import UserContext from './user.context';
import Exercise12 from './components/exercise-12';
import Exercise13 from './components/exercise-13';

function App() {
  const [number, setNumber] = useState(0)
  const [userData, setUserData] = useState(
    {name: "John Doe",
    email: "john@example.com",
    age: 25}
  )

  const handleUserDataChange = (user) => {
    setUserData({
      name: user.name,
      email: user.email,
      age: user.age
    })
  }

  const numberRange = () => {
    if(number < 50){
      alert("under 50")
    }else if(number >= 50 && number <= 100){
      alert("50 - 100")
    }else{
      alert("over 100")
    }
  }
  return (
    <div>
      <UserContext.Provider value={userData}>
      {/* <input value={number} onChange={e => setNumber(e.target.value)}/>
      <button onClick={numberRange}>verify number</button>
      <PassengerTicket name={"number"} destination={"Brasil"} gender={"male"} seat={"01"}/>
      <Counter initNum={9999}/> */}
        <Exercise6 />
        <Exercise7 />
        <Exercise8 />
        <Exercise9 />
        <Exercise10 />
        <Exercise11 />
        <Exercise12 handleEditUser={handleUserDataChange}/>
        <Exercise13 />
      </UserContext.Provider>
    </div>
  );
}

export default App;
