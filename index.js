const searchBox = document.getElementById("searchBox");
const itemList = document.getElementById("itemList");
const items = itemList.getElementsByTagName("li");

searchBox.addEventListener("keyup", function() {
    let filter = searchBox.value.toLowerCase();

    for (let i = 0; i < items.length; i++) {
        let text = items[i].textContent.toLowerCase();
        items[i].style.display = text.includes(filter) ? "" : "none";
    }
});
