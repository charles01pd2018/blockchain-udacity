// components / layout
import { BlogEditHeader } from '../../components/layout';
// types
import { FC } from 'react';
import { User } from '../../types';

/* TYPES */
// interface Content {

// };

// interface BlogEditLayoutProps {
//     content: Content;
//     user: User;
// };

const BlogEditLayout = ( { 
    children,
    content: {
       blogEditHeaderContent, 
    },
    user,
} ) => {

    return (
        <>
            <BlogEditHeader id='blog-edit-header' content={blogEditHeaderContent} user={user}  />
            <main className='blog-edit-content'>{children}</main>
        </>
    );
}

export default BlogEditLayout;