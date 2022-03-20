import classNames from 'classnames';
import TRASH_ICON from '../assets/icons/delete.png';

type ToastCardType = {
  title: string,
  message: string,
  icon?: any,
  multiple?: boolean,
  isOpen: boolean,
  cardIndex: number,
  onClick: ((cardIndex: number) => void) | null,
  onDismiss?: ((cardIndex: number) => void) | null,
}

const ToastCard = (props: ToastCardType) => {
  const { cardIndex, onClick, onDismiss, title, message, icon, isOpen, multiple } = props;
  const handleOnDismiss = (event: any) => {
    event.stopPropagation();
    if (onDismiss) {
      onDismiss(cardIndex);
    }
  };

  const handleOnClick = (event: any) => {
    event?.stopPropagation();
    if (onClick) {
      onClick(cardIndex);
    }
  }

  return (
    <div
      className={classNames('toast-card', {
        'expanded': isOpen,
        'multiple': multiple
      })}
      onClick={handleOnClick}
    >
      {icon ? (
        <div className="toast-card__icon-container">
          <img className="toast-card__icon" src={icon} alt="icon" />
        </div>
      ) : null}
      <div className="toast-card__content">
        <h3 className="toast-card__title">
          {title}
          {onDismiss ? (
            <button className="toast-card__dismiss-button" onClick={handleOnDismiss}>
              <img className="toast-card__dismiss-icon" src={TRASH_ICON} alt="icon" />
            </button>
          ) : null}
        </h3>
        <div className="toast-card__message">
          {message}
        </div>
      </div>
    </div >
  );
};

export default ToastCard;
