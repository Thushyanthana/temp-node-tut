//File system
const{readFileSync,writeFileSync}=require('fs');

console.log('Start')
const first=readFileSync('./content/first.txt/','utf8')
const second=readFileSync('./content/second.txt/','utf8')
console.log(first)
console.log(second)
console.log(first,second)

//write a file , value ,object ,flag is a property
writeFileSync('./content/Result.txt/','Here is my result : ',{flag:'a'})

console.log('Done with next task')
console.log('Starting with next one')