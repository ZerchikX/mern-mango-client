import React from 'react'
import FooterStyles from '../styles/footer.css'


import emailicon from '../assets/img/mail.svg' 
import locationicon from '../assets/img/location.svg'
import timeicon from '../assets/img/time.svg'
import companyicon from '../assets/img/company.svg'
import {ReactComponent as Inst} from '../assets/img/iinst.svg' 
import {ReactComponent as Vk} from '../assets/img/vk.svg'

export const Footer = () => {
  return (
    <footer>
        <div className='UpFooter'>
            <div className='UpFooterLeft'>
            <div className='footerLogo'>
                <p className="mangop">Mango</p>
                <p className="jap">マンゴー</p>
            </div>
            <div className='nado-ochen'>
            <div className="footerMail">
                <a href="mailto:mangoshop@gmail.com">
                    <img src={emailicon} alt=""/>
                    <p>mangoshop@gmail.com</p>
                </a>
            </div>
            <div className="footerLocation">
                <a href="#">
                    <img src={locationicon} alt=""/>
                    <p>Россия, г. Ижевск</p>
                </a>
            </div>
            <div className="footerTime">
                <a href="#">
                    <img src={timeicon} alt=""/>
                    <p>7 дней в неделю с 12 до 20 часов</p>
                </a>
            </div>
            <div className="footerCompany">
                <a href="#">
                    <img src={companyicon} alt=""/>
                    <p> ИП Бочкарев Антон Сергеевич<br />
                        ИНН: 654852309006 <br />
                        ОГРН: 726500755376125</p>
                </a>
            </div>
            </div>
            </div>
            <div className='UpFooterCenter'>
                <ul>
                    <li><h4>НИЖНЕЕ МЕНЮ</h4></li>
                    <li><a href="#">Политика конфиденциальности</a></li>
                    <li><a href="#">Пользовательское соглашение</a></li>
                    <li><a href="#">Регистрация</a></li>
                    <li><a href="#">Доставка</a></li>
                    <li><a href="#">Оплата</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
            </div>
            <div className='UpFooterRight'>
                <h4>О КОМПАНИИ</h4>
                <p>Магазин манги, ранобэ, традиционной японской одежды и <br /> японской еды.</p>

                <div className='footerSeti'>
                    <h4>МЫ В СОЦИАЛЬНЫХ СЕТЯХ</h4>
                    <a href="https://www.instagram.com" target="_blank" className="inst_link">
                        <Inst/>
                    </a>
            
                    <a href="https://vk.com" target="_blank" className="vk_link">
                        <Vk/>
                    </a>
                </div>
            </div>
        </div>
        <div className='DownFooter'>
            <div className='DownFooterLeft'>
                <p>2023 © MANGO - Магазин японских товаров.</p>
                <a href="#">Карта сайта</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer