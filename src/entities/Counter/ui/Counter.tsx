import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export function Counter() {
  const { t } = useTranslation('counter');
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div data-testid="counter">
      <h1 data-testid="counter_title">{counterValue}</h1>
      <button data-testid="counter_increment-btn" onClick={increment}>{t('increment')}</button>
      <button data-testid="counter_decrement-btn" onClick={decrement}>{t('decrement')}</button>
    </div>
  );
}
