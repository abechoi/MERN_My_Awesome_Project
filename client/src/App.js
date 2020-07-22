import React, { useEffect, useState } from 'react';
import './App.css';

function App(props) {

  const [ error, setError ] = useState(null);
  const [ isLoaded, setIsLoaded ] = useState(false);
  const [ items, setItems ] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/testAPI")
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setItems(result.items);
    },
    (error) => {
      setIsLoaded(true);
      setError(error);
    })
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>
  }
  else if (!isLoaded) {
    return <div>Loading...</div>
  }
  else{
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} {item.price}
          </li>
        ))}
      </ul>
    );
  }
}

export default App;
