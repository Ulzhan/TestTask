import React, { FC, useCallback, useMemo, useState } from 'react';
import { Cell } from 'src/components/atoms/Cell';

import { Props } from './props';

export const BattleGrid: FC<Props> = ({
  shipTypes,
  layouts,
  onChange: propsOnChange,
  ...rest
}: Props) => {
  const [shipList, setShipList] = useState(shipTypes);
  const [destroyedShips, setDestroyedShips] = useState<ReadonlyArray<string>>([]);
  const allPositions = useMemo(
    () => layouts.flatMap((n) => n.positions.map((m) => [m[0], m[1], n.ship])),
    [layouts],
  );

  const checkShipCell = useCallback(
    (i, j) => allPositions.findIndex((n) => n[0] === i && n[1] === j) > -1,
    [allPositions],
  );

  const updateAliveShips = useCallback(
    (key: string) => {
      const newShipList = {
        ...shipList,
        [key]: { size: shipList[key].size - 1, count: shipList[key].count },
      };
      setShipList(newShipList);
    },
    [shipList],
  );

  const onCellChange = useCallback(
    (i, j) => () => {
      const index = allPositions.findIndex((n) => n[0] === i && n[1] === j);
      if (index > -1) {
        const name = allPositions[index][2].toString();
        const size = (shipList[name].size as number) - 1;
        // check whether size bigger than 0, if true decrement by 1
        if (size && (size as number) > 0) {
          propsOnChange && propsOnChange('Hit!');
          updateAliveShips(name);
        } else {
          const updatedDestroyedShips =
            destroyedShips && destroyedShips.length > 0 ? [...destroyedShips, name] : [name];
          if (updatedDestroyedShips.length === Object.keys(shipList).length) {
            propsOnChange && propsOnChange(`Game is over. You Won!`);
            return;
          }
          setDestroyedShips(updatedDestroyedShips);
          propsOnChange && propsOnChange(`${name} was attacked!`);
        }
      } else {
        propsOnChange && propsOnChange('Miss!');
      }
    },
    [allPositions, destroyedShips, propsOnChange, shipList, updateAliveShips],
  );

  return (
    <div className="w-100 h-100" {...rest}>
      {new Array(11).fill(null).map((_n, i) => (
        <div key={i} className="row">
          {new Array(11).fill(null).map((_m, j) => {
            if (i === 0 && j === 0) {
              return <Cell key={`${i}-${j}`} empty />;
            }
            if (i === 0) {
              return (
                <Cell key={`${i}-${j}`} empty>
                  {j - 1}
                </Cell>
              );
            }
            if (j === 0) {
              return (
                <Cell key={`${i}-${j}`} empty>
                  {i - 1}
                </Cell>
              );
            }
            return (
              <Cell
                key={`${i}-${j}`}
                occupied={checkShipCell(j - 1, i - 1)}
                onClick={onCellChange(j - 1, i - 1)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};
