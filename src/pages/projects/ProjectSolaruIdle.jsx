import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import solaruIdle_login from "../../assets/images/SolaruIdle/solaruIdle_login.png";
import solaruIdle_signup from "../../assets/images/SolaruIdle/solaruIdle_signup.png";
import solaruIdle_starchart from "../../assets/images/SolaruIdle/solaruIdle_starchart.png";
import solaruIdle_inventory from "../../assets/images/SolaruIdle/solaruIdle_inventory.png";
import solaruIdle_loadout from "../../assets/images/SolaruIdle/solaruIdle_loadout.png";
import solaruIdle_foundry from "../../assets/images/SolaruIdle/solaruIdle_foundry.png";

import { FaArrowLeft } from "react-icons/fa";

const images = [
  {
    original: solaruIdle_login,
    thumbnail: solaruIdle_login,
  },
  {
    original: solaruIdle_signup,
    thumbnail: solaruIdle_signup,
  },
  {
    original: solaruIdle_starchart,
    thumbnail: solaruIdle_starchart,
  },
  {
    original: solaruIdle_inventory,
    thumbnail: solaruIdle_inventory,
  },
  {
    original: solaruIdle_loadout,
    thumbnail: solaruIdle_loadout,
  },
  {
    original: solaruIdle_foundry,
    thumbnail: solaruIdle_foundry,
  },
];

const ProjectSolaruIdle = () => {
  const { t } = useTranslation();

  return (
    <div className="project-body">
      <h1>{t("Solaru Idle (Work in Progress)")}</h1>
      <div className="custom-project-description">
        <span>
          <strong>{t("Project Summary")}</strong>
          <p>
            {t(
              "The main idea of this project is to create an alternative game mode for the acclaimed Warframe game, the new game mode is in the Idle style, where the player does not necessarily need to be playing all the time to be able to progress in it, the idea came up by the creators of this project (Me, @ThiagoCComelli and @MatheusAHM). So we decided to put the project into practice, initially I separated several ideas and stored them in the trello shared by us, after that we started the implementation of a prototype that is currently under development."
            )}
          </p>
        </span>
        <Box height={"1rem"} />
        <span>
          <strong>{t("Project Details")}</strong>
          <p>
            {t(
              "The project is being developed with React, NodeJS, JavaScript/TypeScript, HTML and CSS/SCSS, the main idea came with the purpose of being a way to learn more and more with these technologies, in addition to being a project that motivates us on account of being something related to a game that we like a lot, which ends up making learning and development more fun."
            )}
          </p>
          <div className="image-gallery">
            <ImageGallery
              items={images}
              showPlayButton={false}
              showFullscreenButton={true}
              slideOnThumbnailOver={false}
              showIndex={false}
              showThumbnails={true}
              thumbnailPosition="top"
            />
          </div>
        </span>
      </div>
      <div className="project-buttons">
        <button className="btn-goBack">
          <Link to={"/projects"} className="linkBtn">
            <FaArrowLeft className="arrow" />
          </Link>
        </button>
        <button className="project-btnShowInfo">
          <a className="linkBtn" href={"https://github.com/ThiagoCComelli"}>
            {t("@ThiagoCComelli - GitHub")}
          </a>
        </button>
        <button className="project-btnShowInfo">
          <a className="linkBtn" href={"https://github.com/MatheusAHM"}>
            {t("@MatheusAHM - GitHub")}
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProjectSolaruIdle;
