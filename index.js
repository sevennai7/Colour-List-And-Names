const searchBox = document.getElementById("searchBox");
const itemList = document.getElementById("itemList");

fetch("./colorlist.json")
  .then(res => res.json())
  .then(data => {
      for (const key in data) {
          const li = document.createElement("li");
          li.textContent = key; // or `${key} — ${data[key]}` if you want
          itemList.appendChild(li);
      }
  });


const items = itemList.getElementsByTagName("li");

searchBox.addEventListener("keyup", function() {
    let filter = searchBox.value.toLowerCase();

    for (let i = 0; i < items.length; i++) {
        let text = items[i].textContent.toLowerCase();
        items[i].style.display = text.includes(filter) ? "" : "none";
    }
});
