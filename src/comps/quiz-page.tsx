import React, { FC } from 'react';

import '../style.scss';

type Question = typeof questions[0];

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: [
      'приложение',
      'часть приложения или страницы',
      'то, что я не знаю что такое',
    ],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

const Result: FC<{
  questionsCount: number;
  correctAnswersCount: number;
  againFunc: () => void;
}> = ({ questionsCount, correctAnswersCount, againFunc }) => {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        Вы отгадали {correctAnswersCount} ответа из {questionsCount}
      </h2>
      <button onClick={() => againFunc()}>Попробовать снова</button>
    </div>
  );
};

const Game: FC<{
  percent: number;
  question?: Question;
  onClickVarinant: (number) => void;
}> = ({ percent, question, onClickVarinant }) => {
  return (
    question && (
      <>
        <div className="progress">
          <div
            style={{ width: `${percent}%` }}
            className="progress__inner"
          ></div>
        </div>
        <h1>{question.title}</h1>
        <ul>
          {question.variants.map((text, index) => (
            <li key={text} onClick={(e) => onClickVarinant(index)}>
              {text}
            </li>
          ))}
        </ul>
      </>
    )
  );
};

export const QuizPage: FC = () => {
  const [step, setStep] = React.useState(() => 0);
  console.log(step);

  /*const [question, setQuestion] = React.useState<Question>(questions[step]); // не сработает 
  //React.useEffect(() => {
    //чтобы побороть не сработает
    //Too many re-renders. React limits the number of renders to prevent an infinite loop.
    console.log('EFFECT');
    setQuestion(questions[step]);
  });*/

  const question = questions[step];

  const [correct, setCorrect] = React.useState(0);

  const isAnswerCorrext = (answerInd: number) => {
    return question.correct == answerInd;
  };

  const clickVariant = (index: number) => {
    //console.log(step, index);
    isAnswerCorrext(index) && setCorrect(correct + 1);
    setStep((prev) => ++prev);
    //setStep(step + 1);
  };

  const again = () => {
    setStep(0);
    setCorrect(0);
  };

  return (
    <div className="App">
      {step < questions.length ? (
        <Game
          percent={Math.round((step / questions.length) * 100)}
          question={question}
          onClickVarinant={clickVariant}
        />
      ) : (
        <Result
          correctAnswersCount={correct}
          questionsCount={questions.length}
          againFunc={again}
        />
      )}
    </div>
  );
};

//export default QuizPage;
