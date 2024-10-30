// const swiper = new Swiper('.mySwiper', {
//   slidesPerView: 6, // Automatically adjusts slides based on size
//   spaceBetween: 10,
//   navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//   },
//   pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//   },
//   autoplay: false, // Disable autoplay for user control
//   grabCursor: true, // Change cursor to pointer when hovering
//   touchRatio: 1, // Enable touch sliding
//   breakpoints: {
//       320: {
//           slidesPerView: 3,
//           spaceBetween: 5,
//       },
//       640: {
//           slidesPerView: 4,
//           spaceBetween: 10,
//       },
//       1024: {
//           slidesPerView: 5,
//           spaceBetween: 10,
//       },
//       1280: {
//           slidesPerView: 6,
//           spaceBetween: 10,
//       },
//   },
// });

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

// window.addEventListener("scroll", () => {
//   notifyPop.style.display = "none";
// });

// MESSAGES SECTION

//  add box-shadow to message when message menuItem is clicked
const messageMenuItem = document.querySelector("#message_menuItem");
const messages = document.querySelector(".messages");

messageMenuItem.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  messageMenuItem.querySelector(".notification_count").style.display = "none";

  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 3000);
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
const themeWrapper = document.querySelector(".theme_wrapper");

// open modal
themeMenuItem.addEventListener("click", () => {
  theme.style.display = "grid";

  setTimeout(() => themeWrapper.classList.add("active"), 10);
});

// close modal
theme.addEventListener("click", (e) => {
  if (e.target.classList.contains("theme")) {
    setTimeout(() => (theme.style.display = "none"), 600);

    themeWrapper.classList.remove("active");
  }
});

// close modal  btn

const themeBtnClose = document.querySelector(".theme_close");

themeBtnClose.addEventListener("click", (e) => {
  setTimeout(() => (theme.style.display = "none"), 600);

  themeWrapper.classList.remove("active");
});

// FONT SIZE CHANGE

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
      fontSize = "10px";
    } else if (size.classList.contains("font_resizer_3")) {
      fontSize = "12px";
    } else if (size.classList.contains("font_resizer_4")) {
      fontSize = "14px";
    } else if (size.classList.contains("font_resizer_5")) {
      fontSize = "16px";
    }

    // Add active class to the clicked element
    size.classList.toggle("active");

    // Change font size of the root html element
    document.querySelector("html").style.fontSize = fontSize;
  });
});

// PRIMARY COLOR CHANGE

const root = document.querySelector(":root");

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

// PERSONAL PROFILE

const personalProfile = document.querySelector(".personal_profile");

const profileWrapper = document.querySelector(".personal_profile_wrapper");

const profileLink1 = document.querySelector(".left .profile");
const profileLink2 = document.querySelector("nav .profile_photo");

profileLink1.addEventListener("click", (e) => {
  // e.preventDefault();

  personalProfile.style.display = "grid";
  setTimeout(() => profileWrapper.classList.add("active"), 10);
});

profileLink2.addEventListener("click", (e) => {
  e.preventDefault();

  personalProfile.style.display = "grid";
  setTimeout(() => profileWrapper.classList.add("active"), 10);
});

personalProfile.addEventListener("click", (e) => {
  if (e.target === personalProfile) {
    setTimeout(() => (personalProfile.style.display = "none"), 300);

    profileWrapper.classList.remove("active");
  }
});

// close personal profile button
const profileCloseBtn = document.querySelector(".personal_profile_close");

profileCloseBtn.addEventListener("click", () => {
  setTimeout(() => (personalProfile.style.display = "none"), 300);

  profileWrapper.classList.remove("active");
});

// profile log out
const profileLogout = document.querySelector(".profile_logout");

profileLogout.addEventListener("click", () => {
  setTimeout(() => (personalProfile.style.display = "none"), 300);

  profileWrapper.classList.remove("active");
});

// PROFILE PICS UPLOAD

const profileUpload = document.querySelector("#profile_upload");

const personalProfilePics = document.querySelectorAll(".personal_profile img");

profileUpload.addEventListener("change", () => {
  personalProfilePics.src = URL.createObjectURL(
    document.querySelector("#profile_upload").files[0]
  );
});

//  MIDDLE FORM

const middleFormPostBtn = document.querySelector(".middle_post_btn");
const middleFormPostInput = document.querySelector("#create_post");

middleFormPostBtn.addEventListener("click", (e) => {
  e.preventDefault();

  middleFormPostInput.value = "";
});

// ADD POST

const addPostLink = document.querySelector(".add_post_link");
const leftBtn = document.querySelector(".left_btn");

const addPost = document.querySelector(".add_post");
const addPostWrapper = document.querySelector(".add_post_wrapper");
const addPostInput = document.querySelector(".add_post_input");

addPostLink.addEventListener("click", () => {
  // e.preventDefault();

  addPost.style.display = "grid";
  setTimeout(() => addPostWrapper.classList.add("active"), 10);
});

// left btn create post

leftBtn.addEventListener("click", () => {
  // e.preventDefault();

  addPost.style.display = "grid";
  setTimeout(() => addPostWrapper.classList.add("active"), 10);
});

addPost.addEventListener("click", (e) => {
  if (e.target === addPost) {
    setTimeout(() => (addPost.style.display = "none"), 300);

    addPostWrapper.classList.remove("active");

    addPostInput.value = "";
  }
});

const addPostSubmit = document.querySelector(".add_post_submit");
const addPostClose = document.querySelector(".add_post_close");

// close add post

addPostSubmit.addEventListener("click", () => {
  setTimeout(() => (addPost.style.display = "none"), 300);

  addPostWrapper.classList.remove("active");

  addPostInput.value = "";
});

addPostClose.addEventListener("click", () => {
  setTimeout(() => (addPost.style.display = "none"), 300);

  addPostWrapper.classList.remove("active");

  addPostInput.value = "";
});

// FEED LIKE

const liking = document.querySelector(".love_feed");

liking.addEventListener("click", () => {
  liking.classList.toggle("like_feed");
});

const bookmark = document.querySelector(".bookmark");

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("toggle_bookmark");
});

//  REQUEST

const requestBtns = document.querySelector(".request_btns");
const accept = document.querySelectorAll("#accept");
const decline = document.querySelectorAll("#decline");
const acceptRequest = document.querySelectorAll(".accept_request");

// accept request
accept.forEach((accept) => {
  accept.addEventListener("click", () => {
    accept.parentElement.style.display = "none";

    accept.parentElement.parentElement.querySelector(
      ".accept_request"
    ).style.display = "block";
  });
});

// decline request
decline.forEach((request) => {
  request.addEventListener("click", () => {
    request.parentElement.parentElement.style.display = "none";
  });
});
