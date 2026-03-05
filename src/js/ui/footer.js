export function Footer() {
    const footer = document.createElement("footer");
    const year = new Date().getFullYear();
    const author = document.createElement("a");

    footer.textContent = `© ${year}`;
    footer.appendChild(author);
    author.href = "https://github.com/nannnmuzaki";
    author.target = "_blank";
    author.textContent = "nannnmuzaki";

    return footer;
}
