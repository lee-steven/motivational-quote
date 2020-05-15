import React, {useState, useEffect} from 'react';
import axios from 'axios'

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
      <span>Random</span> <h1>Motivational Quote</h1>
      <h2> &#10077; {quote.text} &#10078;</h2>
      <p>- {quote.author === '' ? "unknown" : quote.author}</p>
    </div>
  )
}

export default App;
