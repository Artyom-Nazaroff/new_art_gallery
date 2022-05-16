import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import '../../App.scss';
import FooterIcons from '../FooterIcons/FooterIcons';

const cn = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={cn('footer')}>
      <div className={cn('footer__container', 'container')}>
        <div className={cn('footer__textContainer')}>
          <div className={cn('footer__text')}>
            Проект реализован в рамках стажировки
            <br /> для Frontend-разработчиков от компании
            <a href="https://framework.team/"> Framework Team</a>
          </div>
          <div className={cn('footer__developer')}>Назаров Артём, 2022</div>
        </div>
        <FooterIcons />
      </div>
    </footer>
  );
};

export default Footer;