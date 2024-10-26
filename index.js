const menuItem = document.querySelectorAll(".menuItem");

const displayActiveNone = () => {
  menuItem.forEach((item) => {
    item.classList.remove("active");
  });
};

// displayActiveNone();

// menu items active state
menuItem.forEach((menu) => {
  menu.addEventListener("click", () => {
    displayActiveNone();

    menu.classList.add("active");

    // Notification

    const notifyPop = document.querySelector(".notification_popup");

    if (menu.id && menu.id === "notification_menu") {
      menu.querySelector(".notification_popup").style.display = "block";
      // removeNotifyPop();

      menu.querySelector(".notification_count").style.display = "none";
    } else {
      notifyPop.style.display = "none";
    }

    if (menu.id && menu.id === "message_menuItem") {
      menu.querySelector(".notification_count").style.display = "none";
    } else {
      // menu.querySelector(".notification_count").style.display = "block";
    }
  });
});

// function removeNotifyPop() {
//   const notifyPop = document.querySelector(".notification_popup");
//   const popMessage = document.querySelectorAll(".notification_count");

//   notifyPop.style.display = "none";
//   // popMessage.forEach((count) => (count.style.display = "block"));
// }

// MESSAGES SECTION

//  add box-shadow to message when message menuItem is clicked
const messageMenuItem = document.querySelector("#message_menuItem");
const messages = document.querySelector(".messages");

messageMenuItem.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  messageMenuItem.querySelector(".notification_count").style.display = "none";

  // setTimeout(() => {
  //   messages.style.boxShadow = "none";
  // }, 3000);
});

// MESSAGES SEARCH

const messagesSearch = document.querySelector("#message_search_chats");
const messageChats = document.querySelectorAll(".message .message_body");

// Create a "No results" message element
const noResultsMessage = document.createElement("p");
noResultsMessage.textContent = "No results found";
noResultsMessage.classList.add("no-results");
document.querySelector(".message").appendChild(noResultsMessage);

messagesSearch.addEventListener("keyup", () => {
  const messagesSearchValues = messagesSearch.value.toLowerCase();
  let hasResults = false;

  messageChats.forEach((chat) => {
    const contactName = chat.querySelector("h4").textContent.toLowerCase();

    if (contactName.includes(messagesSearchValues)) {
      chat.style.display = "flex";
      hasResults = true;
    } else {
      chat.style.display = "none";
    }
  });

  // Toggle "No results" visibility based on search results
  noResultsMessage.style.display = hasResults ? "none" : "flex";
});

// THEME SECTION

const themeMenuItem = document.querySelector("#theme_menuItem");

const theme = document.querySelector(".theme");
const themeCard = document.querySelector(".theme_card");

function openModal() {
  theme.classList.add("open");
  themeCard.classList.add("open");
  theme.style.display = "grid";
}

function closeModal(e) {
  theme.classList.remove("open");
  themeCard.classList.remove("open");
  // Optional: Delay setting display to none to allow animation to complete

  setTimeout(() => {
    theme.style.display = "none"; // Hide the theme after closing
  }, 500); // Match the duration of the transition

  if (e.target.classList.contains("theme")) {
    theme.style.display = "none";
  }
}

// open modal
themeMenuItem.addEventListener("click", openModal);

// close modal
theme.addEventListener("click", closeModal);

// FONT SIZE CHANGE

const root = document.querySelector(":root");
const resizeSpan = document.querySelectorAll(".font_resizer");

const removeResizeActive = () => {
  resizeSpan.forEach((size) => {
    size.classList.remove("active");
  });
};

resizeSpan.forEach((size) => {
  size.addEventListener("click", () => {
    let fontSize;

    // Remove active class from all font resizers
    removeResizeActive();

    // Determine font size based on selected span
    if (size.classList.contains("font_resizer_1")) {
      fontSize = "8px";
    } else if (size.classList.contains("font_resizer_2")) {
      fontSize = "11px";
    } else if (size.classList.contains("font_resizer_3")) {
      fontSize = "14px";
    } else if (size.classList.contains("font_resizer_4")) {
      fontSize = "17px";
    } else if (size.classList.contains("font_resizer_5")) {
      fontSize = "20px";
    }

    // Add active class to the clicked element
    size.classList.add("active");

    // Change font size of the root html element
    document.querySelector("html").style.fontSize = fontSize;
  });
});

// PRIMARY COLOR CHANGE

const primaryColors = document.querySelectorAll(".choose_color");

const removeColorActive = () => {
  primaryColors.forEach((color) => {
    color.classList.remove("active");
  });
};

primaryColors.forEach((color) => {
  color.addEventListener("click", () => {
    removeColorActive();
    let eachColor;

    if (color.classList.contains("choose_color_1")) {
      eachColor = "252";
    } else if (color.classList.contains("choose_color_2")) {
      eachColor = "52";
    } else if (color.classList.contains("choose_color_3")) {
      eachColor = "352";
    } else if (color.classList.contains("choose_color_4")) {
      eachColor = "152";
    } else if (color.classList.contains("choose_color_5")) {
      eachColor = "202";
    }

    color.classList.add("active");

    // change primary colors of html element
    root.style.setProperty("--primary-hue", eachColor);
  });
});

// BACKGROUND COLOR CHANGE

const BG1 = document.querySelector(".background_container_1");
const BG2 = document.querySelector(".background_container_2");
const BG3 = document.querySelector(".background_container_3");

let lightColorBrightness;
let whiteColorBrightness;
let darkColorBrightness;

const setBG = () => {
  root.style.setProperty("--light-color-lightness", lightColorBrightness);
  root.style.setProperty("--dark-color-lightness", darkColorBrightness);
  root.style.setProperty("--white-color-lightness", whiteColorBrightness);
};

BG1.addEventListener("click", () => {
  BG1.classList.add("active");
  BG2.classList.remove("active");
  BG3.classList.remove("active");

  lightColorBrightness = "95%";
  whiteColorBrightness = "100%";
  darkColorBrightness = "17%";

  setBG();
});

BG2.addEventListener("click", () => {
  lightColorBrightness = "15%";
  whiteColorBrightness = "20%";
  darkColorBrightness = "95%";

  setBG();

  BG1.classList.remove("active");
  BG2.classList.add("active");
  BG3.classList.remove("active");
});

BG3.addEventListener("click", () => {
  lightColorBrightness = "0%";
  whiteColorBrightness = "10%";
  darkColorBrightness = "95%";

  setBG();

  BG1.classList.remove("active");
  BG2.classList.remove("active");
  BG3.classList.add("active");
});
