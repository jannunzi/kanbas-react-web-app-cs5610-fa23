function CourseNavigation(active) {
  const links = [
    { name: "Home", url: "/Kanbas/Courses/Home/screen.html" },
    { name: "Modules", url: "/Kanbas/Courses/Modules/screen.html" },
    { name: "Assignments", url: "/Kanbas/Courses/Assignments/screen.html" },
    { name: "Grades", url: "/Kanbas/Courses/Grades/screen.html" },
  ];
  return `
  <ul class="wd-course-navigation">
    ${links
      .map(
        (link) =>
          `<li class="${link.name === active ? "wd-active" : ""}"><a href="${
            link.url
          }">${link.name}</a></li>`
      )
      .join("")}
  </ul>
`;
}

export default CourseNavigation;
