import { MouseEvent } from 'react';

// for update: event: React.ChangeEvent - for submit: event: React.FormEvent - for click: event: React.MouseEvent
type OnClick = ( event: MouseEvent ) => void;

export default OnClick;