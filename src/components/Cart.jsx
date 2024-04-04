import React from 'react'
import {useCart} from  "react-use-cart"

export default function Cart() {
  

    const { isEmpty,
            totalUniqueItems,
            cartTotal,
            updateItemQuantity,
            removeItem,
            emptyCart,
            totalItems,
            items 
            } = useCart();

            if(isEmpty)
              return <h1 className='text-center'>Your Cart is Empty</h1> 

    return (
    
      <section className='py-4 container'>
        <div className='row justify-content-center'>

          <div className='col-12'>
            <h4> MyCart ({totalUniqueItems}) Total Items: ({totalItems})</h4>
            <table className='table table-light table-hover m-0'>
              <tbody>
                {items.map(( item, index) => {
                  return(
                    <tr key={index}>

                      <td><img src={item.img} style={{height:"6rem"}}/></td>
                      <td>{item.title}</td>
                      <td>{item.price}</td>
                      <td> Quantity ({item.qauntity})</td>
                      <td>
                        <button className='btn btn-info ms-2' onClick={() => updateItemQuantity(item.id,item.quantity - 1)}>-</button>
                        <button className='btn btn-info ms-2' onClick={() => updateItemQuantity(item.id,item.quantity + 1)}>+</button>
                        <br></br>
                        <br></br>
                        <button className='btn btn-danger ms-2' onClick={() => removeItem(item.id)}>Remove Items</button>
                      </td>

                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          
          <div className='col-auto ms-auto'>
            <h2>Total Prices: Rs {cartTotal}</h2>
          </div>

          <div className='col-auto'>
            <button className='btn btn-danger m-2' onClick={() => emptyCart()}>Clear Cart</button>
            <button className='btn btn-primary m-2'>Buy Now</button>
          </div>

        </div>
      </section>
  
  )
}
