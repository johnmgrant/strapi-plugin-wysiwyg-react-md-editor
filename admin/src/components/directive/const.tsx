import styled from 'styled-components';

import {Options as ReactMarkdownOptions} from 'react-markdown';

import {MarkdownCalloutAlert, AlertIcon} from './callout/alert';
import {MarkdownCalloutInfo, InfoIcon} from './callout/info';
import {MarkdownCalloutWarning, WarningIcon} from './callout/warning';
import {MarkdownCalloutSection} from './callout/section';

export const customCommands = ['info', 'warning', 'alert', 'section'] as const;
export const customCommandIconMap = {
  info: <InfoIcon />,
  warning: <WarningIcon />,
  alert: <AlertIcon />,
  section: (
    <svg
      width='12'
      height='12'
      viewBox='0 0 20 20'
    >
      <path
        fill='currentColor'
        d='M4 4h12v12H4z'
      ></path>
    </svg>
  ),
};

export const remarkDirectiveComponents: NonNullable<
  ReactMarkdownOptions['components']
> = {
  // @ts-ignore: None of the tag name below are valid, but this is exactly what is needed
  // > custom HTML tag gets changed into React component by passing this in `components` of `<ReactMarkdown/>`
  info: MarkdownCalloutInfo,
  warning: MarkdownCalloutWarning,
  alert: MarkdownCalloutAlert,
  section: MarkdownCalloutSection,
};
