import { useQuery } from "@apollo/client";
import { gql } from '@apollo/client'


// common blog post details for queries
const BLOG_POST_DETAILS = gql`
    fragment BlogPostDetails on BlogPost {
        _id
        user
        title
        tags
        publicationDate
    }
`;

// gets BlogPost array for preview page
const getBlogPostList = () => {
    /* SCHEMA */
    const BLOG_POST_LIST = gql`
        query GetBlogPostList {
            blogPostList {
                preview
                blocksID
                ...BLOG_POST_DETAILS
            }
        }
        ${BLOG_POST_DETAILS}
    `;

    return useQuery( BLOG_POST_LIST );
}

// gets individual BlogPost to view based on ID
// if i fetch this with a direct url input there is going to be problems
const getBlogPost = ( _id: string ) => {
    /* SCHEMA */
    const BLOG_POST = gql`
        query GetBlogPost($input: BlogPostInput) {
            blogPost(input: $input) {
                blocks
                ...BLOG_POST_DETAILS
            }
        }
        ${BLOG_POST_DETAILS}
    `;

    return useQuery( BLOG_POST, { 
        variables: { input: { _id } },
    } );
}

export {
    getBlogPost,
    getBlogPostList,
};