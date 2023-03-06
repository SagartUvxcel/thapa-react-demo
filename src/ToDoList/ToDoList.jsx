import React, { useState } from 'react';
import List from "./List";

const ToDoList = () => {
    const [listItem, setListItem] = useState("");
    const [allListItem, setAllListItem] = useState([]);

    const handleChange = (e) => {
        let valueData = e.target.value;
        setListItem(valueData);

        console.log(e.target.value);
    }

    const submitButton = (e) => {
        e.preventDefault();
        setAllListItem([...allListItem, listItem])
        setListItem("")
    }

    const removeList = (id) => {
        console.log(id);
        setAllListItem((items) => {
            return items.filter((item, i) => {
                return i !== id;
            })
        })

    }
    console.log(allListItem);

    return (
        <>
            <section className="m-5 p-5 text-center">
                <div className='border m-5 px-5'>
                    <h1>ToDo List</h1>
                    <form action="">
                        <input type="text" className='p-2 border-rounded' onChange={handleChange} placeholder="add new list" value={listItem} />   <span><button className='btn btn-primary border-rounded ' onClick={submitButton}>+</button></span>

                    </form>
                </div>
                <div className="border m-5 px-5">
                    {allListItem.map((item, i) => {
                        return (
                            <List
                                key={i}
                                data={{
                                    item,
                                    removeList,
                                    i
                                }}                                    
                                />
                                
                                // other format
                                //* <List
                               // key={i}
                               // id={i}
                               // text={item}  
                               // onselect={removeList}                                  
                                ///> */}
                                )





                    })}
                </div>
            </section>
        </>
    )
}

export default ToDoList