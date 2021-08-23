// dependencies
import Head from 'next/head';
// components
import { BlogPanel } from '../components';
// layout
import { BlogViewLayout } from '../layout';
// server
import { blogPostsQueries } from '../db/client/resources/queries';


const Home = ( { 
  content: {
    pageTitle,
    blogPanelContent,
  },
} ) => {

  /* CONTENT */
  const { blogList } = blogPanelContent;


  return (
    <>
      <Head>
          <title>{pageTitle}</title>
      </Head>

      <BlogViewLayout>
        {
          blogList.map( ( blogPanelContent ) => {
            /* CONTENT */
            const { _id, title } = blogPanelContent;
            
            return (
              <BlogPanel key={_id} id={`blog-panel--${title}`} content={blogPanelContent} />
            );
          } )
        }
      </BlogViewLayout>
    </>
  );
}

/* STATIC CONTENT */
const HomeContent = {
  pageTitle: 'TheCharlister Blog',
  blogPanelContent: {
    blogList: [
      {
        _id: 'jawnz',
        title: 'Blog Post 1',
        description: 'Blog Panel Preview Blog Panel Preview Blog. Panel Preview Blog Panel Preview. Blog Panel Preview Blog Panel Preview Blog Panel Preview Blog Panel Preview. Blog Panel Preview Writing more text to see the preview jawnz OMG this has to be so much text to trigger tha jawn. hurry the ballocks up holy shit plsdasfs f  Blog Panel Preview Blog Panel Preview Blog Panel Preview Blog Panel Preview Blog Panel Preview Blog Panel Preview Blog Panel Preview Blog Panel Preview Writing more text to see the preview jawnz OMG this has to be so much text to trigger tha jawn hurry the ballocks up holy shit plsdasfs f',
      }
    ],
  },
};

// fetch blog post paths from CMS
// export async function getStaticPaths() {

// }

// fetch blog posts content from cms
export async function getStaticProps( context ) {
  return {
    props: {
      content: HomeContent,
    }
  }
}


export default Home;