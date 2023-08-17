import HeaderBar from "./HeaderBar";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <div>
      <HeaderBar></HeaderBar>
      <div>{children}</div>
      <NavBar></NavBar>
    </div>
  );
}
