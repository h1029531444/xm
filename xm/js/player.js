class Player {
    constructor() {
        this.iNow = 0;
        this.timer = 0;
        this.kuan = document.querySelectorAll("._li")[0].offsetWidth;
        this.ospan = document.querySelectorAll(".dian span");
        this.oplayer = document.querySelectorAll(".player")[0];
        this.li = document.querySelectorAll("._li")[0].cloneNode(true);
        document.querySelectorAll(".player")[0].appendChild(this.li);
        this.oli = document.querySelectorAll(".player li").length;
        document.querySelectorAll(".player")[0].style.width = this.kuan * 4 + "px";
        this.init();
    }
    pao() {
        var _this=this;
        this.timer = setInterval(function () {
            if (_this.iNow == _this.oli - 1) {
                _this.iNow = 1;
                _this.oplayer.style.left = 0;
            } else {
                _this.iNow++;
            }
            _this.ply();
        }, 3000)
    }
    ply(){
        for (var i = 0; i < this.ospan.length; i++) {
            this.ospan[i].className = "n_dian";
        }
        this.ospan[this.iNow == this.oli - 1 ? 0 : this.iNow].className="n_off";
        move(this.oplayer, { left: -this.iNow * this.kuan })
    }
    gs() {
        var _this=this;
        for (var i = 0; i < this.ospan.length; i++) {
            this.ospan[i].index = i
            this.ospan[i].onclick = function () {
                for (var j = 0; j < _this.ospan.length; j++) {
                    _this.ospan[j].style.className = "n_dian";
                }
                this.style.className = "n_off";
                _this.iNow = this.index
                _this.ply();
                clearInterval(_this.timer);
                _this.pao();
            }
        }
    }
    init() {
        this.pao();
        this.gs();
    }
}
new Player();