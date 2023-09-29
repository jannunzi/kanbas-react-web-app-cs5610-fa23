function KanbasNavigation(active) {
  const links = [
    {
      name: "Account",
      url: "/Kanbas/Account/Profile/screen.html",
      icon: "fa fa-user",
    },
    {
      name: "Dashboard",
      url: "/Kanbas/Dashboard/screen.html",
      icon: "fa fa-tachometer",
    },
    {
      name: "Courses",
      url: "/Kanbas/Courses/Home/screen.html",
      icon: "fa fa-home",
    },
    {
      name: "Calendar",
      url: "/Kanbas/Calendar/screen.html",
      icon: "fa fa-calendar",
    },
    {
      name: "Messages",
      url: "/Kanbas/Messages/screen.html",
      icon: "fa fa-envelope",
    },
  ];

  return `<ul class="wd-kanbas-navigation">
  ${links
    .map(
      (link) => `
  <li class="${link.name === active ? "wd-active" : ""}">
    <a href="${link.url}">
      <i class="${link.icon}" aria-hidden="true"></i>
      ${link.name}
    </a>
  </li>`
    )
    .join("")}
</ul>
`;
}

export default KanbasNavigation;
