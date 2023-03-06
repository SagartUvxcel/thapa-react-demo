import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from "./Card";
import Product from '../Product'


const Services = () => {
    const [products, setProducts] = useState(Product)
    const fullData = async () => {
        await axios.get("https://dummyjson.com/products/").then((res) => {
            // setProducts(res.data.products);
        })
    }
    console.log(Product);


    useEffect(() => {
        fullData()
    }, [])

    return (
        <>
            <section className=''>
                <div className="container">
                    <div className=" text-center mt-5">
                        <h3>Our Services</h3>
                    </div>
                    <div className="row mt-4">
                        {products.map((product, i) => (

                            <Card
                                key={i}
                                imgSrc={product.images}
                                title={product.title}
                                info={product.description}
                            />

                        ))


                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services