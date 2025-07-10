import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
         <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/1.JPG" width={200} />
            <div>
              <h5> CS4567 Mobile App Development </h5>
              <p className="wd-dashboard-course-title">
                Create cross-platform mobile apps
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
         <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/2.JPG" width={200} />
            <div>
              <h5> CS3456 Algorithms & Problem Solving </h5>
              <p className="wd-dashboard-course-title">
                Explore essential algorithmic techniques
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/3.JPG" width={200} />
            <div>
              <h5> CS5678 Introduction to Cloud Computing </h5>
              <p className="wd-dashboard-course-title">
                Gain hands-on experience with AWS and cloud-native architecture
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/4.JPG" width={200} />
            <div>
              <h5> CS6789 Database Management Systems </h5>
              <p className="wd-dashboard-course-title">
                Understand relational and NoSQL databases
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/5.JPG" width={200} />
            <div>
              <h5> CS7890 Software Engineering & Agile Practicess </h5>
              <p className="wd-dashboard-course-title">
                Collaborate in teams to build software systems
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/6.JPG" width={200} />
            <div>
              <h5> CS8910 Web Security Fundamentals </h5>
              <p className="wd-dashboard-course-title">
                Learn how to defend modern web applications against common vulnerabilities
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/7.JPG" width={200} />
            <div>
              <h5> CS8888 Introduction to Network </h5>
              <p className="wd-dashboard-course-title">
                Learn about computer networks and protocols
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
