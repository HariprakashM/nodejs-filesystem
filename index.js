const fs=require('fs');
let today=new Date();
let time=today.toLocaleTimeString('en-US');
let date=today.toLocaleDateString('it-IT');
let storeData=(fileName,cont)=>{
    data=`${cont}\n`;
    fs.appendFile(fileName,data,(err)=>{
        if(err) throw err;
        console.log('Data is stored');
    });
}

storeData(`.//collection/Timestamp.txt`,`${time}  ${date}`);


