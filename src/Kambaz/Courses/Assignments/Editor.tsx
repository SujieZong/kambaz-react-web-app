export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <h3>Assignment Name</h3>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online. Submit a link to the landing page of
        your Web application running on Netlify.
      </textarea>
      <br />
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <tr>
            <td colSpan={2} style={{ height: '10px' }}></td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
              </select>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>&nbsp;</td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option value="Percentage">Percentage</option>
                <option value="Points">Points</option>
              </select>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>&nbsp;</td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </select>
            </td>
          </tr>
          <br />
          <tr>
            <td></td>
            <td>
              <label>Online Entry Options:</label>
              <br />
              <input type="checkbox" id="wd-text-entry" />
              <label htmlFor="wd-text-entry">Text Entry</label>
              <br />
              <input type="checkbox" id="wd-website-url" />
              <label htmlFor="wd-website-url">Website URL</label>
              <br />
              <input type="checkbox" id="wd-media-recordings" />
              <label htmlFor="wd-media-recordings">Media Recordings</label>
              <br />
              <input type="checkbox" id="wd-student-annotation" />
              <label htmlFor="wd-student-annotation">Student Annotation</label>
              <br />
              <input type="checkbox" id="wd-file-upload" />
              <label htmlFor="wd-file-upload">File Uploads</label>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>&nbsp;</td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign">Assign</label>
            </td>
            <td valign="top">
              <label htmlFor="wd-assign-to">Assign to</label>
            </td>
          </tr>
          <tr>
            <td> </td>

            <td>
              <select id="wd-assign-to" multiple>
                <option selected>Everyone</option>
              </select>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>&nbsp;</td>
          </tr>
          <tr>
            <td></td>
            <td align="left">
              <label htmlFor="wd-due-date">Due</label>
            </td>
          </tr>

          <tr>
            <td></td>
            <td>
              <input type="date" id="wd-due-date" value="2024-05-13" />
            </td>
          </tr>

          <tr>
            <td></td>
            <td align="left">
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td align="left">
              <label htmlFor="wd-available-until">Until</label>
            </td>
            
          </tr>
            <tr>
                <td></td>
          <td>
              <input type="date" id="wd-available-from" value="2024-05-06" />
            </td>
         
            <td>
              <input type="date" id="wd-available-until" value="2024-05-20" />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <table width="100%">
        <tr>
          <td></td>
          <td align="right">
            <button id="wd-cancel">Cancel</button>
            <button id="wd-save">Save</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
