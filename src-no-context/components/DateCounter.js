import { useReducer } from 'react';

const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  const { type, payload } = action;
  const { count, step } = state;

  switch (type) {
    case 'inc':
      return { ...state, count: count + step };
    case 'dec':
      return { ...state, count: count - step };
    case 'setCount':
      return { ...state, count: payload };
    case 'setStep':
      return { ...state, step: payload };
    case 'resetState':
      return initialState;

    default:
      throw new Error('reducer error');
  }
}

function DateCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  // This mutates the date object.
  const date = new Date('june 21 2027');
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: 'dec' });
  };

  const inc = function () {
    dispatch({ type: 'inc' });
  };

  const defineCount = function (e) {
    dispatch({ type: 'setCount', payload: +e.target.value });
  };

  const defineStep = function (e) {
    dispatch({ type: 'setStep', payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: 'resetState' });
  };

  return (
    <div className='counter'>
      <div>
        <input
          type='range'
          min='0'
          max='10'
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
