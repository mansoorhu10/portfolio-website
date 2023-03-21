import { React } from 'react'
import Model from './Model';

const FirstArticle = () => {

    return (
        <div className="first-article-background">
            <div className="first-article">
                <div className='first-article-text'>
                    <h3>Who Am I?</h3>
                    <p>
                        I'm a Software Engineering Co-op student at the University of Guelph. I am a passionate, detail-oriented and motivated programmer. In my free time, I like tinkering around with different technologies to expand my knowledge and skill set.
                    </p>
                    
                    <p>
                        Here is a list of languages and libraries that I have learned and have experience working with to create projects:
                        <ul>
                            <li>C</li>
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>Python</li>
                            <li>React</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>SQL</li>
                        </ul>
                    </p>
                </div>
                
                <Model />
            </div>
        </div>
    );
}

export default FirstArticle;