

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab-item')
const tabsPen = $$('.tab-pane')
const line = $('.tabs .line')

const tabActive = $('.tab-item.active')



tabs.forEach((tab, index) => {
    const pane = tabsPen[index]
    tab.onclick = function() {
        $('.tab-item.active').classList.remove('active')
        $('.tab-pane.active').classList.remove('active')
        this.classList.add('active')
        pane.classList.add('active')

        line.style.left = this.offsetLeft + 'px' 
        line.style.width = this.offsetWidth + 'px' 
    }
})