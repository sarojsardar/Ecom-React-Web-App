
import './App.css';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
     <h1>Welcome To React</h1>
      <button>Simple Button</button>
        <Button as="a" variant="success">
            Button as link
        </Button>
    </div>
  );
}

export default App;
