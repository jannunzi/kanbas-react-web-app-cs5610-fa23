import KanbasNavigation from "../../KanbasNavigation/KanbasNavigation.js";
import CourseNavigation from "../CourseNavigation/CourseNavigation.js";

function Home() {
  return `    <div class="d-block d-md-none">
      <a href="/Kanbas/KanbasNavigation">Kanbas Navigator</a>
      <a href="/Kanbas/Courses/CourseNavigation">Course Navigator</a>
    </div>
    <div class="wd-flex-row-container">
      <div class="wd-bg-color-black d-none d-md-block">
        ${KanbasNavigation("Courses")}
      </div>
      <div>
        ${CourseNavigation("Home")}
      </div>
      <div class="wd-bg-color-red wd-flex-grow-1">
        <button>Collapse All</button>
        <button>View Progress</button>
        <select>
          <option>Publish All</option>
          <option>Publish all items and modules</option>
          <option>UnPublish</option>
        </select>
        <button>+ Module</button>
        <hr />
        <ul>
          <li>
            Week 0
            <ul>
              <li>
                LEARNING OBJECTIVES
                <ul>
                  <li>Introduction to the course</li>
                  <li>Introduction to the course website</li>
                  <li>Introduction to the course tools</li>
                  <li>Introduction to the course assignments</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            Week 1
            <ul>
              <li>
                LEARNING OBJECTIVES
                <ul>
                  <li>Introduction to the course</li>
                  <li>Introduction to the course website</li>
                  <li>Introduction to the course tools</li>
                  <li>Introduction to the course assignments</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            Week 2
            <ul>
              <li>
                LEARNING OBJECTIVES
                <ul>
                  <li>Introduction to the course</li>
                  <li>Introduction to the course website</li>
                  <li>Introduction to the course tools</li>
                  <li>Introduction to the course assignments</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            Week 3
            <ul>
              <li>
                LEARNING OBJECTIVES
                <ul>
                  <li>Introduction to the course</li>
                  <li>Introduction to the course website</li>
                  <li>Introduction to the course tools</li>
                  <li>Introduction to the course assignments</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            Week 4
            <ul>
              <li>
                LEARNING OBJECTIVES
                <ul>
                  <li>Introduction to the course</li>
                  <li>Introduction to the course website</li>
                  <li>Introduction to the course tools</li>
                  <li>Introduction to the course assignments</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="wd-bg-color-green d-none d-lg-block">Course Status</div>
    </div>
`;
}

export default Home;
