import { useQuiz } from '../contexts/QuizContext';

function NextButton() {
  const { dispatch, answer, index: i, questions } = useQuiz();
  const numQuestions = questions.length;
  if (answer === null) return null;
  const type = i < numQuestions - 1 ? 'nextQuestion' : 'finish';

  return (
    <button className='btn btn-ui' onClick={() => dispatch({ type })}>
      {i < numQuestions - 1 ? 'Next' : 'Finish'}
    </button>
  );
}

export default NextButton;
