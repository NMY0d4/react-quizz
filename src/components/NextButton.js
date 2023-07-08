function NextButton({ dispatch, answer, i, numQuestions }) {
  if (answer === null) return null;
  const type = i < numQuestions - 1 ? 'nextQuestion' : 'finish';

  return (
    <button className='btn btn-ui' onClick={() => dispatch({ type })}>
      {i < numQuestions - 1 ? 'Next' : 'Finish'}
    </button>
  );
}

export default NextButton;
