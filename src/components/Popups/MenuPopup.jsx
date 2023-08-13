import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './MenuPopup.css';
import iconMain from './../../images/icon__COLOR_icon-main.svg';

const MenuPopup = ({ isOpen, onClose }) => {
  const links = [
    { title: 'Главная', path: '/' },
    { title: 'Фильмы', path: '/movies' },
    { title: 'Сохраненные фильмы', path: '/saved-movies' },
  ];

  const { pathname } = useLocation();
  const isActive = (path) => pathname === path;

  return (
    <div className={`menu-popup ${isOpen ? 'menu-popup_opened' : ''}`}>
      <div
        className={`menu-popup__overlay ${
          isOpen ? 'menu-popup__overlay_open' : ''
        }`}
        onClick={onClose}></div>
      <div
        className={`menu-popup__content ${
          isOpen ? 'menu-popup__content_active' : ''
        }`}>
        <button
          className="menu-popup__close-btn"
          onClick={onClose}
          title="close"
        />
        <ul className="menu-popup__links">
          {links.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className={`menu-popup__link ${
                  isActive(link.path) ? 'menu-popup__link_active' : ''
                }`}>
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>

        <NavLink to="/profile" className="menu-popup__account-link">
          Аккаунт
          <img
            src={iconMain}
            alt="Переход на страницу профиля"
            className="menu-popup__icon"
          />
        </NavLink>
      </div>
    </div>
  );
};

export default MenuPopup;
