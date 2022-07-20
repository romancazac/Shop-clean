import React from 'react'

const SubCatgories = ({categories}) => {
   return (
      <ul className="aside-category__list">

         <li className="aside-category__li"><button className="aside-category__btn">Ручная мойка посуды</button></li>
         <li className="aside-category__li"><button className="aside-category__btn">Грили, духовки, печи</button></li>
         <li className="aside-category__li"><button className="aside-category__btn">Ванные комнаты, туалеты</button></li>
         <li className="aside-category__li"><button className="aside-category__btn">Стекло, мебель, пол</button></li>
         <li className="aside-category__li"><button className="aside-category__btn">Дезинфектанты</button></li>
         <li className="aside-category__li"><button className="aside-category__btn">Мебель / Обивка</button></li>
         <li className="aside-category__li"><button className="aside-category__btn">Стирка вещей</button></li>
         <li className="aside-category__li"><button className="aside-category__btn">Индустриальные средства</button></li>
      </ul>
   )
}

export default SubCatgories