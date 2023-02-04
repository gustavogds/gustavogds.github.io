import React, { useState, useEffect } from "react";
import "./Projects.css";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import data from "./projectsData.json";
import { Box } from "@mui/material";

import { FaArrowLeft } from "react-icons/fa";

const Project = () => {
  const { t } = useTranslation();

  const params = useParams();
  const [prj, setProject] = useState(data[params.project]);

  useEffect(() => {
    setProject(data[params.project]);
  }, [params.project]);

  console.log(prj);
  if (!prj)
    return <Box textAlign={"center"}>{t("404 - Project not Found")}</Box>;

  return (
    <div className="project-body">
      <h1>{t(prj.title)}</h1>
      <div className="project-description">
        <span>
          <strong>{t("Summary")}</strong>
          <p>{t(prj.description)}</p>
        </span>
      </div>
      <div className="project-buttons">
        <button class="btn-goBack">
          <Link to={"/projects"} className="linkBtn">
            <FaArrowLeft className="arrow" />
          </Link>
        </button>
        <div className="project-buttons">
          {prj.buttons?.map((btn) => {
            return (
              <button class="project-btnShowInfo">
                <a className="linkBtn" href={btn.buttonLink}>
                  {t(btn.buttonTitle)}
                </a>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
