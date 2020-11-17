import React, { FC } from 'react';
import { BattleArea } from 'src/components/organisms/BattleArea';

export const BattlePage: FC = () => {
  return (
    <div className="container">
      <div className="d-flex flex-column align-items-center justify-content-center my-5">
        <p> Play Battleship</p>
        <BattleArea />
      </div>
    </div>
  );
};
