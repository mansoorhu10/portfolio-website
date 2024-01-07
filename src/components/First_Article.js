import { React } from 'react'
import Model from './Model';
import SkillGrid from './SkillGrid';
import { SkillsList } from '../helpers/SkillsList';

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
                        Here is a list of languages, libraries, frameworks, and tools that I have learned and have experience working with to create projects:
                    </p>
                    
                    <p>
                        <SkillGrid listOfSkills={SkillsList} />
                    </p>
                </div>
                
                <Model />
            </div>
        </div>
    );
}

export default FirstArticle;