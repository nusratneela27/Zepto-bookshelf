import Container from "../Container";
import logo from "../../../assets/Logo.webp";
import Button from "../../Buttons/Button";
import SearchInput from "./SearchInput";
import NavRoutes from "./NavRoutes";

const Navbar = () => {
  return (
    <Container>
      <div className="flex flex-col space-y-5 md:flex-row items-center justify-between py-6">
        <img src={logo} alt="logo" />

        <NavRoutes></NavRoutes>

        <div className="flex items-center md:space-x-4">
          <SearchInput></SearchInput>
          <Button label={"Login"}></Button>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
