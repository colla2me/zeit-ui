import React, {useState, useEffect, useRef} from 'react'
import {createScopedClasses, classes} from 'utils/classes';
import "./avatar.styl";

type AvatarSize = 'small' | 'medium' | 'big' | 'huge';
type AvatarShape = 'circle' | 'square';

const componentName = 'avatar';
const sc = createScopedClasses(componentName);

interface IProps {
  stacked: boolean;
  src?: string;
  text?: string;
  size: AvatarSize;
  shape: AvatarShape;
}

export const Avatar = React.memo((props: IProps = {
  stacked: false,
  size: 'small',
  shape: 'circle'
}) => {

  const [ready, setReady] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    imgRef?.current?.complete && setReady(true);
  }, []);

  const hasLink: boolean = !!props.src
  const isSingleText: boolean = props.text != null && props.text.length === 1;

  return (
    <span className={classes(sc('', isSingleText && 'single', props.stacked && 'stacked'), props.shape, props.size)}>
      {hasLink ? 
        (<img 
          ref={imgRef} 
          key={props.src} 
          src={props.src}
          draggable={true}
          onLoad={() => setReady(true)}
          className={classes(ready && 'ready')}
        />) : (
          <span className={classes(sc('string'))}>{props.text}</span>
        )
      }
    </span>
  )
})

export default Avatar;