function Progress({ i, numQuestions, points, maxPoints, answer }) {
  return (
    <header className='progress'>
      <progress max={numQuestions} value={i + Number(answer !== null)} />
      <p>
        Question{' '}
        <strong>
          {i + 1} / {numQuestions}
        </strong>
      </p>

      <p>
        {points} / {maxPoints}
      </p>
    </header>
  );
}

export default Progress;
