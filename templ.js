let shoppingBag = [
  {
    id: 1,
    title: 'Common Projects1',
    subtitle: 'Bball High',
    color: 'white',
    img: 'img2.png',
    price: 200,
  },
  {
    id: 2,
    title: 'Common Projects2',
    subtitle: 'Bball High',
    color: 'white',
    img: 'img2.png',
    price: 300,
  },
  {
    id: 3,
    title: 'Common Projects3',
    subtitle: 'Bball High',
    color: 'white',
    img: 'img2.png',
    price: 600,
  },
];

let ul = document.getElementsByClassName('item')[0];
let counter = 1;
// create elements

function createElements() {
  ul.innerHTML = '';
  shoppingBag.map((el) => {
    let li = document.createElement('li');
    let icons = document.createElement('div');
    let divImg = document.createElement('div');
    let nameGoods = document.createElement('div');
    let counterBtns = document.createElement('div');
    let divPrice = document.createElement('div');

    // add classes
    li.className = 'inner__item';
    li.setAttribute('key', el.id);
    icons.className = 'icon';
    divImg.className = 'img';
    nameGoods.className = 'nameGoods';
    counterBtns.className = 'counter';
    // divPrice.className = 'price';

    // create child elements

    // delete like buttons
    let btnDelete = document.createElement('div');
    let btnLike = document.createElement('div');

    btnDelete.innerHTML = `<?xml version="1.0" ?><svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <style>
        .cls-1 {
          fill: none;
          stroke: #9e3434;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: 2px;
        }
      </style>
    </defs>
    <title />
    <g id="cross">
      <line class="cls-1" x1="7" x2="25" y1="7" y2="25" />
      <line class="cls-1" x1="7" x2="25" y1="25" y2="7" />
    </g>
  </svg>`;

    btnLike.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path
    d="M7 3c-1.536 0-3.078.5-4.25 1.7-2.343 2.4-2.279 6.1 0 8.5L12 23l9.25-9.8c2.279-2.4 2.343-6.1 0-8.5-2.343-2.3-6.157-2.3-8.5 0l-.75.8-.75-.8C10.078 3.5 8.535 3 7 3z"
    fill="#ddd"
    class="fill-c0392b"
  ></path>
  </svg>`;

    btnDelete.className = 'svgBtn delete-btn';
    btnLike.className = 'svgBtn like-btn';
    btnDelete.setAttribute('id', 'delete-btn');
    btnLike.setAttribute('id', 'like-btn');

    icons.append(btnDelete);
    icons.append(btnLike);

    // img
    let img = document.createElement('img');
    img.setAttribute('src', './img/' + el.img);
    divImg.append(img);

    // name goods
    let title = document.createElement('p');
    let subtitle = document.createElement('p');
    let color = document.createElement('p');

    title.className = 'title';
    subtitle.className = 'subtitle title';
    color.className = 'color';

    title.innerHTML = el.title;
    subtitle.innerHTML = el.subtitle;
    color.innerHTML = el.color;

    nameGoods.append(title);
    nameGoods.append(subtitle);
    nameGoods.append(color);

    // counters
    let plusBtn = document.createElement('button');
    let minusBtn = document.createElement('button');
    let span = document.createElement('span');

    plusBtn.setAttribute('id', 'plusBtn');
    minusBtn.setAttribute('id', 'minusBtn');
    span.setAttribute('id', 'count');

    plusBtn.innerHTML = '+';
    minusBtn.innerHTML = '-';
    span.innerHTML = 1;

    counterBtns.append(plusBtn);
    counterBtns.append(span);
    counterBtns.append(minusBtn);

    // price
    let span$ = document.createElement('span');
    let price = document.createElement('span');

    span$.innerHTML = '$';
    price.setAttribute('id', 'totalPrice');
    price.innerHTML = el.price;

    divPrice.append(span$);
    divPrice.append(price);

    li.append(icons);
    li.append(divImg);
    li.append(nameGoods);
    li.append(counterBtns);
    li.append(divPrice);

    ul.append(li);

    btnDelete.addEventListener('click', deleteItem);
    btnLike.addEventListener('click', animate);
    plusBtn.addEventListener('click', plusQuantity);
  });
}

createElements();

let btnDelete = document.getElementById('delete-btn');
let btnLike = document.getElementById('like-btn');

console.log(totalPrice);

function deleteItem(e) {
  console.log(e.target.parentElement.parentElement.parentElement);
  const id =
    e.target.parentElement.parentElement.parentElement.getAttribute('key');
  console.log(id);

  const newData = shoppingBag.filter((elem) => {
    return elem.id != id;
  });
  shoppingBag = newData;

  createElements();
}

function animate(e) {
  e.target.classList.toggle('animate');
}

function plusQuantity(e) {

  console.log(e.target);
  console.log(e.target.nextSibling);

let span = e.target.nextSibling;
span.innerHTML = counter++;
//  console.log(counter++);
}


