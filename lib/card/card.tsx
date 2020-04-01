import * as React from 'react';
import {createScopedClasses, classes} from 'utils/classes';
import "./card.styl";

const componentName = 'card';
const sc = createScopedClasses(componentName);

interface IProps {
  hoverable: boolean;
}

const Card: ZFC<IProps> = (props) => {
  return (
    <div className={classes(sc('', props.hoverable && 'hoverable'))}>
      {props.children}
    </div>
  )
}

Card.displayName = componentName;
export default Card;