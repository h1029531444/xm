class XQ {
    constructor(_data) {
        this.d = _data;
        this.odl = document.getElementById("dl");
        this.id = location.href.split("?")[1].split("=")[1];
        this.str = "";
        this.init();
    };
    xuanran() {
        for (var i = 0; i < this.d[0].nr.length; i++) {
            var o = this.d[0].nr;
            if (this.id == o[i].m) {
                console.log(this.id == o[i].m)
                if (o[i].x4 == "" && o[i].x5 == "") {
                    this.str += `<div class="zuo">
                        <div class="datu" id="ddt">
                            <div id="fangda"></div><img src="${o[i].d1.dd}">
                        </div>
                        <div class="xiaotu">
                            <img data-src="${o[i].d1.dd}" src="${o[i].x1}" class="ys">
                            <img data-src="${o[i].d1.dd1}" src="${o[i].x2}">
                            <img data-src="${o[i].d1.dd2}" src="${o[i].x3}">
                        </div>
                    </div>
                    <div class="you">
                        <p class="tit"><span>门店有售</span>${o[i].title}</p>
                        <p class="cx">【关注微信公众号领取粉丝专享福利】【领券满199减20，满399减50】【6月大促】</p>
                        <div class="y1">
                            <div class="z_y1">
                                <p>京 东 价</p>
                                <span>￥<b>${o[i].price}</b></span>
                                <i><a href="#">降价通知</a></i>
                                <div class="cxw">
                                       <b>促&nbsp;&nbsp;销</b>
                                       <div class=" ms">满送</div>
                                       <i>满2999减100<a href="#"> 详情>></a></i>
                                    </div>
                                    <div class="fjl">
                                        <div>满额反卷</div>
                                        <i>购买 指定商品满1返60-59优惠券<a href="#">详情>></a></i>
                                    </div>
                            </div>
                            <div class="y_y2">
                                <div class="s_q">
                                    <span>累计评价</span>
                                    <p><a href="#">${o[i].yhy}</a></p>
                                </div>
                                <div class="x_q">
                                    <span>累计售出</span>
                                    <p><a href="#">${o[i].y1}</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="y2">
                            <div>增值业务</div>
                            <div>健康保障无忧</div>
                            <div>送运费险</div>
                        </div>
                        <div class="y3">
                            <div>配 送 至<span>北京朝阳区三环以内</span></div><span>有货</span>
                        </div>
                        <p>由 <a href="#">京东</a> 发货, 并提供售后服务. 23:00前下单,预计<span>明天(04月14日)</span>送达</p>
                        <div class="y4"><span>选择颜色</span>
                            <li><a href="##">红色</a></li>
                            <li><a href="##">蓝色</a></li>
                            <li><a href="##">白色</a></li>
                            <li><a href="##">绿色</a></li>
                        </div>
                        <div class="y5"><span>尺&nbsp;&nbsp;码</span>
                            <li><a href="##">24</a></li>
                            <li><a href="##">25</a></li>
                            <li><a href="##">26</a></li>
                            <li><a href="##">30</a></li>
                            <li><a href="##">34</a></li>
                        </div>
                        <div class="y10">
                            <div class="ny"><input type="text" value="1" id="wenben">
                                <div><button id="jia">+</button><button id="jian">-</button></div>
                            </div><input type="submit" value="加入购物车" id="jrgw">
                        </div>
                        <div class="y11"><span>温馨提示</span><span>·支持7天无理由退货</span><span>·此商品不可使用京卷东卷</span></div>
                    </div>
                    <div class="weibu" id="ddj"><img src="${o[i].d1.dd}" id="dddd"></div>`
                } else {
                    if (o[i].x5 == "") {
                        this.str += `<div class="zuo">
                            <div class="datu" id="ddt">
                                <div id="fangda"></div><img src="${o[i].d1.dd}">
                            </div>
                            <div class="xiaotu">
                                <img data-src="${o[i].d1.dd}" src="${o[i].x1}" class="ys">
                                <img data-src="${o[i].d1.dd1}" src="${o[i].x2}">
                                <img data-src="${o[i].d1.dd2}" src="${o[i].x3}">
                                <img data-src="${o[i].d1.dd3}" src="${o[i].x4}">
                            </div>
                        </div>
                        <div class="you">
                            <p class="tit"><span>门店有售</span>${o[i].title}</p>
                            <p class="cx">【关注微信公众号领取粉丝专享福利】【领券满199减20，满399减50】【6月大促】</p>
                            <div class="y1">
                                <div class="z_y1">
                                    <p>京 东 价</p>
                                    <span>￥<b>${o[i].price}</b></span>
                                    <i><a href="#">降价通知</a></i>
                                    <div class="cxw">
                                       <b>促&nbsp;&nbsp;销</b>
                                       <div class=" ms">满送</div>
                                       <i>满2999减100<a href="#"> 详情>></a></i>
                                    </div>
                                    <div class="fjl">
                                        <div>满额反卷</div>
                                        <i>购买 指定商品满1返60-59优惠券<a href="#">详情>></a></i>
                                    </div>
                                </div>
                                <div class="y_y2">
                                    <div class="s_q">
                                        <span>累计评价</span>
                                        <p><a href="#">${o[i].yhy}</a></p>
                                    </div>
                                    <div class="x_q">
                                        <span>累计售出</span>
                                        <p><a href="#">${o[i].y1}</a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="y2">
                                <div>增值业务</div>
                                <div>健康保障无忧</div>
                                <div>送运费险</div>
                            </div>
                            <div class="y3">
                                <div>配 送 至<span>北京朝阳区三环以内</span></div><span>有货</span>
                            </div>
                            <p>由 <a href="#">京东</a> 发货, 并提供售后服务. 23:00前下单,预计<span>明天(04月14日)</span>送达</p>
                            <div class="y4"><span>选择颜色</span>
                                <li><a href="##">红色</a></li>
                                <li><a href="##">蓝色</a></li>
                                <li><a href="##">白色</a></li>
                                <li><a href="##">绿色</a></li>
                            </div>
                            <div class="y5"><span>尺&nbsp;&nbsp;码</span>
                                <li><a href="##">24</a></li>
                                <li><a href="##">25</a></li>
                                <li><a href="##">26</a></li>
                                <li><a href="##">30</a></li>
                                <li><a href="##">34</a></li>
                            </div>
                            <div class="y10">
                                <div class="ny"><input type="text" value="1" id="wenben">
                                    <div><button id="jia">+</button><button id="jian">-</button></div>
                                </div><input type="submit" value="加入购物车" id="jrgw">
                            </div>
                            <div class="y11"><span>温馨提示</span><span>·支持7天无理由退货</span><span>·此商品不可使用京卷东卷</span></div>
                        </div>
                        <div class="weibu" id="ddj"><img src="${o[i].d1.dd}" id="dddd"></div>
                        `
                    } else {
                        this.str += `<div class="zuo">
                            <div class="datu" id="ddt">
                                <div id="fangda"></div><img src="${o[i].d1.dd}">
                            </div>
                            <div class="xiaotu">
                                <img data-src="${o[i].d1.dd}" src="${o[i].x1}" class="ys">
                                <img data-src="${o[i].d1.dd1}" src="${o[i].x2}">
                                <img data-src="${o[i].d1.dd2}" src="${o[i].x3}">
                                <img data-src="${o[i].d1.dd3}" src="${o[i].x4}">
                                <img data-src="${o[i].d1.dd4}" src="${o[i].x5}">
                            </div>
                        </div>
                        <div class="you">
                            <p class="tit"><span>门店有售</span>${o[i].title}</p>
                            <p class="cx">【关注微信公众号领取粉丝专享福利】【领券满199减20，满399减50】【6月大促】</p>
                            <div class="y1">
                                <div class="z_y1">
                                    <p>京 东 价</p>
                                    <span>￥<b>${o[i].price}</b></span>
                                    <i><a href="#">降价通知</a></i>
                                    <div class="cxw">
                                       <b>促&nbsp;&nbsp;销</b>
                                       <div class=" ms">满送</div>
                                       <i>满2999减100<a href="#"> 详情>></a></i>
                                    </div>
                                    <div class="fjl">
                                        <div>满额反卷</div>
                                        <i>购买 指定商品满1返60-59优惠券<a href="#">详情>></a></i>
                                    </div>
                                </div>
                                <div class="y_y2">
                                    <div class="s_q">
                                        <span>累计评价</span>
                                        <p><a href="#">${o[i].yhy}</a></p>
                                    </div>
                                    <div class="x_q">
                                        <span>累计售出</span>
                                        <p><a href="#">${o[i].y1}</a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="y2">
                                <div>增值业务</div>
                                <div>健康保障无忧</div>
                                <div>送运费险</div>
                            </div>
                            <div class="y3">
                                <div>配 送 至<span>北京朝阳区三环以内</span></div><span>有货</span>
                            </div>
                            <p>由 <a href="#">京东</a> 发货, 并提供售后服务. 23:00前下单,预计<span>明天(04月14日)</span>送达</p>
                            <div class="y4"><span>选择颜色</span>
                                <li><a href="##">红色</a></li>
                                <li><a href="##">蓝色</a></li>
                                <li><a href="##">白色</a></li>
                                <li><a href="##">绿色</a></li>
                            </div>
                            <div class="y5"><span>尺&nbsp;&nbsp;码</span>
                                <li><a href="##">24</a></li>
                                <li><a href="##">25</a></li>
                                <li><a href="##">26</a></li>
                                <li><a href="##">30</a></li>
                                <li><a href="##">34</a></li>
                            </div>
                            <div class="y10">
                                <div class="ny"><input type="text" value="1" id="wenben">
                                    <div><button id="jia">+</button><button id="jian">-</button></div>
                                </div><input type="submit" value="加入购物车" id="jrgw">
                            </div>
                            <div class="y11"><span>温馨提示</span><span>·支持7天无理由退货</span><span>·此商品不可使用京卷东卷</span></div>
                        </div>
                        <div class="weibu" id="ddj"><img src="${o[i].d1.dd}" id="dddd"></div>`
                    }
                }
                $("#zongti").html(this.str);
            }
        }
    }
    fdj() {
        var odatu = document.getElementById("ddt");
        var ofangda = document.getElementById("fangda");
        var oddj = document.getElementById("dddd");
        var odd = document.getElementById("ddj");
        odatu.onmouseover = function () {
            ofangda.style.display = "block";
            odd.style.display = "block";
            odatu.onmousemove = function (e) {
                var x = e.pageX - 120 - ofangda.offsetWidth / 2;
                var y = e.pageY - 210 - ofangda.offsetHeight / 2;
                if (x <= 0) {
                    x = 0;
                }
                if (y <= 0) {
                    y = 0;
                }

                if (x >= (odatu.offsetWidth - ofangda.offsetWidth)) {
                    x = odatu.offsetWidth - ofangda.offsetWidth;
                }
                if (y >= (odatu.offsetHeight - ofangda.offsetHeight)) {
                    y = odatu.offsetHeight - ofangda.offsetHeight;
                }
                ofangda.style.left = x + "px";
                ofangda.style.top = y + "px";

                oddj.style.left = -2 * x + "px";
                oddj.style.top = -2 * y + "px";
            }
        }
        odatu.onmouseout = function () {
            ofangda.style.display = "none";
            odd.style.display = "none";
        }
    }
    click() {
        var oddj = document.getElementById("dddd");
        var oImg = document.querySelectorAll(".xiaotu img")
        for (var i = 0; i < oImg.length; i++) {
            oImg[i].onclick = function () {
                for (var b = 0; b < oImg.length; b++) {
                    oImg[b].className = "";
                }
                this.className = "ys";
                var src = this.getAttribute("data-src");
                this.parentNode.parentNode.children[0].children[1].src = src;
                oddj.src = src;
            }
        }
    }
    jj() {
        var oJia = document.getElementById("jia");
        var oJian = document.getElementById("jian");
        var owenben = document.getElementById("wenben");
        var as = 1;
        //改变文本框的值
        as = Number(owenben.value);
        owenben.onchange = function () {
            as = Number(owenben.value)
        }
        //加
        oJia.addEventListener("click", function () {
            as++;
            owenben.value = as
        })
        //减
        oJian.addEventListener("click", function () {

            if (owenben.value <= 1) {
                owenben.value == 1;
            } else {
                as--;
                owenben.value = as
            }
        })


        var ojrgw = document.getElementById("jrgw");
        var _storage = window.localStorage;
        var id = this.id;
        ojrgw.addEventListener("mousedown", function () {
            var obj;
            ojrgw.style.lineHeight = "50px";
            //第一次点击判断localStorage中有没有id这个key值
            if (!_storage.getItem(id)) {
                //如果不存在的时候添加一个数组对象  这个对象为第一个商品的id和数量
                _storage.setItem(id, JSON.stringify([{ "id": id, num: as }]));
            } else {
                //如果localStorage中存在这个值
                obj = JSON.parse(_storage.getItem(id));
                console.log(obj)
                //数量进行相加
                obj[0].num += as;
                _storage.setItem(id, JSON.stringify(obj));

            }

            //点击后瞬间改变商品的总数
            var ogw = document.getElementById("gw");
            var zs = 0;
            for (var j = 0; j < _storage.length; j++) {
                var _key = _storage.key(j);
                var ccc = JSON.parse(_storage.getItem(_key));
                zs += ccc[0].num;
            }
            ogw.innerText = zs;
        })
        ojrgw.addEventListener("mouseup", function () {
            ojrgw.style.lineHeight = "46px";
        })
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
                location.href = "./xiangqing.html?id=" + _this.id;
            }
        }
    }
    init() {
        this.xuanran();
        this.fdj();
        this.click();
        this.jj();
        this.zs();
        this.zh();
    }
}
$(function () {
    $.ajax({
        url: "./json/xiangqing.json",
        success: function (_data) {
            new XQ(_data);
        }
    });
});