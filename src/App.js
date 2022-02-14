
import { useState } from 'react';
import './App.css';

import AddUsers from './components/AgeProject/Users/AddUsers';
import UsersList from './components/AgeProject/Users/UsersList';


function App() {
  const [values, setValus] = useState([]);

  const handleValues = (uName, ageA) => { //callback function 

    setValus((prevList) => {
      return [...prevList, { name: uName, age: ageA }]

    })


  }

  return (

    <div className="App">
      <AddUsers onValue={handleValues} />

      <UsersList users={values} />


    </div>
  );
}

export default App;
