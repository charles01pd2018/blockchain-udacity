// dependencies
import Link from 'next/link';
import classNames from 'classnames';
// types
import { Href } from '../../../types';

/* TYPES */
interface Content {
    text: string;
}

interface LinkButtonProps {
    className?: string;
    content: Content;
    href: Href;
}

const LinkButton = ( {
    className,
    content: {
        text,
    },
    href,
}: LinkButtonProps ) => {

    /* CLASSNAMES */
    const linkButtonClasses = classNames( 'link-button-wrapper', className );

    return (
        <Link href={href}> 
            <a className={linkButtonClasses}>
                {text}
            </a>
        </Link>
    );
}

export default LinkButton;