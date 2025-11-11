import { useCounterContext } from '../hooks/use-counter-context';
import styles from './counter-with-context.module.css';

export const CounterWithContext = () => {
  const { count, increment, decrement, reset } = useCounterContext();

  return (
    <div className={styles.counter}>
      <h3 className={styles.title}>Counter with Context</h3>
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