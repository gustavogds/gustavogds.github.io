import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import studentms_signup from "../../assets/images/StudentMS/studentms_signup.png";
import studentms_allstudents from "../../assets/images/StudentMS/studentms_allstudents.png";
import studentms_addstudent from "../../assets/images/StudentMS/studentms_addstudent.png";
import studentms_signin from "../../assets/images/StudentMS/studentms_signin.png";
import studentms_editstudent from "../../assets/images/StudentMS/studentms_editstudent.png";
import studentms_studentinfo from "../../assets/images/StudentMS/studentms_studentinfo.png";

import { FaArrowLeft } from "react-icons/fa";

const images = [
  {
    original: studentms_signin,
    thumbnail: studentms_signin,
  },
  {
    original: studentms_signup,
    thumbnail: studentms_signup,
  },
  {
    original: studentms_allstudents,
    thumbnail: studentms_allstudents,
  },
  {
    original: studentms_addstudent,
    thumbnail: studentms_addstudent,
  },
  {
    original: studentms_editstudent,
    thumbnail: studentms_editstudent,
  },
  {
    original: studentms_studentinfo,
    thumbnail: studentms_studentinfo,
  },
];

const CustomProject = () => {
  const { t } = useTranslation();

  return (
    <div className="project-body">
      <h1>{t("Student Management System")}</h1>
      <div className="custom-project-description">
        <span>
          <strong>{t("Project Summary")}</strong>
          <p>
            {t(
              "In this project I worked on the development of a Student Management System using Django4, with the main objective of learning the framework and its functionalities. I used this project to learn more about the web development area."
            )}
          </p>
        </span>
        <Box height={"1rem"} />
        <span>
          <strong>{t("Project Details")}</strong>
          <p>
            {t(
              "My focus in this project was centralized in the implementation of a User Authentication system, first I started implementing the student management system, which was too simple but very good to learn the basics of the framework and then I moved on to my idea, I initially implemented a zero authentication, functional but insecure the way it was, so I decided to implement it in a more secure way, which was using the Allauth lib, with this way it was much simpler and as the security part was practically ready, I chose this way as final for being more efficient."
            )}
          </p>
          <div className="testbox">
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
        <div className="project-buttons">
          <button className="project-btnShowInfo">
            <a className="linkBtn" href={"/about"}>
              {t("teste")}
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomProject;
