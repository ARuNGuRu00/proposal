var butCon=0,frameCon=0;

function checkFunc(){
    document.getElementById('dummy').style="display:none;"
    document.getElementById('log').style="display:flex";
}

function joinFunc(){
    document.getElementById('dummy').style="display:none;"
    document.getElementById('log').style="display:flex";
    fun1();fun2()
}

function fun1(){
    if (butCon==0){
        document.getElementById('check-but-con').style="display:inline-block";
        document.getElementById('join-but-con').style="display:none";
        butCon=1;
    }
    else{
        document.getElementById('join-but-con').style="display:inline-block";
        document.getElementById('check-but-con').style="display:none";
        butCon=0;
    }
}

function fun2(){
    if (frameCon==0){
        document.getElementById('con-content3').style='display:none';
        document.getElementById('con-content2').style='display:block';
        document.getElementById('con-content').style='display:none';
        frameCon=1;
    }
    else{
        document.getElementById('con-content3').style='display:none';
        document.getElementById('con-content2').style='display:none';
        document.getElementById('con-content').style='display:block';
        frameCon=0;
    }
}

function resFlip() {
    const element_1 = document.getElementById('con-frame');
    element_1.classList.remove('flip-animation');
    void element_1.offsetWidth; 
    element_1.classList.add('flip-animation');

    const element_2 = document.getElementById('option-frame');
    element_2.classList.remove('slide-animation');
    void element_2.offsetWidth; 
    element_2.classList.add('slide-animation');
}

function ran_Num(){
    return(Math.floor(Math.random()*9)+1);
}
var otpNum="";
function otp(){
    ar=[ran_Num(),ran_Num(),ran_Num(),ran_Num(),ran_Num(),ran_Num()];
    for (i of ar){
        otpNum+=i;
    }
    return otpNum;
}

function send(){
    const massages={
        email:document.getElementById(`email`).value,
        code: otp()
    } ;
    emailjs.send('service_ysvss7k','template_mndvdtf',massages).then(function (response){
        console.log('sucess!',response.status,response.text);
        document.getElementById('con-content2').style='display:none';
        document.getElementById('con-content3').style='display:block';
    },function(error){
        console.log('fail');
        document.getElementById(`validation`).style="display:block";
        otpNum="";
        
    })
}

function email_send(){
    send();
}


function verify(){
    var c_otp=document.getElementById(`otp`).value
    var c_otp=c_otp.trim()
    console.log(typeof c_otp);
    console.log(otpNum);
    console.log(typeof otpNum);
    if (String(c_otp)===otpNum){
        console.log('its correct');
        window.location.replace("https://arunguru00.github.io/project/");
    }
    else{
        document.getElementById(`otp`).reset();
    }
}