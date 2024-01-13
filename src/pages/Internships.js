import React from "react";
import ReportItem from "../components/ReportItem";
import { ReportList } from "../helpers/ReportList";
import { motion } from "framer-motion";

const Internships = () => {

    return (
        <div className="projects-page">
            <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5}}
            
            className="projects-list">
                {ReportList.map((report, index) => {
                    return <ReportItem id={index} name={report.textName} logo={report.logo} />
                })}
            </motion.div>

        </div>
    );

}

export default Internships;