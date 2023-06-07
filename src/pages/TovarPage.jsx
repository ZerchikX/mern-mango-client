import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { fetchOneTovar } from '../http/tovarAPI'
import '../styles/tovar-page.css'
import { Button } from 'react-bootstrap'

const TovarPage = () => {
    const [tovar, setTovar] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneTovar(id).then(data => setTovar(data))
    }, [])

    return (
        <div className='contact'>
            <div className='all-page'>
                <div className=''>
                    <div className='tovar-img'>
                        <img width={300} height = {434} src={process.env.REACT_APP_API_URL + tovar.img} alt="" />
                    </div>
                    <div className='pursh'>
                        <div>
                            {tovar.price} Pуб
                        </div>
                        <div className='pursh-btn'>
                        <Button variant={'warning'}>Купить</Button>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className='h4'>{tovar.name}</h4>
                    <div>
                        {tovar.info.map(info => 
                            <div key={info.id} className='opis'>
                                <p className='pechka'>{info.title}</p>:
                                <p className='pechka1'>{info.description}</p>
                            </div>    
                        )}
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}

export default TovarPage