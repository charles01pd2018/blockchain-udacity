// dependencies
import Image from 'next/image';
import { useState, useRef } from 'react';
// hooks
import { useObjectState, useClickOutsideRef } from 'hooks';
// partials
import HeaderDropdown from '../headerDropdown';


const BlogEditHeader = ( { 
    id,
    content: {
        accountDropdownList,
    },
    user,
    dropdownStateName='acountDropdown',
} ) => {

    /* CONTENT */
    const { image, name } = user;

    /* HOOKS */
    const accountButtonRef = useRef( null );
    const accountDropdownRef = useRef( null );
    const [ isAccountDropdownActive, setIsAccountDropdownActive ] = useState( false );

    /* FUNCTIONS */
    const toggleAccountDropdown = () => {
        setIsAccountDropdownActive( state => !state );
    }

    const closeAccountDropdown = () => {
        setIsAccountDropdownActive( false );
    }

    useClickOutsideRef( closeAccountDropdown, 
        [ accountButtonRef, accountDropdownRef ] );


    return (
        <header id={id} className='blog-edit-header-container'>
            <div className='blog-edit-header-wrapper'>

                <div className='account-wrapper'>
                    <button ref={accountButtonRef} className='account-button-wrapper'
                        onClick={toggleAccountDropdown}>
                        <span className='account-name'>
                            {name}
                        </span>
                        <Image src={image} alt='profile-image'
                            className='account-image'
                            width='35' height='35' />
                    </button>
                    
                    {
                        isAccountDropdownActive && (
                            <HeaderDropdown content={ { linkList: accountDropdownList } }
                                isDropdownActive={isAccountDropdownActive} ref={accountDropdownRef} />
                        )
                    }
                </div>

            </div>
        </header>
    );
}

export default BlogEditHeader;