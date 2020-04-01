import * as React from 'react';
import {Card, Avatar} from 'lib/index';
import './avatar.styl';

export default function (props: any) {
  return (
    <Card hoverable={true}>
      <div className={'ex-container'}>
        <Avatar src={'https://zeit.co/api/www/avatar/?u=evilrabbit&s=240'} stacked={false} size={'small'} shape={'circle'}/>
        <Avatar src={'https://zeit.co/api/www/avatar/?u=evilrabbit&s=240'} stacked={false} size={'medium'} shape={'circle'}/>
        <Avatar src={'https://zeit.co/api/www/avatar/?u=evilrabbit&s=240'} stacked={false} size={'big'} shape={'square'} text={'djkdhdasjdhsjdh'}/>
      </div>
    </Card>
  );
}