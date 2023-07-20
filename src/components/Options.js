import { useQuiz } from '../contexts/QuizContext';

function Options() {
  const { question, dispatch, answer } = useQuiz();
  const hasAnswered = answer !== null;
  return (
    <div className='options'>
      {question.options.map((option, i) => (
        <button
          key={option}
          disabled={answer !== null}
          onClick={() => dispatch({ type: 'newAnswer', payload: i })}
          className={`btn btn-option ${i === answer ? 'answer' : ''} ${
            hasAnswered
              ? i === question.correctOption
                ? 'correct'
                : 'wrong'
              : ''
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
