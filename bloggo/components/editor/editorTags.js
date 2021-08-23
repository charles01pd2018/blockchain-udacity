// dependencies
import { useState, useRef } from 'react';
// elements
import { LabelInput, Button } from '../elements';


const EditorTags = ( { 
    content: {
        tagList,
        tagInput,
    },
    tags,
    setTags,
} ) => {

    /* CONTENT */
    const { type, data } = tagInput;
    const { label, input } = data;

    /* HOOKS */
    const tagInputRef = useRef( null ); 
    const [ currentTag, setCurrentTag ]= useState( '' );

    /* FUNCTIONS */
    const handleEnterTag = ( event, inputRef ) => {
        if ( event.key === 'Enter' && inputRef.current.value !== '' ) {
            setTags( ( tags ) => {
                const newTags = [ ...tags ];
                newTags.push( inputRef.current.value );
                return newTags;
            } );
    
            resetTag();
        }
    }

    const handleAddTag = () => {
        if ( tagInputRef.current.value !== '' ) {
            setTags( ( tags ) => {
                const newTags = [ ...tags ];
                newTags.push( currentTag );
                return newTags;
            } );
    
            resetTag();
        }
    }

    const handleTagInputChange = ( event ) => {
        setCurrentTag( event.target.value )
    }

    const resetTag = () => {
        tagInputRef.current.value = '';
        setCurrentTag( '' );
    }

    /* CONTENT */
    const labelInputContent = {
        labelText: label.text,
        inputPlaceholder: input.placeholder,
    };

    return (
        <div className='editor-tags-container'>
            {
                tags.length !== 0 && (
                    <div className='editor-tags-heading'>
                        <h3>Tags</h3>
                    </div>
                )
            }
            <ul className='editor-tags-wrapper'>
                {
                    tags.map( ( tagText ) => {
                        return (
                            <li className='editor-tag'>
                                {tagText}
                            </li>
                        );
                    } )
                }
            </ul>

            <LabelInput className='editor-tags-input-wrapper' content={labelInputContent}
                labelClassName={`editor-tags-label--${type} editor-tags-label`}
                htmlFor={type}
                inputClassName={`editor-tags-input--${type} editor-tags-input`}
                onInput={handleTagInputChange}
                inputName={`bloggo-blog-${type}`}
                onEnterKey={handleEnterTag}
                ref={tagInputRef} />
            
            <Button className='editor-tags-save-button'
                    content={{text: 'Save Tag'}}  
                    onClick={handleAddTag} />
        </div>
    );
}

export default EditorTags;