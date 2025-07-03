// Smooth scroll to Cars section
function scrollToCars() {
  const carSection = document.getElementById("cars");
  if (carSection) {
    carSection.scrollIntoView({ behavior: "smooth" });
  }
}
