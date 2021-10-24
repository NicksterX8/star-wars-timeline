
import { Item } from '../model/item';
import { ItemView } from './Item';
import { Navbar } from './navbar';
import './App.css';
import { itemDataList } from '../parseJSON'

function App() {

  let newItem = new Item("A New Hope", "film", "NC")

  const itemList = itemDataList;

  const itemListView = itemList.map((item) => 
    <li><ItemView data={item} /></li>
  );

  return (
    <div className="App">

      <Navbar />

      <br />
      
      <ul className="itemList">{itemListView}</ul>      

    </div>
  );
}

export default App;
