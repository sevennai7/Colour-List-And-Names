const searchBox = document.getElementById("searchBox");
const itemList = document.getElementById("itemList");

// 1. Load JSON
fetch("./colourlist.json")
  .then(res => res.json())
  .then(data => {
      // Create list items from JSON
      for (const key in data) {
          const hex = data[key];

          const li = document.createElement("li");
          li.textContent = `${key} (${hex})`;

          // Apply background colour
          li.style.setProperty("background-color", hex, "important");
          li.style.padding = "10px";
          li.style.borderRadius = "8px";
          li.style.marginBottom = "6px";
          li.style.setProperty("color", isDark(hex) ? "white" : "black", "important");

          itemList.appendChild(li);
      }

      // IMPORTANT: Items exist NOW, so get them NOW
      const items = itemList.getElementsByTagName("li");

      // 2. Add search functionality
      searchBox.addEventListener("keyup", function() {
          let filter = searchBox.value.toLowerCase();

          for (let i = 0; i < items.length; i++) {
              let text = items[i].textContent.toLowerCase();
              items[i].style.display = text.includes(filter) ? "" : "none";
          }
      });
  });

// Helper function for readable text
function isDark(hex) {
    hex = hex.replace("#", ""); // remove # if present

    // Extract R, G, B components
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // Perceived brightness formula
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    return brightness < 130; // darker colors return true
}
