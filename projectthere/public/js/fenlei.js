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

        
    (async()=>{
        let listxr = () => {
            return new Promise((resolve, reject) => {
                $.ajax({
                    type: "GET",
                    url: "http://localhost:8880/cfenlei",
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
        console.log(data);
        // let xrhtml = "";
        // for(var i=0;i<data.length;i++){
        //     xrhtml +=  `<tr>
        //                 <td>
        //                     <div class="form-check">
        //                         <input class="form-check-input position-static" type="checkbox" id="blankCheckbox"
        //                             value="option1" aria-label="...">
        //                     </div>
        //                 </td>
        //                 <th scope="row">${i+1}</th>
        //                 <td>${data[i].name}</td>
        //                 <td>${data[i].gender}</td>
        //                 <td>${data[i].city}</td>
        //                 <td>暂无</td>
        //                 <td>不详</td>
        //                 <td>100</td>
        //                 <td>${data[i].time}</td>
        //                 <td>
        //                     <button type="button" class="btn btn-outline-dark">编辑</button>
        //                     <button type="button" class="btn btn-outline-dark">删除</button>
        //                 </td>
        //             </tr>`
        // }
        
        // $('#xr').html(xrhtml);    
    })
})