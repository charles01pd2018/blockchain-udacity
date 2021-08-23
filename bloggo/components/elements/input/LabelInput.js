// dependencies
import classNames from 'classnames';
import { forwardRef, useEffect } from 'react';
// types
import { FormEvent, RefObject } from 'react';

/* TYPES */
// interface Content {
//     labelText: string;
//     inputPlaceholder: string;
// }

// interface LabelInputProps {
//     className?: string;
//     content: Content;
//     labelClassName?: string;
//     htmlFor: string;
//     inputClassName?: string;
//     inputType: 'text';
//     onInput: ( event: FormEvent<HTMLInputElement> ) => void;
//     inputName: string;
// }

const LabelInput = forwardRef( ( { 
    className,
    content: {
        labelText,
        inputPlaceholder,
    },
    labelClassName,
    htmlFor,
    inputClassName,
    inputType='text',
    onInput,
    inputName,
    onEnterKey,
    inputAutoComplete='off'
}, ref ) => {

    /* CLASSNAMES */
    const labelInputClasses = classNames( 'label-input-wrapper', className );
    const labelClasses = classNames( 'label-wrapper', labelClassName );
    const inputClasses = classNames( 'input-wrapper', inputClassName );

    useEffect( () => {
        if ( ref?.current != null ) ref.current.addEventListener( 'keypress', ( event ) => onEnterKey( event, ref ) );
        return () => {
            if ( ref?.current != null ) ref.current.removeEventListener( 'keypress', ( event ) => onEnterKey( event, ref ) );
        }
    }, [] );

    return (
        <div className={labelInputClasses}>
            <label htmlFor={htmlFor} className={labelClasses}>
                <h3>{labelText}</h3>
            </label>
            <input id={htmlFor} ref={ref} className={inputClasses}
                type={inputType}
                onInput={onInput}
                placeholder={inputPlaceholder}
                name={inputName}
                autoComplete={inputAutoComplete} />
        </div>
    );
} );

export default LabelInput;