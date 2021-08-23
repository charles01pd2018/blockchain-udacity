// types
import { KeyboardEvent } from 'react';

const escapeKey = ( event: KeyboardEvent, onClick: () => null ) => {
    if ( event.key === 'Escape' ) onClick();
}

export default escapeKey;