// elements
import { SigninButton } from "../elements";

/* TYPES */
type signinButton = {
    type: 'Github'; // more signin button types to be added
}

interface Content {
    title: string;
    signinButtonList: signinButton[];
}

interface SigninPanelProps {
    id: string;
    content: Content;
}


const SigninPanel = ( { 
    id,
    content: {
        title,
        signinButtonList,
    },
}: SigninPanelProps ) => {

    return (
        <section id={id} className='signin-panel-wrapper'>
            <div className='signin-text-wrapper'>
                <h3 className='signin-header'>
                    {title}
                </h3>
            </div>
            <div className='signin-buttons-wrapper'>
                {
                    signinButtonList.map( ( { type } ) => {
                        return (
                            <SigninButton key={type} buttonType={type} />
                        );
                    } )
                }
            </div>
        </section>
    );
}

export default SigninPanel;