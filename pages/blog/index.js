// dependencies
import Head from 'next/head';


const Blog = ( {
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

/* STATIC CONTENT */
const BlogContent = {
    pageTitle: 'Blog',
};


export function getStaticProps() {
    return {
        props: {
            content: BlogContent,
        }
    };
}

export default Blog;