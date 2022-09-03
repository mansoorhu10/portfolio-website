import { React } from 'react'
import Model from './Model';

const FirstArticle = () => {

    return (
        <div className="first-article-background">
            <div className="first-article">
                <div className='first-article-text'>
                    <h3>Who Am I?</h3>
                    <p>
                        I'm a Software Engineering Co-op student at the University of Guelph. I am passionate about coding, video games, photography, coffee, and creating things!
                    </p>
                </div>
                
                <Model />
            </div>
        </div>
    );
}

export default FirstArticle;