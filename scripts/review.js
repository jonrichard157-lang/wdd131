// Track and increment the number of completed reviews using localStorage
document.addEventListener("DOMContentLoaded", () => {
  const reviewCountDisplay = document.getElementById("review-count");

  // Key in localStorage for tracking reviews completed
  const STORAGE_KEY = "numReviews-ls";

  // Read current count from localStorage, defaulting to 0 if not yet set
  let numReviews = Number(window.localStorage.getItem(STORAGE_KEY)) || 0;

  // Increment counter each time review.html loads after form submission
  numReviews += 1;

  // Save the updated count back to localStorage
  window.localStorage.setItem(STORAGE_KEY, numReviews);

  // Display the updated counter
  if (reviewCountDisplay) {
    reviewCountDisplay.textContent = numReviews;
  }

  // Populate dynamic footer dates
  const currentYearElement = document.getElementById("currentyear");
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }

  const lastModifiedElement = document.getElementById("lastModified");
  if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;
  }
});
