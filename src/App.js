import Cards from './components/utils/Cards'
import Content from './components/Content'
import './App.css';
import React from 'react'
import { nanoid } from 'nanoid'
import 'bootstrap/dist/css/bootstrap.min.css';






function App() {
  return (
    <div className="App">
      {Cards.map(el =>
      (<Content key={nanoid()}{...el}>
        {el.img ? (<img src={el.img} className="card-img-top" alt="..." />) : null}
      </Content>
      ))}
    </div>
  );
}

export default App;
