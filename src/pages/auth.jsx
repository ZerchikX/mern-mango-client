import React, { useContext, useState } from 'react'
import {Button, Card, Container, Form} from 'react-bootstrap' 
import '../styles/reglog.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { login, registration } from '../http/userApi'
import { observer } from 'mobx-react-lite'
import { Context } from '..'

const Auth = observer(() => {
  const {user} = useContext(Context)
  const location = useLocation()
  const navigate = useNavigate()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const click = async() => {
    try {
      let data;
    if (isLogin) {
      data = await login(email, password);
    } else{
      data = await registration(email, password);

    }
    user.setUser(user)
    user.setIsAuth(true)
    navigate(SHOP_ROUTE)
    } catch (e) {
      alert(e.response.data.message)
    }

  }

  return (
    <Container className='auth d-flex align-items-center btn-contaner'>
      <Card style={{width: 800, border: 0}} className=''>
        <h2 className=''>{isLogin ? 'Авторизация' : 'Регистрация' }</h2>
        <Form className='d-flex flex-column'>
          <Form.Control value={email || ""} onChange={e => setEmail(e.target.value)} type='email' className='mt-3' placeholder='Введите email *' />
          <Form.Control value={password || ""} onChange={e => setPassword(e.target.value)} type='password' className='mt-3' placeholder='Введите пароль *' />
        </Form>
        <Form className='d-flex'>
          <Button onClick={click} className='mt-3 align-self-start' variant={'outline-warning'}>{isLogin ? 'Авторизоватся' : 'Зарегестрироватся' }</Button>
          {isLogin ? 
          <div className='reg'>
            <Link style={{textDecoration: 0, color: 'black'}} to={REGISTRATION_ROUTE}>У меня еще нет аккаунта</Link>
          </div> 
          : 
          <div className='reg'>
            <Link style={{textDecoration: 0, color: 'black'}} to={LOGIN_ROUTE}>У меня уже есть аккаунт</Link>
          </div> }
        </Form>
      </Card>
    </Container>
  )
})

export default Auth