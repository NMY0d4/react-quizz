import NextButton from './NextButton';
import Timer from './Timer';

function Footer({ dispatch, answer, i, numQuestions }) {
  return (
    <footer>
      <Timer />
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
