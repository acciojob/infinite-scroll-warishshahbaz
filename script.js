document.addEventListener('DOMContentLoaded', function() {
  const list = document.querySelector('.infi-list');

  // Function to add list items
  function addListItems(count) {
    for (let i = 0; i < count; i++) {
      const listItem = document.createElement('li');
      listItem.classList.add('list-item');
      listItem.textContent = `List item ${i + 1}`;
      list.appendChild(listItem);
    }
  }

  // Add 10 list items by default
  // addListItems(10);

  // Function to check if the user has reached the end of the list
  function isEndOfList() {
    const lastItem = list.lastElementChild;
    const lastItemRect = lastItem.getBoundingClientRect();
    return lastItemRect.bottom <= window.innerHeight;
  }

  // Function to handle scroll event
  function handleScroll() {
    if (isEndOfList()) {
      // Add 2 more list items when user reaches end of list
      addListItems(2);
    }
  }

  // Add scroll event listener to window
  window.addEventListener('scroll', handleScroll);
});
