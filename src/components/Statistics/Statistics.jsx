import StatisticsItem from './StatisticsItem/StatisticsItem';

import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>Upload stats</h2>}

      <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem
            key={id}
            label={label}
            percentage={percentage}
          ></StatisticsItem>
        ))}
      </ul>
    </section>
  );
};
export default Statistics;
