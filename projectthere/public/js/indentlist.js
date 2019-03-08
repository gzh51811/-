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
    function xuanran() {
        (async () => {
            //shopping数据渲染
            let listxr = () => {
                return new Promise((resolve, reject) => {
                    $.ajax({
                        type: "GET",
                        url: "http://localhost:8880/c",
                        success(datac) {
                            resolve(datac)
                        }
                    })
                })
            }
            let data = await listxr();
            let xrhtml = "";
            for (var i = 0; i < data.length; i++) {
                xrhtml += `<tr>
                            <th scope="row">${i + 1}</th>
                            <td>${data[i].sname}</td>
                            <td>${data[i].slei}</td>
                            <td>${data[i].smoneys}</td>
                            <td>${data[i].smoneyx}</td>
                            <td>免运费</td>
                            <td>998</td>
                            <td>${data[i].time}</td>
                            <td>
                                <button type="button" idx="${data[i]._id}" class="btn btn-outline-dark delete">删除</button>
                            </td>
                        </tr>`
            }
            await $('#xr').html(xrhtml);
            $(".delete").click(async function () {
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
        })();
    }
    xuanran();

})