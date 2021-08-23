// dependencies
import gql from 'gql-tag';
// schemas
import blogPostsSchemas from './blog-posts/blogPosts.schemas';

// this export is if you only want certain schemas for your server
export {
    blogPostsSchemas,
}

const RootSchema = gql`
    type Query {
        "Make this into a custom welcome scalar"
        welcome: String
    }
    type Mutation { 
        "Make this into a custom welcome scalar"
        welcome: String
    }
`

// by default, all schemas will be exported as an array for the server to map over
const AllSchemas = [
    RootSchema,
    blogPostsSchemas,
];

export default AllSchemas;