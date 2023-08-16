import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";
import "react-image-gallery/styles/css/image-gallery.css";

import { FaArrowLeft } from "react-icons/fa";

const ProjectSolaruIdle = () => {
  const { t } = useTranslation();

  return (
    <div className="project-body">
      <h1>{t("OrfeuTunes - Music Streaming (Work in Progress)")}</h1>
      <div className="custom-project-description">
        <span>
          <strong>{t("Project Summary")}</strong>
          <p>
            {t(
              "The main idea of the project is to create a music streaming application, where the user can listen to songs, create playlists, check the lyrics of the song, among other features, the project itself is a way for me to learn more about web development and dig deeper into some technologies."
            )}
          </p>
        </span>
        <Box height={"1rem"} />
        <span>
          <strong>{t("Project Details")}</strong>
          <p>
            {t(
              "The initial implementation would be through the creation of an HTTP server from scratch, however because it is something quite complex and that would take some time to be done effectively and functionally, I decided to implement an HTTP server in another project and focus on that project using the Django Framework."
            )}
          </p>
        </span>
      </div>
      <div className="project-buttons">
        <button className="btn-goBack">
          <Link to={"/projects"} className="linkBtn">
            <FaArrowLeft className="arrow" />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ProjectSolaruIdle;
