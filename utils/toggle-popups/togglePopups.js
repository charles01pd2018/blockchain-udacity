/*
    THIS FUNCTION ONLY WORKS WITH STATES THAT ARE BOOLEANS
    Toggles targetted popup ( focusedPopupName ) and sets all key:value pairs in the setStateObject to the defaultState
    If a focusedPopupName is not specified, all popups will be set to the defaultState
*/
//  [ list of custom setStates ], setStateObject, focusedPopupName: string, defaultState: any=false
const togglePopups = ( setStateList, setStateObject, focusedPopupName='', defaultState=false ) => {
    // set all custom setStates to defaulState
    if ( setStateList ) {
        setStateList.forEach( ( setState ) => {
            setState( defaultState );
        } );
    }

    if ( setStateObject ) {
        setStateObject( ( state ) => {
            const newPopupStateObject = {};
            Object.keys( state ).forEach( ( key ) => {
                // if a focused popupName is provided, toggle it
                if ( key === focusedPopupName ) newPopupStateObject[ key ] = !state[ key ];
                // otherwise, set key:value pair to the defaultState
                else newPopupStateObject[ key ] = defaultState;
            } );
    
            return newPopupStateObject;
        } );
    }
}

export default togglePopups;