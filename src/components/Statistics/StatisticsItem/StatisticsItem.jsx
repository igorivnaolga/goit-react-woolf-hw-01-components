import styles from './StatisticsItem.module.css';

function StatisticsItem({ label, percentage }) {
  return (
    <li className={styles.item}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
}

export default StatisticsItem;
