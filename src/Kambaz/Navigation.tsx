import { NavLink } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import ListGroup from "react-bootstrap/ListGroup";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function KambazNavigation() {
  const itemClasses = (active: boolean) =>
    `text-center border-0 text-decoration-none ` +   // <-- underline killer
    (active ? "bg-white text-danger" : "bg-black text-white");

  return (
 
    <ListGroup
      id="wd-kambaz-navigation"
      style={{ width: 120 }}
      className="rounded-0 position-fixed
bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <ListGroup.Item
        id="wd-neu-link"
        target="_blank"
        action
        href="https://www.northeastern.edu/"
        className="bg-black border-0 text-center"
      >
        <img src="images/NEU.png" width="75px" />
      </ListGroup.Item>

    
      <NavLink to="/Kambaz/Account">
        {({ isActive }: { isActive: boolean }) => (
          <ListGroup.Item className={itemClasses(isActive)} as="div">
            <FaRegCircleUser className="fs-1" />
            Account
          </ListGroup.Item>
        )}
      </NavLink>

      <NavLink to="/Kambaz/Dashboard">
        {({ isActive }: { isActive: boolean }) => (
          <ListGroup.Item className={itemClasses(isActive)} as="div">
            <AiOutlineDashboard className="fs-1 text-danger"  />
            Dashboard
          </ListGroup.Item>
        )}
      </NavLink>

      <NavLink to="/Kambaz/Courses" >
        {({ isActive }: { isActive: boolean }) => (
          <ListGroup.Item className={itemClasses(isActive)} as="div">
            <LiaBookSolid className="fs-1 text-danger" />
            Courses
          </ListGroup.Item>
        )}
      </NavLink>

      <NavLink to="/Kambaz/Calendar" >
        {({ isActive }: { isActive: boolean }) => (
          <ListGroup.Item className={itemClasses(isActive)} as="div">
            <IoCalendarOutline className="fs-1 text-danger" />
            Calendar
          </ListGroup.Item>
        )}
      </NavLink>

      <NavLink to="/Kambaz/Inbox" >
        {({ isActive }: { isActive: boolean }) => (
          <ListGroup.Item className={itemClasses(isActive)} as="div">
            <FaInbox className="fs-1 text-danger" />
            <br /> Inbox
          </ListGroup.Item>
        )}
      </NavLink>

      <NavLink to="/Labs" id="wd-labs-link" >
        {({ isActive }: { isActive: boolean }) => (
          <ListGroup.Item className={itemClasses(isActive)} as="div">
            <LiaCogSolid className="fs-1 text-danger" />
            <br /> Labs
          </ListGroup.Item>
        )}
      </NavLink>
    </ListGroup>
  
  );
}
