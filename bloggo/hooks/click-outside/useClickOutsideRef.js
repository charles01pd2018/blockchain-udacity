// dependencies
import { useEffect, useRef } from "react";
// partials
import escapeKey from './escapeKey';

// function does either of the following:
// 1 - returns a ref with an onClick function attached as an EventListener
// 2 - adds an onClick function to an existing refList, returns null
// if escape is disabled, than pressing the escape key will not close
const useClickOutsideRef = ( onClick, refList, escape=true ) => {

    let ref;
    let clickOutside;

    if ( !refList ) {
        ref = useRef( null );
        
        clickOutside = ( event ) => {
            if ( !ref.current ) return;
            if ( ref.current.contains( event.target ) ) return;
            onClick();
        }
    } else {
        clickOutside = ( event ) => {
            let isFocused;
            for ( const ref of refList ) {
                // when you navigate to a new page, for some reason a nullish ref gets added to the beginning of the refList
                if ( !ref.current ) continue;
                if ( !ref.current ) isFocused = true;
                if ( ref.current.contains( event.target ) ) isFocused = true;
            }
            if ( !isFocused ) onClick()
        }   
    }

    useEffect( () => {
        document.addEventListener( 'mousedown', clickOutside );
        document.addEventListener( 'touchstart', clickOutside );
        if ( escape ) document.addEventListener( 'keydown', ( event ) => escapeKey( event, onClick ) );
        return () => {
            document.removeEventListener( 'mousedown', clickOutside );
            document.removeEventListener( 'touchstart', clickOutside );
            if ( escape ) document.removeEventListener( 'keydown', ( event ) => escapeKey( event, onClick ) );
        }
    }, [] );  

    return ref;
}

export default useClickOutsideRef;