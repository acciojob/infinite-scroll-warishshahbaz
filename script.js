document.addEventListener("DOMContentLoaded", function () {
  const list = document.querySelector("#infi-list");
  const listItemHeight = list.firstElementChild.offsetHeight;

  // Function to add more list items
  function addMoreItems() {
    for (let i = 0; i < 2; i++) {
      const newItem = document.createElement("li");
      newItem.textContent = `Item ${list.children.length + 1}`;
      list.appendChild(newItem);
    }
  }

  // Event listener for scroll
  list.addEventListener("scroll", function () {
    if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
      addMoreItems();
    }
  });

  // Initially add 10 list items
  // for (let i = 0; i < 10; i++) {
  //   const newItem = document.createElement("li");
  //   newItem.textContent = `Item ${i + 1}`;
  //   list.appendChild(newItem);
  // }
});
