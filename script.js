const schedule = document.getElementById('schedule');

schedule.addEventListener('click', () => {
  if (schedule.style.backgroundColor === 'rgba(0, 0, 0, 0.3)' || schedule.style.backgroundColor === '') {
    schedule.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
    schedule.style.color = '#000';
  } else {
    schedule.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
    schedule.style.color = '#fff';
  }
});
