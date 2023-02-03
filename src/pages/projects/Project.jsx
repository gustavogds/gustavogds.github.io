import React, { useState, useEffect } from "react";
import "./Projects.css";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import data from "./projectsData.json";
import { Box } from "@mui/material";

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
      <button class="project-btnShowInfo">
        <a className="linkBtn" href={prj.firstBtnLink}>{t(prj.firstBtn)}</a>
      </button>
    </div>
  );
};

export default Project;
