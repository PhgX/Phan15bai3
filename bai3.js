// function alertMessage(){
//     alert("Xinchao");
// }

// function sum(){
//     let a = +prompt("Nhập tham số a");
//     let b = +prompt("Nhập tham số b");
//     let sum;
//     if (a > b){
//         alert("Nhập lại");
//     } else {
//         sum = a + b;
//         alert("Tổng 2 số là "+ sum);
//     }
// }

// function addNumbers() {
//     firstNum = 4;
//     secondNum = 8;
//     result = firstNum + secondNum;    
//     return result;    
// }
// result = 0;
// alert(result); 
// result = addNumbers();
// alert(result);

let stars = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
let stars_ = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"]
let str;
function find_star(){
    str = prompt("Nhập tên sao");
    for (let i = 0; i < stars.length; i++){
        if (stars[i] === str){
            alert(stars_[i]);
            break;
        } else {
            alert("Sao không thấy trên trời");                  
        }
    }
}
