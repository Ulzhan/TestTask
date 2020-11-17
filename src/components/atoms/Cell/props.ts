import { HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLDivElement> & {
  readonly empty?: boolean;
  readonly occupied?: boolean;
};
