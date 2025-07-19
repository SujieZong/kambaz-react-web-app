import { courses } from "../Database";
import CourseNavigation from "./Navigation";
import { Navigate, Route, Routes, useParams,useLocation } from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import { Container, Row, Col } from "react-bootstrap";
export default function Courses() {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name}&gt; {pathname.split("/")[4]}
      </h2>
      <hr />
      <Container fluid>
        <Row>
          <Col xs={12} md={2} lg={2} className="p-0">
            <CourseNavigation />
          </Col>
          <Col xs={12} md={10} lg={10}>
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:aid" element={<AssignmentEditor />} />
              <Route path="People" element={<PeopleTable />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
