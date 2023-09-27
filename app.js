const numbers=[1,3,5,6,4,3,8]

function run(){
    for(let i=0; i<numbers.length; i++){
          for(j=i+1; j < numbers.length; j++){
            if(i<=j){
                let temp;
                temp=i
                i=j
                j=temp
            }
          }
    }

    console.log(numbers)
}

run()