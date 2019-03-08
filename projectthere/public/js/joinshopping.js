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
            }else{
                location.href = './html/login.html';
            }
        })(); 
    }
    thetoken();
    var _id = decodeURI(location.search.slice(1)).split("=")[1];
    console.log(_id);
    if (_id) {
        $('h2').html("修改商品信息");
        (async () => {
            let joinsp = () => {
                return new Promise((resolve, reject) => {
                    $.ajax({
                        type: "GET",
                        url: "http://localhost:8880/c",
                        data: {
                            _id: _id
                        },
                        success(datac) {
                            resolve(datac)
                        }
                    })
                })
            }
            let data = await joinsp();
            var joininput = $(".joininput");
            joininput.eq(0).val(data[0].sname);
            joininput.eq(1).val(data[0].smoneys);
            joininput.eq(2).val(data[0].smoneyx);
            joininput.eq(3).val(data[0].slei);
            // console.log(data[0]);
            $("#joinbutton").click(async () => {
                let joing = (obj) => {
                    return new Promise((resolve, reject) => {
                        $.ajax({
                            type: "GET",
                            url: "http://localhost:8880/g",
                            data: {
                                ...obj
                            },
                            success(data) {
                                resolve(data)
                            }
                        })
                    })
                }
                var sname = joininput.eq(0).val();
                var smoneys = joininput.eq(1).val();
                var smoneyx = joininput.eq(2).val();
                var slei = joininput.eq(3).val();
                var obj = { _id, sname, smoneys, smoneyx, slei };
                console.log(obj);
                var app = await joing(obj);
                if (app === true) {
                    alert('修改成功');
                } else {
                    alert('修改失败');
                }
            })

        })();
    } else {
        var joininput = $(".joininput");
        $("#joinbutton").on("click", () => {
            let joinsp = () => {
                return new Promise((resolve, reject) => {
                    $.ajax({
                        type: "GET",
                        url: "http://localhost:8880/z",
                        data: {
                            sname: joininput[0].value,
                            smoneys: joininput[1].value,
                            smoneyx: joininput[2].value,
                            slei: joininput[3].value
                        },
                        success(datac) {
                            resolve(datac)
                        }
                    })
                })
            }
            joinsp();

        })
    }


});