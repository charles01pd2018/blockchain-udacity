// dependencies
import classNames from 'classnames';
import { signIn } from 'next-auth/client';

/* TYPES */
interface SigninButtonProps {
    className?: string;
    buttonType: 'Github'; // only one supported as of now
}

const SigninButton = ({
    className,
    buttonType
}: SigninButtonProps ) => {

    const lowerCaseButtonType = buttonType.toLowerCase();

    /* CLASSNAMES */
    const signInButtonClasses = classNames(`signin-button ${lowerCaseButtonType}-button`, className );

    return (
        <button className={signInButtonClasses} onClick={ () => { signIn( lowerCaseButtonType ) } }>
            {buttonType}
        </button>
    );
}

export default SigninButton;