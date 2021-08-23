// dependencies
import gql from 'gql-tag';


const blogPostsSchemas = gql`
    type User {
        _id: ID!
        name: String!
    }
    
    type BlogFile {
        url: String!
    }
    
    type BlogImage {
        file: BlogFile!
        caption: String
        withBorder: Boolean
        stretched: Boolean
        withBackground: Boolean
    }

    type BlogData {
        text: String!
        level: Int
        image: BlogImage
    }

    type BlogBlock {
        id: ID!
        type: String!
        data: BlogData!
    }

    type BlogPost {
        _id: ID!
        userID: ID!
        time: Int!
        "If title is undefined or null, fetch title from first heading block through client side resolvers"
        title: String!
        "If preview is undefined or null, fetch preview from first paragraph block through client side resolvers"
        preview: String!
        tags: [String!]
        "Edit history is not saved and last updated date is a direct mutation"
        lastUpdatedDate: String!
        "Publication history is not saved and published date is a direct mutation"
        publicationDate: String!
        "References the content for the blog (blocks)"
        blocksID: ID!
        version: String!
    }

    extend type Query {
        blogPost: BlogPost!
        blogPostList: [BlogPost]!
        blogBlock: BlogBlock!
    }

    extend type Mutation {
        updateBlogPost: BlogPost!
        deleteBlogPost: BlogPost!
    }
`;

export default blogPostsSchemas;