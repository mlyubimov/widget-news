const ul = document.createElement('ul');
ul.className = 'widget__list';

const btn = document.createElement('button');
btn.type = 'button';
btn.className = 'widget__btn';
btn.id = 'show-news';
btn.ariaLabel = 'Открыть больше новостей'

const widget = {
	id: 'widget',
	styleWidget: 'css/widget.css',
	currentElem: null,
	listShow: false,
	data: [
		{
			title: 'Samsung назвал смартфоны, которые обновят до Android 11',
			author: 'Риа Новости',
			date: 'December 02 2020 11:57:44 GMT+0300',
			photo: 'https://cdn25.img.ria.ru/images/07e4/09/17/1577669685_2:0:918:515_1600x0_80_0_0_fb2ee9a9ce8b86b1b1f2548c37c13b80.jpg.webp',
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
			title: 'https://lenta.ru/news/2020/12/02/forty_two/',
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
		if(block) {
			block.classList.add('widget')
			this.addStyle();

			for (let i = 0; i < this.data.length; i++) {
				const li = document.createElement('li');
				li.className = 'widget__item';

				li.insertAdjacentHTML('beforeEnd', `
				<div class="widget__photo" style="background-image: url(${this.data[i].photo})"></div>
				<div class="widget__content-container">
					<h2 class="widget__title">${this.data[i].title}</h2>
					<p class="widget__content widget__author">${this.data[i].author}</p>
					<div class="widget__header-container">
						<a class="widget__link" href="${this.data[i].link}" aria-label="Перейти на подробное описание статьи «${this.data[i].title}» от аватара ${this.data[i].author}">Подбробнее</a>
						<div class="widget__status widget__status--not-read"></div>
					</div>
					<p class="widget__date">${new Date(this.data[i].date).toLocaleDateString()} ${new Date(this.data[i].date).toLocaleTimeString().slice(0,-3)}</p>
				</div>`);
				
				ul.appendChild(li);
			}

			btn.textContent = this.conjugationNumber(this.data.length - 1);
			ul.appendChild(btn);

			block.appendChild(ul)
		} else {
			console.log(`Block id = "${id}" not found`);
		}
	},
	addStyle: function() { 
        const style = document.createElement('link'); 
        style.rel = 'stylesheet'; 
        style.type = 'text/css'; 
        style.href = this.styleWidget; 
        document.head.appendChild(style); 
	},
	conjugationNumber: function(quantity) {
		if(quantity > 4 && quantity < 21) {
			return `Развернуть оставшиеся ${quantity} новостей`
		} else if (quantity === 1) {
			return `Развернуть оставшуюся ${quantity} новость`
		} else if (quantity === 2 || quantity === 3 || quantity === 4) {
			return `Развернуть оставшиеся ${quantity} новости`
		} else {
			return `Развернуть оставшиеся ${quantity} новостей`
		}
	}
};

ul.addEventListener('mouseover', (event) => {
	if (widget.currentElem) return;

	const target = event.target.closest('li')

	if(!target) return;

	if(!ul.contains(target)) return;

	const status = target.querySelector('.widget__status');
	status.classList.remove('widget__status--not-read');
	status.classList.add('widget__status--read');

	widget.currentElem = target;
})

ul.addEventListener('mouseout', (event) => {
	if (!widget.currentElem) return;

	let relatedTarget = event.relatedTarget;

	while (relatedTarget) {
		// поднимаемся по дереву элементов и проверяем – внутри ли мы currentElem или нет
		// если да, то это переход внутри элемента – игнорируем
		if (relatedTarget === widget.currentElem) return;
	
		relatedTarget = relatedTarget.parentNode;
	}

	widget.currentElem = null;
})

btn.addEventListener('click', () => {
	if(widget.listShow === false) {
		ul.classList.add('widget__list--show');
		btn.textContent = 'Свернуть новости';
		widget.listShow = true;
	} else if (widget.listShow === true) {
		ul.classList.remove('widget__list--show');
		btn.textContent = widget.conjugationNumber(ul.querySelectorAll('.widget__item').length - 1);
		widget.listShow = false;
	}
})

widget.init();