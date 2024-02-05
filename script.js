 let loading = false;
  let page = 1;

  function fetchData() {
    // Simulating fetching data from an API
    const newData = Array.from({ length: 5 }, (_, index) => `<div class="item">New Item ${index + 1}</div>`);
    return Promise.resolve(newData);
  }

  function appendDataToContent(data) {
    const content = document.getElementById('infi-list');
    data.forEach(item => {
      content.insertAdjacentHTML('beforeend', item);
    });
  }

  function handleScroll() {
    const content = document.getElementById('content');
    const scrollPosition = content.scrollTop + content.clientHeight;
    const totalHeight = content.scrollHeight;

    if (scrollPosition >= totalHeight * 0.9 && !loading) {
      loading = true;

      fetchData()
        .then(newData => {
          appendDataToContent(newData);
          loading = false;
          page++;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          loading = false;
        });
    }
  }

  // Add a scroll event listener to trigger infinite scroll
  const content = document.getElementById('infi-list');
  content.addEventListener('scroll', handleScroll);

  // Initial data load
  handleScroll();