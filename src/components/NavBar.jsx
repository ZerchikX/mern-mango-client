import React, { useContext, useState } from "react";
import { Context } from "../index";

import emailicon from '../assets/img/mail.svg' 
import {ReactComponent as Inst} from '../assets/img/iinst.svg' 
import {ReactComponent as Vk} from '../assets/img/vk.svg'
import logo from '../assets/img/mango.svg'
import search_ico from '../assets/img/search_ico.svg'
import { ReactComponent as Rating } from '../assets/img/rating.svg'
import {ReactComponent as Heart} from '../assets/img/heart.svg'
import { ReactComponent as Basket} from '../assets/img/basket.svg'
// import { ReactComponent as Profile } from '../assets/img/profile.svg'
import '../styles/header.css'
import {Link, useNavigate} from 'react-router-dom'
import {observer} from 'mobx-react-lite'
import { ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { Button } from "react-bootstrap";



const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const [cartOpen, setCartOpen] = useState(false)

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <div>
            <header>
                {user.isAuth ? 
                        <div className='contacts'>
                        <div className="mail">
                            <a href="mailto:mangoshop@gmail.com">
                                <img src={emailicon} alt=""/>
                                <p>mangoshop@gmail.com</p>
                            </a>
                        </div>
                        <div className="seti">
                            <a href="https://www.instagram.com" target="_blank" className="inst_link">
                                <Inst/>
                            </a>
                        
                            <a href="https://vk.com" target="_blank" className="vk_link">
                                <Vk/>
                            </a>
                        </div>
                    </div>            
                :
                    <div className='contacts'>
                        <div className="mail">
                            <a href="mailto:mangoshop@gmail.com" className="mail-link">
                                <img src={emailicon} alt=""/>
                            <p>mangoshop@gmail.com</p>
                            </a>
                        </div>
                        <div className="seti">
                            <a href="https://www.instagram.com" target="_blank" className="inst_link">
                                <Inst/>
                            </a>
                
                            <a href="https://vk.com" target="_blank" className="vk_link">
                                <Vk/>
                            </a>
                        </div>
                    </div>
                }
        <div className='main'>
            <div className='contaner'>
                <div className='logo'>
                    <Link to={SHOP_ROUTE}>
                        <img src={logo}/>
                    </Link>
                    <p className="mango_p">Mango</p>
                    <p className="jp">マンゴー</p>
                </div>
                <div className="search">
                    <input type='search' name="search" id="search" placeholder="Поиск по каталогу..."/>
                    <input className="search_ico" type="image" src={search_ico} alt="" width="22px" height="22px"/>
                </div>

                    <div className="shapka">
                    
                    {user.isAuth ? 
                        <div className="btnki">
                            <Button onClick={() => navigate(ADMIN_ROUTE)} className=' align-self-start' variant={'warning'}>Админ панель</Button>
                            <Button onClick={() => logOut()} className='logout-btn align-self-start' variant={'warning'}>Выйти</Button>
                        
                        </div>
                    :
                        <Button onClick={() => navigate(LOGIN_ROUTE)} className=' align-self-start' variant={'warning'}>Войти</Button>
                    }

                    </div>


            </div>
        </div>

        <div className="main">
            <div className="container1">
                <div className="bg">
                    <div className="catalog">
                        <div className="col">
                            <div className="con">
                                <div className="bar top"></div>
                                <div className="bar middle"></div>
                                <div className="bar bottom"></div>
                            </div>
                            
                        </div>
                        <h4 className="catalog_h4">КАТАЛОГ</h4> 
                    </div>
                    <div className="navigation">
                        
                        <Link>ЛИЧНЫЙ КАБИНЕТ</Link>
                        <Link>FAQ-ВОПРОСЫ</Link>
                        <Link>ОПЛАТА</Link>
                        <Link>ДОСТАВКА</Link>
                        <Link>КОНТАКТЫ</Link>
                        <Link>О МАГАЗИНЕ</Link>
                        <Link>ОТЗЫВЫ</Link>
                    </div>
                </div>
            </div>
        </div>

    </header>
        </div>
    )
})

export default NavBar