import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
export default function Labs() {
  return (
    <div id="wd-labs">
      <div id="wd-lab-header">
        Sujie Zong
        <br />
        5610 Web Programming <br />
        Summer2 2025 Online <br />
        <a href="https://github.com/SujieZong/" id="wd-github">
          Github
        </a>
        <a href="https://github.com/SujieZong/kambaz-react-web-app.git" id="wd-github">
          Github- Kambaz
        </a>
        <br />
        
      </div>
      <h1>Labs</h1>
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2/*" element={<Lab2 />} />
        <Route path="Lab3/*" element={<Lab3 />} />
      </Routes>
    </div>
  );
}
