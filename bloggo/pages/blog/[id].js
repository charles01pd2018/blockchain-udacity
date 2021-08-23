// dependencies
import Head from 'next/head';


const BlogPost = ( {
    content,
 } ) => {

    return (
        <>
            <Head>
                <title>Blog Title</title>
            </Head>
        </>
    );
}

// NOTE - the url should match the following syntax for getStaticPaths:
// bloggo.com/user/blogPostTitle-_id

// fetch blog post content from CMS
export async function getStaticProps() {
    return {
        props: {
            
        }
    }
}

export default BlogPost;