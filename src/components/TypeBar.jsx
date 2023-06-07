import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '../index'
import '../styles/categories.css'


const TypeBar = observer(() => {
    const {tovar} = useContext(Context)
  return (
    <div className='categories'>
        
        <div onClick={() => tovar.setSelectedType({})}>
          <p >Все товары</p>
        </div>
      
        {tovar.types.map(type =>
            <div active={type.id === tovar.selectedType.id ? "active" : "false"} onClick={() => tovar.setSelectedType(type)} key={type.id}>
                <p>{type.name}</p>
            </div>
        )}
    </div>
  )
})


export default TypeBar