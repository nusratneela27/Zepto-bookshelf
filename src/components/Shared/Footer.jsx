import Container from "./Container";
import logo from "../../assets/Logo.webp";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <div className="flex flex-col space-y-3 md:flex-row justify-between items-center py-16">
        <h1 className="text-xl font-semibold">
          Copyright © 2021. All rights reserved.
        </h1>
        <img src={logo} alt="logo" />
        <div className="flex gap-5">
          <FaFacebook size={30} className="text-sky-600" />
          <FaInstagram size={30} className="text-sky-600" />
          <FaTwitter size={30} className="text-sky-600" />
        </div>
      </div>
    </Container>
  );
};

export default Footer;
