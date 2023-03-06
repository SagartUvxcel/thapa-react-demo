import axios from 'axios'
import React, { useEffect, useState } from 'react'

const PokemonDataFetch = () => {
  const [datavalue, setDatavalue] = useState(1)
  const [fetchValue, setFetchValue] = useState()
  const [fetchValue1, setFetchValue1] = useState()


  console.log(fetchValue);

  useEffect(() => {
    async function fetchData() {
      const fetchDataValue = await axios.get(`https://pokeapi.co/api/v2/pokemon/${datavalue}`).then((res) => {
        setFetchValue(res.data.name)
        setFetchValue1(res.data.moves.length)
      })
    }
    fetchData()
  },[datavalue])
  return (
    <>
      <section className="mt-5 text-center">
        <div>

          <h1>Name is {fetchValue}</h1>
          <p>total moves are{fetchValue1}</p>

          <select name="" id=""
            value={datavalue}
            onChange={(e) => { setDatavalue(e.target.value) }}>

            <option value="1">1</option>
            <option value="25">25</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </section>
    </>
  )
}

export default PokemonDataFetch