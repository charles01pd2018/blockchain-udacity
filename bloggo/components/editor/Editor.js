// dependencies
import { useRef, useState, useEffect } from 'react';
import { useThrottleCallback } from '@react-hook/throttle';
// installed components
import EditorJS from '@editorjs/editorjs';
// partials 
import EditorInputs from './editorInputs';
import EditorTags from './editorTags';
// elements
import { Button } from '../elements';
// constants
import EDITOR_TOOLS from './editorTools';


const Editor = ( { 
    id,
    content: {
        editorInputsContent,
        editorTagsContent,
        data,
        placeholder,
    },
    saveEditor,
    autoFocus=true,
    onReady, // can have a welcome function popup when editor is ready
} ) => {

    /* CONSTANTS */
    const EDITOR_HOLDER = 'editorjs'
;
    /* HOOKS */
    const editorRef = useRef( null );
    const [ editorData, setEditorData ] = useState( data );
    // i might be able to useObjectState for this
    const [ title, setTitle ] = useState( null );
    const [ preview, setPreview ] = useState( null );
    const [ tags, setTags ] = useState( editorTagsContent.tagList );
    

    useEffect( () => {
        const editorJS = new EditorJS( { 
            tools: EDITOR_TOOLS,
            holder: EDITOR_HOLDER,
            data: editorData,
            autofocus: autoFocus,
            placeholder,
        } )

        editorRef.current = editorJS;

        return () =>{
            if ( editorRef.current ) {
                try {
                    editor.current.destroy();
                }
                catch {
                    console.warn( 'Error: Editor could not be destroyed' );
                }
            }
        }
    }, [ saveEditor, editorData ] );

    return (
        <section id={id} className='editor-container'>
            <div className='editor-wrapper'>
                <Button className='editor-save-button'
                    content={{text: 'Save Jawnz'}}  
                    onClick={() => { saveEditor( { title, preview, tags, }, editorRef )}} />
                
                <div className='editor-panel-wrapper'>
                    <EditorInputs content={editorInputsContent}
                        setTitle={setTitle}
                        setPreview={setPreview} />
                    
                    <EditorTags content={editorTagsContent}
                        tags={tags}
                        setTags={setTags} />
                </div>
                    
                <div className='editor-save-wrapper'>
                    Saving Icon
                </div>
                   
                <div id={EDITOR_HOLDER} className='editor' />
            </div>
        </section>
    );
}

export default Editor;