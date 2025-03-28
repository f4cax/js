document.querySelectorAll(".toggle").forEach(item => {
    item.addEventListener("click", function () {
        let submenu = this.nextElementSibling;

        if (submenu && submenu.tagName === "UL") {
            if (submenu.classList.contains("hidden")) {
                submenu.classList.remove("hidden");
                this.innerHTML = "[-] " + this.innerHTML.substring(4);
            } else {
                submenu.classList.add("hidden");
                this.innerHTML = "[+] " + this.innerHTML.substring(4);
            }
        }
    });
});