const h1 = document.querySelector('.container h1');
const data = new Date();
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  hour12: false
};
const formattedDateTime = data.toLocaleDateString('pt-BR', options);
h1.innerHTML = formattedDateTime;
