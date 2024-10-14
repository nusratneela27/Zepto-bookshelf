import Container from "./Container";
import logo from "../../assets/Logo.webp";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <div className="flex flex-col space-y-6 md:flex-row justify-between items-center">
        <h1 className="text-xl font-semibold">
          Copyright © 2021. All rights reserved.
        </h1>
        <img src={logo} alt="logo" />
        <div className="flex gap-3">
          <FaFacebook size={35} className="text-sky-600" />
          <FaInstagram size={35} className="text-sky-600" />
          <FaTwitter size={35} className="text-sky-600" />
        </div>
      </div>
    </Container>
  );
};

export default Footer;
