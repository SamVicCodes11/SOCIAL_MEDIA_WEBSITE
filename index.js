const menuItem = document.querySelectorAll(".menuItem");
const notifyPop = document.querySelector(".notification_popup");
let notificationCountHidden = false; // Flag to track if count has been hidden

const displayActiveNone = () => {
  menuItem.forEach((item) => {
    item.classList.remove("active");
  });
};

menuItem.forEach((menu) => {
  menu.addEventListener("click", () => {
    displayActiveNone();
    menu.classList.add("active");

    // Toggle notification popup display for "notification_menu"
    if (menu.id === "notification_menu") {
      const isPopupVisible = notifyPop.style.display === "block";
      notifyPop.style.display = isPopupVisible ? "none" : "block";

      // Hide notification count only once
      const notificationCount = menu.querySelector(".notification_count");
      if (notificationCount && !notificationCountHidden) {
        notificationCount.style.display = "none";
        notificationCountHidden = true; // Set flag to true after hiding
      }
    } else {
      // Hide the notification popup if any other menu item is clicked
      notifyPop.style.display = "none";
    }
  });
});

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

// ADD POST POP UP

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

// ADD POST POP UP SUBMIT

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

// ADD POST UPDATE PROFILE

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

// MIDDLE FORM SECTION

const middleFormProfilePopup = document.querySelector(
  ".middle_form .profile_photo"
);

middleFormProfilePopup.addEventListener("click", (e) => {
  personalProfile.style.display = "grid";
  setTimeout(() => profileWrapper.classList.add("active"), 10);
});

// FEEDS SECTION

// FEED PROFILE POPUP SECTION

const feedProfilePopup = document.querySelectorAll(
  ".feed_heading .profile_photo"
);

feedProfilePopup.forEach((profile) => {
  profile.addEventListener("click", (e) => {
    // e.preventDefault();

    personalProfile.style.display = "grid";
    setTimeout(() => profileWrapper.classList.add("active"), 10);
  });
});

// FEEDS EDIT & DELETE SECTION

// Close dropdowns if they are open
const closeDropdowns = () => {
  // Close all comments dropdowns
  document.querySelectorAll(".comments_dropdown").forEach((dropdown) => {
    dropdown.classList.remove("active");
  });

  // Close all share dropdowns
  document.querySelectorAll(".share_dropdown").forEach((dropdown) => {
    dropdown.classList.remove("active");
  });
};

// Event listener for feed edit menu clicks
const feedEdits = document.querySelectorAll(".feed_edit");

feedEdits.forEach((edit) => {
  edit.addEventListener("click", (e) => {
    // Close notification popup if it's open
    notifyPop.style.display = "none"; // Close the notification popup

    // Close other dropdowns
    closeDropdowns();

    const menu = edit.querySelector(".feed_edit_menu");
    menu.classList.toggle("active"); // Toggle the active state for the edit menu

    // Prevent click from bubbling to the document listener
    e.stopPropagation();
  });
});

// FEED LIKE

const liking = document.querySelectorAll(".love_feed");

liking.forEach((like) => {
  like.addEventListener("click", () => {
    like.classList.toggle("like_feed");
  });
});

// COMMENTS SECTION
const feeds = document.querySelectorAll(".feed");

feeds.forEach((feed) => {
  const commentIcon = feed.querySelector(".comments_icon");
  const commentDropdown = feed.querySelector(".comments_dropdown");

  // Toggle active class to apply the scaling effect
  commentIcon.addEventListener("click", () => {
    commentDropdown.classList.toggle("active");
  });
});

feeds.forEach((feed) => {
  const shareIcon = feed.querySelector(".share_icon");
  const shareDropdown = feed.querySelector(".share_dropdown");

  shareIcon.addEventListener("click", () => {
    setTimeout(() => shareDropdown.classList.toggle("active"), 10);
  });
});

// FEED BOOKMARK
const bookmarks = document.querySelectorAll(".bookmark");

bookmarks.forEach((bookmark) => {
  bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("toggle_bookmark");
  });
});

// document.addEventListener("scroll", () => {
//   notifyPop.style.display = "none";
// });

//  REMOVE DROPDOWN SECTION

