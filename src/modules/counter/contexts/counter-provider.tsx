import { useState } from 'react'
import type { ReactNode } from 'react'
import { CounterContext } from './counter-context';

type CounterProviderProps = {
  children: ReactNode;
};

export const CounterProvider = ({ children }: CounterProviderProps) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  const value = {
    count,
    increment,
    decrement,
    reset,
  };

  return (
    <CounterContext.Provider value={value}>
      {children}
    </CounterContext.Provider>
  );
};