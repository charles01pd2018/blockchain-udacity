// dependencies
import Link from 'next/link';

/* TYPES */
interface Content {
    _id: string;
    title: string;
    description: string;
}

interface BlogPanelProps {
    id: string;
    content: Content;
}

const BlogPanel = ( { 
    id,
    content: {
        _id,
        title,
        description,
    },
}: BlogPanelProps ) => {

    return (
        <section id={id} className='blog-panel-container container'>
            <div className='blog-panel-wrapper'>
                <div className='blog-panel-title'>
                    <Link href={`/blog/${_id}`}>
                        <a className='blog-panel-link'>
                            <h2>{title}</h2>
                        </a>
                    </Link>
                </div>

                <div className='blog-panel-preview'>
                    <p className='blog-panel-preview-text'>{description}</p>
                </div>
            </div>
        </section>  
    );
}

export default BlogPanel;