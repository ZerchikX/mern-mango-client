import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '../index'


const BrandBar = observer(() => {
    const {tovar} = useContext(Context)
  return (
    <div className='categories'>
        {tovar.brands.map(brand => 
            <div key={brand.id} onClick={() => tovar.setSelectedBrand(brand)}>
                {brand.name}
            </div>
        )}
    </div>
  )
})

export default BrandBar