import "./NavBar.css";
import Logo from "../../Images/Logo.jpeg";
function NavBar() {
  return (
    <>
      <div class="nav-bar">
        <div class="name">
          <img src={Logo} alt="logo" />
          <h2>Dog Salon</h2>
        </div>
        <div class="extras">
          <p>Home</p>
          <p>Booking</p>
          <p>About Us</p>
        </div>
      </div>
    </>
  );
}

export default NavBar;
