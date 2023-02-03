import React, { useState, useEffect } from "react";
import "./Projects.css";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import infos from "../../components/infos";

const SendTo = (props) => {
  const { t } = useTranslation();
  const { link } = props;

  return (
    <button class="btnShowInfo">
      <Link to={link} className="linkBtn">
        {t("Show more")}
      </Link>
    </button>
  );
};

const ShowProjectsInfo = (props) => {
  const { title, local, link } = props;
  const { t } = useTranslation();
  return (
    <div className="prjItem">
      <div>
        <h2>{title}</h2>
        <h4>{local}</h4>
        <SendTo link={link} />
      </div>
    </div>
  );
};

const Projects = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="prjItems">
        {infos.projectsInformations?.map((info, index) => {
          return (
            <ShowProjectsInfo
              key={index}
              title={t(info.title)}
              local={t(info.local)}
              link={info.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
