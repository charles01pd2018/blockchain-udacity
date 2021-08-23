// dependencies
import classNames from 'classnames';
// types
import { MouseEvent } from 'react';

/* TYPES */
interface Content {
    text: string;
}

interface ButtonProps {
    className?: string;
    content: Content;
    onClick: ( event: MouseEvent<HTMLButtonElement> ) => void;
    type?: 'button' | 'submit' | 'reset';
}

// 
const Button = ( {
    className,
    content: {
        text,
    },
    onClick,
    type='button',
}: ButtonProps ) => {

    /* CLASSNAMES */
    const buttonClasses = classNames( 'button-wrapper', className );

    return (
        <button className={buttonClasses} onClick={onClick} type={type}>
            {text}
        </button>
    );
}

export default Button;