import React from 'react'
import BreadCrumbs from '../components/BreadCrumbs'
import bgC from '../asset/img/contacts/bg-form.png';
import imgA from '../asset/img/contacts-img.png';
import { FormContacts } from '../components/contacts/FormContacts';
import { Helmet } from 'react-helmet';
export const Contacts = () => {
   return (
      <>
     
          <Helmet>
            <title>Контакты</title>
            <meta name="description" content="Shop aplication" />
         </Helmet>
         <BreadCrumbs title="Контакты "/>
         <section className="section  contact">
            <div className="contactc__container about">
               <div className="about__row">
                  <div className="about__column">
                     <h2 className="section__title">Контакты</h2>
                     <div className="contact__items">
                        <ul className="contact__contacts contacts">
                           <li className="contacts__li"><a href="#" target="_blank"
                              className="contacts__item contacts__item_pin">Chisinau Bd Moscova 21</a></li>
                           <li className="contacts__li">
                              <span>Телефон:</span>
                              <a href="tel:+37368684449" className="contacts__item contacts__item_tel">+(373) 68 68 44
                                 49</a>
                              <a href="tel:+37368684449" className="contacts__item contacts__item_tel">+(373) 68 68 44
                                 49</a>
                           </li>

                           <li className="contacts__li">
                              <span>Электронная почта:</span>
                              <a href="mailto:info@ecurat.md" className="contacts__item contacts__item_mail">
                                 info@ecurat.md</a>
                           </li>
                        </ul>
                        <div className="contact__social product-shop__social ">
                           <span>Мы в соц.сетях</span>
                           <ul className="contact__socials socials">
                              <li className="socials__li"><a href="#" className="socials__icon socials__icon_fb"></a></li>
                              <li className="socials__li"><a href="#" className="socials__icon socials__icon_telegr"></a></li>
                              <li className="socials__li"><a href="#" className="socials__icon socials__icon_vb "></a></li>
                              <li className="socials__li"><a href="#" className="socials__icon socials__icon_wtt"></a></li>
                           </ul>
                        </div>

                     </div>
                  </div>
                  <div className="about__column about__img-ibg_contain">
                     <img src={imgA} alt="" />
                  </div>
               </div>

            </div>
         </section>
         <div className="form-contacts" style={{backgroundImage: `url(${bgC})`}}>
            <div className="form-contacts__container">
               <div className="form-contacts__body">
                  
                  <FormContacts/>
               </div>

            </div>

         </div>
         <div className="contacts__map">
            <iframe className="contacts__iframe"
               src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d173624.7402751759!2d29.016585499999998!3d47.160076000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sro!2s!4v1678719236722!5m2!1sro!2s"
               allowFullScreen="" loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"></iframe>
         </div>
      </>
   )
}
