import React from 'react'
import ProductCard from './ProductCard'
import Button from './Button';

function NewDrops() {
  return (
    <div className="pb-32 px-4 max-w-334 mx-auto">
      <div className="flex items-center md:items-end justify-between mb-8">
        <h2 className="text-2xl md:text-[74px] font-semibold max-w-150 leading-[95%] md:uppercase">
          Don’t miss out <br />new drops
        </h2>
        <Button className='py-[11.5px]'>Shop New Drops</Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default NewDrops
