class Zc {
    constructor() {
        this.oz_nav = document.querySelector(".gb");
        this.or_nav = document.querySelector(".r_nav");
        this.onav = document.querySelector(".nav");
        this.init();
    }
    onmouseover() {
        var _this = this;
        this.oz_nav.onmouseover = function () {
            _this.oz_nav.style.background = "url('./images/icon1.png') no-repeat 165px center";
            _this.or_nav.style.display = "block";
            _this.or_nav.onmouseover = function () {
                _this.or_nav.style.display = "block";
            }
        }
        this.oz_nav.onmouseout = function () {
            _this.oz_nav.style.background = "url('./images/icon2.png') no-repeat 165px center";
            _this.or_nav.style.display = "none";
            _this.or_nav.onmouseout = function () {
                _this.or_nav.style.display = "none";
            }
        }
    }
    onscroll() {
        var _this = this;
        window.onscroll = function () {
            var soll = document.documentElement.scrollTop || document.body.scrollTop;
            if (soll > 10) {
                _this.onav.style.top = "0";
                _this.onav.style.position = "fixed";
            }
            if (soll <= 0) {
                _this.onav.style.position = "relative";
                _this.onav.style.top = "0";
            }
        }
    }
    init() {
        this.onmouseover();
        this.onscroll();
    }
}
new Zc();