// elements
import { LabelInput } from '../elements';


const EditorInputs = ( { 
    content: {
        itemList,
    },
    setTitle,
    setPreview,
} ) => {

    /* FUNCTIONS */
    const handleTitleInputChange = ( event ) => {
        setTitle( () => event.target.value );
    }

    const handlePreviewInputChange = ( event ) => {
        setPreview( () => event.target.value );
    }

    /* CONTENT */
    const { type: titleType, data: titleData } = itemList[0];
    const { label: titleLabel, input: titleInput } = titleData;

    const { type: previewType, data: previewData } = itemList[1];
    const { label: previewLabel, input: previewInput } = previewData;

    const titleLabelInputContent = {
        labelText: titleLabel.text,
        inputPlaceholder: titleInput.placeholder,
    };
    const previewLabelInputContent = {
        labelText: previewLabel.text,
        inputPlaceholder: previewInput.placeholder,
    };

    return (
            <div className='editor-inputs-container'>
                <LabelInput className='editor-input-wrapper' content={titleLabelInputContent}
                    labelClassName={`editor-label--${titleType} editor-label`}
                    htmlFor={titleType}
                    inputClassName={`editor-input--${titleType} editor-input`}
                    onInput={() => { handleTitleInputChange( event ) }}
                    inputName={`bloggo-blog-${titleType}`} />

                <LabelInput className='editor-input-wrapper' content={previewLabelInputContent}
                    labelClassName={`editor-label--${previewType} editor-label`}
                    htmlFor={previewType}
                    inputClassName={`editor-input--${previewType} editor-input`}
                    onInput={() => { handlePreviewInputChange( event ) }}
                    inputName={`bloggo-blog-${previewType}`} />
            </div>
    );
}

export default EditorInputs;