// zeroij/blog — list filter + theme. No deps, Cloudflare-safe.
(function () {
  var root = document.documentElement;
  try {
    var saved = localStorage.getItem("zb-theme");
    if (saved === "light" || saved === "dark") root.dataset.theme = saved;
    else if (matchMedia("(prefers-color-scheme: light)").matches) root.dataset.theme = "light";
  } catch (e) {}

  window.toggleTheme = function () {
    var next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try { localStorage.setItem("zb-theme", next); } catch (e) {}
  };

  var cur = "all";
  var q = document.getElementById("q");
  var tagBtns = document.querySelectorAll("#tags .f");
  tagBtns.forEach(function (b) {
    b.addEventListener("click", function () {
      tagBtns.forEach(function (x) { x.classList.remove("on"); x.setAttribute("aria-selected", "false"); });
      b.classList.add("on");
      b.setAttribute("aria-selected", "true");
      cur = b.dataset.t;
      filter();
    });
  });
  if (q) q.addEventListener("input", filter);

  function filter() {
    var term = q ? q.value.trim().toLowerCase() : "";
    var visible = 0;
    document.querySelectorAll("#list .item").forEach(function (it) {
      var okT = cur === "all" || it.dataset.type === cur;
      var okQ = !term || (it.dataset.title || "").toLowerCase().indexOf(term) !== -1;
      var show = okT && okQ;
      it.style.display = show ? "" : "none";
      if (show) visible++;
    });
    var empty = document.getElementById("empty");
    if (empty) empty.style.display = visible === 0 ? "block" : "none";
    var count = document.getElementById("count");
    if (count) count.textContent = visible + " shown";
  }
  window.__blogFilter = filter;
})();
