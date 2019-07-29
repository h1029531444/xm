class Pux {
    constructor(_data) {
        this.id = location.href.split("/")[4].split(".")[0];
        this.odl = document.getElementById("dl");
        this.d = _data;
        this.result = false;
        this.bos = false;
        this.str = "";
        this.scc = "";
        this.scv = "";
        this.rcc = "";
        this.init();
    }
    concent() {
        for (var j = 0; j < this.d.length; j++) {
            if (this.id = this.d[j].nr.length) {
                for (var i = 0; i < this.d[j].nr.length; i++) {
                    var o = this.d[j].nr;
                    if (o[i].x4 == "" && o[i].x5 == "") {
                        this.str += `
                        <li class="bank" data-id="${o[i].m}">
                        <div class="auto">
                            <div class="n_img">
                                <img class="lazyload" data-src="${o[i].d1.dd}">
                            </div>
                            <div class="x_img">
                                <ul>
                                    <li class="bs">
                                        <a class="hong"><img class="lazyload" data-src="${o[i].x1}" data-scc="${o[i].d1.dd}"></a>
                                    </li>
                                    <li class="bs">
                                        <a><img class="lazyload" data-src="${o[i].x2}" data-scc="${o[i].d1.dd1}"></a>
                                    </li>
                                    <li class="bs">
                                        <a><img class="lazyload" data-src="${o[i].x3}" data-scc="${o[i].d1.dd2}"></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="n_p">
                                <p class="sj">￥<b>${o[i].price}</b></p>
                                <p class="jq">${o[i].title}</p>
                                <p class="xl">销量<i>：${o[i].yhy}</i></p>
                            </div>
                        </div>
                        </li>
                         `
                    } else {
                        if (o[i].x5 == "") {
                            this.str += `
                        <li class="bank" data-id="${o[i].m}">
                        <div class="auto">
                            <div class="n_img">
                                <img class="lazyload" data-src="${o[i].d1.dd}">
                            </div>
                            <div class="x_img">
                                <ul>
                                    <li class="bs">
                                        <a class="hong"><img class="lazyload" data-src="${o[i].x1}" data-scc="${o[i].d1.dd}"></a>
                                    </li>
                                    <li class="bs">
                                        <a><img class="lazyload" data-src="${o[i].x2}" data-scc="${o[i].d1.dd1}"></a>
                                    </li>
                                    <li class="bs">
                                        <a><img class="lazyload" data-src="${o[i].x3}" data-scc="${o[i].d1.dd2}"></a>
                                    </li>
                                    <li class="bs">
                                        <a><img class="lazyload" data-src="${o[i].x4}" data-scc="${o[i].d1.dd3}"></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="n_p">
                                <p class="sj">￥<b>${o[i].price}</b></p>
                                <p class="jq">${o[i].title}</p>
                                <p class="xl">销量<i>：${o[i].yhy}</i></p>
                            </div>
                        </div>
                        </li>
                         `
                        } else {
                            this.str += `
                            <li class="bank" data-id="${o[i].m}">
                            <div class="auto">
                                <div class="n_img">
                                    <img class="lazyload" data-src="${o[i].d1.dd}">
                                </div>
                                <div class="x_img">
                                    <ul>
                                        <li class="bs">
                                            <a class="hong"><img class="lazyload" data-src="${o[i].x1}" data-scc="${o[i].d1.dd}"></a>
                                        </li>
                                        <li class="bs">
                                            <a><img class="lazyload" data-src="${o[i].x2}" data-scc="${o[i].d1.dd1}"></a>
                                        </li>
                                        <li class="bs">
                                            <a><img class="lazyload" data-src="${o[i].x3}" data-scc="${o[i].d1.dd2}"></a>
                                        </li>
                                        <li class="bs">
                                            <a><img class="lazyload" data-src="${o[i].x4}" data-scc="${o[i].d1.dd3}"></a>
                                        </li>
                                        <li class="bs">
                                            <a><img class="lazyload" data-src="${o[i].x5}" data-scc="${o[i].d1.dd4}"></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="n_p">
                                    <p class="sj">￥<b>${o[i].price}</b></p>
                                    <p class="jq">${o[i].title}</p>
                                    <p class="xl">销量<i>：${o[i].yhy}</i></p>
                                </div>
                            </div>
                            </li>
                             `
                        }
                    }
                }
            }
        }
        $(".nn_con").html(this.str)
    }
    lazlode() {
        new LazyLoad($(".auto img"), {
            rootMargin: "300px",
        });
    }
    onmouseover() {
        for (var i = 0; i < document.querySelectorAll(".bank").length; i++) {
            document.querySelectorAll(".bank")[i].onmouseover = function () {
                this.style.boxShadow = "0 0 8px #ddd";
            }
            document.querySelectorAll(".bank")[i].onmouseout = function () {
                this.style.boxShadow = "none";
            }
        }
    }
    onclick() {
        var oimg = document.querySelectorAll(".bs a");
        for (var i = 0; i < oimg.length; i++) {
            oimg[i].onclick = function () {
                var a = this.parentNode.parentNode.children;
                var src = this.children[0].getAttribute("data-scc");
                for (var l = 0; l < a.length; l++) {
                    a[l].children[0].className = "";
                }
                this.className = "hong";
                this.parentNode.parentNode.parentNode.parentNode.children[0].children[0].src = src;
            }
        }

    }
    bjiao() {
        var arr = [];
        var _arr = [];
        var acc = [];
        var temp, tmm;
        for (var j = 0; j < this.d.length; j++) {
            if (this.id = this.d[j].nr.length) {
                for (var i = 0; i < this.d[j].nr.length; i++) {
                    var o = this.d[j].nr;
                    arr.push(o[i].price);
                    _arr.push(o[i].price);
                    acc.push(o[i].price);
                }
            }
        }
        for (var i = 0; i < arr.length - 1; i++) {
            for (var n = i + 1; n < arr.length; n++) {
                if (arr[i] > arr[n]) {
                    temp = arr[i];
                    arr[i] = arr[n];
                    arr[n] = temp;
                }
            }
        }
        for (var i = 0; i < _arr.length - 1; i++) {
            for (var n = i + 1; n < _arr.length; n++) {
                if (_arr[i] < _arr[n]) {
                    tmm = _arr[i];
                    _arr[i] = _arr[n];
                    _arr[n] = tmm;
                }
            }
        }
        arr.unshift(arr.pop())
        _arr.push(_arr.shift())
        this.xil(arr, _arr)
        this.dydian(acc);
    }
    dydian(acc) {
        var _this = this;
        $("#px").click(function () {
            if (!_this.bos) {
                _this.result = false;
                $(".z_px a").attr("class", "");
                this.className = "sele";
                for (var j = 0; j < _this.d.length; j++) {
                    if (_this.id = _this.d[j].nr.length) {
                        for (var p = 0; p < acc.length;) {
                            for (var i = 0; i < _this.d[j].nr.length; i++) {
                                var o = _this.d[j].nr;
                                if (acc[0] == o[i].price) {
                                    acc.shift()
                                    if (o[i].x4 == "" && o[i].x5 == "") {
                                        _this.rcc += `
                                    <li class="bank" data-id="${o[i].m}">
                                    <div class="auto">
                                        <div class="n_img">
                                            <img class="lazyload" data-src="${o[i].d1.dd}">
                                        </div>
                                        <div class="x_img">
                                            <ul>
                                                <li class="bs">
                                                    <a class="hong"><img class="lazyload" data-src="${o[i].x1}" data-scc="${o[i].d1.dd}"></a>
                                                </li>
                                                <li class="bs">
                                                    <a><img class="lazyload" data-src="${o[i].x2}" data-scc="${o[i].d1.dd1}"></a>
                                                </li>
                                                <li class="bs">
                                                    <a><img class="lazyload" data-src="${o[i].x3}" data-scc="${o[i].d1.dd2}"></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="n_p">
                                            <p class="sj">￥<b>${o[i].price}</b></p>
                                            <p class="jq">${o[i].title}</p>
                                            <p class="xl">销量<i>：${o[i].yhy}</i></p>
                                        </div>
                                    </div>
                                    </li>
                                     `
                                    } else {
                                        if (o[i].x5 == "") {
                                            _this.rcc += `
                                    <li class="bank" data-id="${o[i].m}">
                                    <div class="auto">
                                        <div class="n_img">
                                            <img class="lazyload" data-src="${o[i].d1.dd}">
                                        </div>
                                        <div class="x_img">
                                            <ul>
                                                <li class="bs">
                                                    <a class="hong"><img class="lazyload" data-src="${o[i].x1}" data-scc="${o[i].d1.dd}"></a>
                                                </li>
                                                <li class="bs">
                                                    <a><img class="lazyload" data-src="${o[i].x2}" data-scc="${o[i].d1.dd1}"></a>
                                                </li>
                                                <li class="bs">
                                                    <a><img class="lazyload" data-src="${o[i].x3}" data-scc="${o[i].d1.dd2}"></a>
                                                </li>
                                                <li class="bs">
                                                    <a><img class="lazyload" data-src="${o[i].x4}" data-scc="${o[i].d1.dd3}"></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="n_p">
                                            <p class="sj">￥<b>${o[i].price}</b></p>
                                            <p class="jq">${o[i].title}</p>
                                            <p class="xl">销量<i>：${o[i].yhy}</i></p>
                                        </div>
                                    </div>
                                    </li>
                                     `
                                        } else {
                                            _this.rcc += `
                                        <li class="bank" data-id="${o[i].m}">
                                        <div class="auto">
                                            <div class="n_img">
                                                <img class="lazyload" data-src="${o[i].d1.dd}">
                                            </div>
                                            <div class="x_img">
                                                <ul>
                                                    <li class="bs">
                                                        <a class="hong"><img class="lazyload" data-src="${o[i].x1}" data-scc="${o[i].d1.dd}"></a>
                                                    </li>
                                                    <li class="bs">
                                                        <a><img class="lazyload" data-src="${o[i].x2}" data-scc="${o[i].d1.dd1}"></a>
                                                    </li>
                                                    <li class="bs">
                                                        <a><img class="lazyload" data-src="${o[i].x3}" data-scc="${o[i].d1.dd2}"></a>
                                                    </li>
                                                    <li class="bs">
                                                        <a><img class="lazyload" data-src="${o[i].x4}" data-scc="${o[i].d1.dd3}"></a>
                                                    </li>
                                                    <li class="bs">
                                                        <a><img class="lazyload" data-src="${o[i].x5}" data-scc="${o[i].d1.dd4}"></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="n_p">
                                                <p class="sj">￥<b>${o[i].price}</b></p>
                                                <p class="jq">${o[i].title}</p>
                                                <p class="xl">销量<i>：${o[i].yhy}</i></p>
                                            </div>
                                        </div>
                                        </li>
                                         `
                                        }

                                    }
                                    continue;
                                }
                            }
                        }
                    }
                }
                _this.bos = true;
                $(".nn_con").html(_this.rcc)
                _this.onclick();
                _this.onmouseover();
                _this.tiaozhuan();
            }
            _this.lazlode();
        })
    }
    xil(arr, _arr) {
        var _this = this;
        document.getElementById("xsl").onclick = function () {
            _this.bos = false;
            if (!_this.result) {
                $(".z_px a").attr("class", "");
                $("#xsl>em").html("↓");
                this.className = "sele";
                for (var j = 0; j < _this.d.length; j++) {
                    if (_this.id = _this.d[j].nr.length) {
                        for (var p = 0; p < arr.length;) {
                            for (var i = 0; i < _this.d[j].nr.length; i++) {
                                var o = _this.d[j].nr;
                                if (arr[0] == o[i].price) {
                                    arr.shift()
                                    if (o[i].x4 == "" && o[i].x5 == "") {
                                        _this.scc += `
                                        <li class="bank" data-id="${o[i].m}">
                                        <div class="auto">
                                            <div class="n_img">
                                                <img class="lazyload" data-src="${o[i].d1.dd}">
                                            </div>
                                            <div class="x_img">
                                                <ul>
                                                    <li class="bs">
                                                        <a class="hong"><img class="lazyload" data-src="${o[i].x1}" data-scc="${o[i].d1.dd}"></a>
                                                    </li>
                                                    <li class="bs">
                                                        <a><img class="lazyload" data-src="${o[i].x2}" data-scc="${o[i].d1.dd1}"></a>
                                                    </li>
                                                    <li class="bs">
                                                        <a><img class="lazyload" data-src="${o[i].x3}" data-scc="${o[i].d1.dd2}"></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="n_p">
                                                <p class="sj">￥<b>${o[i].price}</b></p>
                                                <p class="jq">${o[i].title}</p>
                                                <p class="xl">销量<i>：${o[i].yhy}</i></p>
                                            </div>
                                        </div>
                                        </li>
                                         `
                                    } else {
                                        if (o[i].x5 == "") {
                                            _this.scc += `
                                        <li class="bank" data-id="${o[i].m}">
                                        <div class="auto">
                                            <div class="n_img">
                                                <img class="lazyload" data-src="${o[i].d1.dd}">
                                            </div>
                                            <div class="x_img">
                                                <ul>
                                                    <li class="bs">
                                                        <a class="hong"><img class="lazyload" data-src="${o[i].x1}" data-scc="${o[i].d1.dd}"></a>
                                                    </li>
                                                    <li class="bs">
                                                        <a><img class="lazyload" data-src="${o[i].x2}" data-scc="${o[i].d1.dd1}"></a>
                                                    </li>
                                                    <li class="bs">
                                                        <a><img class="lazyload" data-src="${o[i].x3}" data-scc="${o[i].d1.dd2}"></a>
                                                    </li>
                                                    <li class="bs">
                                                        <a><img class="lazyload" data-src="${o[i].x4}" data-scc="${o[i].d1.dd3}"></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="n_p">
                                                <p class="sj">￥<b>${o[i].price}</b></p>
                                                <p class="jq">${o[i].title}</p>
                                                <p class="xl">销量<i>：${o[i].yhy}</i></p>
                                            </div>
                                        </div>
                                        </li>
                                         `
                                        } else {
                                            _this.scc += `
                                            <li class="bank" data-id="${o[i].m}">
                                            <div class="auto">
                                                <div class="n_img">
                                                    <img class="lazyload" data-src="${o[i].d1.dd}">
                                                </div>
                                                <div class="x_img">
                                                    <ul>
                                                        <li class="bs">
                                                            <a class="hong"><img class="lazyload" data-src="${o[i].x1}" data-scc="${o[i].d1.dd}"></a>
                                                        </li>
                                                        <li class="bs">
                                                            <a><img class="lazyload" data-src="${o[i].x2}" data-scc="${o[i].d1.dd1}"></a>
                                                        </li>
                                                        <li class="bs">
                                                            <a><img class="lazyload" data-src="${o[i].x3}" data-scc="${o[i].d1.dd2}"></a>
                                                        </li>
                                                        <li class="bs">
                                                            <a><img class="lazyload" data-src="${o[i].x4}" data-scc="${o[i].d1.dd3}"></a>
                                                        </li>
                                                        <li class="bs">
                                                            <a><img class="lazyload" data-src="${o[i].x5}" data-scc="${o[i].d1.dd4}"></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="n_p">
                                                    <p class="sj">￥<b>${o[i].price}</b></p>
                                                    <p class="jq">${o[i].title}</p>
                                                    <p class="xl">销量<i>：${o[i].yhy}</i></p>
                                                </div>
                                            </div>
                                            </li>
                                             `
                                        }

                                    }
                                    continue;
                                }
                            }
                        }
                        console.log(arr)
                    }
                }
                $(".nn_con").html(_this.scc)
                _this.onclick();
                _this.onmouseover();
                _this.tiaozhuan();
                _this.result = true;
            } else {
                $(".z_px a").attr("class", "");
                $("#xsl>em").html("↑");
                this.className = "sele";
                for (var j = 0; j < _this.d.length; j++) {
                    if (_this.id = _this.d[j].nr.length) {
                        for (var p = 0; p < _arr.length;) {
                            for (var i = 0; i < _this.d[j].nr.length; i++) {
                                var o = _this.d[j].nr;
                                if (_arr[0] == o[i].price) {
                                    _arr.shift()
                                    if (o[i].x4 == "" && o[i].x5 == "") {
                                        _this.scv += `
                                            <li class="bank" data-id="${o[i].m}">
                                            <div class="auto">
                                                <div class="n_img">
                                                    <img class="lazyload" data-src="${o[i].d1.dd}">
                                                </div>
                                                <div class="x_img">
                                                    <ul>
                                                        <li class="bs">
                                                            <a class="hong"><img class="lazyload" data-src="${o[i].x1}" data-scc="${o[i].d1.dd}"></a>
                                                        </li>
                                                        <li class="bs">
                                                            <a><img class="lazyload" data-src="${o[i].x2}" data-scc="${o[i].d1.dd1}"></a>
                                                        </li>
                                                        <li class="bs">
                                                            <a><img class="lazyload" data-src="${o[i].x3}" data-scc="${o[i].d1.dd2}"></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="n_p">
                                                    <p class="sj">￥<b>${o[i].price}</b></p>
                                                    <p class="jq">${o[i].title}</p>
                                                    <p class="xl">销量<i>：${o[i].yhy}</i></p>
                                                </div>
                                            </div>
                                            </li>
                                             `
                                    } else {
                                        if (o[i].x5 == "") {
                                            _this.scv += `
                                            <li class="bank" data-id="${o[i].m}">
                                            <div class="auto">
                                                <div class="n_img">
                                                    <img class="lazyload" data-src="${o[i].d1.dd}">
                                                </div>
                                                <div class="x_img">
                                                    <ul>
                                                        <li class="bs">
                                                            <a class="hong"><img class="lazyload" data-src="${o[i].x1}" data-scc="${o[i].d1.dd}"></a>
                                                        </li>
                                                        <li class="bs">
                                                            <a><img class="lazyload" data-src="${o[i].x2}" data-scc="${o[i].d1.dd1}"></a>
                                                        </li>
                                                        <li class="bs">
                                                            <a><img class="lazyload" data-src="${o[i].x3}" data-scc="${o[i].d1.dd2}"></a>
                                                        </li>
                                                        <li class="bs">
                                                            <a><img class="lazyload" data-src="${o[i].x4}" data-scc="${o[i].d1.dd3}"></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="n_p">
                                                    <p class="sj">￥<b>${o[i].price}</b></p>
                                                    <p class="jq">${o[i].title}</p>
                                                    <p class="xl">销量<i>：${o[i].yhy}</i></p>
                                                </div>
                                            </div>
                                            </li>
                                             `
                                        } else {
                                            _this.scv += `
                                                <li class="bank" data-id="${o[i].m}">
                                                <div class="auto">
                                                    <div class="n_img">
                                                        <img class="lazyload" data-src="${o[i].d1.dd}">
                                                    </div>
                                                    <div class="x_img">
                                                        <ul>
                                                            <li class="bs">
                                                                <a class="hong"><img class="lazyload" data-src="${o[i].x1}" data-scc="${o[i].d1.dd}"></a>
                                                            </li>
                                                            <li class="bs">
                                                                <a><img class="lazyload" data-src="${o[i].x2}" data-scc="${o[i].d1.dd1}"></a>
                                                            </li>
                                                            <li class="bs">
                                                                <a><img class="lazyload" data-src="${o[i].x3}" data-scc="${o[i].d1.dd2}"></a>
                                                            </li>
                                                            <li class="bs">
                                                                <a><img class="lazyload" data-src="${o[i].x4}" data-scc="${o[i].d1.dd3}"></a>
                                                            </li>
                                                            <li class="bs">
                                                                <a><img class="lazyload" data-src="${o[i].x5}" data-scc="${o[i].d1.dd4}"></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="n_p">
                                                        <p class="sj">￥<b>${o[i].price}</b></p>
                                                        <p class="jq">${o[i].title}</p>
                                                        <p class="xl">销量<i>：${o[i].yhy}</i></p>
                                                    </div>
                                                </div>
                                                </li>
                                                 `
                                        }

                                    }
                                    continue;
                                }
                            }
                        }
                    }
                }
                $(".nn_con").html(_this.scv)
                _this.onclick();
                _this.onmouseover();
                _this.tiaozhuan();
                _this.result = false;
            }
            _this.lazlode();
        }
    }
    tiaozhuan() {
        var onn = document.querySelectorAll(".n_img img");
        for (var i = 0; i < onn.length; i++) {
            onn[i].onclick = function () {
                var id = this.parentNode.parentNode.parentNode.getAttribute("data-id");
                location.href = "./xiangqing.html?id=" + id;
            }
        }
    }
    zs() {
        //商品总量
        var _storage = window.localStorage;
        var ogw = document.getElementById("gw");
        var zs = 0;
        for (var j = 0; j < _storage.length; j++) {
            var _key = _storage.key(j);
            var ccc = JSON.parse(_storage.getItem(_key));
            zs += ccc[0].num;
        }
        ogw.innerText = zs;
        console.log(zs)
    }
    zh() {
        if (document.cookie.length > 0) {
            var a = document.cookie.split("=")[1]
            this.odl.innerText = a;
            this.odl.href = "";
            this.odl.parentNode.innerHTML += "<b id='tc'>退出登陆</b>"
        }
        this.tc();
    }
    tc() {
        var tc = document.getElementById("tc");
        var _this = this;
        if (tc) {
            tc.onclick = function () {
                _this.odl.innerHTML = "请登录！";

                var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
                if (keys) {
                    for (var i = keys.length; i--;)
                        document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
                }
                location.href = "./pux.html";
            }
        }
    }
    init() {
        this.concent();
        this.onmouseover();
        this.onclick();
        this.bjiao();
        this.lazlode();
        this.tiaozhuan();
        this.zs();
        this.zh();
    }
}
$(function () {
    $.ajax({
        url: "./json/sp.json",
        success: function (_data) {
            new Pux(_data);
        }
    });
});