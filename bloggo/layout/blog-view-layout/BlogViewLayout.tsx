// types 
import { FC } from 'react';

/* TYPES */
interface BlogViewLayoutProps {

}

const BlogViewLayout: FC<BlogViewLayoutProps> = ( {
    children
} ) => {

    return (
        <>
            <main className='blog-view-content'>{children}</main>
        </>
    );
}

export default BlogViewLayout;