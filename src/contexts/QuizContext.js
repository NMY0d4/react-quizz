import { createContext, useContext, useReducer } from 'react';

const QuizContext = createContext();

const quizInitialState = {};

function quizReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case '':
      break;

    default:
      throw new Error('Unknown action(quizReducer)');
      break;
  }
}

function QuizProvider({ children }) {
  const [{}, dispatch] = useReducer(quizReducer, quizInitialState);

  return <QuizContext.Provider value={{}}>{children}</QuizContext.Provider>;
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error('QuizContext was used outside QuizProvider');
}

export { QuizProvider, useQuiz };
