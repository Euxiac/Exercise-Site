/* eslint-disable react/prop-types */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './BigCat.css'

const cats = [
  { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/TheCheethcat.jpg/320px-TheCheethcat.jpg' },
  { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Mountain_Lion_in_Glacier_National_Park.jpg/480px-Mountain_Lion_in_Glacier_National_Park.jpg' },
  { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/480px-Standing_jaguar.jpg' },
  { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/African_leopard_male_%28cropped%29.jpg/480px-African_leopard_male_%28cropped%29.jpg' },
  { id: 5, name: 'Lion', latinName: 'Panthera leo', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/480px-Lion_waiting_in_Namibia.jpg' },
  { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Irbis4.JPG/480px-Irbis4.JPG' },
  { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Walking_tiger_female.jpg/480px-Walking_tiger_female.jpg' },
];

const SingleCat = ({ name, latinName, image }) => {
  return (
    <li>
      <img src={image} width="400" alt={name} />
      <h3>{name}</h3>
      <em>({latinName})</em>
    </li>
  )
}


const BigCats = () => {
  const [currentCats, setCurrentCats] = useState(cats);

  const handleSortCats = () => {
    let newCats = [...currentCats];
    newCats.sort((cat1, cat2) => cat1.name < cat2.name ? -1 : 1);
    setCurrentCats(newCats);
  }

  const handleReverseCats = () => {
    let newCats = [...currentCats];
    newCats.reverse();
    setCurrentCats(newCats);
  }

  const handleFilterCats = () => {
    let newCats = currentCats.filter(cat => cat.latinName.startsWith('Panthera'));
    setCurrentCats(newCats);
  }

  const handleResetCats = () => {
    setCurrentCats(cats);
  }

  const handleAddCat = (newCat) => {
    newCat.id = currentCats.reduce((maxId, cat) => Math.max(maxId, cat.id), 0) + 1;
    setCurrentCats([...currentCats, newCat]);
  }

  const catList = currentCats.map(cat => (
    <SingleCat name={cat.name} latinName={cat.latinName} key={cat.id} image={cat.image} />
  ))
  return (
    <div className="BigCats">
      <h2>Big Cats</h2>
      <ul>{catList}</ul>
      <div>
        <button onClick={handleSortCats}>Sort Alphabetically</button>
        <button onClick={handleReverseCats}>Reverse List</button>
      </div>
      <div>
        <button onClick={handleFilterCats}>Filter Pantheras</button>
        <button onClick={handleResetCats}>Reset List</button>
      </div>
      <AddCatForm onAddCat={handleAddCat} />
    </div>
  )
}

function AddCatForm({ onAddCat }) {
  const [name, setName] = useState('');
  const [latinName, setLatinName] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handleAddCat = (e) => {
    e.preventDefault();
    onAddCat({ name, latinName, image: imageURL });
  }

  return (
    <form onSubmit={handleAddCat}>
      <h3>Add New Cat</h3>
      <label>
        Name:
        <input name="name" value={name} onChange={(e) => setName(e.target.value)} />
      </label><br />
      <label>
        Latin Name:
        <input name="latinName" value={latinName} onChange={(e) => setLatinName(e.target.value)} />
      </label><br />
      <label>
        Image URL:
        <input name="imageURL" value={imageURL} onChange={(e) => setImageURL(e.target.value)} />
      </label><br />
      <button>Add Cat</button>
    </form>
  )
}


const Calculator = () => {
  //Create new states to store/update the values
  const [firstNumber, setFirstNumber] = useState(0); //Set the default value
  const [secondNumber, setSecondNumber] = useState(0);
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState(null);

  const handleCalculatorSubmit = (e) => {
    e.preventDefault();

    //Doing validation, update post parammeter etc
    //Perform the caculation based on the selected operator

    switch (operator) {
      case "+":
        setResult(firstNumber + secondNumber);
        break;
      case "-":
        setResult(firstNumber - secondNumber);
        break;
      case "*":
        setResult(firstNumber * secondNumber);
        break;
      case "/":
        setResult(firstNumber / secondNumber);
        break;
    }
  }

  //OnChange is the function so we need to create a new arrow function

  const handleSetFirstNumber = (e) => {
    console.log('Set Number');
    let value = parseInt(e.target.value);
    setFirstNumber(value)
  }

  const handleSetSecondNumber = (e) => {
    console.log('Set Number');
    let value = parseInt(e.target.value);
    setSecondNumber(value);
  }

  const handleSetOperator = (e) => {
    setOperator(e.target.value);
  }

  const resetCaculator = (e) => {
    e.preventDefault();
    setFirstNumber(0)
    setSecondNumber(0);
    setResult(0);
    setOperator("+");
  }

  return (
    <div>
      <form onSubmit={handleCalculatorSubmit}>
        <label>
          Number 1: <br />
          <input type="number" name="first" value={firstNumber} onChange={handleSetFirstNumber} />
        </label>
        <br />
        <label>
          Number 2: <br />
          <input type="number" name="second" value={secondNumber} onChange={handleSetSecondNumber} />
        </label>
        <br />
        <select value={operator} onChange={handleSetOperator}>
          <option>+</option>
          <option>-</option>
          <option>*</option>
          <option>/</option>
        </select>
        <br />
        <button>Calculator</button>
        <button onClick={resetCaculator}>Reset</button>
        <div style={{fontWeight:'bold', padding: '1em'}}>Result: {result ? result : 0}</div>
      </form>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BigCats />
      </div>
      <div>
        <Calculator />
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App