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
    img: 'img4.png',
    price: 300,
  },
  {
    id: 3,
    title: 'Common Projects3',
    subtitle: 'Bball High',
    color: 'white',
    img: 'img3.png',
    price: 300,
  },
];

// call parent elements 
let block = document.getElementsByClassName('block')[0];
let ul = document.getElementsByClassName('item')[0];
let countValue;

// create elements
function createElements() {
  ul.innerHTML = '';
  shoppingBag.map((el) => {
    // create elements
    let li = document.createElement('li');
    let icons = document.createElement('div');
    let divImg = document.createElement('div');
    let nameGoods = document.createElement('div');
    let counterBtns = document.createElement('div');

    // add classes
    li.className = 'inner__item';
    li.setAttribute('key', el.id);
    icons.className = 'icon';
    divImg.className = 'img';
    nameGoods.className = 'nameGoods';
    counterBtns.className = 'counter';

    // create child elements
    // delete & like buttons
    let btnDelete = document.createElement('div');
    let btnLike = document.createElement('div');

    btnDelete.innerHTML = '&#10060;';

    btnLike.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path
    d="M7 3c-1.536 0-3.078.5-4.25 1.7-2.343 2.4-2.279 6.1 0 8.5L12 23l9.25-9.8c2.279-2.4 2.343-6.1 0-8.5-2.343-2.3-6.157-2.3-8.5 0l-.75.8-.75-.8C10.078 3.5 8.535 3 7 3z"
    fill="#ddd"
    class="fill-c0392b"
  ></path>
  </svg>`;

  // add classes and set attributes
    btnDelete.className = 'svgBtn delete-btn';
    btnLike.className = 'svgBtn like-btn';
    btnDelete.setAttribute('id', 'delete-btn');
    btnLike.setAttribute('id', 'like-btn');

    icons.append(btnDelete);
    icons.append(btnLike);

    // img tag
    let img = document.createElement('img');
    img.setAttribute('src', './img/' + el.img);
    divImg.append(img);

    // title and subtitle, color elements
    let title = document.createElement('p');
    let subtitle = document.createElement('p');
    let color = document.createElement('p');

    // add classes
    title.className = 'title';
    subtitle.className = 'subtitle title';
    color.className = 'color';


    // fill elements
    title.innerHTML = el.title;
    subtitle.innerHTML = el.subtitle;
    color.innerHTML = el.color;


    // append elements
    nameGoods.append(title);
    nameGoods.append(subtitle);
    nameGoods.append(color);

    // counters
    let plusBtn = document.createElement('button');
    let minusBtn = document.createElement('button');
    let quantity = document.createElement('input');
    let totalPrice = document.createElement('h1');

    // set attributes 
    plusBtn.setAttribute('id', 'plus-btn');
    minusBtn.setAttribute('id', 'minus-btn');
    minusBtn.setAttribute('disabled', 'disabled');
    quantity.setAttribute('id', 'quantity');
    totalPrice.setAttribute('id', 'totalPrice');


    // fill inner HTML
    plusBtn.innerHTML = '+';
    minusBtn.innerHTML = '-';
    quantity.value = 1;
    totalPrice.innerHTML = el.price;

    // append elements
    counterBtns.append(plusBtn);
    counterBtns.append(quantity);
    counterBtns.append(minusBtn);
    counterBtns.append(totalPrice);


    li.append(icons);
    li.append(divImg);
    li.append(nameGoods);
    li.append(counterBtns);


    // append all elements to ul
    ul.append(li);


    // кнопкаларды баскандагы аткарылуучу функциялар
    btnDelete.addEventListener('click', deleteItem);
    btnLike.addEventListener('click', animate);
    plusBtn.addEventListener('click', plus);
    minusBtn.addEventListener('click', minus);

    // get value price
    const pr = totalPrice.innerHTML;


    // каунтерди 1ге кошуучу  функция
    function plus(e) {
      countValue = quantity.value;
      countValue++;
      quantity.value = countValue;
      if (countValue > 1) {
        minusBtn.removeAttribute('disabled');
      }
      countValue = quantity.value;
      let total = +pr * countValue;
      totalPrice.innerHTML = total;
    }

    // каунтерди кошуучу 1ге кемитүүчү функция
    function minus(e) {
      countValue = quantity.value;
      countValue--;
      quantity.value = countValue;
      if (countValue == 1) {
        minusBtn.setAttribute('disabled', 'disabled');
      }
      countValue = quantity.value;
      let total = +pr * countValue;
      totalPrice.innerHTML = total;
    }
  });
}

createElements();

// delete items
function deleteItem(e) {
  const id = e.target.parentElement.parentElement.getAttribute('key');
  const newData = shoppingBag.filter((elem) => {
    return elem.id != id;
  });
  shoppingBag = newData;
  createElements();
  console.log(shoppingBag);
  if (shoppingBag.length < 1) {
    isEmpty();
  }
}

// heart color red toggle
function animate(e) {
  e.target.classList.toggle('animate');
  console.log(e.target);
}


// массив бош калганда чыгуучу тесттин функциясы 
function isEmpty() {
  let div = document.createElement('div');
  div.innerHTML = 'Shopping list is empty!';
  div.style.witdh = '100%';
  div.style.height = '200px';
  div.style.backgroundColor = '#fff';
  div.style.padding = '30px';
  div.style.border = '1px solid #ddd';
  div.style.fontSize = '20px';
  div.style.color = 'green';
  block.append(div);
}
