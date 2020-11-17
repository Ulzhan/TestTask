import React, { FC, useCallback, useState } from 'react';

import { CellBase } from './libs/CellBase';
import { Props } from './props';

export const Cell: FC<Props> = ({
  empty,
  occupied,
  onClick: propsOnClick,
  children,
  ...rest
}: Props) => {
  const [hit, setHit] = useState(false);
  const [miss, setMiss] = useState(false);
  const onCellClick = useCallback(
    (e) => {
      if (!miss && !hit && !empty) {
        occupied ? setHit(true) : setMiss(true);
        propsOnClick && propsOnClick(e);
      }
    },
    [empty, hit, miss, occupied, propsOnClick],
  );
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div className="col-1 px-0" role="button" tabIndex={0} onClick={onCellClick} {...rest}>
      <CellBase color={empty ? 'white' : hit ? 'red' : miss ? 'cadetblue' : 'grey'}>
        {children}
      </CellBase>
    </div>
  );
};
