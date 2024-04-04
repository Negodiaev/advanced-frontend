import { useState } from 'react';

export function useInput(initialValue: string) {
  const [value, setValue] = useState<string>(initialValue);

  const handleChange = (val: string) => {
    setValue(val);
  };

  return { value, handleChange };
}
