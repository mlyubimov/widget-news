const ul = document.createElement('ul');
ul.className = 'widget__list';

const minList = document.createElement('ul')
minList.className = 'widget__list--min';

const btnAdd = document.createElement('button');
btnAdd.type = 'button';
btnAdd.className = 'widget__btn widget__btn--add';
btnAdd.ariaLabel = 'Открыть больше новостей'

const btnAll = document.createElement('button');
btnAll.type = 'button';
btnAll.className = 'widget__btn widget__btn--all';
btnAll.ariaLabel = 'Открыть список всех новостей'

const btnClose = document.createElement('button');
btnClose.type = 'button';
btnClose.className = 'widget__btn widget__btn-close--min';
btnClose.ariaLabel = 'Закрыть список всех новостей'

const widget = {
	id: 'widget', //индентификатор виджета
	styleWidget: 'css/widget.css', //путь до стиля
	currentElem: null, //для правильного отслеживания новедения на элемент списка
	listShow: false, //для переключения функционала кнопки btnAdd
	tableShow: false, //для отображения минифицированного списка всех новостей
	shown: 1, //количество показанных новостей
	data: [ //хранилище новотсей
		{
			title: 'Samsung назвал смартфоны, которые обновят до Android 11',
			author: 'Риа Новости',
			date: 'December 02 2020 11:57:44 GMT+0300',
			photo: 'https://i-cdn.phonearena.com/images/articles/366147-thumb/p2-copy.jpg',
			link: 'https://ria.ru/20201202/samsung-1587307350.html'
		},
		{
			title: 'Apple намерена увеличить автономность Apple Watch изящным способом',
			author: 'mobiltelefon.ru',
			date: 'September 02 2020 09:56:10 GMT+0300',
			photo: 'https://mobiltelefon.ru/photo/december20/02/apple_namerena_uvelichit_avtonomnost_apple_watch_elegantnym_sposobom_picture6_0_resize.jpg',
			link: 'https://mobiltelefon.ru/post_1606892219.html'
		},
		{
			title: 'Раскрыт результат поисков создателя Вселенной учеными',
			author: 'Lenta.ru',
			date: 'May 20 2020 14:57:02	 GMT+0300',
			photo: 'https://icdn.lenta.ru/images/2020/12/02/14/20201202145731479/pic_c11f850f0357b56f6c760881361f3e15.jpg',
			link: 'https://lenta.ru/news/2020/12/02/forty_two/'
		},
		{
			title: 'В Cyberpunk 2077 будет доступен фоторежим со множеством настроек',
			author: 'Игромания онлайн',
			date: 'September 10 2020 17:18:10 GMT+0300',
			photo: 'https://cdn.igromania.ru/mnt/news/9/e/f/a/9/5/100357/ded648b0d3ea14a8_848x477.jpg',
			link: 'https://www.igromania.ru/news/100357/V_Cyberpunk_2077_budet_dostupen_fotorezhim_so_mnozhestvom_nastroek.html'
		},
		{
			title: 'Типичная уникальность: астрономы объяснили странности Солнечной системы',
			author: 'Вести.Ru',
			date: 'May 20 2020 11:27:02	 GMT+0300',
			photo: 'https://cdn-st1.rtr-vesti.ru/vh/pictures/xw/307/144/3.jpg',
			link: 'https://www.vesti.ru/nauka/article/2493310'
		},
		{
			title: 'Samsung назвал смартфоны, которые обновят до Android 11',
			author: 'Риа Новости',
			date: 'December 02 2020 11:57:44 GMT+0300',
			photo: 'https://i-cdn.phonearena.com/images/articles/366147-thumb/p2-copy.jpg',
			link: 'https://ria.ru/20201202/samsung-1587307350.html'
		},
		{
			title: 'Apple намерена увеличить автономность Apple Watch изящным способом',
			author: 'mobiltelefon.ru',
			date: 'September 02 2020 09:56:10 GMT+0300',
			photo: 'https://mobiltelefon.ru/photo/december20/02/apple_namerena_uvelichit_avtonomnost_apple_watch_elegantnym_sposobom_picture6_0_resize.jpg',
			link: 'https://mobiltelefon.ru/post_1606892219.html'
		},
		{
			title: 'Раскрыт результат поисков создателя Вселенной учеными',
			author: 'Lenta.ru',
			date: 'May 20 2020 14:57:02	 GMT+0300',
			photo: 'https://icdn.lenta.ru/images/2020/12/02/14/20201202145731479/pic_c11f850f0357b56f6c760881361f3e15.jpg',
			link: 'https://lenta.ru/news/2020/12/02/forty_two/'
		},
		{
			title: 'В Cyberpunk 2077 будет доступен фоторежим со множеством настроек',
			author: 'Игромания онлайн',
			date: 'September 10 2020 17:18:10 GMT+0300',
			photo: 'https://cdn.igromania.ru/mnt/news/9/e/f/a/9/5/100357/ded648b0d3ea14a8_848x477.jpg',
			link: 'https://www.igromania.ru/news/100357/V_Cyberpunk_2077_budet_dostupen_fotorezhim_so_mnozhestvom_nastroek.html'
		},
		{
			title: 'Типичная уникальность: астрономы объяснили странности Солнечной системы',
			author: 'Вести.Ru',
			date: 'May 20 2020 11:27:02	 GMT+0300',
			photo: 'https://cdn-st1.rtr-vesti.ru/vh/pictures/xw/307/144/3.jpg',
			link: 'https://www.vesti.ru/nauka/article/2493310'
		},
		{
			title: 'Samsung назвал смартфоны, которые обновят до Android 11',
			author: 'Риа Новости',
			date: 'December 02 2020 11:57:44 GMT+0300',
			photo: 'https://i-cdn.phonearena.com/images/articles/366147-thumb/p2-copy.jpg',
			link: 'https://ria.ru/20201202/samsung-1587307350.html'
		},
		{
			title: 'Apple намерена увеличить автономность Apple Watch изящным способом',
			author: 'mobiltelefon.ru',
			date: 'September 02 2020 09:56:10 GMT+0300',
			photo: 'https://mobiltelefon.ru/photo/december20/02/apple_namerena_uvelichit_avtonomnost_apple_watch_elegantnym_sposobom_picture6_0_resize.jpg',
			link: 'https://mobiltelefon.ru/post_1606892219.html'
		},
		{
			title: 'Раскрыт результат поисков создателя Вселенной учеными',
			author: 'Lenta.ru',
			date: 'May 20 2020 14:57:02	 GMT+0300',
			photo: 'https://icdn.lenta.ru/images/2020/12/02/14/20201202145731479/pic_c11f850f0357b56f6c760881361f3e15.jpg',
			link: 'https://lenta.ru/news/2020/12/02/forty_two/'
		},
		{
			title: 'В Cyberpunk 2077 будет доступен фоторежим со множеством настроек',
			author: 'Игромания онлайн',
			date: 'September 10 2020 17:18:10 GMT+0300',
			photo: 'https://cdn.igromania.ru/mnt/news/9/e/f/a/9/5/100357/ded648b0d3ea14a8_848x477.jpg',
			link: 'https://www.igromania.ru/news/100357/V_Cyberpunk_2077_budet_dostupen_fotorezhim_so_mnozhestvom_nastroek.html'
		},
		{
			title: 'Типичная уникальность: астрономы объяснили странности Солнечной системы',
			author: 'Вести.Ru',
			date: 'May 20 2020 11:27:02	 GMT+0300',
			photo: 'https://cdn-st1.rtr-vesti.ru/vh/pictures/xw/307/144/3.jpg',
			link: 'https://www.vesti.ru/nauka/article/2493310'
		},
		{
			title: 'Samsung назвал смартфоны, которые обновят до Android 11',
			author: 'Риа Новости',
			date: 'December 02 2020 11:57:44 GMT+0300',
			photo: 'https://i-cdn.phonearena.com/images/articles/366147-thumb/p2-copy.jpg',
			link: 'https://ria.ru/20201202/samsung-1587307350.html'
		},
		{
			title: 'Apple намерена увеличить автономность Apple Watch изящным способом',
			author: 'mobiltelefon.ru',
			date: 'September 02 2020 09:56:10 GMT+0300',
			photo: 'https://mobiltelefon.ru/photo/december20/02/apple_namerena_uvelichit_avtonomnost_apple_watch_elegantnym_sposobom_picture6_0_resize.jpg',
			link: 'https://mobiltelefon.ru/post_1606892219.html'
		},
		{
			title: 'Раскрыт результат поисков создателя Вселенной учеными',
			author: 'Lenta.ru',
			date: 'May 20 2020 14:57:02	 GMT+0300',
			photo: 'https://icdn.lenta.ru/images/2020/12/02/14/20201202145731479/pic_c11f850f0357b56f6c760881361f3e15.jpg',
			link: 'https://lenta.ru/news/2020/12/02/forty_two/'
		},
		{
			title: 'В Cyberpunk 2077 будет доступен фоторежим со множеством настроек',
			author: 'Игромания онлайн',
			date: 'September 10 2020 17:18:10 GMT+0300',
			photo: 'https://cdn.igromania.ru/mnt/news/9/e/f/a/9/5/100357/ded648b0d3ea14a8_848x477.jpg',
			link: 'https://www.igromania.ru/news/100357/V_Cyberpunk_2077_budet_dostupen_fotorezhim_so_mnozhestvom_nastroek.html'
		},
		{
			title: 'Типичная уникальность: астрономы объяснили странности Солнечной системы',
			author: 'Вести.Ru',
			date: 'May 20 2020 11:27:02	 GMT+0300',
			photo: 'https://cdn-st1.rtr-vesti.ru/vh/pictures/xw/307/144/3.jpg',
			link: 'https://www.vesti.ru/nauka/article/2493310'
		},
		{
			title: 'Samsung назвал смартфоны, которые обновят до Android 11',
			author: 'Риа Новости',
			date: 'December 02 2020 11:57:44 GMT+0300',
			photo: 'https://i-cdn.phonearena.com/images/articles/366147-thumb/p2-copy.jpg',
			link: 'https://ria.ru/20201202/samsung-1587307350.html'
		},
		{
			title: 'Apple намерена увеличить автономность Apple Watch изящным способом',
			author: 'mobiltelefon.ru',
			date: 'September 02 2020 09:56:10 GMT+0300',
			photo: 'https://mobiltelefon.ru/photo/december20/02/apple_namerena_uvelichit_avtonomnost_apple_watch_elegantnym_sposobom_picture6_0_resize.jpg',
			link: 'https://mobiltelefon.ru/post_1606892219.html'
		},
		{
			title: 'Раскрыт результат поисков создателя Вселенной учеными',
			author: 'Lenta.ru',
			date: 'May 20 2020 14:57:02	 GMT+0300',
			photo: 'https://icdn.lenta.ru/images/2020/12/02/14/20201202145731479/pic_c11f850f0357b56f6c760881361f3e15.jpg',
			link: 'https://lenta.ru/news/2020/12/02/forty_two/'
		},
		{
			title: 'В Cyberpunk 2077 будет доступен фоторежим со множеством настроек',
			author: 'Игромания онлайн',
			date: 'September 10 2020 17:18:10 GMT+0300',
			photo: 'https://cdn.igromania.ru/mnt/news/9/e/f/a/9/5/100357/ded648b0d3ea14a8_848x477.jpg',
			link: 'https://www.igromania.ru/news/100357/V_Cyberpunk_2077_budet_dostupen_fotorezhim_so_mnozhestvom_nastroek.html'
		},
		{
			title: 'Типичная уникальность: астрономы объяснили странности Солнечной системы',
			author: 'Вести.Ru',
			date: 'May 20 2020 11:27:02	 GMT+0300',
			photo: 'https://cdn-st1.rtr-vesti.ru/vh/pictures/xw/307/144/3.jpg',
			link: 'https://www.vesti.ru/nauka/article/2493310'
		},
		{
			title: 'Samsung назвал смартфоны, которые обновят до Android 11',
			author: 'Риа Новости',
			date: 'December 02 2020 11:57:44 GMT+0300',
			photo: 'https://i-cdn.phonearena.com/images/articles/366147-thumb/p2-copy.jpg',
			link: 'https://ria.ru/20201202/samsung-1587307350.html'
		},
		{
			title: 'Apple намерена увеличить автономность Apple Watch изящным способом',
			author: 'mobiltelefon.ru',
			date: 'September 02 2020 09:56:10 GMT+0300',
			photo: 'https://mobiltelefon.ru/photo/december20/02/apple_namerena_uvelichit_avtonomnost_apple_watch_elegantnym_sposobom_picture6_0_resize.jpg',
			link: 'https://mobiltelefon.ru/post_1606892219.html'
		},
		{
			title: 'Раскрыт результат поисков создателя Вселенной учеными',
			author: 'Lenta.ru',
			date: 'May 20 2020 14:57:02	 GMT+0300',
			photo: 'https://icdn.lenta.ru/images/2020/12/02/14/20201202145731479/pic_c11f850f0357b56f6c760881361f3e15.jpg',
			link: 'https://lenta.ru/news/2020/12/02/forty_two/'
		},
		{
			title: 'В Cyberpunk 2077 будет доступен фоторежим со множеством настроек',
			author: 'Игромания онлайн',
			date: 'September 10 2020 17:18:10 GMT+0300',
			photo: 'https://cdn.igromania.ru/mnt/news/9/e/f/a/9/5/100357/ded648b0d3ea14a8_848x477.jpg',
			link: 'https://www.igromania.ru/news/100357/V_Cyberpunk_2077_budet_dostupen_fotorezhim_so_mnozhestvom_nastroek.html'
		},
		{
			title: 'Типичная уникальность: астрономы объяснили странности Солнечной системы',
			author: 'Вести.Ru',
			date: 'May 20 2020 11:27:02	 GMT+0300',
			photo: 'https://cdn-st1.rtr-vesti.ru/vh/pictures/xw/307/144/3.jpg',
			link: 'https://www.vesti.ru/nauka/article/2493310'
		},
		{
			title: 'Samsung назвал смартфоны, которые обновят до Android 11',
			author: 'Риа Новости',
			date: 'December 02 2020 11:57:44 GMT+0300',
			photo: 'https://i-cdn.phonearena.com/images/articles/366147-thumb/p2-copy.jpg',
			link: 'https://ria.ru/20201202/samsung-1587307350.html'
		},
		{
			title: 'Apple намерена увеличить автономность Apple Watch изящным способом',
			author: 'mobiltelefon.ru',
			date: 'September 02 2020 09:56:10 GMT+0300',
			photo: 'https://mobiltelefon.ru/photo/december20/02/apple_namerena_uvelichit_avtonomnost_apple_watch_elegantnym_sposobom_picture6_0_resize.jpg',
			link: 'https://mobiltelefon.ru/post_1606892219.html'
		},
		{
			title: 'Раскрыт результат поисков создателя Вселенной учеными',
			author: 'Lenta.ru',
			date: 'May 20 2020 14:57:02	 GMT+0300',
			photo: 'https://icdn.lenta.ru/images/2020/12/02/14/20201202145731479/pic_c11f850f0357b56f6c760881361f3e15.jpg',
			link: 'https://lenta.ru/news/2020/12/02/forty_two/'
		},
		{
			title: 'В Cyberpunk 2077 будет доступен фоторежим со множеством настроек',
			author: 'Игромания онлайн',
			date: 'September 10 2020 17:18:10 GMT+0300',
			photo: 'https://cdn.igromania.ru/mnt/news/9/e/f/a/9/5/100357/ded648b0d3ea14a8_848x477.jpg',
			link: 'https://www.igromania.ru/news/100357/V_Cyberpunk_2077_budet_dostupen_fotorezhim_so_mnozhestvom_nastroek.html'
		},
		{
			title: 'Типичная уникальность: астрономы объяснили странности Солнечной системы',
			author: 'Вести.Ru',
			date: 'May 20 2020 11:27:02	 GMT+0300',
			photo: 'https://cdn-st1.rtr-vesti.ru/vh/pictures/xw/307/144/3.jpg',
			link: 'https://www.vesti.ru/nauka/article/2493310'
		}
	],
	init: function() {
		const block = document.querySelector(`#${this.id}`);
		if (block) {
			block.classList.add('widget')
			this.addStyle();

			for (let i = 0; i < this.data.length; i++) {
				const li = document.createElement('li');
				li.className = 'widget__item';

				const minLi = document.createElement('li');
				minLi.className = 'widget__item--min';

				//добавление структуры в каждый элемент списка
				li.insertAdjacentHTML('beforeEnd', `
				<div class="widget__photo widget__photo--not-read" style="background-image: url(${this.data[i].photo})"></div>
				<div class="widget__content-container">
					<h2 class="widget__title">${this.data[i].title}</h2>
					<a class="widget__link" href="${this.data[i].link}" aria-label="Перейти на подробное описание статьи «${this.data[i].title}» от аватара ${this.data[i].author}">Подбробнее</a>
					<div class="widget__header-container">
						<p class="widget__content widget__author">${this.data[i].author}</p>
						<p class="widget__date">${new Date(this.data[i].date).toLocaleDateString()} ${new Date(this.data[i].date).toLocaleTimeString().slice(0,-3)}</p>
					</div>
				</div>`);

				minLi.insertAdjacentHTML('beforeEnd', `
				<h2 class="widget__title--min">${this.data[i].title}</h2>
				<div class="widget__content--min">
					<p class="widget__content--min widget__author--min">${this.data[i].author}</p>
					<p class="widget__date--min">${new Date(this.data[i].date).toLocaleDateString()} ${new Date(this.data[i].date).toLocaleTimeString().slice(0,-3)}</p>
					<a class="widget__link widget__link--min" href="${this.data[i].link}" aria-label="Перейти на подробное описание статьи «${this.data[i].title}» от аватара ${this.data[i].author}">Подбробнее</a>
				</div>`);
				
				minList.appendChild(minLi);
				ul.appendChild(li);
			}

			btnAdd.textContent = this.conjugationNumber();

			const btnContainer = document.createElement('div');
			btnContainer.className = 'widget__btn-container';
			
			btnContainer.appendChild(btnAdd);
			btnContainer.appendChild(btnAll);

			ul.appendChild(btnContainer);

			minList.appendChild(btnClose);

			block.appendChild(ul)
			block.appendChild(minList)
		} else {
			console.log(`Block id = "${id}" not found`);
		}
	},
	addStyle: function() { //функция, добавляющая стили виджета
        const style = document.createElement('link'); 
        style.rel = 'stylesheet'; 
        style.type = 'text/css'; 
        style.href = this.styleWidget; 
        document.head.appendChild(style); 
	},
	conjugationNumber: function() { //функция для спряжения текста
		let quantity = this.numberNewsItemsAtTime();

		if (quantity === 1) {
			return `Показать ещё ${quantity} новость из оставшихся ${ul.querySelectorAll('.widget__item').length - this.shown}`
		} else if (quantity === 2 || quantity === 3 || quantity === 4) {
			return `Показать ещё ${quantity} новости из оставшихся ${ul.querySelectorAll('.widget__item').length - this.shown}`
		} else {
			return `Показать ещё ${quantity} новостей из оставшихся ${ul.querySelectorAll('.widget__item').length - this.shown}`
		}
	},
	showNextNews: function() { //функция для добавления новостей в список
		let count = this.shown;
		let quantity = this.numberNewsItemsAtTime();

		for (let i = count; i < count + quantity; i++) {
			this.shown = this.shown + 1;
			ul.querySelectorAll('.widget__item')[i].style.display = 'flex';
		}
		btnAdd.textContent = widget.conjugationNumber();

		if (this.shown >= this.data.length) {
			this.listShow = true;
			btnAdd.textContent = 'Скрыть новости';
		}
	},
	numberNewsItemsAtTime: function() { //функция для правильного отображения количества в конце списка
		if (this.data.length - this.shown > 5) { //количество всех новостей - количество показанных
			return 5;
		} else {
			return this.data.length - this.shown;
		}
	}
};

