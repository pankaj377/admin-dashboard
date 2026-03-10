import styles from '../styles/StatsCard.module.css';
import { TrendingUp, TrendingDown } from 'lucide-react';

const StatsCard = ({ title, value, icon:  trend, percent }) => {
  const isPositive = trend === 'up';

  return (
    <div className="card">
      <div className="content">
        <p className="title">{title}</p>
        <h3 className="value">{value}</h3>
        <div className={`${styles.trend} ${isPositive ? styles.up : styles.down}`}>
          {isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
          <span>{percent}%</span>
          <small> vs last month</small>
        </div>
      </div>
      <div className={styles.iconWrapper}>
        <Icon size={24} />
      </div>
    </div>
  );
};

export default StatsCard;