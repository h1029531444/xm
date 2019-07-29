class Rj {
    constructor() {
        this.oli = document.querySelectorAll(".nav_li");
        this.od = document.getElementById("d");
        this.onav_next = document.querySelectorAll(".a");
        this.osub_nav = document.querySelector(".sub_nav");
        this.timer = 0;
        this.init();
    }
    Eme() {
        var loop = 0;
        var _that=0;
        var _this = this;
        for (var i = 0; i <= this.oli.length - 1; i++) {
            this.oli[i].index = i;
            this.oli[i].onmouseover = function () {
                _this.od.style.display = "block";
                _this.osub_nav.style.display = "block";
                _this.onav_next[this.index].style.display = "block";
                _this.onav_next[this.index].onmouseover = function () {
                    _this.od.style.display = "block";
                    _this.osub_nav.style.display = "block";
                    this.style.display = "block";
                }
                clearInterval(_this.timer);
                if (this.index != _that) {
                    const that = this;
                    // 定时器是个异步代码
                    if (_that > that.index) {
                        _this.timer = window.setInterval(function () {
                            _this.od.style.left = loop + "px";
                            loop -= 26.5;
                            if (_this.od.offsetLeft <= (that.index * 106)) {
                                clearInterval(_this.timer);
                                _that = that.index;
                            }
                        }, 30)
                    } else {
                        if (_that < 8) {
                            _this.timer = window.setInterval(function () {
                                _this.od.style.left = loop + "px";
                                loop += 26.5;
                                if (_this.od.offsetLeft >= (that.index * 106)) {
                                    clearInterval(_this.timer);
                                    _that = that.index;
                                }
                            }, 30)
                        }
                    }
                }
            }
            this.oli[i].onmouseout = function () {
                _this.osub_nav.style.display = "none";
                _this.onav_next[this.index].style.display = "none";
                _this.od.style.display = "none";
                _this.onav_next[this.index].onmouseout = function () {
                    _this.od.style.display = "none";
                    _this.osub_nav.style.display = "none";
                    this.style.display = "none";
                }
            }
        }
    }
    init() {
        this.Eme();
    }
}
new Rj();


/**
 * 思路
 *   一开始的时候停在 0
 *   进入 2 ，就要到达 2
 *   进入 0 ，就要到达 0
 *
 *   var res =  ( 目标索引 - 初始索引 ) * 一个 li 的宽度
 *   要用定时器让他移动 res 的距离
 *
 *
 *
 *
 */