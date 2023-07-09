import NextButton from './NextButton';
import Timer from './Timer';

function Footer({ dispatch, answer, i, numQuestions, secondsRemaining }) {
  return (
    <footer>
      <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
      <NextButton
        dispatch={dispatch}
        answer={answer}
        i={i}
        numQuestions={numQuestions}
      />
    </footer>
  );
}

export default Footer;
