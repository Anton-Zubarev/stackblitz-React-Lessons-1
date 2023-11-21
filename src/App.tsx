import React, { FC } from 'react';
import { QuizPage } from './comps/quiz-page';
import { Modal } from './comps/modal';

import './style.scss';
import { InviteToUsersPage } from './comps/InviteToUsers/invite-to-users-page';

export const App: FC = () => {
  const [openQuiz, setOpenQuiz] = React.useState(false);
  const [openGif, setOpenGif] = React.useState(false);
  const [openUsers, setOpenUsers] = React.useState(false);

  return (
    <div>
      <button onClick={() => setOpenQuiz(true)} className="open-modal-btn">
        ✨ Открыть Quiz
      </button>
      <br />
      <br />
      <button onClick={() => setOpenGif(true)} className="open-modal-btn">
        ✨ Открыть с гифкой
      </button>
      <br />
      <br />
      <button
        onClick={() => setOpenUsers(!openUsers)}
        className="open-modal-btn"
      >
        ✨ Пользователи
      </button>

      <Modal title="QUIZ" open={openQuiz} setOpen={setOpenQuiz}>
        <QuizPage />
      </Modal>
      <Modal title="GIF" open={openGif} setOpen={setOpenGif}>
        <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
      </Modal>
      <br />
      <br />
      {openUsers && <InviteToUsersPage />}
    </div>
  );
};
