import {Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import * as db from "../../Database";

export default function AssignmentEditor() {
    const { cid,aid } = useParams();
    const assignment = db.assignments.find((assignment: any) => assignment._id === aid);
    
  if (!assignment){
    return(
      <div id="wd-assignments-editor">
        <h3>Assignment not found</h3>
        <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-secondary">
          Back to Assignments
        </Link>
      </div>  
    );
  }

  // copilot add this function to format date strings for input fields
const formatDateForInput = (dateString: string) => {
  if (!dateString) return "";
  
  try {
    // Handle formats like "Jul 1 at 12:00 am" or "May 13 at 11:59 pm"
    const dateRegex = /^(\w{3})\s+(\d{1,2})\s+at/;
    const match = dateString.match(dateRegex);
    
    if (match) {
      const monthMap: { [key: string]: string } = {
        'Jan': '01', 'Feb': '02', 'Mar': '03', 'Apr': '04',
        'May': '05', 'Jun': '06', 'Jul': '07', 'Aug': '08',
        'Sep': '09', 'Oct': '10', 'Nov': '11', 'Dec': '12'
      };
      
      const month = monthMap[match[1]];
      const day = match[2].padStart(2, '0');
      const year = '2024'; // Assuming current year
      
      return `${year}-${month}-${day}`;
    }
    
    // Fallback: try to parse as regular date
    const date = new Date(dateString);
    if (!isNaN(date.getTime())) {
      return date.toISOString().split('T')[0];
    }
    
    // Default fallback
    return "2024-05-16";
    
  } catch (error) {
    return "2024-05-16";
  }
};

  return (
    <div id="wd-assignments-editor">
      <Form.Group className="mb-3">
        <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
        <Form.Control id="wd-name" value={assignment.title}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="wd-description">Description</Form.Label>
        <Form.Control
          as="textarea"
          id="wd-description"
          rows={5}
          value={assignment.description||"The assignment is available online. Submit a link to the landing page of your Web application running on Netlify."}
        />
      </Form.Group>

      <div className="row mb-3">
        <div className="col-md-3">
          <Form.Label htmlFor="wd-points">Points</Form.Label>
        </div>
        <div className="col-md-9">
          <Form.Control id="wd-points" value={assignment.points} />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-3">
          <Form.Label htmlFor="wd-group">Assignment Group</Form.Label>
        </div>
        <div className="col-md-9">
          <Form.Select id="wd-group">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
          </Form.Select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-3">
          <Form.Label htmlFor="wd-display-grade-as">
            Display Grade as
          </Form.Label>
        </div>
        <div className="col-md-9">
          <Form.Select id="wd-display-grade-as">
            <option value="Percentage">Percentage</option>
            <option value="Points">Points</option>
          </Form.Select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-3">
          <Form.Label htmlFor="wd-submission-type">Submission Type</Form.Label>
        </div>
        <div className="col-md-9">
          <div className="border p-3">
            <Form.Group className="mb-3">
              <Form.Select id="wd-submission-type">
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label><strong>Online Entry Options:</strong></Form.Label>
              <div className="mt-2">
                <Form.Check
                  type="checkbox"
                  id="wd-text-entry"
                  label="Text Entry"
                  className="mb-2"
                />
                <Form.Check
                  type="checkbox"
                  id="wd-website-url"
                  label="Website URL"
                  className="mb-2"
                />
                <Form.Check
                  type="checkbox"
                  id="wd-media-recordings"
                  label="Media Recordings"
                  className="mb-2"
                />
                <Form.Check
                  type="checkbox"
                  id="wd-student-annotation"
                  label="Student Annotation"
                  className="mb-2"
                />
                <Form.Check
                  type="checkbox"
                  id="wd-file-upload"
                  label="File Uploads"
                  className="mb-2"
                />
              </div>
            </Form.Group>
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-3">
          <Form.Label htmlFor="wd-assign">Assign</Form.Label>
        </div>
        <div className="col-md-9">
          <div className="border p-3">
            <Form.Group className="mb-3">
                <Form.Label htmlFor="wd-assign-to"><strong>Assign to</strong></Form.Label>
              <Form.Select id="wd-assign-to" multiple>
                <option selected>Everyone</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="wd-due-date"><strong>Due</strong></Form.Label>
              <Form.Control type="date" id="wd-due-date" value={formatDateForInput(assignment.dueDate)} />
            </Form.Group>

            <div className="row">
              <div className="col-md-6">
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="wd-available-from">
                    <strong>Available from</strong>
                  </Form.Label>
                  <Form.Control
                    type="date"
                    id="wd-available-from"
                    value={formatDateForInput(assignment.availableFrom)}
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="wd-available-until"><strong>Until</strong></Form.Label>
                  <Form.Control
                    type="date"
                    id="wd-available-until"
                    value={formatDateForInput(assignment.availableUntil)}
                  />
                </Form.Group>
              </div>
            </div>
          </div>
        </div>
      </div>
        <hr className="my-4" />
      <div className="d-flex justify-content-end gap-2">
        <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-secondary btn-lg" id="wd-cancel">
          Cancel
        </Link>
        <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-danger btn-lg" id="wd-save">
          Save
        </Link>
      </div>
    </div>
  );
}
