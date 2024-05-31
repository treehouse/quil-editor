const previewBtn = document.querySelector("#preview-button");
const output = document.querySelector(".output");

const toolbarOptions = [
  // font options
  [{ font: [] }],

  //   header options
  [{ header: [1, 2, 3] }],

  // text utilities
  ["bold", "italic", "underline", "strike"],

  // text colors and bg colors
  [{ color: [] }, { background: [] }],

  // lists
  [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],

  // block quotes and code blocks
  ["blockquote", "code-block"],

  // media
  ["link", "image", "video"],

  // alignment
  [{ align: [] }],
];

const quill = new Quill("#editor-container", {
  theme: "snow",
  modules: {
    toolbar: toolbarOptions,
  },
});

previewBtn.addEventListener("click", () => {
  const content = quill.root.innerHTML;
  output.classList.add("active");
  setTimeout(() => {
    output.textContent = content;
  }, 1200);
});
