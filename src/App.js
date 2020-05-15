import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';

const App = () => {
  const [ quote, setQuote ] = useState(
    {
      text: "",
      author: "",
    }
  )

  // Retrieves quotes from API
  useEffect(() => { 
    axios
      .get('https://type.fit/api/quotes')
      .then(response => {
        // Sets random quote
        const randomNumber = Math.floor(Math.random() * response.data.length)
        setQuote(response.data[randomNumber])
      })
  }, [])  

  return (
    <div>
      <h1>Quote of the day</h1>
      <h2>{quote.text}</h2>
      <p>{quote.author}</p>
    </div>
  )
}

export default App;
