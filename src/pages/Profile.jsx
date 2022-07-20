import React from 'react'

const Profile = () => {
   return (
      <section className="section profile">
         <div className="about__container">
            <div className="about__row">
               <div className="about__column">
                  <h2 className="section__title">ЗДРАВСТВУЙТЕ, USER</h2>
                  <h3 className="section__subtitle">ФИЗИЧЕСКОЕ ЛИЦО</h3>
                  <p className="section__text">user</p>
                  <p className="section__text">info@mail.md</p>
                  <p className="section__text">+380 (74) 690-46-33</p>
                  <ul className="profile__links">
                     <li><a href="edit-profile.html" className="profile__edit btn-block">РЕДАКТИРОВАТЬ ПРОФИЛЬ</a></li>
                     <li><a href="#" className="section__link news__link">Выйти из профиля</a></li>
                  </ul>
               </div>
               <div className="about__column">
                  <ul className="profile__links">
                     <li><a href="#" className="section__link news__link">История заказов</a></li>
                     <li><a href="#" className="section__link news__link">ИЗБРАННОЕ</a></li>
                  </ul>


               </div>
            </div>


         </div>
      </section>

   )
}

export default Profile