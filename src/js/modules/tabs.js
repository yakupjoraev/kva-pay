

function tabs() {
  const container = document.querySelector('.tabs');
  if (!container) {
    return null
  }

  const tabs = document.querySelectorAll('.tabs__btn');
  const tabContents = document.querySelectorAll('.tabs__content');

  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      const tabName = this.getAttribute('tab-btn');

      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');

      tabContents.forEach(content => {
        if (content.getAttribute('tab-content') === tabName) {
          content.classList.add('active');
        } else {
          content.classList.remove('active');
        }
      });
    });
  });
}

export default tabs;