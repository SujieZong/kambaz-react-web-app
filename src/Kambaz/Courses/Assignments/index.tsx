import { BsGripVertical, BsPlus } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { Button, Form, InputGroup } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { MdEditDocument } from "react-icons/md";
import AssignmentControlButtons from "./AssignmentControlBottons";
import { FaPlus } from "react-icons/fa";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <div className="d-flex justify-content-between align-items-center mb-4 flex-grow-1 me-3">
        <InputGroup style={{ maxWidth: 400 }}>
          <InputGroup.Text
            className="bg-white border-end-0"
            style={{ height: "48px" }}
          >
            <FaSearch />
          </InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Search..."
            className="border-start-0"
            style={{ height: "48px" }}
          />
        </InputGroup>

        <div className="d-flex gap-2">
          <Button
            variant="secondary"
            size="lg"
            className="me-1 float-end"
            id="wd-group-btn"
          >
            <FaPlus
              className="position-relative me-2"
              style={{ bottom: "1px" }}
            />
            Group
          </Button>
          <Button
            variant="danger"
            size="lg"
            className="me-1 float-end"
            id="wd-add-module-btn"
          >
            <FaPlus
              className="position-relative me-2"
              style={{ bottom: "1px" }}
            />
            Module
          </Button>
        </div>
      </div>

      <ListGroup id="wd-assignments" className="rounded-0">
        <ListGroup.Item className="wd-assignment-group p-0 mb-5 fs-5 border-gray">
          <div className="d-flex align-items-center bg-secondary  p-3 border-bottom">
            <BsGripVertical className="me-2 fs-3" />
            <strong>ASSIGNMENTS</strong>
            <div className="ms-auto d-flex align-items-center">
              <span className="badge rounded-pill border text-dark px-3 py-1 text-muted">
                40% of Total
              </span>
              <BsPlus className="fs-4 me-2" />
              <IoEllipsisVertical />
            </div>
          </div>

          <ListGroup className="wd-assignment-items rounded-0">
            <ListGroup.Item
              className="wd-assignment p-3 ps-1 d-flex align-items-start
             border-0 border-start border-success border-4"
            >
              <BsGripVertical className="me-3 text-muted mt-1" />
              <MdEditDocument className="me-3 text-success fs-4 mt-1" />

              <div className="flex-grow-1 small">
                <div className="fw-bold mb-1">
                  {" "}
                  <a
                    href="#/Kambaz/Courses/1234/Assignments/123"
                    className="wd-assignment-link text-decoration-none text-dark"
                  >
                    A1{" "}
                  </a>
                </div>
                <div className="text-muted">
                  <span className="text-danger">Multiple Modules</span> |
                  <AssignmentControlButtons />
                  <span className="fw-bold"> Not available until</span> May 6 at
                  12:00 am |
                </div>

                <div className="text-muted">
                  <span className="fw-bold">Due</span> May 13 at 11:59 pm | 100
                  pts
                </div>
              </div>
            </ListGroup.Item>

            <ListGroup.Item
              className="wd-assignment p-3 ps-1 d-flex align-items-start
                                        border-0 border-start border-success border-4 "
            >
              <BsGripVertical className="me-3 text-muted mt-1" />
              <MdEditDocument className="me-3 text-success fs-4 mt-1" />

              <div className="flex-grow-1 small">
                <div className="fw-bold mb-1">
                  {" "}
                  <a
                    href="#/Kambaz/Courses/1234/Assignments/123"
                    className="wd-assignment-link text-decoration-none text-dark"
                  >
                    A2{" "}
                  </a>
                </div>
                <div className="text-muted">
                  <span className="text-danger">Multiple Modules</span> |
                  <AssignmentControlButtons />
                  <span className="fw-bold"> Not available until</span> May 13
                  at 12:00 am |
                </div>
                <div className="text-muted">
                  <span className="fw-bold">Due</span> May 20 at 11:59 pm | 100
                  pts
                </div>
              </div>
            </ListGroup.Item>

            <ListGroup.Item
              className="wd-assignment p-3 ps-1 d-flex align-items-start
                                        border-0 border-start border-success border-4"
            >
              <BsGripVertical className="me-3 text-muted mt-1" />
              <MdEditDocument className="me-3 text-success fs-4 mt-1" />

              <div className="flex-grow-1 small">
                <div className="fw-bold mb-1">
                  {" "}
                  <a
                    href="#/Kambaz/Courses/1234/Assignments/123"
                    className="wd-assignment-link text-decoration-none text-dark"
                  >
                    A3{" "}
                  </a>
                </div>
                <div className="text-muted">
                  <span className="text-danger">Multiple Modules</span> |
                  <AssignmentControlButtons />
                  <span className="fw-bold"> Not available until</span> May 20
                  at 12:00 am |
                </div>
                <div className="text-muted">
                  <span className="fw-bold">Due</span> May 27 at 11:59 pm | 100
                  pts
                </div>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
