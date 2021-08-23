// dependencies
import { useState, useEffect, useRef } from 'react';
import { useThrottleCallback } from '@react-hook/throttle';
// import EditorJS from '@editorjs/editorjs';
// partials
import EditorInputs from './editorInputs';
import EDITOR_TOOLS from './editorTools';


// sub this with graphql
const saveEditor = async ( docId, data ) => {
  await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/doc/${docId}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

const OtherEditor = ( { 
    id,
    content, 
    docId 
} ) => {


    const EditorJS = require('@editorjs/editorjs');

    
  const editor = useRef( null );
  const [ saving, setSaving ] = useState( false );
  const [ doneSaving, setDoneSaving ] = useState( false );

  const save = useThrottleCallback( async () => {
    if ( editor.current ) {
        // getting the data from the editor
      const data = await editor.current.save();

      setSaving( true );
      setDoneSaving( false );

      // putting the data from the editor into your database
      await saveEditor( docId, { content: data } );

      setTimeout( () => {
        setSaving( false );
        setDoneSaving( true );

        setTimeout( () => {
          setDoneSaving( false );
        }, 3000 );
      }, 2500 );
    }
  }, 30 );

  useEffect( () => {
    const editorJs = new EditorJS( {
      tools: EDITOR_TOOLS,
      holder: 'editorjs',
      data: content,
      autofocus: true,
      placeholder: 'Blog Post !!!',
      onChange: save,
    } );

    editor.current = editorJs;

    return () => {
      if ( editor.current ) {
        try {
          editor.current.destroy();
        } catch {
          console.warn( 'error destroying editor' );
        }
      }
    }
  }, [ save, content ] );

  return (
    <section id={id} className='editor-container'>
        <div id='editorjs' className='editor-wrapper'>
            {
                saving || doneSaving && (
                    <div className='editor-input'>

                        <div className='editor-loading-icon'>
                            Loading Icon
                        </div>
                        <p>
                            {
                                saving ? '... auto saving' : 'saved'
                            }
                        </p>

                    </div>
                )
            }
        </div>
    </section>
    // <Pane width="100%" position="relative">
    //   <div id="editorjs" style={{ width: '100%' }} />
    //   {saving || doneSaving ? (
    //     <Pane
    //       position="fixed"
    //       top={220}
    //       right={20}
    //       display="flex"
    //       alignItems="center"
    //       justifyContent="center"
    //       elevation={1}
    //       zIndex={9999}
    //       background="white"
    //       padding={majorScale(1)}
    //       borderRadius={4}
    //     >
    //       <Pane marginRight={majorScale(1)}>{saving ? <Spinner size={16} /> : <Icon icon={TickIcon} />}</Pane>
    //       <Text>{saving ? '...auto saving' : 'saved'}</Text>
    //     </Pane>
    //   ) : null}
    // </Pane>
  );
}

export default OtherEditor;