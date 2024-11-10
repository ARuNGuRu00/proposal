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
        document.getElementById('con-content2').style='display:block';
        document.getElementById('con-content').style='display:none';
        frameCon=1;
    }
    else{
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