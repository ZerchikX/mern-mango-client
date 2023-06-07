import React from 'react'
import '../styles/tovar-item.css'
import stars from '../assets/img/stars.svg'
// import '../styles/item.css'
import { useNavigate } from 'react-router-dom'
import { TOVAR_ROUTE } from '../utils/consts'
import { Card, Col, Image } from 'react-bootstrap'

const TovarItem = ({tovar}) => {
  const navigate = useNavigate()
  return (
    <main>
    <Col className='nado'>
      <Card style={{width: 308, height: 576, cursor: 'pointer'}} >
        <Image className='m-4' width={255} height={354} src={process.env.REACT_APP_API_URL + tovar.img} onClick={() => navigate(TOVAR_ROUTE + '/' + tovar.id)}/>
        <div className='' onClick={() => navigate(TOVAR_ROUTE + '/' + tovar.id)}>
          <div>{tovar.name}</div>
         
        </div>
        <div className='price-cart'>
          <div className='one-price'>{tovar.price} Р</div>
          <div className='add-to-cart'>+</div>
        </div>
        
      </Card>
    </Col>
    </main>

  )
}

export default TovarItem