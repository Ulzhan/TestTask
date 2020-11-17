import { HTMLAttributes } from 'react';
import { Layout } from 'src/types/Layout';
import { ShipProps } from 'src/types/ShipProps';

export type Props = Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  readonly shipTypes: Record<string, ShipProps>;
  readonly layouts: ReadonlyArray<Layout>;
  readonly onChange?: (text: string) => void;
};
