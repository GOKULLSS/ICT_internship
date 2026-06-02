let prime=(n)=>{
     for(let i=2;i<n;i++){
        var flag=0;
        if(n%i==0){
            var flag =1;
            break;
        }
     }
     if(flag==0){
        console.log("this is a prime no")
     }else{
        console.log("this is not a prime no")
     }

}
prime(6)