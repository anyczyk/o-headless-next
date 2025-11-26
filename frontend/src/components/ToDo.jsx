import React, {useState, useRef, useEffect} from "react";



export const ToDo = () => {
    console.log('cc: ', JSON.parse(localStorage.getItem('itemsToDo')));
    const data = useRef( JSON.parse(localStorage.getItem('itemsToDo')) || []);
    const [newItem, setNewItem] = useState('');
    const [items, setItems] = useState(data.current);


    useEffect(() => {
        localStorage.setItem('itemsToDo', JSON.stringify(items));
    },[items]);
    // const addItem = () => {
    //     setItems([...items, {id: Date.now(), content: newItem}]);
    //     setNewItem('');
    // }

    const removeItem = (id) => {
        setItems(prev => prev.filter(item => item.id !== id));
    }

    return (
        <div>
            {items.map((item) => {
                return <li key={item.id}>{item.content} ({item.id}) <button onClick={() => removeItem(item.id)} className="p-2 bg-black text-white">Remove item</button></li>
            })}
            {/*<input placeholder="New item content" onChange={e => {setNewItem(e.target.value)}} value={newItem} /><button disabled={!newItem} onClick={addItem} className="p-2">Add item</button>*/}
        </div>
    );
}
