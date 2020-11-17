import React, { FC, useCallback, useState } from 'react';
import { BattleGrid } from 'src/components/molecules/BattleGrid';

import { layouts, shipTypes } from './mock';
import { Props } from './props';

export const BattleArea: FC<Props> = ({ ...rest }: Props) => {
  const [text, setText] = useState('');
  const onShot = useCallback((text: string) => setText(text), []);
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center w-100 h-100"
      {...rest}
    >
      <p className="font-weight-bold">{text}</p>
      <BattleGrid shipTypes={shipTypes} layouts={layouts} onChange={onShot} />
    </div>
  );
};
