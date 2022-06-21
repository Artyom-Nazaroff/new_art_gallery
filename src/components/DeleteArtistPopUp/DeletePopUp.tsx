import React, { FC, useContext } from 'react';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import styles from './DeletePopUp.module.scss';
import '../../App.scss';
import Button from '../_UI/Button/Button';
import TextLink from '../_UI/TextLink/TextLink';
import crossDT from '../../assets/dark-theme/delete-popup/close-cross.svg';
import crossLT from '../../assets/light-theme/delete-popup/close-cross.svg';
import trashBinDT from '../../assets/dark-theme/delete-popup/trash-bin.svg';
import trashBinLT from '../../assets/light-theme/delete-popup/trash-bin.svg';
import { ThemeContext } from '../../context/themeContext';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const cn = classNames.bind(styles);

type DeletePopUpProps = {
  setDeleteOpened: (val: boolean) => void;
};

const DeletePopUp: FC<DeletePopUpProps> = ({ setDeleteOpened }) => {
  const { theme } = useContext(ThemeContext);
  const { deleteArtist } = useActions();
  const { artistProfile } = useTypedSelector((state) => state.artists);
  const navigate = useNavigate();

  const closeWindow = () => {
    setDeleteOpened(false);
    document.body.style.overflow = 'unset';
  };

  const removeArtist = () => {
    deleteArtist(artistProfile._id);
    setDeleteOpened(false);
    navigate('/new_art_gallery');
  };

  return (
    <div className={cn('wrapper', 'popupBackground')}>
      <div
        className={cn('popup', {
          'popup--dt': theme === 'dark',
          'popup--lt': theme === 'light',
        })}
      >
        <div className={cn('popup__top')}>
          <div className={cn('popup__close')}>
            <button className={cn('popup__closeBtn')} type="button" onClick={() => closeWindow()}>
              <img src={theme === 'dark' ? crossDT : crossLT} alt="" />
            </button>
          </div>
          <div className={cn('popup__trashBin')}>
            <img src={theme === 'dark' ? trashBinDT : trashBinLT} alt="" />
          </div>
        </div>
        <h2 className={cn('popup__title')}>Do you want to delete this artist profile?</h2>
        <div className={cn('popup__warning')}>
          You will not be able to recover this profile afterwards.
        </div>
        <div className={cn('popup__btn')}>
          <Button text="Delete" onClick={() => removeArtist()} />
        </div>
        <div className={cn('popup__link')}>
          <TextLink text="Cancel" onClick={setDeleteOpened} />
        </div>
      </div>
    </div>
  );
};

export default DeletePopUp;
