// dependencies
import classNames from 'classnames';
import Link from 'next/link';
import { forwardRef, RefObject } from 'react';
// elements
import { SVG } from '../../elements';

/* TYPES */
// interface Content {
//     linkList: any[];
// }

// interface HeaderDropdownProps {
//     className: string;
//     content: Content;
//     isDropdownActive: boolean;
// }

const HeaderDropdown = forwardRef( ( { 
    className,
    content: {
        linkList,
    },
    isDropdownActive,
}, ref ) => {

    /* CLASSNAMES */
    const headerDropdownClasses = classNames( 'header-dropdown-wrapper popup', className,
        isDropdownActive ? 'active' : 'not-active' );


    return (
        <div className='header-dropdown-container'>
            <nav ref={ref} className={headerDropdownClasses}>
                {
                    linkList.map( ( { text, href, icon } ) => {
                        /* CONTENT */
                        const { path, alt } = icon;
                        return (
                            <div key={text} className='header-dropdown-link-wrapper link-hover'>
                                {
                                     isDropdownActive && (
                                        <Link href={href}>
                                            <a className='header-dropdown-link'>
                                                <SVG className='header-dropdown-link-icon'
                                                    data={path}
                                                    alt={alt}
                                                    width='35'
                                                    height='35' />
                                                <div className='header-dropdown-link-text'>
                                                    {text}
                                                </div>
                                            </a>
                                        </Link>
                                    )
                                }
                            </div>
                        )
                    } )
                }
            </nav>
        </div>
    );
} );

export default HeaderDropdown;