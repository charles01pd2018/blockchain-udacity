import gql from 'gql-tag';

// this is going to cause an issue because next-auth is REST API
// this is not a part of my graphql api
const usersSchemas = gql`
    type User {
        "This should be converted to mongodb objectID"
        _id: ID!
        name: String!
        image: String!
        "This should be js Date object type"
        creationDate: String!
        "This should be js Date object type"
        updatedDate: String!
        "Array of batches of blog post IDs using the bucket technique (pagination). Each batch will have have 20 blogBlocks by default"
        blogPostIDList: [[ID!]]
    }

    extend type Query {
        user: User!
    }

    extend type Mutation {
        updateUser: User!
    }
`;

export default usersSchemas;