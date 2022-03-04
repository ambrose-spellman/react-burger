import React from 'react';
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import classnames from "classnames";
import style from './app-header.module.css';
import main from '../app/app.module.css';

// type AppHeaderProps = {}
const AppHeader = () => {
  return (
    <header className={classnames('mt-5 mb-5', main.flex, main.j_c_between)}>
      <nav className={main.flex}>
        <a href="#" className={classnames('mr-5', main.header_btn, main.text_w, main.flex)}>
          <BurgerIcon type="primary" />
          <span className="ml-4">Конструктор</span>
          
        </a>
        <a href="#" className={classnames(style.header_btn, main.text_w, main.flex)}>
          <ListIcon type="secondary" />
          <span className="ml-2">Лента заказов</span>
        </a>
      </nav>
      <Logo/>
      <a href="#" className={classnames(style.header_btn, main.text_secondary, main.flex)}>
        <ProfileIcon type="secondary" />
        <span className="ml-2">Личный кабинет</span>
      </a>
    </header>
  );
};

export default AppHeader;