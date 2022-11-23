
const Test1 = (Vals:boolean) => {
    return new Promise((res,rej)=>{
        if(Vals){
            setTimeout(()=>{
                res("Passed")
            },1200)
        }else{
            setTimeout(()=>{
                rej("Failed")
            },600)
        }
    })
}

const Test2 = (Vals:boolean) => {
    return new Promise((res,rej)=>{
        if(Vals){
            setTimeout(()=>{
                res("Passed")
            },3200)
        }else{
            setTimeout(()=>{
                rej("Failed")
            },2300)
        }
    })
}

const Test3 = (Vals:boolean) => {
    return new Promise((res,rej)=>{
        if(Vals){
            setTimeout(()=>{
                res("Passed")
            },1700)
        }else{
            setTimeout(()=>{
                rej("Failed")
            },1200)
        }
    })
}

async function CollabTest(){
    console.log("Test1 : ",Test1(true))
    console.log("Test2 : ",Test2(false))
    console.log("Test3 : ",Test3(true))
}

CollabTest()