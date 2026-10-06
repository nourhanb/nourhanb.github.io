(function () {
  var CATEGORIES = [
    { key: "pub", label: "Publications", tag: "Publication", icon: "fa-file-alt" },
    { key: "award", label: "Awards", tag: "Award", icon: "fa-trophy" },
    { key: "talk", label: "Talks", tag: "Talk", icon: "fa-microphone" },
    { key: "service", label: "Service", tag: "Service", icon: "fa-hands-helping" },
    { key: "teaching", label: "Teaching", tag: "Teaching", icon: "fa-chalkboard-teacher" },
    { key: "milestone", label: "Milestones", tag: "Milestone", icon: "fa-flag-checkered" }
  ];
  var HASH_PREFIX = "#news=";

  function init() {
    var bar = document.querySelector(".news-filters");
    var list = document.querySelector(".news-timeline");
    if (!bar || !list) return;

    var empty = document.querySelector(".news-empty");
    var items = Array.prototype.slice.call(list.querySelectorAll(".news-item"));
    var byKey = {};
    CATEGORIES.forEach(function (c) { byKey[c.key] = c; });

    items.forEach(function (item) {
      var cats = (item.getAttribute("data-cat") || "").split(/\s+/).filter(Boolean);
      item._cats = cats;
      var date = item.querySelector(".news-date");
      if (!date || !cats.length) return;

      var tags = document.createElement("span");
      tags.className = "news-tags";
      cats.forEach(function (key) {
        var c = byKey[key];
        if (!c) return;
        var tag = document.createElement("span");
        tag.className = "news-tag news-tag--" + key;
        tag.innerHTML = '<i class="fas ' + c.icon + '" aria-hidden="true"></i>' + c.tag;
        tags.appendChild(tag);
      });
      date.insertAdjacentElement("afterend", tags);
    });

    var lastYear = null;
    items.forEach(function (item) {
      var date = item.querySelector(".news-date");
      var match = date && date.textContent.match(/(\d{4})/);
      if (!match || match[1] === lastYear) return;
      lastYear = match[1];
      var divider = document.createElement("li");
      divider.className = "news-year";
      divider.setAttribute("aria-hidden", "true");
      divider.textContent = lastYear;
      list.insertBefore(divider, item);
    });

    function count(key) {
      return items.filter(function (i) { return i._cats.indexOf(key) !== -1; }).length;
    }

    var buttons = [];
    function addButton(key, label, icon, n) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "news-chip news-chip--" + key;
      btn.setAttribute("data-filter", key);
      btn.setAttribute("aria-pressed", "false");
      btn.innerHTML =
        (icon ? '<i class="fas ' + icon + '" aria-hidden="true"></i>' : "") +
        '<span class="news-chip__label">' + label + "</span>" +
        '<span class="news-chip__count">' + n + "</span>";
      btn.addEventListener("click", function () { apply(key, true); });
      bar.appendChild(btn);
      buttons.push(btn);
    }

    addButton("all", "All", null, items.length);
    CATEGORIES.forEach(function (c) {
      var n = count(c.key);
      if (n) addButton(c.key, c.label, c.icon, n);
    });

    function apply(key, updateHash) {
      if (key !== "all" && !byKey[key]) key = "all";

      buttons.forEach(function (b) {
        b.setAttribute("aria-pressed", String(b.getAttribute("data-filter") === key));
      });

      var visible = 0;
      items.forEach(function (item) {
        var show = key === "all" || item._cats.indexOf(key) !== -1;
        item.hidden = !show;
        if (show) visible++;
      });

      Array.prototype.forEach.call(list.querySelectorAll(".news-year"), function (divider) {
        var next = divider.nextElementSibling;
        var hasVisible = false;
        while (next && !next.classList.contains("news-year")) {
          if (!next.hidden) { hasVisible = true; break; }
          next = next.nextElementSibling;
        }
        divider.hidden = !hasVisible;
      });

      list.setAttribute("data-active", key);
      list.scrollTop = 0;
      if (empty) empty.hidden = visible > 0;

      if (updateHash && window.history && history.replaceState) {
        var url = location.pathname + location.search + (key === "all" ? "" : HASH_PREFIX + key);
        history.replaceState(null, "", url);
      }
    }

    var initial = location.hash.indexOf(HASH_PREFIX) === 0 ? location.hash.slice(HASH_PREFIX.length) : "all";
    apply(initial, false);
    bar.classList.add("is-ready");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
