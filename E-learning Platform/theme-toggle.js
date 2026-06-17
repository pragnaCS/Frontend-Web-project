document.addEventListener("DOMContentLoaded", () => {
    const dbtn = document.getElementById("dbtn");
    const rootElement = document.documentElement; // This targets the <html> tag globally

    if (localStorage.getItem("theme") === "dark") {
        rootElement.classList.add("dark");
        if (dbtn) dbtn.innerText = "Light Mode";
    } else {
        rootElement.classList.remove("dark");
        if (dbtn) dbtn.innerText = "Dark Mode";
    }

    if (dbtn) {
        dbtn.addEventListener("click", () => {
            if (rootElement.classList.contains("dark")) {
                rootElement.classList.remove("dark");
                localStorage.setItem("theme", "light");
                dbtn.innerText = "Dark Mode";
            } else {
                rootElement.classList.add("dark");
                localStorage.setItem("theme", "dark");
                dbtn.innerText = "Light Mode";
            }
        });
    }
});