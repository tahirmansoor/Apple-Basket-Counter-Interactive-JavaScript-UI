     const firstbasket1Count = document.querySelector(".basketOne span");
          const secondbasket1Count = document.querySelector(".basketwo span");
         let leftArrow = document.querySelector(".left_arrow");
         let rightArrow = document.querySelector(".right_arrow");
         
         let totalApple = 10;
         let secondBasketAppleCount = 0
         let firstBasketAppleCount = totalApple - secondBasketAppleCount;
         
         firstbasket1Count.innerText =  firstBasketAppleCount;
         secondbasket1Count.innerText =  secondBasketAppleCount;
         
         
        rightArrow.addEventListener('click', ()=>{
             if(firstBasketAppleCount > 0){
                  firstBasketAppleCount --        
                 firstbasket1Count.innerText =  firstBasketAppleCount;
                 secondBasketAppleCount ++
                 secondbasket1Count.innerText =  secondBasketAppleCount;
             }         
         })
        leftArrow.addEventListener('click', ()=>{
             if(secondBasketAppleCount > 0){
                  firstBasketAppleCount ++
                 firstbasket1Count.innerText =  firstBasketAppleCount;
                 secondBasketAppleCount --
                 secondbasket1Count.innerText =  secondBasketAppleCount;
             }         
         })                
           // Remove Duplicate
            //  let num = [1,2,3,4,5,6,7,8,8,8];
            //  let uniqnum =[...new Set(num)];             
            //  console.log(uniqnum)
         
         // ====================================== 
         
         // BIND
        // let person1 ={
        // name: "Tahir",
        // greetFunc: function(){
        // console.log("Umer your father name is" + " " + this.name)
        // }
        // };        
        // let boundGreet = person1.greetFunc.bind(person1);
        // boundGreet()         