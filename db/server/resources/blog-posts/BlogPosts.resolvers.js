/* CONSTANTS */
const BLOG_POST_RESOURCE_NAME = 'blog-posts';
const BLOCKS_RESOURCE_NAME = 'blog-blocks';

/* QUERIES */
// individual BlogPost with blocks
const blogPost = async ( _, { input }, { db: { mongoDB } } ) => {
    return mongoDB.collection( BLOG_POST_RESOURCE_NAME ).find( {
        ...input, // input will contain the BlogPost _id
    } ).then( ( { ops } ) => ops[ 0 ] );
}

// BlogPost array with preview - pagination pattern
const blogPostList = async ( _, __, { db: { mongoDB }, user } ) => {
    // IMPLEMENTATION - use bucket technique to get BlogPostList associated with user 
    return mongoDB.collection( BLOG_POST_RESOURCE_NAME ).find( {
        userID: user.id,
    } )
    .sort( { updateDate: -1, interactionDate: -1, creationDate: -1 } )
    .toArray();
}

/* MUTATIONS */
// updates a BlogPost
const updateBlogPost = ( _,  { input: { blocksInput, blogPostInput } }, { db: { mongoDB } } ) => {
    const blocksUpdates = mongoDB.collection( BLOCKS_RESOURCE_NAME ).findOneAndUpdate( {
        ...blocksInput, // input wil contain the BlogPost _id along with updates
    } ).then( ( { ops } ) => ops[ 0 ] );
    // add functionality with 'upsert' to create the blogPost if none exist with inputted ID
    const blogPostUpdates = mongoDB.collection( BLOG_POST_RESOURCE_NAME ).findOneAndUpdate( 
        { ...blogPostInput }, // input wil contain the BlogPost _id along with updates
        ).then( ( { ops } ) => ops[ 0 ] );

    return {
        blocksUpdates,
        blogPostUpdates,
    }
}

// deletes a BlogPost
const deleteBlogPost = async ( _, { input }, { db: { mongoDB } } ) => {
    return mongoDB.collection( BLOG_POST_RESOURCE_NAME ).findOneandDelete(
        { ...input }, // input will contain the BlogPost _id
        { maxTimeMS: 30 },
    ).then( ( { ops } ) => ops[ 0 ] );
}


const blogPostsResolvers = {
    Query: {
        blogPostList,
        blogPost,
    },
    Mutation: {
        updateBlogPost,
        deleteBlogPost,
    },
};

export default blogPostsResolvers;