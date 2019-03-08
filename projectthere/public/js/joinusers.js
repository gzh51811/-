$(()=>{
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
        if(_id){
            $('h2').html("修改用户信息");
        (async () => {
            let joinsp = () => {
                return new Promise((resolve, reject) => {
                    $.ajax({
                        type: "GET",
                        url: "http://localhost:8880/cusers",
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
            console.log(data);
            var joininput = $(".joininput");
            joininput.eq(0).val(data[0].name);
            joininput.eq(1).val(data[0].gender);
            joininput.eq(2).val(data[0].pass);
            joininput.eq(3).val(data[0].word);
            joininput.eq(4).val('河源');
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
                var name = joininput.eq(0).val();
                var gender = joininput.eq(1).val();
                var pass = joininput.eq(2).val();
                var word = joininput.eq(3).val();
                var status = 'student';
                var obj = {_id,name,gender,pass,word,status};
                console.log(obj);
                var app = await joing(obj);
                if(app === true){
                    alert('修改成功');
                }else{
                    alert('修改失败');
                }
            })

        })();

        }else{
        var joininput = $(".joininput");
        let joinuser = () => {
                return new Promise((resolve, reject) => {
                    $.ajax({
                        type: "GET",
                        url: "http://localhost:8880/zusers",
                        data: { 
                            name:joininput[0].value,
                            gender:joininput[1].value,
                            pass:joininput[2].value,
                            word:joininput[3].value,
                            city:joininput[4].value
                          },
                        success(datac) {
                            resolve(datac)
                        }
                    })
                })
        }
        $("#joinbutton").on("click",()=>{
            joinuser();
            joininput.val("");
            alert("添加成功");
        })
        }
        
    
    
    
});