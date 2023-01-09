import { React } from 'react'
import Model from './Model';

const FirstArticle = () => {

    return (
        <div className="first-article-background">
            <div className="first-article">
                <div className='first-article-text'>
                    <h3>Who Am I?</h3>
                    <p>
                        I'm a Software Engineering Co-op student at the University of Guelph. I am passionate about coding, video games, and creating things!
                        
                    </p>
                    
                    <p>
                        Here is a list of languages, frameworks, and libraries that I have learned and have experience working with to create projects:
                        <ul>
                            <li>JavaScript</li>
                            <li>Java</li>
                            <li>React</li>
                            <li>C</li>
                            <li>Python</li>
                            <li>Pygame</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                    </p>
                </div>
                
                <Model />
            </div>
        </div>
    );
}

export default FirstArticle;