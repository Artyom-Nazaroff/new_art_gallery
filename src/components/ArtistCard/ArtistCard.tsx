import React, { FC, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './ArtistCard.module.scss';
import arrow from '../../assets/dark-theme/artist-profile/back-arrow-dt.svg';
import TextLink from '../_UI/TextLink/TextLink';
import { ThemeContext } from '../../context/themeContext';

const cn = classNames.bind(styles);

type ArtistProps = {
  name: string;
  years: string;
  picture: string;
};

const ArtistCard: FC<ArtistProps> = ({ name, years, picture }) => {
  const { theme } = useContext(ThemeContext);

  const datesOfLife = years.includes('–')
    ? years
        .split(' – ')
        .map((i) => i.slice(-4))
        .join(' – ')
    : years;

  return (
    <li
      className={cn('artist', {
        'artist--dt': theme === 'dark',
        'artist--lt': theme === 'light',
      })}
    >
      <div className={cn('artist__modalWindow')}>
        <TextLink text="know more" />
      </div>
      <div className={cn('artist__inner')}>
        <img src={`https://internship-front.framework.team/${picture}`} alt="artist_portrait" />
        <div className={cn('artist__info')}>
          <div className={cn('artist__name')}>{name}</div>
          <div className={cn('artist__datesOfLife')}>{datesOfLife}</div>
        </div>
        <div className={cn('artist__arrow')}>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </li>
  );
};

export default ArtistCard;
