import { useMutation } from "@apollo/client";
import { gql } from '@apollo/client';


// updates individual BlogPost based on given ID
// if the BlogPost dosen't exist, create it
const updateBlogPost = ( input ) => {
    /* DATA */
    const { blocksInput, blogPostInput } = input;

    const BLOG_POST = gql`
        mutation UpdateBlogPost($input: BlogPostInput) {
            blogPost(input: $input) {
                _id
                blocks
            }
        }
    `;

    return useMutation( BLOG_POST, {
        variables: { input: { blocksInput, blogPostInput } },
    } )
}

export {
    updateBlogPost,
};