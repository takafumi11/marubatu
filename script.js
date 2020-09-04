let turn = 0;
let overWriteMaru = 2;        
let overWriteBatu = 2;

const elem0 = document.getElementById('box0');
const elem1 = document.getElementById('box1');
const elem2 = document.getElementById('box2');
const elem3 = document.getElementById('box3');
const elem4 = document.getElementById('box4');
const elem5 = document.getElementById('box5');
const elem6 = document.getElementById('box6');
const elem7 = document.getElementById('box7');
const elem8 = document.getElementById('box8');        


//勝利条件
const fin = (mark)=>{
    if(
    //横一列
    (elem0.textContent == '○'||elem0.textContent == '◎')&&(elem1.textContent == '○'||elem1.textContent == '◎')&&(elem2.textContent == '○'||elem2.textContent == '◎')||
    (elem3.textContent == '○'||elem3.textContent == '◎')&&(elem4.textContent == '○'||elem4.textContent == '◎')&&(elem5.textContent == '○'||elem5.textContent == '◎')||
    (elem6.textContent == '○'||elem6.textContent == '◎')&&(elem7.textContent == '○'||elem7.textContent == '◎')&&(elem8.textContent == '○'||elem8.textContent == '◎')||
    (elem0.textContent == '×'||elem0.textContent == '❌')&&(elem1.textContent == '×'||elem1.textContent == '❌')&&(elem2.textContent == '×'||elem2.textContent == '❌')||
    (elem3.textContent == '×'||elem3.textContent == '❌')&&(elem4.textContent == '×'||elem4.textContent == '❌')&&(elem5.textContent == '×'||elem5.textContent == '❌')||
    (elem6.textContent == '×'||elem6.textContent == '❌')&&(elem7.textContent == '×'||elem7.textContent == '❌')&&(elem8.textContent == '×'||elem8.textContent == '❌')||        

    //縦一列
    (elem0.textContent == '○'||elem0.textContent == '◎')&&(elem3.textContent == '○'||elem3.textContent == '◎')&&(elem6.textContent == '○'||elem6.textContent == '◎')||
    (elem1.textContent == '○'||elem1.textContent == '◎')&&(elem4.textContent == '○'||elem4.textContent == '◎')&&(elem7.textContent == '○'||elem7.textContent == '◎')||
    (elem2.textContent == '○'||elem2.textContent == '◎')&&(elem5.textContent == '○'||elem5.textContent == '◎')&&(elem8.textContent == '○'||elem8.textContent == '◎')||
    (elem0.textContent == '×'||elem0.textContent == '❌')&&(elem3.textContent == '×'||elem3.textContent == '❌')&&(elem6.textContent == '×'||elem6.textContent == '❌')||
    (elem1.textContent == '×'||elem1.textContent == '❌')&&(elem4.textContent == '×'||elem4.textContent == '❌')&&(elem7.textContent == '×'||elem7.textContent == '❌')||
    (elem2.textContent == '×'||elem2.textContent == '❌')&&(elem5.textContent == '×'||elem5.textContent == '❌')&&(elem8.textContent == '×'||elem8.textContent == '❌')||


    //斜め
    (elem0.textContent == '○'||elem0.textContent == '◎')&&(elem4.textContent == '○'||elem4.textContent == '◎')&&(elem8.textContent == '○'||elem8.textContent == '◎')||
    (elem2.textContent == '○'||elem2.textContent == '◎')&&(elem4.textContent == '○'||elem4.textContent == '◎')&&(elem6.textContent == '○'||elem6.textContent == '◎')||
    (elem0.textContent == '×'||elem0.textContent == '❌')&&(elem4.textContent == '×'||elem4.textContent == '❌')&&(elem8.textContent == '×'||elem8.textContent == '❌')||
    (elem2.textContent == '×'||elem2.textContent == '❌')&&(elem4.textContent == '×'||elem4.textContent == '❌')&&(elem6.textContent == '×'||elem6.textContent == '❌')

    ){
        let mark = '';

        if(turn % 2 ==  0){
            mark = '○';
        }else{
            mark = '×';
        }
        if(document.getElementById('winMessage').textContent == ''){
            document.getElementById('winMessage').textContent = `${mark}　の勝ちです!!!`;
        }
        
        document.getElementById('restart').textContent = 'もう一度遊ぶ';
    }
}
//ここまで勝利条件&&勝利宣言



//残機の表示


//ゲームのリスタート

document.getElementById('restartBtn').addEventListener('click',function(){
    elem0.textContent = '';
    elem1.textContent = '';
    elem2.textContent = '';
    elem3.textContent = '';
    elem4.textContent = '';
    elem5.textContent = '';
    elem6.textContent = '';
    elem7.textContent = '';
    elem8.textContent = '';
    document.getElementById('restart').textContent = '';
    document.getElementById('winMessage').textContent = '';
    turn = 0;
    document.getElementById('maru').textContent = '◎◎';
    document.getElementById('batu').textContent = '❌❌';
    overWriteMaru = 2;
    overWriteBatu = 2;


})


