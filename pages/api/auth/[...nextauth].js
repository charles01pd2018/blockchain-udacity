// dependencies
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
// database
// import connectToMongoDb from '../../../db/connectMongo';
// import { folder, note } from '../../../db/resources';

/* I MIGHT BE ABLE TO JUST PING THE GRAPHQL SERVER TO GENERATE DEFAULT DATA */
const AUTH_PROVIDERS = [ // external authorization providers
    Providers.GitHub(
        {
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        },
    )
];

export default ( req, res ) => {
    NextAuth( req, res, {
        session: {
            jwt: true,
        },
        jwt: {
            secret: process.env.JWT_SECRET,
        },
        providers: AUTH_PROVIDERS,
        database: process.env.MONGODB_URL,
        pages: {
            signIn: '/signin',
        },
        callbacks: {
            async session( session, user ) {
                session.user.id = user.id;
                return session;
            },
            async jwt ( tokenPayload, user, account, profile, isNewUser ) {
                // const { db } = await connectToMongoDb();

                if ( isNewUser ) { // new user signs up
                    // put custom content to fill up user's folders and notes
                }

                if ( tokenPayload && user ) { // successful sign in
                    return { ...tokenPayload, id: user.id };
                }

                return tokenPayload;
            },
        },
    } );
}