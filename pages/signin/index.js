// dependencies
import Head from 'next/head';
import { getSession, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
// layout
import { EmptyLayout } from '../../layout';
// components
import { SigninPanel } from '../../components';


const SignIn = ( { 
    content: {
        pageTitle,
        signInPanelContent,
    },
} ) => {

    /* SESSION */
    const [ session, loading ] = useSession();
    
    if ( loading ) return null;
    if ( session ) {
        const router = useRouter();
        const APP_URI = process.env.NEXT_PUBLIC_APP_URI;
        router.push( APP_URI );

        useEffect( () => {
            router.prefetch( APP_URI );
        } )
    }
    
  
    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            {
                  !session && (
                    <>
                        <EmptyLayout>
                            <SigninPanel id='signin-panel' content={signInPanelContent} />
                        </EmptyLayout>
                    </>
                )
            }
        </>
    );
}

export default SignIn;


/* STATIC CONTENT */
const signInContent = {
    pageTitle: 'Sign In',
    signInPanelContent: {
        title: 'Login',
        signinButtonList: [
            {
                type: 'Github',
            },
        ],
    },
}

export const getStaticProps = () => {
    return {
        props: {
            content: signInContent,
        }
    }
}