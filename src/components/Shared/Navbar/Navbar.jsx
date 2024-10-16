import Container from "../Container";
import logo from "../../../assets/Logo.webp";
import Button from "../../Buttons/Button";
import NavRoutes from "./NavRoutes";

const Navbar = () => {
  return (
    <div className="bg-sky-100">
      <Container>
        <div className="flex flex-col space-y-5 md:flex-row items-center justify-between py-6 bg">
          <img src={logo} alt="logo" />

          <NavRoutes></NavRoutes>

          <div className="flex items-center gap-4">
            <Button label={"Login"}></Button>
            <Button label={"Register"}></Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
