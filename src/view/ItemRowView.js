
import { ItemView } from './Item'

function ItemRowView(props) {

    const sortedItemList = props.data.itemList.sort(function(a,b) {return (a.baseNode().position > b.baseNode().position) ? 1 : ((b.id > a.id) ? -1 : 0);} );
    console.log(sortedItemList)

    const itemList = sortedItemList.map((item) => 
    <li key={item.id + 1}>
      <div key={item.id}><ItemView data={item}/></div>
    </li>
    );

    return (
        <ul className="itemRowView">{itemList}</ul>
    )

}

export { ItemRowView };