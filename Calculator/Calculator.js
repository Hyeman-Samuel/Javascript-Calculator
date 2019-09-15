 let count=1; 
 let row_count=1;
 let his =document.getElementById("history");
 his.insertRow(row_count).textContent='History';
if(frm.txt.value===null){
    frm.txt.value=0;
}
  function check(x){
    let last=frm.txt.value;
    let  l_digit=last[last.length-1]
    if((l_digit.includes('/')||l_digit.includes('+')||l_digit.includes('*')||l_digit.includes('-')||l_digit.includes('.')) && (x==='/'||x==='+'||x==='*'||x==='-'||x==='.' )){
            return;
    }else{
        frm.txt.value=frm.txt.value +x;
    }
  }
 function equ(x){
     try{
         eval(x)
     if(eval(frm.txt.value)===undefined){
         return}
         frm.txt.value=eval(frm.txt.value);
     if (x==frm.txt.value){
        
         return;
     }else{
         row_count++
    let list=`${count}. ${x}=${eval(frm.txt.value)}`;
    let his =document.getElementById("history");
      his.insertRow(row_count).textContent=list;
        count++
        
    }}catch{
        alert('Syntax Error');
        return;
    }
 }
     let button=document.getElementById("history_btn");
   button.addEventListener('mouseup',()=>{
     let full= document.getElementById("history");
     let text= document.getElementById("close");
         full.style.backgroundColor='grey';
         full.style.Color='grey';
         text.style.color='grey';

   })
   button.addEventListener('mousedown',()=>{
    let full= document.getElementById("history");
    let text= document.getElementById("close");
             full.style.backgroundColor='white';

})

  function back(){
    let last=frm.txt.value;
    let back =last.substring(0,last.length-1);
    frm.txt.value=back;
}

function dis(x){
    if(x===Error){
        alert(SyntaxError)
     return;    
    }
     if(frm.txt.value===''){
         if(x==='+'||x==='-'||x==='/'||x==='*'){
             return
    }else{
         frm.txt.value=frm.txt.value +x;} }else if(x===NaN||x===undefined){
             alert('Error');
             return;
    }else{
         check(x);       
}
}
/*------------sin-----------------*/
function dis1(x){
    try{
            eval(x);
        frm.txt.value= Math.sin(x * Math.PI / 180);
    if(isNaN(frm.txt.value)){
        alert('Please put in a value first');
        frm.txt.value=null;
    }else{
                            row_count++
    let list=`${count}.sin${x}=${eval(frm.txt.value)}`;
    let his =document.getElementById("history");
         his.insertRow(row_count).textContent=list;
                                 count++
}
}catch{
     alert('Syntax Error');
     frm.txt.value=null;
}
}

/*--------------cos-----------*/
function dis2(x){
    try{
        eval(x);
        frm.txt.value=Math.cos(x * Math.PI / 180);
   if(isNaN(frm.txt.value)){
        alert('Please put in a value first');
        frm.txt.value=null;
}else{
        row_count++
    let list=`${count}.cos${x}=${eval(frm.txt.value)}`;
    let his =document.getElementById("history");
        his.insertRow(row_count).textContent=list;
        count++
}}catch{
        alert('Syntax Error');
     frm.txt.value=null;
    }
}
 /*-----------tan--------------*/
function dis3(x){
    try{         
        eval(x);
        frm.txt.value=(Math.sin(x * Math.PI / 180))/(Math.cos(x * Math.PI / 180));
    if(isNaN(frm.txt.value)){
        alert('Please put in a value first');
        frm.txt.value=null;
}else{
        row_count++
     let list=`${count}.tan${x}=${eval(frm.txt.value)}`;
     let his =document.getElementById("history");
        his.insertRow(row_count).textContent=list;
        count++
}}catch{
        alert('Syntax Error');
     frm.txt.value=null;
    }
}
   /*-----------square-------------*/
function dis4(x){
    try{          
        eval(x);
        frm.txt.value=Math.pow(x, 2)
    if(isNaN(frm.txt.value)){
        alert('Please put in a value first');
        frm.txt.value=null;
    }else{
        row_count++
     let list=`${count}. ${x}^2=${eval(frm.txt.value)}`;
     let his =document.getElementById("history");
        his.insertRow(row_count).textContent=list;
        count++
}}catch{
        alert('Syntax Error');
     frm.txt.value=null;
    }
}
/*--------------cube-------------*/
function dis5(x){
    try{           
        eval(x);
    frm.txt.value=Math.pow(x, 3)
    if(isNaN(frm.txt.value)){
        alert('Please put in a value first');
        frm.txt.value=null;
    }else{
     row_count++
    let list=`${count}. ${x}^3=${eval(frm.txt.value)}`;
    let his =document.getElementById("history");
     his.insertRow(row_count).textContent=list;
     count++
}    }catch{
        alert('Syntax Error');
     frm.txt.value=null;
    }
}
/*-------------Square Root--------------*/
function dis6(x){
    try{          
        eval(x);
        frm.txt.value=Math.sqrt(x);
    if(isNaN(frm.txt.value)){
        alert('Please put in a value first');
        frm.txt.value=null;
    }else{
        row_count++
    let list=`${count}. v¯${x}=${eval(frm.txt.value)}`;
    let his =document.getElementById("history");
        his.insertRow(row_count).textContent=list;
        count++
}       }catch{
        alert('Syntax Error');
        frm.txt.value=null;
    }
}
/*-------------Cube Root--------------*/
function dis7(x){
    try{         
        eval(x);
    frm.txt.value=Math.cbrt(x);
    if(isNaN(frm.txt.value)){
        alert('Please put in a value first');
        frm.txt.value=null;
    }else{
        row_count++
     let list=`${count}.3v¯${x}=${eval(frm.txt.value)}`;
     let his =document.getElementById("history");
       his.insertRow(row_count).textContent=list;
       count++
}   }catch{
        alert('Syntax Error');
     frm.txt.value=null;
    }
}



 
