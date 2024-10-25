const menuItem = document.querySelectorAll(".menuItem");

const displayActiveNone = () => {
  menuItem.forEach((item) => {
    item.classList.remove("active");
  });
};

displayActiveNone();

// menu items active state
menuItem.forEach((menu) => {
  menu.addEventListener("click", () => {
    displayActiveNone();

    menu.classList.add("active");

    // Notification

    if (menu.id && menu.id === "notification_menu") {
      menu.querySelector(".notification_popup").style.display = "block";
      // removeNotifyPop();

      menu.querySelector(".notification_count").style.display = "none";
    } else {
      removeNotifyPop();
    }

    if (menu.id && menu.id === "message_menuItem") {
      menu.querySelector(".notification_count").style.display = "none";
    } else {
      // menu.querySelector(".notification_count").style.display = "block";
    }
  });
});

function removeNotifyPop() {
  const notifyPop = document.querySelector(".notification_popup");
  const popMessage = document.querySelectorAll(".notification_count");

  notifyPop.style.display = "none";
  popMessage.forEach((count) => (count.style.display = "block"));
}

// MESSAGES SECTION

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

const messagesSearch = document.querySelector(".messages .search_bar input");

const messageChats = document.querySelectorAll(".message_body");








messagesSearch.addEventListener("keydown", () => {
  const messagesSearchValues = messagesSearch.value.toLowerCase();

  messageChats.forEach((chat) => {
    const contactName = document
      .querySelector("h5")
      .textContent.toLocaleLowerCase();

    if (contactName.indexOf(messagesSearchValues) !== -1) {
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
    }
  });
});


// THEME SECTION

const themeMenuItem = document.querySelector("#theme_menuItem");

const theme = document.querySelector(".theme");

function openModal() {
  theme.style.display = "grid";
}

function closeModal(e) {
  if (e.target.classList.contains("theme")) {
    theme.style.display = "none";
  }
}

// open modal
themeMenuItem.addEventListener("click", openModal);

// close modal
theme.addEventListener("click", closeModal);
