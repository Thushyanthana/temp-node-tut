//It is a good method
const{readFile,writeFile}=require('fs')


console.log('Start')
readFile('./content/first.txt','utf8',(err,result)=>
{
if(err)
{
console.log(err)
return
}

const first=result
readFile('./content/second.txt','utf-8',()=>{
    if(err)
    {
console.log(err)
return
    }


const second=result
writeFile('./content/Result.txt','Hello this is write file example',(err,result)=>{
    if(err)
    {
console.log(err)
return
    }
    console.log('Done with this task')
})
})
})
console.log('Starting with task')

