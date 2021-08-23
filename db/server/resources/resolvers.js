// dependencies
import { merge } from 'lodash';
// resolvers
import blogPostsResolvers from './blog-posts/blogPosts.resolvers';
import usersResolvers from './users/Users.resolvers';

// this export is if you only want certain resolvers for your server
export {
    blogPostsResolvers,
    usersResolvers,
}

// by default, all resolvers will be exported as an array for the server to map over
const allResolvers = merge(
    blogPostsResolvers,
    usersResolvers,
);

export default allResolvers;