const grid = $('#grid');
const colors = ['#2B8EAD', '#6F98A8', '#2F454E']

for (let i = 1; i <= 9; i++) {
  grid.append('<div class="card" style="background-color:' + colors[Math.floor(Math.random() * colors.length)] + '">' + i + '</div>');
}

$(".btn_shuffle").click(function () {
  const cardNumbers = [];

  $('.card').each(function () {
    cardNumbers.push(this.innerHTML);
  });

  const theLength = cardNumbers.length - 1;
  let toSwap;
  let temp;

  for (let i = theLength; i > 0; i--) {
    toSwap = Math.floor(Math.random() * (i + 1));
    temp = cardNumbers[i];
    cardNumbers[i] = cardNumbers[toSwap];
    cardNumbers[toSwap] = temp;
  }

  i = 0;

  $('.card').each(function () {
    $('.card').eq(i).css("background-color", colors[Math.floor(Math.random() * colors.length)]);
    this.innerHTML = cardNumbers[i];
    i++;
  });
});

$(".btn_sort").click(function () {
  const cardNumbers = [];

  $('.card').each(function () {
    cardNumbers.push(+this.innerHTML);
  });

  cardNumbers.sort();

  i = 0;

  $('.card').each(function () {
    this.innerHTML = cardNumbers[i];
    i++;
  });
});