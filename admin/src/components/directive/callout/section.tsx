import React from 'react';

import {Flex} from '@strapi/design-system';
import {MarkdownCalloutProps} from './type';

export const MarkdownCalloutSection = ({children}: MarkdownCalloutProps) => {
  return (
    <Flex
      gap={'.25rem'}
      direction={'column'}
      alignItems={'flex-start'}
      className='bg-plate gap-1'
    >
      {children}
    </Flex>
  );
};
