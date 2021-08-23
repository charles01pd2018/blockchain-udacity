// dependencies
import Head from 'next/head';


const User = ( {
    content: {
        pageTitle,
    },
 } ) => {

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
        </>
    );
}

// NOTE - the url should match the following syntax for getStaticPaths:
// bloggo.com/user/blogPostTitle-_id

/* STATIC CONTENT */
const UserContent = {
    pageTitle: 'User: Billy Bob',
}

// fetch blog post content from CMS
export async function getStaticProps() {
    return {
        props: {
            content: UserContent,
        }
    }
}

export default User;