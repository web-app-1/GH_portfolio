document.addEventListener("DOMContentLoaded", function () {
  const detailsElements = document.querySelectorAll("details");

  detailsElements.forEach(parent => {
    parent.addEventListener("toggle", function () {
      if (parent.open) {
        // Abrir todos los hijos <details> dentro del padre que se acaba de abrir
        const childDetails = parent.querySelectorAll("details");
        childDetails.forEach(child => child.open = true);
      }
    });
  });
});
