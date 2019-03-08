$(()=>{
    let getUserList = (obj) => {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "GET",
                url: "http://localhost:8880/log",
                data: {
                    ...obj
                },
                success(datac) {
                    resolve(datac)
                }
            })
        })
    }
    $("#inputGo").click(async () => {
        let pass = $("#inputEmail").val();
        let word = $("#inputPassword").val();
        var obj = { 'pass': pass, 'word': word };
        // console.log(obj);
        let data = await getUserList(obj);
        // console.log(data);
        if (data.status === true) {
            localStorage.setItem('token',data.token);
            location.href = "../index.html";
        } else {
            alert('账号或密码错误');
        }
    })
})