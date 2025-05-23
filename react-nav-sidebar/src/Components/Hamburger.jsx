export default function Hamburger({ toggleSidebar }) {
  return (
    <div className="hamburger" onClick={toggleSidebar}>
      <i className="fa-solid fa-bars"></i>
    </div>
  );
}
