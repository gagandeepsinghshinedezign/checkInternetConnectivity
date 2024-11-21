function showToast(message, type = "info") {
  Toastify({
    text: message,
    duration: 3000,
    gravity: "top",
    position: "right",
    className: `toast-${type}`,
  }).showToast();
}

function checkInternet() {
  if (navigator.onLine) {
    showToast("You are back online!", "success");
  } else {
    showToast("You are offline!", "error");
  }
}

window.addEventListener('online', () => {
  console.log("Back online");
  checkInternet();
});

window.addEventListener('offline', () => {
  console.log("You are offline");
  checkInternet();
});

// Initial check when the script loads
checkInternet();
