
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
    Test1(true).then((res)=>console.log("Test 1 : ", res)).catch(err => console.log("Test 1 : ", err))
    Test1(false).then((res)=>console.log("Test 2 : ", res)).catch(err => console.log("Test 2 : ", err))
    Test1(true).then((res)=>console.log("Test 3 : ", res)).catch(err => console.log("Test 3 : ", err))
}

CollabTest()