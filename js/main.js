const minusBtn = document.getElementById('btn-minus');
const addBtn = document.getElementById('btn-add');
const counterText = document.getElementById('counter-number');

let num = 0;


function add(){
    num= num + 1;
    updateCounter(num);
}

function sub(){
    if (num > 0){
        num = num - 1;
    }
    updateCounter(num);
}

function Arthemetic(type){
    if (type == 'add'){
        add();
    }

    
    if (type == 'sub'){
        sub()
    }

}

function updateCounter(number){
    counterText.textContent = number;

}

minusBtn.addEventListener('click',()=> {
    Arthemetic('sub');

})

addBtn.addEventListener('click',()=> {
    Arthemetic('add');
})

