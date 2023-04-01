import React from 'react'
import ProductCard from "./ProductCard"
function PoductList({producst}: any) {
  return (
    <div>
       {producst.map((product:any, i:number)=> (
          <div key={i}>
            <ProductCard key={i} product={product} i={i}/>
          </div>
        ))}
    </div>
  )
}

export default PoductList
