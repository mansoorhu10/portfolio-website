import React from "react";
import { useParams } from "react-router-dom";
import { ReportList } from "../helpers/ReportList"
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { GitHub } from "@mui/icons-material";
import NotFound from "./NotFound";

const ReportDisplay = () => {
    const { id } = useParams();
    const numberOfReports = ReportList.length;
    const validIds = [...Array(numberOfReports).keys()];

    if(validIds.includes(parseInt(id)) === false){
        return (
            <NotFound />
        )
    }

    const report = ReportList[id];
    const logoAlt = report.name + " Logo";
    const imageAlt = "An image displaying what " + report.name + " looks like";

    return  (
        <div>
            <div className="project">
                <div>
                    <h2><strong><NavLink to="/internships" className="back-button"> &larr; Back </NavLink></strong></h2>
                </div>
                
                <motion.div 
                    initial={{opacity: 0,}}
                    animate={{opacity: 1,}}
                    transition={{duration: 0.5}}

                className="project-article">
                    <div className="project-name">
                        <img src={report.logo} alt={logoAlt} className="project-logo" />
                        <h1>{report.name}</h1>
                    </div>

                    <hr />

                    <p className="project-writing">
                        <div className="description-image">
                            <img className="image-one" src={report.imageOne} alt={imageAlt}></img>
                            
                            <div className="report-image-caption">
                                Johnston Hall, University of Guelph
                            </div>
                        </div>    

                        <br />

                        <div className="project-description">
                            <p>{report.descriptionOne}</p>
                        </div>

                        <br />

                        <div className="description-image">
                            <img className="image-one" src={report.imageTwo} alt={imageAlt}></img>
                        </div>

                        <div className="project-description">
                            <p>{report.descriptionTwo}</p>
                        </div>

                        <br />

                        <div className="description-image">
                            <img className="image-one" src={report.imageThree} alt={imageAlt}></img>
                        </div>

                        <div className="project-description">
                            <p>{report.descriptionThree}</p>
                        </div>    

                        <div className="description-image">
                            <img className="image-one" src={report.imageFour} alt={imageAlt}></img>
                        </div>

                        <div className="project-description">
                            <p>{report.descriptionFour}</p>
                        </div>

                        <div className="project-description">
                            <p>{report.descriptionFive}</p>
                        </div>

                        <div className="description-image">
                            <img className="image-one" src={report.imageFive} alt={imageAlt}></img>
                        </div>

                        <div className="project-description">
                            <p>{report.descriptionSix}</p>
                        </div>

                        <br />

                        <div className="works-cited">
                            <p style={{textAlign:"center"}}>Works Cited</p>
                            <p><i>{report.sourceOneTitle}</i> {report.sourceOnePublisher} <i>{report.sourceOneWebTitle}</i> <a href={report.sourceOneUrl}>{report.sourceOneUrl}</a>{report.sourceOneDate}</p>
                            <p><i>{report.sourceTwoTitle}</i> {report.sourceTwoPublishDate} <i>{report.sourceTwoPublisher}</i> <a href={report.sourceTwoUrl}>{report.sourceTwoUrl}</a>{report.sourceTwoDate}</p>
                        </div>

                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default ReportDisplay;