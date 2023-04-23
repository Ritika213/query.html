var header=document.querySelector('#main-header')
header.style.borderBottom='solid 4px #ccc';

var SecondItem=document.querySelector('.list-group-item :nth-child(2)');
SecondItem.style.color='green';

var titles=document.querySelectorAll('.titles');
console.log(titles);

var odd=document.querySelectorAll('.li:nth-child(odd');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}