const remaining = ()=>{
    if(overWriteMaru == 2){
        document.getElementById('maru').textContent = '◎◎';
    }
    if(overWriteMaru == 1){
        document.getElementById('maru').textContent = '◎';
    }
    if(overWriteMaru == 0){
        document.getElementById('maru').textContent = '';
    }
    if(overWriteBatu == 2){
        document.getElementById('batu').textContent = '❌❌';
    }
    if(overWriteBatu == 1){
        document.getElementById('batu').textContent = '❌';
    }
    if(overWriteBatu == 0){
        document.getElementById('batu').textContent = '';
    }
}




elem0.addEventListener('click',function(){
     if(this.textContent == '' && document.getElementById('winMessage').textContent == ''){
        if(turn % 2 == 0){
            this.textContent = "○";
            this.style.color = "black";
        }else{
            this.textContent = "×";
            this.style.color = "red";
        }
        console.log(turn);
    }

    else if(this.textContent == '×' && document.getElementById('winMessage').textContent == ''){
        if(turn % 2 == 0 && overWriteMaru>0){
            this.textContent = "◎";
            this.style.color = "black";
            overWriteMaru--;  
            remaining();
            console.log(turn);  
        }else{
            
        }
        
    }
    
    else if(this.textContent == '○' && document.getElementById('winMessage').textContent == ''){
        if(turn % 2 == 1 && overWriteBatu>0){
            this.textContent = "❌";
            this.style.color = "red";
            overWriteBatu--;
            remaining();
            console.log(turn);
            
        }
    }    
    
    else{
        turn--;
    }
    fin();
    turn++;
    remaining();
})
elem1.addEventListener('click',function(){
     if(this.textContent=='' && document.getElementById('winMessage').textContent == ''){
        if(turn % 2 == 0){
            this.textContent = "○";
            this.style.color = "black";
        }else{
            this.textContent = "×";
            this.style.color = "red";
        }   
        console.log(turn);             
    }
    else if(this.textContent == '×' && document.getElementById('winMessage').textContent == '' && overWriteMaru != 0){
        if(turn % 2 == 0){
            this.textContent = "◎";
            this.style.color = "black";
            overWriteMaru--;  
            remaining();
            console.log(turn);                  
        }
    }            
    else if(this.textContent == '○' && document.getElementById('winMessage').textContent == '' && overWriteBatu != 0){
        if(turn % 2 == 1){
            this.textContent = "❌";
            this.style.color = "red";
            overWriteBatu--;
            remaining();
            console.log(turn);
        }                
    } 
    else{
        turn--;
    }
    fin();
    turn++
})
elem2.addEventListener('click',function(){
     if(this.textContent=='' && document.getElementById('winMessage').textContent == ''){
        if(turn % 2 == 0){
            this.textContent = "○";
            this.style.color = "black";
        }else{
            this.textContent = "×";
            this.style.color = "red";
        }
        console.log(turn);    
        
    }
     else if(this.textContent == '×' && document.getElementById('winMessage').textContent == '' && overWriteMaru != 0){
        if(turn % 2 == 0){
            this.textContent = "◎";
            this.style.color = "black";
            overWriteMaru--;  
            remaining();                  
            console.log(turn);    
        }
    }            
    else if(this.textContent == '○' && document.getElementById('winMessage').textContent == '' && overWriteBatu != 0){
        if(turn % 2 == 1){
            this.textContent = "❌";
            this.style.color = "red";
            overWriteBatu--;
            remaining();
            console.log(turn);                  
        }  
    } 
    else{
        turn--;
    }
    fin();
    turn++
})
elem3.addEventListener('click',function(){
     if(this.textContent=='' && document.getElementById('winMessage').textContent == ''){
        if(turn % 2 == 0){
            this.textContent = "○";
            this.style.color = "black";
        }else{
            this.textContent = "×";
            this.style.color = "red";
        }
        console.log(turn); 
        
    }
     else if(this.textContent == '×' && document.getElementById('winMessage').textContent == '' && overWriteMaru != 0){
        if(turn % 2 == 0){
            this.textContent = "◎";
            this.style.color = "black";
            overWriteMaru--;
            remaining();
            console.log(turn);                     
        }
    }            
    else if(this.textContent == '○' && document.getElementById('winMessage').textContent == '' && overWriteBatu != 0){
        if(turn % 2 == 1){
            this.textContent = "❌";
            this.style.color = "red";
            overWriteBatu--;
            remaining();
            console.log(turn); 
        }                
    } 
    else{
        turn--;
    }
    fin();
    turn++
})
elem4.addEventListener('click',function(){
     if(this.textContent=='' && document.getElementById('winMessage').textContent == ''){
        if(turn % 2 == 0){
            this.textContent = "○";
            this.style.color = "black";
        }else{
            this.textContent = "×";
            this.style.color = "red";
        }
        console.log(turn); 
        
    }
     else if(this.textContent == '×' && document.getElementById('winMessage').textContent == '' && overWriteMaru != 0){
        if(turn % 2 == 0){
            this.textContent = "◎";
            this.style.color = "black";
            overWriteMaru--;
            remaining();
            console.log(turn);                     
        }
    }            
    else if(this.textContent == '○' && document.getElementById('winMessage').textContent == '' && overWriteBatu != 0){
        if(turn % 2 == 1){
            this.textContent = "❌";
            this.style.color = "red";
            overWriteBatu--;
            remaining();
            console.log(turn); 
        }                
    } 
    else{
        turn--;
    }
    fin();
    turn++
})
elem5.addEventListener('click',function(){
     if(this.textContent=='' && document.getElementById('winMessage').textContent == ''){
        if(turn % 2 == 0){
            this.textContent = "○";
            this.style.color = "black";
        }else{
            this.textContent = "×";
            this.style.color = "red";
        }
        console.log(turn); 
        
    }
     else if(this.textContent == '×' && document.getElementById('winMessage').textContent == '' && overWriteMaru != 0){
        if(turn % 2 == 0){
            this.textContent = "◎";
            this.style.color = "black";
            overWriteMaru--;
            remaining();
            console.log(turn);                     
        }
    }            
    else if(this.textContent == '○' && document.getElementById('winMessage').textContent == '' && overWriteBatu != 0){
        if(turn % 2 == 1){
            this.textContent = "❌";
            this.style.color = "red";
            overWriteBatu--;
            remaining();
            console.log(turn); 
        }                
    } 
    else{
        turn--;
    }
    fin();
    turn++
})
elem6.addEventListener('click',function(){
     if(this.textContent=='' && document.getElementById('winMessage').textContent == ''){
        if(turn % 2 == 0){
            this.textContent = "○";
            this.style.color = "black";
        }else{
            this.textContent = "×";
            this.style.color = "red";
        }
        console.log(turn); 
        
    }
    else if(this.textContent == '×' && document.getElementById('winMessage').textContent == '' && overWriteMaru != 0){
        if(turn % 2 == 0){
            this.textContent = "◎";
            this.style.color = "black";
            overWriteMaru--;
            remaining();
            console.log(turn);                     
        }
    }            
    else if(this.textContent == '○' && document.getElementById('winMessage').textContent == '' && overWriteBatu != 0){
        if(turn % 2 == 1){
            this.textContent = "❌";
            this.style.color = "red";
            overWriteBatu--;
            remaining();
            console.log(turn); 
        }                
    } 
    else{
        turn--;
    }
    fin();
    turn++
})
elem7.addEventListener('click',function(){
     if(this.textContent=='' && document.getElementById('winMessage').textContent == ''){
        if(turn % 2 == 0){
            this.textContent = "○";
            this.style.color = "black";
        }else{
            this.textContent = "×";
            this.style.color = "red";
        }
        console.log(turn); 
        
    }
     else if(this.textContent == '×' && document.getElementById('winMessage').textContent == '' && overWriteMaru != 0){
        if(turn % 2 == 0){
            this.textContent = "◎";
            this.style.color = "black";
            overWriteMaru--;
            remaining();
            console.log(turn);                     
        }
    }            
    else if(this.textContent == '○' && document.getElementById('winMessage').textContent == '' && overWriteBatu != 0){
        if(turn % 2 == 1){
            this.textContent = "❌";
            this.style.color = "red";
            overWriteBatu--;
            remaining();
            console.log(turn); 
        }                
    } 
    else{
        turn--;
    }
    fin();
    turn++
})
elem8.addEventListener('click',function(){
     if(this.textContent=='' && document.getElementById('winMessage').textContent == ''){
        if(turn % 2 == 0){
            this.textContent = "○";
            this.style.color = "black";
        }else{
            this.textContent = "×";
            this.style.color = "red";
        }
        console.log(turn); 
        
    }
     else if(this.textContent == '×' && document.getElementById('winMessage').textContent == '' && overWriteMaru != 0){
        if(turn % 2 == 0){
            this.textContent = "◎";
            this.style.color = "black";
            overWriteMaru--;
            remaining();
            console.log(turn);                     
        }
    }            
    else if(this.textContent == '○' && document.getElementById('winMessage').textContent == '' && overWriteBatu != 0){
        if(turn % 2 == 1){
            this.textContent = "❌";
            this.style.color = "red";
            overWriteBatu--;
            remaining();
            console.log(turn); 
        }                
    } 
    else{
        turn--;
    }
    fin();
    turn++
})


