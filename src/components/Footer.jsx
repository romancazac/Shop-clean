import React from 'react'

export const Footer = () => {
   return (
      <footer class="footer footer-main">
         <div class="footer__container">
            <div class="footer__row" data-spollers="767,max" data-one-spoller>
               <div class="footer__column">
                  <a href="index.html" class="footer__logo header__logo"><img src="../img/logo.png" alt=""/></a>
                  <p class="footer__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar nunc libero malesuada vel odio sit urna sagittis quisque.</p>
                  <div class="footer__pay pay">
                     <h4 class="pay__title footer__title" data-spoller>Оплата</h4>
                     <div>
                        <a href="#">
                           <img src="../img/pay.png" alt="" class="pay__img"/>
                        </a>
                     </div>


                  </div>
               </div>
               <div class="footer__column">
                  <h4 class="footer__title" data-spoller>Меню</h4>
                  <ul class="footer__list">
                     <li><a href="#" class="footer__link">Главная</a></li>
                     <li><a href="#" class="footer__link">О нас</a></li>
                     <li><a href="#" class="footer__link">Магазин</a></li>
                     <li><a href="#" class="footer__link">Услуги</a></li>
                     <li><a href="#" class="footer__link">Новости</a></li>
                     <li><a href="#" class="footer__link">Контакты</a></li>
                  </ul>
               </div>
               <div class="footer__column">
                  <h4 class="footer__title" data-spoller>Товары</h4>
                  <ul class="footer__list">
                     <li><a href="#" class="footer__link">Моющие средства</a></li>
                     <li><a href="#" class="footer__link">Товары из бумаги</a></li>
                     <li><a href="#" class="footer__link">Дозаторы и диспенсеры</a></li>
                     <li><a href="#" class="footer__link">
                        Принадлежности и
                        расходные материалы
                        для уборки</a></li>
                     <li><a href="#" class="footer__link">
                        Дезинфекция, охрана
                        и гигиена труда</a></li>
                     <li><a href="#" class="footer__link">
                        Профессиональное
                        оборудование</a></li>
                  </ul>
               </div>
               <div class="footer__column">
                  <h4 class="footer__title" data-spoller>Контакты</h4>
                  <ul class="footer__contacts contacts">
                     <li class="contacts__li"><a href="tel:+37368684449" class="contacts__item contacts__item_tel">+(373) 68 68 44 49</a></li>
                     <li class="contacts__li"><a href="#" target="_blank" class="contacts__item contacts__item_pin">bd. Moscova 21</a></li>
                     <li class="contacts__li"><a href="mailto:info@ecurat.md" class="contacts__item contacts__item_mail">info@ecurat.md</a></li>
                  </ul>
                  <div class="footer__socials" >
                     <h4 class="footer__title" data-spoller>Поделиться в соц.сетях</h4>
                     <div>
                        <ul class="socials">
                           <li class="socials__li"><a href="#" class="socials__icon socials__icon_fb"></a></li>
                           <li class="socials__li"><a href="#" class="socials__icon socials__icon_telegr"></a></li>
                           <li class="socials__li"><a href="#" class="socials__icon socials__icon_vb "></a></li>
                           <li class="socials__li"><a href="#" class="socials__icon socials__icon_wtt"></a></li>
                        </ul>
                     </div>

                  </div>
               </div>
            </div>


         </div>
         <div class="footer__copy ">
            <div class="copy__container copy">
               <p class="copy__autor">
                  2023 ©
               </p>
               <ul class="copy__links">
                  <li><a href="#" class="copy__link">Оплата и доставка </a></li>
                  <li><a href="#" class="copy__link">Политика конфиденциальности</a></li>
               </ul>
            </div>

         </div>
      </footer>
   )
}
