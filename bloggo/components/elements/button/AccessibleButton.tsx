// dependencies
import classNames from 'classnames';
// types
import { FC } from 'react';
import { EventFunction, OnKeyDown } from 'types';


/* TYPES */
interface AccessibleButtonProps {
    className?: string;
    onClick: EventFunction;
    onKeyDown?: OnKeyDown;
    type?: 'button';
    ariaPressed: boolean;
    ariaHasPopup: boolean;
    ariaLabel: string;
    styled: boolean;
}   

const AccessibleButton: FC<AccessibleButtonProps> = ( { 
    children, // this can be an icon or anything more than text
    className,
    onClick,
    onKeyDown,
    type='button',
    ariaPressed,
    ariaHasPopup=true,
    ariaLabel,
    styled=false,
} ) => {

    if ( !onKeyDown ) onKeyDown = onClick;

    /* CLASSNAMES */
    const buttonClasses = classNames( styled && 'button-wrapper', className );

    return (
        <button className={buttonClasses} onClick={onClick} onKeyDown={onKeyDown} type={type} 
            aria-pressed={ariaPressed} aria-haspopup={ariaHasPopup} aria-label={ariaLabel}>
            {children}
        </button>
    );
}

export default AccessibleButton;