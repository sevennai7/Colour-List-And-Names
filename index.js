function log(msg) {
  const div = document.createElement("div");
  div.style.color = "white";
  div.style.background = "red";
  div.style.padding = "10px";
  div.style.fontSize = "18px";
  div.style.fontFamily = "monospace";
  div.style.borderBottom = "2px solid black";
  div.textContent = msg;
  document.body.prepend(div);
}

log("JS loaded. Starting fetch...");

fetch("./colourlist.json")
  .then(r => {
    log("Fetch status: " + r.status);
    return r.json();
  })
  .then(data => {
    log("JSON loaded successfully.");
    console.log(data);
  })
  .catch(err => {
    log("FETCH ERROR: " + err);
  });
