
import { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';

function App() {
  const [text, setText] = useState('This is text varible');
  const [count, setCount] = useState(10);
  return (
    <div className="App">
     <h1>Welcome To React</h1>
        <Button as="a" variant="success">
            Hello React
        </Button>
        <h4>{text}</h4>
        <p>You clicked {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Click Me
        </button>
    </div>
  );
}

export default App;
