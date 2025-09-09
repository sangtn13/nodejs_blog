function inc(value) {
  return parseInt(value) + 1;
}

function formatDate(date) {
  if (!date) return "";
  const d = new Date(date);
  const pad = (n) => n.toString().padStart(2, "0");
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} ${pad(
    d.getHours()
  )}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

function sortable(field, sort) {
  const sortType = field === sort.column ? sort.type : "default";

  const validTypes = ["default", "asc", "desc"];
  const currentType = validTypes.includes(sortType) ? sortType : "default";

  const icons = {
    default: "bi bi-arrow-down-up",
    asc: "bi bi-arrow-up",
    desc: "bi bi-arrow-down",
  };
  const types = {
    default: "asc",
    asc: "desc",
    desc: "asc",
  };
  return `
          <a href="?_sort&column=${field}&type=${types[currentType]}" title="Sắp xếp theo ${field}" style="color: inherit; text-decoration: none;">
            <i class="${icons[currentType]}"></i>
          </a>
        `;
}

export default { inc, formatDate, sortable };