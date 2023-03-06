import React from 'react';
import AllCards from './AllCards';

const Cards = () => {
    console.log(AllCards);
    return (
        <>
            <div className="section m-5 bg-light">
                <div className="row pt-5 h-100">
                    {AllCards.map((item,i) => (
                        <div className="col-md-4 " key={i }>
                            <div className="card h-100">
                                <img src={item.imgSrc} alt="myPic" className='card_img h-100' />
                                <div className="card_ifo p-3">
                                    <span className="card_category text-muted text-uppercase"> {item.title}</span>
                                    <h3 className="card_title"> {item.sname}</h3>
                                    <a href={item.url} target="blank">
                                        <button className='text-muted bg-white'> Watch Now </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Cards