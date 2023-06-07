import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { Context } from '../..';
import { createTovar, fetchTovars, fetchTypes, fetchBrands } from '../../http/tovarAPI';
import { observer } from 'mobx-react-lite';

const CreateTovar = observer(({show, onHide}) => {

    const {tovar} = useContext(Context)
    const [info, setInfo] = useState([])
    const [name, setName] = useState('')
    const [file, setFile] = useState(null)
    const [price, setPrice] = useState(0)


    useEffect(() => {
      fetchTypes().then(data => tovar.setTypes(data))
      fetchBrands().then(data => tovar.setBrands(data))
  }, [])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now(), }])
    }
    const changeInfo = (key, value, number) => {
      setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const selectFile = e => {
      setFile(e.target.files[0])
    }

    const addTovar = () => {
      const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('typeId', tovar.selectedType.id)
        formData.append('info', JSON.stringify(info))
      createTovar(formData).then(data => onHide())
    }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить товар
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Dropdown className={"mt-2 mb-2"}>
                <Dropdown.Toggle variant={'outline-dark'}>{tovar.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
               
                <Dropdown.Menu>
                    {tovar.types.map( type => 
                        <Dropdown.Item onClick={() => tovar.setSelectedType(type)} key={type.id}>{type.name}</Dropdown.Item>    
                    )}
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle variant={'outline-dark'}>{tovar.selectedBrand.name || "Выберите бренд"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {tovar.brands.map(brand =>
                                <Dropdown.Item
                                    onClick={() => tovar.setSelectedBrand(brand)}
                                    key={brand.id}
                                >
                                    {brand.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
            <Form.Control value={name || ""} onChange={e => setName(e.target.value)} className={'mt-3'} placeholder='Название товара'/>
            <Form.Control value={price || ""} onChange={e => setPrice(Number(e.target.value))}  type='number' className={'mt-3'} placeholder='Цена'/>
            <Form.Control type='file' className={'mt-3'} onChange={selectFile}/>
            <hr/>
            {/* <Button variant={'outline-warning'} onClick={addInfo}>Добавить новое свойство</Button> */}
            <Button variant={"outline-warning"} onClick={addInfo}>Добавить новое свойство</Button>
            {info.map(i => 
                    <Row className='mt-4' key={i.number}>
                        <Col md={4}>
                            <Form.Control value={i.title} onChange={(e) => changeInfo('title', e.target.value, i.number)} placeholder='Введите название свойства'/>
                        </Col>
                        <Col md={4}>
                            <Form.Control value={i.description} onChange={(e) => changeInfo('description', e.target.value, i.number)} placeholder='Введите описание свойства'/>
                        </Col>
                        <Col md={4}>
                            <Button onClick={() => removeInfo(i.number)} variant={"outline-dark"}>Удалить</Button>
                        </Col>
                    </Row>    
            )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-warning' onClick={addTovar}>Добавить</Button>
        <Button variant='outline-dark' onClick={onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
  )
})

export default CreateTovar