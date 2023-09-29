import KanbasNavigation from "/Kanbas/KanbasNavigation/KanbasNavigation.js";
import CourseNavigation from "/Kanbas/Courses/CourseNavigation/CourseNavigation.js";
function Grades() {
  return `    <div style="display: flex">
      <div class="wd-bg-color-black">
        ${KanbasNavigation("Courses")}
      </div>
      <div>
        ${CourseNavigation("Grades")}
      </div>
      <div>
      <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
        <button>Import</button>
        <select>
          <option>Export</option>
          <option>UnPublish</option>
        </select>
        <button>Configure</button>

        <!-- <table class="table">
          <tbody>
            <tr>
              <td>
                Student Names<br />
                <input
                  title="Type the name of the student to search for"
                  placeholder="Search Students"
                />
              </td>
              <td>
                Assignment Names<br />
                <input />
              </td>
            </tr>
          </tbody>
        </table> -->

        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>A1 - HTML</th>
                <th>A2 - CSS</th>
                <th>A3 - JS</th>
                <th>A4 - PHP</th>
                <th>A5 - SQL</th>
                <th>A6 - React</th>
                <th>A7 - Node</th>
                <th>A8 - Express</th>
                <th>A9 - MongoDB</th>
                <th>A10 - Mongoose</th>
                <th>A11 - Redux</th>
                <th>Q1</th>
                <th>Q2</th>
                <th>Q3</th>
                <th>Q4</th>
                <th>Q5</th>
                <th>Q6</th>
                <th>Exam 1</th>
                <th>Exam 2</th>
                <th>Exam 3</th>
                <th>Exam 4</th>
                <th>Exam 5</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alice Wonderland</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
              </tr>
              <tr>
                <td>Bob Builder</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
              </tr>
              <tr>
                <td>Charlie Chaplin</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
`;
}

export default Grades;
