class Prompt extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });
        const template = document.getElementById("prompt-template").content;

        let buttons = this.querySelectorAll(`.button`);

        Array.from(buttons).forEach((button) => {
            button.addEventListener("click", () => {
                let next = button.getAttribute("next");
                let next_prompt = document.querySelector(`[name=${next}]`);

                let level = Number(this.getAttribute("level"));
                Array.from(
                    document.querySelectorAll("interactive-prompt")
                ).forEach((elem) => {
                    let el_level = Number(elem.getAttribute("level"));
                    if (el_level > level) {
                        elem.classList.add("hidden");
                    }
                });

                next_prompt.classList.remove("hidden");
            });
        });

        this.shadowRoot.appendChild(template.cloneNode(true));
    }
}

window.onload = () => {
    window.customElements.define("interactive-prompt", Prompt);
};
