import * as React from 'react';
import {CSSProperties} from 'react';
import 'stylesheets/reset.scss';

declare global {
  interface ZeitFunctionComponent<P = {}> extends React.FunctionComponent<P> {
    displayName: string;
    propTypes?: any;
  }

  interface IStyledProps {
    className?: string;
    style?: CSSProperties;
  }

  type ZFC<P = {}> = ZeitFunctionComponent<P>;

  type ClassValue = string | string[] | { [k: string]: any } | undefined | false | null;
}

export {default as Icon} from './icon/icon';