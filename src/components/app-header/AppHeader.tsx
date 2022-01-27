import React from 'react';
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import Distance from "../Distance";
import './app-header.css';

// type AppHeaderProps = {}
const AppHeader = () => {
  return (
    <>
      <Distance w={null} h={4}/>
      <div className="header flex j-c-between">
        <div className="flex">
          <a href="#" className="header-btn text-w flex">
            <BurgerIcon type="primary" />
            <Distance w={2} h={2}/>
            Конструктор
          </a>
          <Distance w={2} h={2}/>
          <a href="#" className="header-btn text-w flex">
            <ListIcon type="secondary" />
            <Distance w={2} h={2}/>
            Лента заказов
          </a>
        </div>
        <Logo/>
        <a href="#" className="header-btn text-secondary flex">
          <ProfileIcon type="secondary" />
          <Distance w={2} h={2}/>
          Личный кабинет
        </a>
      </div>
      <Distance w={null} h={4}/>
    </>
  );
};

export default AppHeader;