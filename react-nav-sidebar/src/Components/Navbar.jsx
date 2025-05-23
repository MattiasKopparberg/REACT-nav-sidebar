export default function Navbar({ isOpen }) {
  return (
    <div className={`navcontainer ${isOpen ? 'active' : 'hidden'}`}>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  );
}
