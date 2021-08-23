// dependencies
import { db, MongoClient } from 'mongodb';

// cache db connection for serverless enviroment
global.mongo = global.mongo || {};

/* VARIABLES */
const DB_NAME = 'learning';

const connectMongo = async ( mongoDBName=DB_NAME ) => {
    // dbName does not exist in Mongo
    if ( !global.mongo.client ) { 
        // create a new MongoDb
        global.mongo.client = new MongoClient( process.env.MONGODB_URL, { 
            useNewUrlParser: true,
            useUnifiedTopology: true,
            bufferMaxEntries: 0,
            connectTimeoutMS: 10000
        } );

        // connecting to new MongoDb client
        console.log('...Connecting to MongoDB...');
        await global.mongo.client.connect();
        console.log('!!!Connection to MongoDB Established!!!');
    }

    const mongoDB = global.mongo.client.db( mongoDBName );

    return mongoDB;
}

export default connectMongo;