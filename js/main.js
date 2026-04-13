(function () {
  var grid = document.getElementById("lampen-grid");
  var empty = document.getElementById("lampen-empty");
  if (!grid) return;

  var root = (grid.getAttribute("data-lampen-root") || ".").replace(/\/$/, "");
  var prefix = root === "." ? "" : root + "/";

  function showEmpty() {
    if (empty) empty.hidden = false;
  }

  fetch(prefix + "data/lampen.json")
    .then(function (r) {
      if (!r.ok) throw new Error("json");
      return r.json();
    })
    .then(function (data) {
      var items = Array.isArray(data) ? data : data.lampen || [];
      if (!items.length) {
        showEmpty();
        return;
      }
      items.forEach(function (item) {
        if (!item || !item.image) return;
        var article = document.createElement("article");
        article.className = "lamp-card";
        var figure = document.createElement("figure");
        figure.style.margin = "0";
        var img = document.createElement("img");
        img.src = prefix + item.image.replace(/^\//, "");
        img.alt = item.alt || item.title || "";
        img.loading = "lazy";
        figure.appendChild(img);
        if (item.title || item.caption) {
          var cap = document.createElement("figcaption");
          cap.textContent = item.caption || item.title || "";
          figure.appendChild(cap);
        }
        article.appendChild(figure);
        grid.appendChild(article);
      });
      if (!grid.children.length) showEmpty();
    })
    .catch(function () {
      showEmpty();
    });
})();