document.addEventListener("click", (e) => {
  // Close notifyPop if clicked outside
  if (!e.target.closest("#notification_menu")) {
    notifyPop.style.display = "none";
  }

  // Close all comments dropdowns if clicked outside
  if (
    !e.target.closest(".comments_icon") &&
    !e.target.closest(".comments_dropdown")
  ) {
    document.querySelectorAll(".comments_dropdown").forEach((dropdown) => {
      dropdown.classList.remove("active");
    });
  }

  // Close all share dropdowns if clicked outside
  if (
    !e.target.closest(".share_icon") &&
    !e.target.closest(".share_dropdown")
  ) {
    document.querySelectorAll(".share_dropdown").forEach((dropdown) => {
      dropdown.classList.remove("active");
    });
  }

  // Close edit menu if clicked outside
  if (!e.target.closest(".feed_edit") && !e.target.closest(".feed_edit_menu")) {
    document.querySelectorAll(".feed_edit_menu").forEach((menu) => {
      menu.classList.remove("active");
    });
  }
});

// ADD POST // UPLOAD IMAGE // TITLE

// Select necessary elements
const titleInput = document.querySelector(".add_post_input");
const fileInput = document.querySelector("#post_upload");
const imagePreview = document.querySelector(".post_image_preview");
const addPostButton = document.querySelector(".add_post_submit");
const addPostLabel = document.querySelector(".add_post_label");

// Function to reset the form to its original state
function resetForm() {
  titleInput.value = ""; // Clear the title input
  fileInput.value = ""; // Clear the file input
  imagePreview.style.display = "none"; // Hide the image preview
  imagePreview.src = ""; // Reset the image source
  addPostLabel.style.display = "block"; // Show the label again
  addPostLabel.innerHTML =
    '<span><i class="fa fa-plus"></i></span> Update A Picture'; // Reset label text
}

// Event listener for file input change
fileInput.addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      imagePreview.src = e.target.result; // Set the image preview
      imagePreview.style.display = "block"; // Show the image preview
      addPostLabel.style.display = "none"; // Hide the label when image is uploaded
    };
    reader.readAsDataURL(file);
  }
});

// Event listener for Add Post button
addPostButton.addEventListener("click", function () {
  // Here you can add the logic to submit the post
  // After that, reset the form
  resetForm();
});


// UPDATE PERSONAL PROFILE PHOTO

// Select the file input and upload label
const profileUploadInput = document.getElementById('profile_upload');
const profileUploadLabel = document.getElementById('profileUploadLabel');

// Event listener for file input change
profileUploadInput.addEventListener('change', function (event) {
  const file = event.target.files[0];
  
  if (file) {
    const reader = new FileReader();
    
    reader.onload = function (e) {
      // Find all images with the class "profile_photo_img"
      const profileImages = document.querySelectorAll('.profile_photo_img');
      
      // Update the src for each profile photo image
      profileImages.forEach(img => {
        img.src = e.target.result;
      });
      
    };
    
    reader.readAsDataURL(file);
  }
});

// ADD STORY SECTION

const addStoryContainer = document.getElementById('addStoryContainer');
const storyUploadInput = document.getElementById('storyUploadInput');
const addStoryIcon = addStoryContainer.querySelector('.add_story_icon');
const createStoryText = addStoryContainer.querySelector('p');
const profilePhotoDiv = addStoryContainer.querySelector('.profile_photo');

// Event listener to trigger the file input on container click
addStoryContainer.addEventListener('click', () => {
  storyUploadInput.click();
});

// Event listener for file input change
storyUploadInput.addEventListener('change', function(event) {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function(e) {
      // Set the uploaded image as the background image of addStoryContainer with optimal styling
      addStoryContainer.style.backgroundImage = `url(${e.target.result})`;
      addStoryContainer.style.backgroundSize = 'cover';
      addStoryContainer.style.backgroundPosition = 'center';
      addStoryContainer.style.backgroundRepeat = 'no-repeat';
      // addStoryContainer.style.borderRadius = '10px'; // Optional: adjust border-radius for a rounded look

      // Hide the add_story_icon, create_story_text, and profile_photo div after an image is uploaded
      addStoryIcon.style.display = 'none';
      createStoryText.style.display = 'none';
      profilePhotoDiv.style.display = 'none';
    };

    reader.readAsDataURL(file);
  }
});



