import React from "react";
import "./Home.css";
import { Box } from "@mui/material";
import me from "../../assets/images/self.jpg";
import { IconPrint, SocialIcon } from "./infoShow";
import infos from "../../components/infos";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <Box className="mainHome">
      <Box
        className="self-image"
        alt="profile image"
        component={"img"}
        src={me}
        width={{ xs: "35vh", md: "40vh" }}
        height={{ xs: "35vh", md: "40vh" }}
        mb={{ xs: "1rem", sm: 0 }}
        mr={{ xs: 0, md: "2rem" }}
      />
      <Box className="self-text">
        <h1>{t("Hi, I'm Gustavo")}</h1>
        <h2>{t("I'm a Full Stack Developer.")}</h2>
        <Box className="infos" component={"ul"}>
          {infos.homeInformations.map((info, index) => (
            <IconPrint key={index} icon={info.icon} text={t(info.text)} />
          ))}
        </Box>
        <Box display={"flex"} gap={"1.5rem"} justifyContent={"center"} fontSize={{ xs: "2rem", md: "2.5rem" }}>
          {infos.socialInformations.map((social, index) => (
            <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
