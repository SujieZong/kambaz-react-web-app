import { Button, Form } from "react-bootstrap";
export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <Form.Group className="mb-3">
        <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
        <Form.Control id="wd-name" value="A1 - ENV + HTML" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="wd-description">Description</Form.Label>
        <Form.Control
          as="textarea"
          id="wd-description"
          rows={5}
          value="The assignment is available online. Submit a link to the landing page of your Web application running on Netlify."
        />
      </Form.Group>

      <div className="row mb-3">
        <div className="col-md-3">
          <Form.Label htmlFor="wd-points">Points</Form.Label>
        </div>
        <div className="col-md-9">
          <Form.Control id="wd-points" value={100} />
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
              <Form.Control type="date" id="wd-due-date" value="2024-05-13" />
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
                    value="2024-05-06"
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="wd-available-until"><strong>Until</strong></Form.Label>
                  <Form.Control
                    type="date"
                    id="wd-available-until"
                    value="2024-05-20"
                  />
                </Form.Group>
              </div>
            </div>
          </div>
        </div>
      </div>
        <hr className="my-4" />
      <div className="d-flex justify-content-end gap-2">
        <Button variant="secondary" size="lg" id="wd-cancel">
          Cancel
        </Button>
        <Button variant="danger" size="lg" id="wd-save">
          Save
        </Button>
      </div>
    </div>
  );
}
