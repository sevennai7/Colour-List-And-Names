const searchBox = document.getElementById("searchBox");
const itemList = document.getElementById("itemList");

// 1. Load JSON
fetch("./colourlist.json")
  .then(res => res.json())
  .then(data => {
      // Create list items from JSON
      for (const key in data) {
          const li = document.createElement("li");
          li.textContent = key; // or `${key}: ${data[key]}`
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
