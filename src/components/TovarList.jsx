import React, { useContext } from 'react'
import { Context } from '../index'
import TovarItem from './TovarItem'
import '../styles/item.css'
import { observer } from 'mobx-react-lite'
import { Form, Row } from 'react-bootstrap'

const TovarList = observer(() => {
    const {tovar} = useContext(Context)
  return (
    <Form className='aga d-flex'>
      {tovar.tovars.map(tovar =>
        <TovarItem key={tovar.id} tovar={tovar}/>
      )}
    </Form>
  )
})

export default TovarList