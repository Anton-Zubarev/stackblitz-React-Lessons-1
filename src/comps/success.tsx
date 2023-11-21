import React from 'react';

export const Success = ({ count, back }) => {
  return (
    <div className="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <button onClick={back} className="send-invite-btn">Назад</button>
    </div>
  );
};
