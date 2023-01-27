import React from "react";
import './About.css'
import {Box} from "@mui/material";
import infos from '../../components/infos'

function ShowInformation(props) {
    const {title, period, local, description} = props;

    return (
        <div className="infoSection">
            <div className="infoLine">
                <strong>{period}</strong>
                <span>{local}</span>
            </div>
            <span></span>
            <div className="infoLine">
                <strong>{title}</strong>
                <span>{description}</span>
            </div>
            <hr/>
        </div>
    );
}

const About = () => {
    return (
        <Box className="mainAbout">
            <Box className="mainAboutSections">
                <span>Experience</span>
            </Box>
            <Box className="mainAboutSectionsItem">
                <div>
                    {infos.experienceInformationsEN.map((info, index) => (
                        <ShowInformation key={index} title={info.title} period={info.period} local={info.local} description={info.description} />
                    ))}
                </div>
            </Box>
            <Box className="mainAboutSections">
                <span>Academic Formation</span>
            </Box>
            <Box className="mainAboutSectionsItem">
                <div>
                    {infos.academicInformationsEN.map((info, index) => (
                        <ShowInformation key={index} title={info.title} period={info.period} local={info.local} description={info.degree} />
                    ))}
                </div>
            </Box>
        </Box>
    );
}

export default About;