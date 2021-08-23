// dependencies
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
// layout
import { BlogEditLayout } from 'layout';
// components
// server
import { blogPostsMutations } from '@db/client/resources/mutations';
// content
import { blogEditHeaderContent } from '@layout/content';


const Edit = ( { 
    content: {
        pageTitle,
        editorContent,
        blogEditLayoutContent,
    },
} ) => {

    /* SESSSION */
    const [ session, loading ] = useSession();

    if ( loading ) return null;
    if ( !session && !loading ) {
        const router = useRouter();
        router.push( process.env.NEXT_PUBLIC_SIGNIN_URI );
    }

    /* EDITOR */
    // ik this is weird but this is neccessary for NextJS to build EditorJS
    let Editor;
    Editor = dynamic( () => import( '../../components/editor/index' ), 
        { ssr: false } );
    
    /* FUNCTIONS */
    const handleSaveEditor = async ( input, editorRef ) => {
        // i want the editor data to point to an ID that stores the blocks
        // this way, when i fetch the data within my Home page, I am only gettig the things I need to display the preview
        // there should be ANOTHER resolver to resolve the ID the editor data is pointing to
        // once we click on the blog post, we have the id of the ediotrData, so fetch that one blog post and display it
        const editorData = await editorRef.current.save();
        const blocksData = {
            // id
            ...editorData,
        }

        const blogPostData = { 
            // id?
            lastUpdatedDate: new Date(),
            ...input,
            ...editorData,
            // do i generate the blocks ID on the client side?
        }

        // now i just gotta push this to a database :-D
        console.log( blogPostData );
    }

    return (
        <>
         <Head>
            <title>{pageTitle}</title>
        </Head>
                {
                    session && (
                        <BlogEditLayout content={blogEditLayoutContent} user={session.user}>
                            {
                                Editor && (
                                    <Editor id='blog-editor' content={editorContent}
                                    saveEditor={handleSaveEditor} />
                                )
                            }
                        </BlogEditLayout>
                    )
                }
         </>
    );
}

/* STATIC CONTENT */
const EditContent = {
    pageTitle: 'Edit Blog',
    blogEditLayoutContent: {
        blogEditHeaderContent,
    },
    editorContent: {
        editorInputsContent: {
            itemList: [
                {
                    type: 'title',
                    data: {
                        label: {
                            text: 'Blog Title',
                        },
                        input: {
                            placeholder: 'Blog Title',
                        },
                    },
                },
                {
                    type: 'preview',
                    data: {
                        label: {
                            text: 'Blog Preview',
                        },
                        input: {
                            placeholder: 'Blog Preview',
                        },
                    },
                },
            ],
        },
        editorTagsContent: {
            tagList: [
                'Hello World',
                'Coding',
            ],
            tagInput: {
                type: 'tag',
                data: {
                    label: {
                        text: 'Enter Tag',
                    },
                    input: {
                        placeholder: 'Enter Tag',
                    },
                },
            },
        },
        data: {

        },
        placeholder: 'Blog Jawnz',
    },
};

// fetch blog post paths from CMS
// export async function getStaticPaths() {
    
// }

// fetch current working blog posts from CMS
export const getStaticProps = async ( { params } ) => {
    return {
        props: {
            content: EditContent,
        }
    }
}

export default Edit;