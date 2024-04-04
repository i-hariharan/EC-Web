import React from 'react'
import Carditem from './Carditem'
import Data from "./Data"

export default function Product() {

    

  return (
    
    <div>
      <h1 className='text-center mt-3'> All Items in terms of KG</h1>
        <section className='py-4 container'>
          <div className='row justify-content-center'>
            {
                Data.productdata.map((item,index) => {
                    return(
                        <Carditem
                            img={item.img}
                            title={item.title}
                            desc={item.desc}
                            price={item.price}
                            item={item}
                            key={index} 
                        />
                    )
                })
            }
          </div>
        </section>
    </div>

 )
}
