import { useEffect, useReducer } from 'react';
import Header from './Header';
import Main from './Main';
import Loader from './Loader';
import Error from './Error';
import StartScreen from './StartScreen';
import Question from './Question';
import NextButton from './NextButton';
import Progress from './Progress';

const initialState = {
  questions: [],
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
};

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case 'dataReceived':
      return { ...state, questions: payload, status: 'ready' };
    case 'dataFailed':
      return {
        ...state,
        status: 'error',
      };
    case 'start':
      return { ...state, status: 'active' };
    case 'newAnswer':
      const { correctOption, points } = state.questions.at(state.index);
      return {
        ...state,
        answer: payload,
        points:
          payload === correctOption ? state.points + points : state.points,
      };
    case 'nextQuestion':
      return { ...state, index: state.index + 1, answer: null };

    default:
      throw new Error('Action unknown');
  }
}

export default function App() {
  const [{ questions, status, index, answer, points }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const numQuestions = questions.length;
  const maxPoints = questions.reduce(
    (maxPoints, q) => +q.points + maxPoints,
    0
  );
  console.log(maxPoints);

  useEffect(function () {
    fetch('http://localhost:9000/questions')
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'dataReceived', payload: data }))
      .catch((err) => dispatch({ type: 'dataFailed' }));
  }, []);

  return (
    <div className='app'>
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === 'active' && (
          <>
            <Progress
              numQuestions={numQuestions}
              i={index}
              points={points}
              maxPoints={maxPoints}
              answer={answer}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <NextButton dispatch={dispatch} answer={answer} />
          </>
        )}
      </Main>
    </div>
  );
}
