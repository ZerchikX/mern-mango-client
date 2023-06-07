import React, { useState } from 'react'
import {Button, Container} from "react-bootstrap"
import CreateTovar from '../components/modals/CreateTovar'
import CreateType from '../components/modals/CreateType'
import '../styles/admin.css'

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [tovarVisible, setTovarVisible] = useState(false)
    return (
        <Container className="d-flex flex-column btn-contaner">
            <Button className='mt-2 admin-button' variant={"warning"} onClick={() => setTypeVisible(true)}>Добавить тип</Button>
            <Button className='mt-2 admin-button' variant={"warning"} onClick={() => setTovarVisible(true)}>Добавить товар</Button>
            <CreateTovar show={tovarVisible} onHide={() => setTovarVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
        </Container>
    )
}

export default Admin