const closee = document.getElementById('close');
closee.addEventListener('click',function(){
    const closecard =document.getElementById('closeCart');
    closecard.style.display ='none';
})


function handleProductChange(product,isIncrease) {
    const productInput =document.getElementById(product + '-Count');
    const productCount = getInputValue(product);
    // const productCount = parseInt(productInput.value);
    // const caseNewCount = cseCount -1;
    let productNewCount = productCount;
    if (isIncrease == true) {
        productNewCount = productCount + 1;
        
    }
    if (isIncrease == false && productCount > 0) {
        productNewCount =  productCount - 1;
        
    }
    productInput.value = productNewCount;
    // const caseTotall = productNewCount * 59;
    let productTotal = 0;
    if (product =='phone') {
        productTotal = productNewCount * 1219;
    }
    if (product == 'case') {
        productTotal = productNewCount * 59;
    }

    document.getElementById(product+'-Total').innerText='$'+productTotal;
    calculateTotal();
     
    }


    function calculateTotal() {
        // phoneCount
        // const phoneInput = document.getElementById('phone-Count');
        // const phoneCount = parseInt(phoneInput.value);

        const phoneCount = getInputValue('phone')
        const caseCount = getInputValue('case');
        // case
        // const caseIput = document.getElementById('case-Count');
        // const caseCount = parseInt(caseIput.value);
        const totalPrice = phoneCount * 1219 + caseCount * 59 ;
        document.getElementById('total-price').innerText = '$' + totalPrice;
        const tax = Math.round(totalPrice * 0.01 );
        document.getElementById('tax-amount').innerText ='$'+tax;

        const granTotal = totalPrice + tax ;
        document.getElementById('gran-total').innerText ='$'+granTotal ;
        
    }
function getInputValue(product) {
    const productInput = document.getElementById(product+'-Count');
    const productCount = parseInt(productInput.value);
    return productCount;
}

const Lesgo = document.getElementById('lesgo');
Lesgo.addEventListener('click',function(){
    const DisplayNone = document.getElementById('displayNone');
    DisplayNone.style.display ='none';
    const desplayBlock = document.getElementById('desplayBlock');
    desplayBlock.style.display ='block';


})

// code start 

// document.getElementById('caseIncrise').addEventListener('click',function(){
//    handleProductChange(true);
// });

// caseDerease

// document.getElementById('caseDerease').addEventListener('click',function(){
//     handleProductChange(false);

//  })

//  function handleProductChange(isIncrease) {
//     const caseInput =document.getElementById('cseCount');
//     const cseCount = parseInt(caseInput.value);
//     // const caseNewCount = cseCount -1;
//     let caseNewCount = cseCount;
//     if (isIncrease == true) {
//         caseNewCount = cseCount + 1;
        
//     }
//     if (isIncrease == false && cseCount > 0) {
//         caseNewCount =  cseCount - 1;
        
//     }
//     caseInput.value = caseNewCount;
//     const caseTotall = caseNewCount * 59;
//      document.getElementById('caseTotal').innerText='$'+caseTotall;
//     };

//     function handlePhoneChange(isIncrease){
//         const phoneInput = document.getElementById('phoneCount');
//         const phoneCount = parseInt(phoneInput.value);
//         let phoneNewCount = phoneCount;
//         if (isIncrease == true) {
//             phoneNewCount = phoneCount + 1;
//         }
//         if (isIncrease == false && phoneCount > 0) {
//             phoneNewCount = phoneCount - 1;
//         }
//         phoneInput.value = phoneNewCount;
//         const phoneTotal = phoneNewCount * 1219;
//         document.getElementById('phoneTotal').innerText='$'+phoneTotal;
//     }





// iPhone 11 Silicone Case Start here - Black

// const closee = document.getElementById('close');
// closee.addEventListener('click',function(){
//     const closecard =document.getElementById('closecard');
//     closecard.style.display ='none';
// })

// // code start 

// document.getElementById('caseIncrise').addEventListener('click',function(){
//    const caseInput = document.getElementById('cseCount');
//    const cseCount = parseInt(caseInput.value);
//    const caseNewCount = cseCount +1;
//    caseInput.value = caseNewCount;
//    const caseTotall = caseNewCount * 59;
//     document.getElementById('caseTotal').innerText ='$'+ caseTotall;
// });

// // caseDerease

// document.getElementById('caseDerease').addEventListener('click',function(){
//     const caseInput =document.getElementById('cseCount');
//     const cseCount = parseInt(caseInput.value);
//     const caseNewCount = cseCount -1;
//     caseInput.value = caseNewCount;
//     const caseTotall = caseNewCount * 59;
//      document.getElementById('caseTotal').innerText='$'+caseTotall;
//  })

 // !iPhone 11 Silicone Case - Black End here
 

  // iPhone 11 Siliconeck  Start here 

// document.getElementById('phoneIncrease').addEventListener('click',function(){
//     const phoneInput = document.getElementById('phoneCount');
//     const phoneCount = parseInt(phoneInput.value);
//     const phoneNewCount = phoneCount +1;
//     phoneInput.value = phoneNewCount;
//     const phoneTotal = phoneNewCount * 1219; 
//     document.getElementById('phoneTotal').innerText='$'+ phoneTotal;
      
// })
// document.getElementById('phoneDecrease').addEventListener('click',function(){
//     const phoneInput = document.getElementById('phoneCount');
//     const phoneCount = parseInt(phoneInput.value);
//     const phoneNewCount = phoneCount -1;
//     phoneInput.value = phoneNewCount;
//     const phoneTotal = phoneNewCount * 1219;
//     document.getElementById('phoneTotal').innerText='$'+ phoneTotal;

// })
 // !iPhone 11 Silicone  End here

