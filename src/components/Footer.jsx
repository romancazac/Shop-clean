import React from 'react'

export const Footer = () => {
   return (
      <footer className="footer footer-main">
         <div className="footer__container">
            <div className="footer__row" data-spollers="767,max" data-one-spoller>
               <div className="footer__column">
                  <a href="index.html" className="footer__logo header__logo"><img src="../img/logo.png" alt=""/></a>
                  <p className="footer__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar nunc libero malesuada vel odio sit urna sagittis quisque.</p>
                  <div className="footer__pay pay">
                     <h4 className="pay__title footer__title" data-spoller>Оплата</h4>
                     <div>
                        <a href="#">
                           <img src="../img/pay.png" alt="" className="pay__img"/>
                        </a>
                     </div>


                  </div>
               </div>
               <div className="footer__column">
                  <h4 className="footer__title" data-spoller>Меню</h4>
                  <ul className="footer__list">
                     <li><a href="#" className="footer__link">Главная</a></li>
                     <li><a href="#" className="footer__link">О нас</a></li>
                     <li><a href="#" className="footer__link">Магазин</a></li>
                     <li><a href="#" className="footer__link">Услуги</a></li>
                     <li><a href="#" className="footer__link">Новости</a></li>
                     <li><a href="#" className="footer__link">Контакты</a></li>
                  </ul>
               </div>
               <div className="footer__column">
                  <h4 className="footer__title" data-spoller>Товары</h4>
                  <ul className="footer__list">
                     <li><a href="#" className="footer__link">Моющие средства</a></li>
                     <li><a href="#" className="footer__link">Товары из бумаги</a></li>
                     <li><a href="#" className="footer__link">Дозаторы и диспенсеры</a></li>
                     <li><a href="#" className="footer__link">
                        Принадлежности и
                        расходные материалы
                        для уборки</a></li>
                     <li><a href="#" className="footer__link">
                        Дезинфекция, охрана
                        и гигиена труда</a></li>
                     <li><a href="#" className="footer__link">
                        Профессиональное
                        оборудование</a></li>
                  </ul>
               </div>
               <div className="footer__column">
                  <h4 className="footer__title" data-spoller>Контакты</h4>
                  <ul className="footer__contacts contacts">
                     <li className="contacts__li"><a href="tel:+37368684449" className="contacts__item contacts__item_tel">+(373) 68 68 44 49</a></li>
                     <li className="contacts__li"><a href="#" target="_blank" className="contacts__item contacts__item_pin">bd. Moscova 21</a></li>
                     <li className="contacts__li"><a href="mailto:info@ecurat.md" className="contacts__item contacts__item_mail">info@ecurat.md</a></li>
                  </ul>
                  <div className="footer__socials" >
                     <h4 className="footer__title" data-spoller>Поделиться в соц.сетях</h4>
                     <div>
                        <ul className="socials">
                           <li className="socials__li"><a href="#" className="socials__icon socials__icon_fb"></a></li>
                           <li className="socials__li"><a href="#" className="socials__icon socials__icon_telegr"></a></li>
                           <li className="socials__li"><a href="#" className="socials__icon socials__icon_vb "></a></li>
                           <li className="socials__li"><a href="#" className="socials__icon socials__icon_wtt"></a></li>
                        </ul>
                     </div>

                  </div>
               </div>
            </div>


         </div>
         <div className="footer__copy ">
            <div className="copy__container copy">
               <p className="copy__autor">
                  2023 ©
               </p>
               <ul className="copy__links">
                  <li><a href="#" className="copy__link">Оплата и доставка </a></li>
                  <li><a href="#" className="copy__link">Политика конфиденциальности</a></li>
               </ul>
            </div>

         </div>
      </footer>
   )
}
