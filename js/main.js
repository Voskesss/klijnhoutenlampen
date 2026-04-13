(function () {
  var gallery = document.getElementById("gallery");
  var empty = document.getElementById("empty");
  if (!gallery) return;

  fetch("data/lampen.json")
    .then(function (r) {
      if (!r.ok) throw new Error("not found");
      return r.json();
    })
    .then(function (data) {
      var items = Array.isArray(data) ? data : data.lampen || [];
      if (!items.length) {
        if (empty) empty.hidden = false;
        return;
      }
      items.forEach(function (item) {
        if (!item || !item.image) return;

        var card = document.createElement("article");
        card.className = "card";

        var img = document.createElement("img");
        img.src = item.image;
        img.alt = item.alt || item.title || "";
        img.loading = "lazy";

        var body = document.createElement("div");
        body.className = "card__body";

        if (item.title) {
          var title = document.createElement("h3");
          title.className = "card__title";
          title.textContent = item.title;
          body.appendChild(title);
        }

        if (item.caption) {
          var caption = document.createElement("p");
          caption.className = "card__text";
          caption.textContent = item.caption;
          body.appendChild(caption);
        }

        card.appendChild(img);
        card.appendChild(body);
        gallery.appendChild(card);
      });

      if (!gallery.children.length && empty) {
        empty.hidden = false;
      }
    })
    .catch(function () {
      if (empty) empty.hidden = false;
    });
})();
