import { useState } from 'react';

// functions returns an objectState with 'length' key-value pairs
// object will have `variableName${index}` keys and 'initialState' values
const useObjectState = ( length, initialState, variableName ) => {
    let stateObject = {};
    for ( let i =0; i < length; i++ ) {
        stateObject[ variableName + i ] = initialState;
    }

    return useState( stateObject );
}

export default useObjectState;