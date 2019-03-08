$(() => {
    //token
    function thetoken(){
        (async()=>{
            let getUserListc = () => {
                return new Promise((resolve, reject) => {
                    $.ajax({
                        type: "GET",
                        url: "http://localhost:8880/token_yz",
                        data: { 'token': localStorage.token },
                        success(datac) {
                            resolve(datac)
                        }
                    })
                })
            }
            let lingpai = await getUserListc();
            if(lingpai.status){
                $('.topname').html(lingpai.name+',登陆ing');

                 //头像上传
                        // var fileNode = document.getElementById("file");
                        // fileNode.onchange = function () {
                        //     // console.log(fileNode.files)
                        //     var xmlhttp = new XMLHttpRequest();//1
                        //     //设置回调，当请求的状态发生变化时，就会被调用  
                        //     xmlhttp.onreadystatechange = function () {//2
                        //         //上传成功，返回的文件名，设置到父节点的背景中  
                        //         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        //             console.log(xmlhttp.responseText)
                        //             let data = JSON.parse(xmlhttp.responseText);
                        //             document.getElementById("img").src = `http://localhost:8880/${data.file.filename}`;
                        //             document.getElementById("pictur").src= `http://localhost:8880/${data.file.filename}`;
                        //             console.log(data.file);
                        //         //   var app = document.getElementById("touxiang");
                        //         //   let pc = document.createElement("img");
                        //         //   app.appendChild(pc);
                        //         //   pc.src = `../uploads/${data.file.filename}`
                        //         }
                        //     }
                        //     //构造form数据 你可以用它传输文件流 它是基于form-data的传输方案
                        //     var data = new FormData();
                        //     // 单图上传，默认选第一张，如果是多图的话，就要for循环遍历fileNode.files数组，并全部append到data里面传输
                        //     data.append("abc",fileNode.files[0]);
                        //     //for(let i=0;i<goods.files.length;i++){
                        //     //     data.append('goods',goods.files[i]);
                        //     // }
                        //     console.log(data);
                        //     console.log(fileNode.files[0]);
                        //     xmlhttp.open("post", "/files", true);//3
                        //     //不要缓存  
                        //     xmlhttp.setRequestHeader("If-Modified-Since", "0");  
                        //     //提交请求  
                        //     xmlhttp.send(data);//4
                        //     //清除掉，否则下一次选择同样的文件就进入不到onchange函数中了  
                        //     fileNode.value = null;
                        // }
                // console.log(lingpai.name);
            }else{
                location.href = './html/login.html';
            }
        })(); 
    }
    thetoken();
    // 顶部功能
    //添加
    $(".add").on("click", () => {
        location.href = "../html/joinshopping.html";
    })
    //页面显示data
    function fenye(data) {
        var hang = 7;//一页显示7行
        var ye;//总页码
        var k = 1;//页码
        var num;//最后一页数量
        // console.log(data.length);
        ye = Math.ceil(data.length / hang);
        num = data.length % hang;
        // console.log(data);
        //首页
        if (ye !== k) {
            let xrhtml = "";
            for (var i = 0; i < hang; i++) {
                xrhtml += `<tr>
                                <td>
                                    <div class="form-check">
                                        <input idx="${data[i]._id}" class="form-check-input position-static gou" type="checkbox" id="blankCheckbox"
                                            value="option1" aria-label="...">
                                    </div>
                                </td>
                                <th scope="row">${i + 1}</th>
                                <td>${data[i].sname}</td>
                                <td>${data[i].slei}</td>
                                <td>${data[i].smoneys}</td>
                                <td>${data[i].smoneyx}</td>
                                <td>无限</td>
                                <td>上架</td>
                                <td>${data[i].time}</td>
                                <td>
                                    <button type="button" idx="${data[i]._id}" class="btn btn-outline-dark compile">编辑</button>
                                    <button type="button" idx="${data[i]._id}" class="btn btn-outline-dark delete">删除</button>
                                    <button type="button" class="btn btn-outline-dark">下架</button>

                                </td>
                            </tr>`
            }
            $('#xr').html(xrhtml);
            function qitaye(){
                //k页的页面显示
                function yema_k() {
                    let xrhtml = "";
                    for (var i = hang * (k - 1); i < hang * k; i++) {
                        xrhtml += `<tr>
                            <td>
                                <div class="form-check">
                                    <input idx="${data[i]._id}" class="form-check-input position-static gou" type="checkbox" id="blankCheckbox"
                                        value="option1" aria-label="...">
                                </div>
                            </td>
                            <th scope="row">${i + 1}</th>
                            <td>${data[i].sname}</td>
                            <td>${data[i].slei}</td>
                            <td>${data[i].smoneys}</td>
                            <td>${data[i].smoneyx}</td>
                            <td>无限</td>
                            <td>上架</td>
                            <td>${data[i].time}</td>
                            <td>
                                <button type="button" idx="${data[i]._id}" class="btn btn-outline-dark compile">编辑</button>
                                <button type="button" idx="${data[i]._id}" class="btn btn-outline-dark delete">删除</button>
                                <button type="button" class="btn btn-outline-dark">下架</button>

                            </td>
                        </tr>`
                    }
                    $('#xr').html(xrhtml);
                    manydeletew();
                }
                //最后一页；
                function yema_num() {
                    let xrhtml = "";
                    for (var i = hang * (k - 1); i < hang * (k - 1) + num; i++) {
                        xrhtml += `<tr>
                            <td>
                                <div class="form-check">
                                    <input idx="${data[i]._id}" class="form-check-input position-static gou" type="checkbox" id="blankCheckbox"
                                        value="option1" aria-label="...">
                                </div>
                            </td>
                            <th scope="row">${i + 1}</th>
                            <td>${data[i].sname}</td>
                            <td>${data[i].slei}</td>
                            <td>${data[i].smoneys}</td>
                            <td>${data[i].smoneyx}</td>
                            <td>无限</td>
                            <td>上架</td>
                            <td>${data[i].time}</td>
                            <td>
                                <button type="button" idx="${data[i]._id}" class="btn btn-outline-dark compile">编辑</button>
                                <button type="button" idx="${data[i]._id}" class="btn btn-outline-dark delete">删除</button>
                                <button type="button" class="btn btn-outline-dark">下架</button>

                            </td>
                        </tr>`
                    }
                    $('#xr').html(xrhtml);
                    manydeletew();
                }
                //下一页
                $('.xia').stop().click(async () => {
                    ++k;
                    if (ye > k) {
                        yema_k();
                    }
                    else if (ye < k) {
                        k = ye;
                        // yema_num();
                    }
                    else if (ye == k) {
                        yema_num();
                    }
                    console.log(k,num);
                })
                //上一页
                $('.shang').stop().click(() => {
                    --k;
                    // $('.shang').disabled = false;
                    if (k >= 1) {
                        yema_k();
                    } else {
                        k = 1;
                    }
                })
                $('.tiaoye').stop().click( function() {
                    let num1 = $('#tiaoyetext').val();
                    // console.log($('#tiaoyetext').val());
                    if (ye > num1) {
                        k = num1
                        yema_k();
                    }
                    else if (ye < num1) {
                        alert('此页无商品');
                    }
                    else if (ye == num1) {
                        k = num1
                        yema_num();
                    }
                })
                $('.yema').stop().click(function () {
                    // console.log($(this).html());
                    if ($(this).html()*1 < ye) {
                        k = $(this).html();
                        yema_k();
                        manydeletew();
                    }
                    else if ($(this).html()*1 == ye) {
                        yema_num();
                        manydeletew();
                    }
                    else if ($(this).html()*1 > ye) {
                        alert('该页无商品');
                    }
                })
            }
            qitaye();
        }
        if(ye === k) {
            if (num > 0) {
                let xrhtml = "";
                for (var i = 0; i < num; i++) {
                    xrhtml += `<tr>
                                    <td>
                                        <div class="form-check">
                                            <input idx="${data[i]._id}" class="form-check-input position-static gou" type="checkbox" id="blankCheckbox"
                                                value="option1" aria-label="...">
                                        </div>
                                    </td>
                                    <th scope="row">${i + 1}</th>
                                    <td>${data[i].sname}</td>
                                    <td>${data[i].slei}</td>
                                    <td>${data[i].smoneys}</td>
                                    <td>${data[i].smoneyx}</td>
                                    <td>无限</td>
                                    <td>上架</td>
                                    <td>${data[i].time}</td>
                                    <td>
                                        <button type="button" idx="${data[i]._id}" class="btn btn-outline-dark compile">编辑</button>
                                        <button type="button" idx="${data[i]._id}" class="btn btn-outline-dark delete">删除</button>
                                        <button type="button" class="btn btn-outline-dark">下架</button>

                                    </td>
                                </tr>`
                }
                $('#xr').html(xrhtml);
            }
            if(num<=0){
                console.log('无该项数据');
            }
        }

        function manydeletew(){
            // 删除
         $(".delete").stop().click(async function () {
            let idx = $(this).attr("idx");
            let listdelete = () => {
                return new Promise((resolve, reject) => {
                    $.ajax({
                        type: "GET",
                        url: "http://localhost:8880/s",
                        data: {
                            _id: idx,
                            status: 'shopping'
                        },
                        success(datac) {
                            resolve(datac)
                        }
                    })
                })
            }
            let data = await listdelete();
            xuanran();
        })
        //编辑
        $(".compile").stop().click(async function () {
            let idx = $(this).attr("idx");
            location.href = "../html/joinshopping.html?_id=" + idx;
        })
        // 批量删除
            let $blankCheckbox = $("#blankCheckbox");
            $blankCheckbox.click( function(){
                if($blankCheckbox.is(':checked')){
                    $(".gou").prop("checked", true);
                }else{
                    $(".gou").prop("checked", false);
                }
            })
            let $gou = $(".gou");
            $gou.each(function(){   
                $(this).click( function(){
                    if ($(this).is(':checked')) {
                        //判断：所有单个商品是否勾选
                        var len = $gou.length;
                        var num = 0;
                            $gou.each(function () {
                            if ($(this).is(':checked')) {
                                num++;
                            }
                        });
                        if (num == len) {
                            $blankCheckbox.prop("checked", true);
                        }
                    } else {
                        //单个商品取消勾选，全局全选取消勾选
                        $blankCheckbox.prop("checked", false);
                    }
                })
            })
            $(".del").stop().click(async () => {
                let obj = {};
                for(let i = 0 ;i < $gou.length; i++){
                    if($gou.eq(i).is(':checked')){
                        obj[i] = $gou.eq(i).attr("idx");
                    }
                }
                console.log(obj);
                    let manydelete = (obj) => {
                        return new Promise((resolve, reject) => {
                            $.ajax({
                                type: "GET",
                                url: "http://localhost:8880/manydelete",
                                data: {
                                    ...obj
                                },
                                success(datac) {
                                    resolve(datac)
                                }
                            })
                        })
                    }
                    let data = await manydelete(obj);
                    xuanran();
            })
        }
        manydeletew();
    }
    //数字bug
    //主页渲染
    function xuanran() {
        (async () => {
            //shopping数据渲染
            let listxr = () => {
                return new Promise((resolve, reject) => {
                    $.ajax({
                        type: "GET",
                        url: "http://localhost:8880/c",
                        // data: { 
                        //     sname:joininput[0].value,
                        //     smoneys:joininput[1].value,
                        //     smoneyx:joininput[2].value,
                        //     slei:joininput[3].value
                        //   },
                        success(datac) {
                            resolve(datac)
                        }
                    })
                })
            }
            let data = await listxr();
            fenye(data);
        })();
    }
    xuanran();
    //分类
    function fenleiboss() {
        (async () => {
            //点击获取分类数据
            var party = true;
            $('#btnGroupDrop1').stop().click(async () => {
                let fenlei1 = () => {
                    return new Promise((resolve, reject) => {
                        $.ajax({
                            type: "GET",
                            url: "http://localhost:8880/cfenlei",
                            data: {
                                slei: 'slei'
                            },
                            success(data) {
                                resolve(data)
                            }
                        })
                    })
                }
                let data1 = await fenlei1();
                var dropdownhtml ="<a class='dropdown-item'>全部商品</a>";
                for (var i = 0; i < data1.length; i++) {
                    dropdownhtml += `<a class="dropdown-item" >${data1[i].slei}</a>`
                }
                await $('.dropdown-menu').html(dropdownhtml);
                if (party) {
                    $('.dropdown-menu').css('display', 'block');
                    party = false;
                } else {
                    $('.dropdown-menu').css('display', 'none');
                    party = true;
                }
                //点击显示分类；
                $('.dropdown-item').stop().click(async function () {

                    $('.dropdown-menu').css('display', 'none');
                    party = true;
                    var spfenlei = $(this).html(); 
                    if(spfenlei == '全部商品'){
                        var chaurl = "http://localhost:8880/c";
                    }else{
                        var chaurl = "http://localhost:8880/cfenlei";
                    }
                    // console.log(chaurl);
                    let shoppingfenlei = (chaurl) => {
                        // console.log(chaurl);
                        return new Promise((resolve, reject) => {
                            $.ajax({
                                type: "GET",
                                url: chaurl,
                                data: {
                                    splei: spfenlei
                                },
                                success(data) {
                                    resolve(data)
                                }
                            })
                        })
                        
                    }
                    // console.log(chaurl);
                    let data = await shoppingfenlei(chaurl);
                    // console.log(k);
                    fenye(data);
                })
            })
        })();
    }
    fenleiboss();
})