ul.addEventListener('mouseover', event => {
	// перед тем, как войти на следующий элемент, курсор всегда покидает предыдущий
	// если currentElem есть, то мы ещё не ушли с предыдущего <li>,
	// это переход внутри - игнорируем такое событие
	if (widget.currentElem) return;

	const target = event.target.closest('li')

	// переход не на <li> - игнорировать
	if (!target) return;

	// переход на <li>, но вне нашего списка (возможно при вложенных списках)
	// игнорировать
	if (!ul.contains(target)) return;

	// ура, мы зашли на новый <li>
	const status = target.querySelector('.widget__photo');
	status.classList.remove('widget__photo--not-read');
	status.classList.add('widget__photo--read');

	widget.currentElem = target;
})

ul.addEventListener('mouseout', event => {
	// если мы вне <li>, то игнорируем уход мыши
	// это какой-то переход внутри таблицы, но вне <li>
	if (!widget.currentElem) return;

	// мы покидаем элемент – но куда? Возможно, на потомка?
	let relatedTarget = event.relatedTarget;

	while (relatedTarget) {
		// поднимаемся по дереву элементов и проверяем – внутри ли мы currentElem или нет
		// если да, то это переход внутри элемента – игнорируем
		if (relatedTarget === widget.currentElem) return;
	
		relatedTarget = relatedTarget.parentNode;
	}

	// мы действительно покинули элемент
	widget.currentElem = null;
})


btnAdd.addEventListener('click', () => { //отслеживание клика на кнопку btnAdd для добавления или скрытия новостей
	if (widget.listShow === false) { //если listShow = false, тогда выполни функцию
		widget.showNextNews();

	} else if (widget.listShow === true) { //иначе скрой все новости
		for (let i = 1; i < widget.data.length; i++) {
			widget.shown = 1;
			ul.querySelectorAll('.widget__item')[i].style.display = 'none';
		}

		btnAdd.textContent = widget.conjugationNumber();
		widget.listShow = false;
	}
})

btnAll.addEventListener('click', () => { //отслеживание клика на кнопку btnAll для отображения минифицированного списка новостей
	if (widget.tableShow === false) { //если listShow = false, тогда покажи все
		minList.classList.add('widget__list--min--show');
		widget.tableShow = true;
	}
})

btnClose.addEventListener('click', () => { //отслеживание клика на кнопку btnAll для скрытия минифицированного списка новостей
	if (widget.tableShow === true) { //иначе скрой все новости
		minList.classList.remove('widget__list--min--show');
		widget.tableShow = false;
	}
})

widget.init(); //инициализация виджета на страницу