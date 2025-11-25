import { NavLink } from "react-router-dom";
import { FaCommentAlt, FaYoutube, FaUsers } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Nhập bình luận
          </NavLink>
        </li>
        <li>
          <NavLink to="/youtube" className={({ isActive }) => (isActive ? "active" : "")}>
            YouTube Comments
          </NavLink>
        </li>
        <li>
          <NavLink to="/group" className={({ isActive }) => (isActive ? "active" : "")}>
            Thông tin nhóm
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
