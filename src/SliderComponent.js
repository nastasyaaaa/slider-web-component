export class SliderComponent extends HTMLElement {
    constructor() {
        super();
        this.slideIndex = 1;

        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    disconnectedCallback() {

    }

    static get observedAttributes() {
        return ['images'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    render() {
        const images = this.getAttribute('images').split(',');

        const slider = document.createElement('div');
        slider.classList.add('slider');
        slider.appendChild(this.getStyles());


        for (let i = 0; i < images.length; i++) {

            let item = document.createElement('div');
            let img = document.createElement('img');

            item.classList.add('item');
            img.src = images[i];

            if (i !== 0) {
                item.style.display = 'none';
            }

            item.appendChild(img);
            slider.appendChild(item);
        }

        slider.appendChild(this.makeLastBtn());
        slider.appendChild(this.makeNextBtn());


        this.clearShadowRoot();
        this.shadowRoot.appendChild(slider);
    }

    getStyles() {
        const style = document.createElement('style');
        style.innerHTML = '.slider{max-width:60%;position:relative;margin:auto;height:500px;margin-bottom:15px}.slider .item img{object-fit:cover;width:100%;height:500px;border:none!important;box-shadow:none!important}.slider .next,.slider .prev{cursor:pointer;position:absolute;top:50%;width:auto;margin-top:-22px;padding:16px;font-weight:700;font-size:18px;transition:.6s ease;border-radius:0 3px 3px 0}.slider .next{right:0;border-radius:3px 0 0 3px}.slider .next:hover,.slider .prev:hover{background-color:#fff}.active{background-color:#aaa}@-webkit-keyframes fade{from{opacity:.4}to{opacity:1}}@keyframes fade{from{opacity:.4}to{opacity:1}}';
        return style;
    }

    makeLastBtn() {
        const lastBtn = document.createElement('a');

        lastBtn.innerHTML = '<';
        lastBtn.classList.add('prev');
        lastBtn.addEventListener('click', this.lastBtnClick.bind(this));

        return lastBtn;
    }

    makeNextBtn() {
        const nextBtn = document.createElement('a');

        nextBtn.innerHTML = '>';
        nextBtn.classList.add('next');
        nextBtn.addEventListener('click', this.nextBtnClick.bind(this));

        return nextBtn;
    }

    lastBtnClick(event) {
        this.showSlides(this.slideIndex -= 1);
    }

    nextBtnClick(event) {
        this.showSlides(this.slideIndex += 1);
    }

    showSlides(n) {
        const slides = this.shadowRoot.querySelectorAll(".item");

        if (n > slides.length) {
            this.slideIndex = 1
        }
        if (n < 1) {
            this.slideIndex = slides.length
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[this.slideIndex - 1].style.display = "block";
    }

    clearShadowRoot() {
        this.shadowRoot.childNodes.forEach(function (child) {
            child.remove();
        });
    }
}
