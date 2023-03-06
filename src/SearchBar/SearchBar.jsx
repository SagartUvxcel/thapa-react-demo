import React, { useState } from 'react'

const SearchBar = () => {
    const [search, setSearch] = useState("")
    const image =`https://loremflickr.com/320/240/${search}`;

    const inputHandle=(e)=>{
        let values= e.target.value;
        setSearch(values);
    }

    return (
        <>
            <section className='m-5'>
                <div className='text-center'>
                    <input type="search" className='p-2' value={search} placeholder='search here.......' onChange={inputHandle} />
                </div>

                <div>
                    {search==="" ? null : <img src={image} alt="no found" />}
                </div>
            </section>
        </>
    )
}

export default SearchBar