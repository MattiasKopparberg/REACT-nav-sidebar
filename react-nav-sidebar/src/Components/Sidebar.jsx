export default function Sidebar({ isOpen }) {
  return (
    <div className={`sidebarNav ${isOpen ? 'active' : 'hidden'}`}>
      <a href="#">Dashboard</a>
      <a href="#">Settings</a>
      <a href="#">Logout</a>
    </div>
  );
}
