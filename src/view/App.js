
import { Item } from '../model/item';
import { ItemView } from './Item';
import { Navbar } from './navbar';
import './App.css';
import { itemDataList } from '../parseJSON'
import { ItemRowView } from './ItemRowView'
import { ItemCollection } from './ItemCollection';
import { listSort } from '../model/sort'

function App() {

  let newItem = new Item("D", 260, "Movie", "Canon")
  newItem.createNode(undefined, 16)
  newItem.createNode(28, 50)

  let anItem = new Item("abc", 261, "book")
  anItem.createNode(10, 10)

  const testItems = [new Item("E", 257), anItem, new Item("B", 258), new Item("C", 259), newItem]

  const itemList = listSort(itemDataList)

  return (
    <div className="App">

      <ItemCollection repeat="true" num={0} />

      <Navbar />

      <br />

      <ItemRowView data={{itemList: itemList}}/>     

    </div>
  );
}

export default App;
