document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById("searchInput");
  const table = document.getElementById("membersTable");
  searchInput.addEventListener("keyup", function() {
    const filter = searchInput.value.toLowerCase();
    const rows = table.getElementsByTagName("tr");
    for (let i = 0; i < rows.length; i++) {
      const nameCell = rows[i].querySelector(".member-name");
      if (nameCell) {
        const txtValue = nameCell.textContent || nameCell.innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
          rows[i].style.display = "";
        } else {
          rows[i].style.display = "none";
        }
      }
    }
  });
});