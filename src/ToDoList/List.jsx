import React from 'react'

const List = ({ data: { item,
    removeList, i } }) => {
    return (
        <div>
            <p >{item}   <button onClick={()=>removeList(i)}>remove</button></p>
        </div>
    )
}

export default List
