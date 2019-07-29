class Gwc {
    constructor(_date) {
        this.d = _date;
        this.str = "";
        this.init();
    }
    xuanran() {
        //遍历.localStorage中的key值
        var _storage = window.localStorage;
        for (var l = 0; l < _storage.length; l++) {
            var _key = _storage.key(l);
            //获取num值
            var ccc = JSON.parse(_storage.getItem(_key));
            var zzz = ccc[0].num;
            for (var i = 0; i < this.d[0].nr.length; i++) {
                var o = this.d[0].nr;
                var zig = zzz * o[i].price;
                if (ccc[0].id == o[i].m) {
                    this.str += `
                            <div class="zhong">
                                <div class="kuan">
                                    <input type="checkbox">
                                    <div class="w_img">
                                        <img src="${o[i].x1}">
                                    </div>
                                    <p class="pp"><a href="#">${o[i].title}</a></p>
                                    <p class="banben">销量<br>${o[i].yhy}</p>
                                    <div class="zhong2">
                                        <span><a href="#">￥<b class="ppp">${o[i].price}</b></a></span>
                                        <i><a href="#">白条12期免息</a></i>
                                    </div>
                                    <div class="zhong3">
                                        <button class="jian">-</button>
                                        <input type="text" value="${zzz}" class="sz">
                                        <button class="jia">+</button>
                                        <p>有货</p>
                                    </div>
                                    <div class="zhong4">
                                        <span>￥<b>${zig}</b>.00</span>
                                    </div>
                                    <div class="zhong5">
                                        <span><a href="#">删除</a></span>
                                        <p><a href="#">移到我的关注</a></p>
                                    </div>
                                </div>
                            </div>
                        `
                }
            }
        }
        $("#list").html(this.str);
    }
    zbotton() {
        var oppp = document.querySelectorAll(".ppp");
        var osz = document.querySelectorAll(".sz");
        var oinput = document.querySelectorAll(".kuan>input");
        var ozj = document.getElementById("zj");
        var oxz = document.getElementById("xz");
        var summ = 0;
        var bumm = 0;
        for (var t = 0; t < oppp.length; t++) {
            if (oinput[t].checked) {
                summ += Number(osz[t].value) * Number(oppp[t].innerText)
                bumm += Number(osz[t].value)
            }
        }
        ozj.innerText = "￥" + summ + ".00";
        oxz.innerText = bumm;
    }
    danxuan() {
        var oAll = document.getElementById("all");
        var oBll = document.getElementById("bll");
        var oinput = document.querySelectorAll(".kuan>input");
        var _this = this;
        for (var i = 0; i < oinput.length; i++) {
            oinput[i].addEventListener("click", function () {
                if (this.checked) {
                    this.parentNode.parentNode.style.background = "#fff4e8";
                } else {
                    this.parentNode.parentNode.style.background = "none";
                }
                var bStop = true;
                for (var j = 0; j < oinput.length; j++) {
                    if (!oinput[j].checked) {
                        bStop = false;
                        break;
                    }
                }
                oAll.checked = bStop;
                oBll.checked = bStop;
                _this.zbotton()
            })
        }
    }
    zdian() {
        var _this = this;
        var oinput = document.querySelectorAll(".kuan>input");
        var oAll = document.getElementById("all");
        var oBll = document.getElementById("bll");
        oAll.onclick = function () {
            for (var b = 0; b < oinput.length; b++) {
                oinput[b].checked = this.checked;
                oBll.checked = this.checked;
                if (oinput[b].checked) {
                    oinput[b].parentNode.parentNode.style.background = "#fff4e8";
                } else {
                    oinput[b].parentNode.parentNode.style.background = "none";
                }
            }
            _this.zbotton()
        }
        oBll.onclick = function () {
            for (var b = 0; b < oinput.length; b++) {
                oinput[b].checked = this.checked;
                oAll.checked = this.checked;
                if (oinput[b].checked) {
                    oinput[b].parentNode.parentNode.style.background = "#fff4e8";
                } else {
                    oinput[b].parentNode.parentNode.style.background = "none";
                }
            }
            _this.zbotton()
        }
    }
    onchange() {
        var _storage = window.localStorage;
        var osz = document.querySelectorAll(".sz");
        for (let i = 0; i < _storage.length; i++) {
            osz[i].onchange = function () {
                var _key = _storage.key(i);
                let str = _storage.getItem(_key);
                let obj = JSON.parse(str);
                obj[0].num = Number(osz[i].value)
                _storage.setItem(_key, JSON.stringify(obj))
                var sum = this.value * this.parentNode.parentNode.children[4].children[0].children[0].children[0].innerText;
                this.parentNode.parentNode.children[6].children[0].innerText = "￥" + sum + ".00";
            }
        }
    }
    zj() {
        var _this = this;
        var oJia = document.querySelectorAll(".jia");
        var _storage = window.localStorage;
        for (let i = 0; i < _storage.length; i++) {
            oJia[i].index = i;
            console.log(oJia[i].index)
            oJia[i].onclick = function () {
                console.log(i)
                var _key = _storage.key(i);
                let str = _storage.getItem(_key);
                let obj = JSON.parse(str);
                console.log(obj)
                console.log(this.index)
                obj[0].num++;
                _storage.setItem(_key, JSON.stringify(obj))
                this.previousElementSibling.value++;
                var sum = this.previousElementSibling.value * this.parentNode.parentNode.children[4].children[0].children[0].children[0].innerText;
                this.parentNode.parentNode.children[6].children[0].innerText = "￥" + sum + ".00";
                _this.zbotton();
            }
        }
    }
    yj() {
        var _this = this;
        var _storage = window.localStorage;
        var oJian = document.querySelectorAll(".jian");
        for (let i = 0; i < _storage.length; i++) {
            oJian[i].onclick = function () {
                var _key = _storage.key(i);
                let str = _storage.getItem(_key);
                let obj = JSON.parse(str);
                console.log(obj)
                obj[0].num--;
                if (obj[0].num <= 1) {
                    obj[0].num = 1;
                }
                _storage.setItem(_key, JSON.stringify(obj))
                this.nextElementSibling.value--;
                if (this.nextElementSibling.value < 1) {
                    return this.nextElementSibling.value = 1;
                } else {
                    var osum = this.nextElementSibling.value * this.parentNode.parentNode.children[4].children[0].children[0].children[0].innerText;
                    this.parentNode.parentNode.children[6].children[0].innerText = "￥" + osum + ".00";
                }
                _this.zbotton();
            }
        }
    }
    mover() {
        var _storage = window.localStorage;
        var ospan = document.querySelectorAll(".zhong5>span");
        var arr = [];
        for (let l = 0; l < _storage.length; l++) {
            var _key = _storage.key(l);
            arr.push(_key)
            console.log(arr)
            ospan[l].onclick = function () {
                console.log(l)
                _storage.removeItem(arr[l])
                this.parentNode.parentNode.parentNode.remove()
            }
        }
    }
    init() {
        this.xuanran();
        this.danxuan();
        this.zdian();
        this.zj();
        this.yj();
        this.onchange();
        this.mover();
    }
}
$(function () {
    $.ajax({
        url: "./json/xiangqing.json",
        success: function (_date) {
            new Gwc(_date);
        }
    })
})