import React, { useEffect, useState } from 'react';
import ToastCard from './ToastCard';
import COLLAPSE_ICON from '../assets/icons/arrow-up.png';
import CLOSE_ICON from '../assets/icons/close.png';
import './Toast.css';

const Toast = (props: any) => {
  const { notifications } = props;
  const [toasts, setToasts] = useState([]);
  const totalNotifications = toasts?.length;
  const [isOpened, setIsOpened] = useState(totalNotifications === 1);

  const toggleToast = () => {
    setIsOpened(prev => !prev);
  };

  const handleCardOnClick = (cardIndex: number) => {
    if (cardIndex === 0 && !isOpened) {
      // expand all
      toggleToast();
    }
  };

  const handleCardOnDismiss = (cardIndex: number) => {
    if (cardIndex > -1) {
      setToasts(prev => prev.filter((item, index) => index !== cardIndex));
    }
  };

  const handleDismissAllToasts = () => {
    setToasts([]);
  }

  useEffect(() => {
    if (notifications) {
      setToasts(notifications);
    }

  }, [notifications]);

  return totalNotifications
    ? <div className='toast-container'>
      {totalNotifications > 1 ? (
        <div className="toast-actions">
          {isOpened ? (
            <button className="toast-actions__collapse-button" onClick={toggleToast}>
              <img className="toast-actions__collapse-icon" src={COLLAPSE_ICON} alt="collapse" />
              Show Less
            </button>
          ) : (
            <button className="toast-actions__collapse-button" onClick={toggleToast}>
              <img className="toast-badge-icon" src={COLLAPSE_ICON} alt="collapse" />
              {totalNotifications} More
            </button>
          )}
          <button className="toast-actions__dismiss-button" onClick={handleDismissAllToasts}>
            <img className="toast-actions__dismiss-icon" src={CLOSE_ICON} alt="dismiss all" />
          </button>
        </div>
      ) : null}
      <div className='toast-item_container'>
        {
          toasts.map(({ title, icon, message }: any, index: number) => (
            <ToastCard
              key={index}
              cardIndex={index}
              icon={icon}
              title={title}
              message={message}
              isOpen={isOpened}
              multiple={totalNotifications > 1}
              onClick={handleCardOnClick}
              onDismiss={isOpened ? handleCardOnDismiss : null}
            />
          ))
        }
      </div>
    </div>
    : null;
};

export default Toast;
