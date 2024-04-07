import styles from './FriendListItem.module.css';
import clsx from 'clsx';

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <li className={styles.item}>
      <span
        className={clsx(
          styles.status,
          isOnline ? styles.online : styles.offline
        )}
      ></span>

      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
