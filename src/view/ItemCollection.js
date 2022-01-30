
import './Item.css'
function ItemCollection(props) {
    
    let x;
    if (props.num < 10) {
        x = <ItemCollection num={props.num + 1} />
    }

    return (

        <div className="itemCollection">
            <h1>Hi</h1>
            {x}
        </div>
        
    );

}

export { ItemCollection };