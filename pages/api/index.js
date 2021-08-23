// dependencies
import { ApolloServer } from 'apollo-server-micro';
import { getSession } from 'next-auth/client';
// resources
import allResolvers from '../../db/server/resources/resolvers'
import allSchemas from '../../db/server/resources/schemas';
// database
import { connectMongo } from '../../db/server/connect';


/* SERVER */
const apolloServer = new ApolloServer( {
    typeDefs: allSchemas,
    resolvers: allResolvers,
    context: async ( { req } ) => {
        const session = await getSession( { req } );
        const mongoDB = await connectMongo();
    
        return { user: session?.user, db: { 
            mongoDB,
        } };
    },
} );

/* DO NOT REMOVE THIS THIS IS VITAL FOR THE GRAPHQL API TO WORK */
export const config = {
    api: {
        bodyParser: false,
    },
}

export default apolloServer.createHandler( {
    path: '/api'
} );