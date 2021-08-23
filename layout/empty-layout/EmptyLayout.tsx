// types
import { FC } from 'react';


const EmptyLayout: FC = ( {
    children
} ) => {

    return (
        <>
            <main className='blog-view-content'>{children}</main>
        </>
    );
}

export default EmptyLayout;