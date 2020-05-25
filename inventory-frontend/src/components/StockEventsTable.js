import React from 'react'
import StockDetail from './StockDetail'
function StockEventsTable(props){
    const {products, stockEvents} = props
   
    return (
        <div className="StockEventsTable">
          {products.map(product => {
              const {id} = product

              const relavantStockEvents = stockEvents.filter( se => se.product.id === product.id)
              const stockTotal = relavantStockEvents.reduce((accumulator, currentElement) =>{
                  return accumulator + currentElement.qty
              }, 0)


              return(
                  <div className="StockEventTable_ProductContainer">
                  <StockDetail
                  
                   name={product.name}
                    total={stockTotal}
                     stockEvents={relavantStockEvents} 

                     />
                  
                  </div>

              )

          })}



       
        </div>
       
    )
}
export default StockEventsTable