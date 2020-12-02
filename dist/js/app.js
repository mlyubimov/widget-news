"use strict";

var ul = document.createElement('ul');
ul.className = 'widget__list';
var btn = document.createElement('button');
btn.type = 'button';
btn.className = 'widget__btn';
btn.id = 'show-news';
btn.ariaLabel = 'Открыть больше новостей';
var widget = {
  id: 'widget',
  styleWidget: 'css/widget.css',
  currentElem: null,
  listShow: false,
  data: [{
    title: 'Samsung назвал смартфоны, которые обновят до Android 11',
    author: 'Риа Новости',
    date: 'December 02 2020 11:57:44 GMT+0300',
    photo: 'https://cdn25.img.ria.ru/images/07e4/09/17/1577669685_2:0:918:515_1600x0_80_0_0_fb2ee9a9ce8b86b1b1f2548c37c13b80.jpg.webp',
    link: 'https://ria.ru/20201202/samsung-1587307350.html'
  }, {
    title: 'Apple намерена увеличить автономность Apple Watch изящным способом',
    author: 'mobiltelefon.ru',
    date: 'September 02 2020 09:56:10 GMT+0300',
    photo: 'https://mobiltelefon.ru/photo/december20/02/apple_namerena_uvelichit_avtonomnost_apple_watch_elegantnym_sposobom_picture6_0_resize.jpg',
    link: 'https://mobiltelefon.ru/post_1606892219.html'
  }, {
    title: 'https://lenta.ru/news/2020/12/02/forty_two/',
    author: 'Lenta.ru',
    date: 'May 20 2020 14:57:02	 GMT+0300',
    photo: 'https://icdn.lenta.ru/images/2020/12/02/14/20201202145731479/pic_c11f850f0357b56f6c760881361f3e15.jpg',
    link: 'https://lenta.ru/news/2020/12/02/forty_two/'
  }, {
    title: 'В Cyberpunk 2077 будет доступен фоторежим со множеством настроек',
    author: 'Игромания онлайн',
    date: 'September 10 2020 17:18:10 GMT+0300',
    photo: 'https://cdn.igromania.ru/mnt/news/9/e/f/a/9/5/100357/ded648b0d3ea14a8_848x477.jpg',
    link: 'https://www.igromania.ru/news/100357/V_Cyberpunk_2077_budet_dostupen_fotorezhim_so_mnozhestvom_nastroek.html'
  }, {
    title: 'Типичная уникальность: астрономы объяснили странности Солнечной системы',
    author: 'Вести.Ru',
    date: 'May 20 2020 11:27:02	 GMT+0300',
    photo: 'https://cdn-st1.rtr-vesti.ru/vh/pictures/xw/307/144/3.jpg',
    link: 'https://www.vesti.ru/nauka/article/2493310'
  }],
  init: function init() {
    var block = document.querySelector("#".concat(this.id));

    if (block) {
      block.classList.add('widget');
      this.addStyle();

      for (var i = 0; i < this.data.length; i++) {
        var li = document.createElement('li');
        li.className = 'widget__item';
        li.insertAdjacentHTML('beforeEnd', "\n\t\t\t\t<div class=\"widget__photo\" style=\"background-image: url(".concat(this.data[i].photo, ")\"></div>\n\t\t\t\t<div class=\"widget__content-container\">\n\t\t\t\t\t<h2 class=\"widget__title\">").concat(this.data[i].title, "</h2>\n\t\t\t\t\t<p class=\"widget__content widget__author\">").concat(this.data[i].author, "</p>\n\t\t\t\t\t<div class=\"widget__header-container\">\n\t\t\t\t\t\t<a class=\"widget__link\" href=\"").concat(this.data[i].link, "\" aria-label=\"\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u0442\u044C\u0438 \xAB").concat(this.data[i].title, "\xBB \u043E\u0442 \u0430\u0432\u0430\u0442\u0430\u0440\u0430 ").concat(this.data[i].author, "\">\u041F\u043E\u0434\u0431\u0440\u043E\u0431\u043D\u0435\u0435</a>\n\t\t\t\t\t\t<div class=\"widget__status widget__status--not-read\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class=\"widget__date\">").concat(new Date(this.data[i].date).toLocaleDateString(), " ").concat(new Date(this.data[i].date).toLocaleTimeString().slice(0, -3), "</p>\n\t\t\t\t</div>"));
        ul.appendChild(li);
      }

      btn.textContent = this.conjugationNumber(this.data.length - 1);
      ul.appendChild(btn);
      block.appendChild(ul);
    } else {
      console.log("Block id = \"".concat(id, "\" not found"));
    }
  },
  addStyle: function addStyle() {
    var style = document.createElement('link');
    style.rel = 'stylesheet';
    style.type = 'text/css';
    style.href = this.styleWidget;
    document.head.appendChild(style);
  },
  conjugationNumber: function conjugationNumber(quantity) {
    if (quantity > 4 && quantity < 21) {
      return "\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u043E\u0441\u0442\u0430\u0432\u0448\u0438\u0435\u0441\u044F ".concat(quantity, " \u043D\u043E\u0432\u043E\u0441\u0442\u0435\u0439");
    } else if (quantity === 1) {
      return "\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u043E\u0441\u0442\u0430\u0432\u0448\u0443\u044E\u0441\u044F ".concat(quantity, " \u043D\u043E\u0432\u043E\u0441\u0442\u044C");
    } else if (quantity === 2 || quantity === 3 || quantity === 4) {
      return "\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u043E\u0441\u0442\u0430\u0432\u0448\u0438\u0435\u0441\u044F ".concat(quantity, " \u043D\u043E\u0432\u043E\u0441\u0442\u0438");
    } else {
      return "\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u043E\u0441\u0442\u0430\u0432\u0448\u0438\u0435\u0441\u044F ".concat(quantity, " \u043D\u043E\u0432\u043E\u0441\u0442\u0435\u0439");
    }
  }
};
ul.addEventListener('mouseover', function (event) {
  if (widget.currentElem) return;
  var target = event.target.closest('li');
  if (!target) return;
  if (!ul.contains(target)) return;
  var status = target.querySelector('.widget__status');
  status.classList.remove('widget__status--not-read');
  status.classList.add('widget__status--read');
  widget.currentElem = target;
});
ul.addEventListener('mouseout', function (event) {
  if (!widget.currentElem) return;
  var relatedTarget = event.relatedTarget;

  while (relatedTarget) {
    // поднимаемся по дереву элементов и проверяем – внутри ли мы currentElem или нет
    // если да, то это переход внутри элемента – игнорируем
    if (relatedTarget === widget.currentElem) return;
    relatedTarget = relatedTarget.parentNode;
  }

  widget.currentElem = null;
});
btn.addEventListener('click', function () {
  if (widget.listShow === false) {
    ul.classList.add('widget__list--show');
    btn.textContent = 'Свернуть новости';
    widget.listShow = true;
  } else if (widget.listShow === true) {
    ul.classList.remove('widget__list--show');
    btn.textContent = widget.conjugationNumber(ul.querySelectorAll('.widget__item').length - 1);
    widget.listShow = false;
  }
});
widget.init();
//# sourceMappingURL=app.js.map
