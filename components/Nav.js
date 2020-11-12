import Links from "../store/Links";

export default links => `
<nav>
    <ul class="hidden--mobile nav-links">
    ${Links.map(
      link =>
        `<li><a href="${link.title}" data-navigo><i class="fa fa-fw ${link.icon}"></i> ${link.text}</a></li>`
    ).join("")}
  </ul>
  </nav>
  `;