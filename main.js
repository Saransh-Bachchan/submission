let text = document.getElementById("text");
window.addEventListener("scroll", () => {
  // text.style.marginTop = `${window.scrollY+300}px`;
  // text.style.fontSize < "160px"
  //  ? `${window.scrollY + 50}px` : "16px";
  text.style.opacity = `${(-window.scrollY+400)/500}`;
});
