class Sp {
    constructor() {
        this.odl = document.getElementById("dl");
        this.init();
    }
    zh() {
        if (location.href!= "http://localhost/xm/sp.html") {
            var id = location.href.split("?")[1].split(":")[1];
            this.odl.innerHTML = id;
            this.odl.href="";
            this.odl.parentNode.innerHTML += "<b id='tc'>退出登陆</b>"
            if (id != null) {
                document.cookie = "zh" + "=" + id + "";
            }
            this.tc();
        }else{
            if(document.cookie.length>0){
                var a=document.cookie.split("=")[1]
                this.odl.innerText = a;
                this.odl.href="";
                this.odl.parentNode.innerHTML += "<b id='tc'>退出登陆</b>"
                this.tc();
            }
        }
    }
    tc() {
        var tc = document.getElementById("tc");
        var _this = this;
        tc.onclick = function () {
            _this.odl.innerHTML = "请登录！";

            var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
            if (keys) {
                for (var i = keys.length; i--;)
                    document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
            }
            location.href = "./sp.html";
        }
    }
    init() {
        this.zh();
    }
}
new Sp();