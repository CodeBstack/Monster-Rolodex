// import { Component } from 'react';
import Cardlist from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';
// Hooks
import { useState, useEffect } from 'react';

//////////////////////////////////////////////////////////////////////////////////////////
// FUNCTIONAL COMPONENTS
// There are no lifcycles in functional components
// whenever there are new props or state, the entire function runs again.
const App = () => {
  //useState returns 2 values which is then destructured. [storedValue, setValue]
  // this useState will run (call the entire func) only if its first value is different
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonster] = useState([]);
  const [filteredMonsters, setfilteredMonsters] = useState(monsters);

  // at the first render of the function, the useEffect will be called
  // it takes 2 arguments.
  // the return (contains the function to be executed) and the array(contains the dependecies)
  // the useEffect function will only be called whenever the dependecies changes.
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonster(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setfilteredMonsters(newFilteredMonsters);

  }, [monsters, searchField]); // this means run the useEffect whenever the monsters array changes or searchField changes.

  const onSearchChange = event => {
    const searchFieldString = event.target.value.toLocaleLowerCase();

    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        // props
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
        className="monsters-search-box"
      />

      <Cardlist monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',
//     };

//     this.onSearchChange = this.onSearchChange.bind(this);

//     // console.log("constructor");
//   }

//   // Mounting is when a component gets mounted for the first time.
//   componentDidMount() {
//     // console.log("componentDidMount");

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(users => {
//     console.log(users);
//     this.setState(
//       () => {
//         return { monsters: users };
//       },
//       () => {
//         // this is done so that it comes after the setState has called its first parameter.
//         // console.log(this.state);
//       }
//     );
//   });
//   }

// onSearchChange(event) {
//   const searchField = event.target.value.toLocaleLowerCase();

//   this.setState(() => {
//     return { searchField };
//   });
// }

//   render() {
//     // destructuring
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter(monster => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
//     // console.log(filteredMonsters);

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monster Rolodex</h1>
//         <SearchBox
//           // props
//           onChangeHandler={onSearchChange}
//           placeholder="search monsters"
//           className="monsters-search-box"
//         />

//         <Cardlist monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
