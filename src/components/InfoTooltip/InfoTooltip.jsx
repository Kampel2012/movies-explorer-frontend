import React from 'react';
import './InfoTooltip.css';
import usePopupClose from '../hooks/usePopupClose';

const InfoTooltip = ({
  isOpen,
  onClose,
  isCompleted = false,
  infoTooltipMessage,
}) => {
  usePopupClose(isOpen, onClose);
  const classesPopup = [
    'info-popup__popup',
    isCompleted !== null && isOpen ? 'info-popup__popup_opened' : '',
  ].join(' ');

  const classesIcon = [
    'info-popup__icon',
    isCompleted
      ? 'info-popup__icon_type_success'
      : 'info-popup__icon_type_error',
  ].join(' ');

  const text = isCompleted
    ? infoTooltipMessage?.success || 'Успешно!'
    : infoTooltipMessage?.error || 'Что-то пошло не так! Попробуйте ещё раз.';

  return (
    <div className={classesPopup}>
      <div className={'info-popup__container'}>
        <div className={classesIcon}></div>
        <h2 className={'info-popup__title'}>{text}</h2>
        <button
          onClick={() => onClose()}
          type="button"
          className={'info-popup__close-btn'}
          aria-label="Закрыть"
        />
      </div>
    </div>
  );
};

export default InfoTooltip;
