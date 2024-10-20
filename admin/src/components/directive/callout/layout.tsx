import React from 'react';

import {clsx} from 'clsx';

import {Flex} from '@strapi/design-system';
import {MarkdownCalloutProps} from './type';

type Props = MarkdownCalloutProps & {
  className: string;
  icon: React.ReactNode;
};

export const MarkdownCalloutLayout = ({children, className, icon}: Props) => {
  return (
    <Flex
      gap={'.25rem'}
      direction={'column'}
      alignItems={'flex-start'}
      className={clsx(
        'gap-1 rounded-lg p-1.5 shadow-border lg:flex-row',
        className
      )}
    >
      {icon}
      {children}
    </Flex>
  );
};
