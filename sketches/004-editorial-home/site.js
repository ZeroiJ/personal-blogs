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
})();
