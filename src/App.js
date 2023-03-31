
import { useEffect, useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function App() {
  const [text] = useState('This is text varible');
  const [count, setCount] = useState(10);

  const [quote, setQuote] = useState([]);

  const fetchData = () => {
    return axios.get("https://dummyjson.com/quotes")
    .then((response) => setQuote(response.data['quotes']));
  }

  useEffect(() => {
     fetchData();
  },[])

  return (
    <div className="App">
     <h1>Welcome To React</h1>
        <Button as="a" variant="success">
            Hello React
        </Button>
        <h4>{text}</h4>
        <p>You clicked {count}</p>
        <button onClick={() => setCount(count + 5)}>
          Click Me
        </button>

        <h3>Quotes List</h3>
        <ul>
          {quote && quote.length>0 && quote.map((quoteObj, index) =>(
           <li key={quoteObj.id}>Quote : {quoteObj.quote} - Author : {quoteObj.author} </li>
          )) }
        </ul>

    </div>
  );
}

export default App;
