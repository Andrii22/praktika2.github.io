//Переносим данные с формы объекта: паралелограм в переменную
var form_p_1 = document.getElementById("forma_paralelograma_1");
var form_p_2 = document.getElementById("forma_paralelograma_2");
var form_p_3 = document.getElementById("forma_paralelograma_3");
//Переносим данные с формы объекта: круг в переменную
var form_k_1 = document.getElementById("forma_kruga_1");
//Переносим данные с формы объекта: овал в переменную
var form_o_1 = document.getElementById("forma_ovala_1");
var form_o_2 = document.getElementById("forma_ovala_2");
//Переносим данные с формы объекта: квадрат в переменную
var form_kv_1 = document.getElementById("forma_kvadrata_1");
//Переносим данные с формы объекта: Прямоугольник в переменную
var form_pr_1 = document.getElementById("forma_pryamougolnik_1");
var form_pr_2 = document.getElementById("forma_pryamougolnik_2");
//Переносим данные с формы объекта: трехугольник в переменную
var form_t_1 = document.getElementById("forma_trehugonika_1");
var form_t_2 = document.getElementById("forma_trehugonika_2");
//--------------------------------------------------------------------
var numbers = document.querySelectorAll('input[type=number]'); // все что вводм будет только типом цифры
var output = document.querySelectorAll("span"); // наш вывод данных
var state = 0; // положение выключеного нажатия Instant calculation

function fastcalc(){
    if(state==0){
        numbers.forEach(element => {
            element.addEventListener('input', calc); // прослушка активности нажатия Instant calculation
        });
        state=1;
    }
    else{
        numbers.forEach(element => {
            element.removeEventListener('input', calc); // прослушка активности нажатия Instant calculation
        });
        state=0;
    }
    
}

function calc(){  // основная функция обчисления
    if(form_p_1.value>0&&form_p_2.value>0&&form_p_3<180&&form_p_3.value>0){
        output[0].innerText=Math.abs((form_p_1.value*form_p_2.value*Math.sin(form_p_3.value))).toFixed(3); // Вычисление параметров паралелограмма почему то не понимаю почему оно не работает
        output[1].innerText=(output[0].innerHTML/form_p_1.value).toFixed(3);
    }
    else{
        output[0].innerText="-";//если ничего не введено
        output[1].innerText="-";//если ничего не введено       
    }
    if(form_k_1.value>0){
        output[2].innerText=(form_k_1.value*form_k_1.value*Math.PI).toFixed(3);// Вычисление параметров круга 
        output[3].innerText=(2*(form_k_1.value*Math.PI)).toFixed(3);
    }
    else{
        output[2].innerText="-";//если ничего не введено
        output[3].innerText="-";//если ничего не введено
    }  
    if(form_o_1.value>0&&form_o_2.value>0){
        output[4].innerText=(Math.PI*form_o_1.value*form_o_2.value).toFixed(3);//Вычисление параметров овала
        output[5].innerText=(2*Math.PI*Math.sqrt((form_o_1.value*form_o_1.value+form_o_2.value*form_o_2.value)/8)).toFixed(3);
    }
    else{
        output[4].innerText="-";//если ничего не введено
        output[5].innerText="-";//если ничего не введено
    }
    if(form_kv_1.value>0){
        output[6].innerText=(Math.sqrt(2)*form_kv_1.value).toFixed(3);//Вычисление параметров квадрата
        output[7].innerText=(form_kv_1.value*form_kv_1.value).toFixed(3);
    }
    else{
        output[6].innerText="-";//если ничего не введено
        output[7].innerText="-";//если ничего не введено
    }
    if(form_pr_1.value>0&&form_pr_2.value>0){
        output[8].innerText=(Math.sqrt(form_pr_1.value*form_pr_1.value+form_pr_2.value*form_pr_2.value)).toFixed(3);
        output[9].innerText=(form_pr_1.value*form_pr_2.value).toFixed(3);//Вычисление параметров круга прямоугольника
    }
    else{
        output[8].innerText="-";//если ничего не введено
        output[9].innerText="-";//если ничего не введено
    }
    if(form_t_1.value>0&&form_t_2.value>0){
        output[10].innerText=(Math.sqrt(form_t_1.value*form_t_1.value+form_t_2.value*form_t_2.value)).toFixed(3);
        output[11].innerText=(Math.atan(form_t_1.value/form_t_2.value)*180/Math.PI).toFixed(3);
        output[12].innerText=(Math.atan(form_t_2.value/form_t_1.value)*180/Math.PI).toFixed(3);
        output[13].innerText=90; //Вычисление параметров трехугольника 
        output[14].innerText=(form_t_1.value*form_t_2.value/2).toFixed(3);
        output[15].innerText=(+output[14].innerText/+output[10].innerText).toFixed(3);
    }
    else{        
        output[10].innerText="-";//если ничего не введено
        output[11].innerText="-";//если ничего не введено
        output[12].innerText="-";//если ничего не введено
        output[13].innerText="-";//если ничего не введено
        output[14].innerText="-";//если ничего не введено
        output[15].innerText="-";//если ничего не введено     
    }
}
