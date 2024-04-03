function datesSelect() {
  const container = document.querySelector('.rate')

  const btn = document.querySelector('.rate__mobile-dates');
  const dates = document.querySelector('.rate__dates');

  btn.addEventListener('click', () => {
    dates.classList.toggle('active')
  })
}

export default datesSelect;