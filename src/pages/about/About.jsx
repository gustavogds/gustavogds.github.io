import React from "react";
import "./About.css";
import { Box } from "@mui/material";
import infos from "../../components/infos";
import { useTranslation } from "react-i18next";

function ShowInformation(props) {
  const { title, period, local, description } = props;

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
      <hr />
    </div>
  );
}

const About = () => {
  const { t } = useTranslation();

  return (
    <Box className="mainAbout">
      <Box className="mainAboutSections">
        <span>{t("Experience")}</span>
      </Box>
      <Box className="mainAboutSectionsItem">
        <div>
          {infos.experienceInformations?.map((info, index) => (
            <ShowInformation
              key={index}
              title={t(info.title)}
              period={t(info.period)}
              local={t(info.local)}
              description={t(info.description)}
            />
          ))}
        </div>
      </Box>
      <Box className="mainAboutSections">
        <span>{t("Academic Formation")}</span>
      </Box>
      <Box className="mainAboutSectionsItem">
        <div>
          {infos.academicInformations?.map((info, index) => (
            <ShowInformation
              key={index}
              title={t(info.title)}
              period={t(info.period)}
              local={t(info.local)}
              description={t(info.degree)}
            />
          ))}
        </div>
      </Box>
    </Box>
  );
};

export default About;
