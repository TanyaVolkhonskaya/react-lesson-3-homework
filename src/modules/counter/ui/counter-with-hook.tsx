import { useCounter } from '../hooks/use-counter';
import styles from './counter-with-hook.module.css';

export const CounterWithHook = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div className={styles.counter}>
      <h3 className={styles.title}>Counter with Hook</h3>
      <div className={styles.display}>Count: {count}</div>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={decrement}>
          -1
        </button>
        <button className={styles.button} onClick={reset}>
          Сброс
        </button>
        <button className={styles.button} onClick={increment}>
          +1
        </button>
      </div>
    </div>
  );
};