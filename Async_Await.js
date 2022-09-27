//Async JS Programming

//Callbacks, Promises, Async & Await
/*
const datas=[
{name: "Shiv",Profession: "Software Engineer"},
{name: "Shivjha",Profession: "Software Engineer"}

];


function getDatas()
{
setTimeout(() => {
	let output="";
	datas.forEach((data,index)=> {
	output+=	`<li>${data.name}</li>`;
		
	})
	document.body.innerHTML=output
}, 5000);
	
}

function createdata(newdata)
{
setTimeout(() => {
	
	datas.push(newdata);
}, 2000);
	
	
}
getDatas();
createdata({name:"Shivaa",Profession:"Sooooftware Engineer"})
*/

//callback
/*
const datas=[
{name: "Shiv",Profession: "Software Engineer"},
{name: "Shivjha",Profession: "Software Engineer"}

];


function getDatas()
{
setTimeout(() => {
	let output="";
	datas.forEach((data,index)=> {
	output+=	`<li>${data.name}</li>`;
		
	})
	document.body.innerHTML=output
}, 1000);
	
}

function createdata(newdata,callback)
{
setTimeout(() => {
	
	datas.push(newdata);
	callback();
}, 2000);
	
	
}

createdata({name:"Shivaa",Profession:"Sooooftware Engineer"},getDatas)
*/


//Promises with False condition
/*
const datas=[
{name: "Shiv",Profession: "Software Engineer"},
{name: "Shivjha",Profession: "Software Engineer"}

];


function getDatas()
{
setTimeout(() => {
	let output="";
	datas.forEach((data,index)=> {
	output+=	`<li>${data.name}</li>`;
		
	})
	document.body.innerHTML=output
}, 1000);
	
}

function createdata(newdata)
{
	
return new Promise((resolve,reject)=>{
	setTimeout(() => {
	
	datas.push(newdata);
	let error=false;
	if(!error){
		resolve();
		
	}else{reject("kuch shi nhi hi !!!!")}
	
	
	
}, 2000);
	
	
})
	

	
	
}

createdata({name:"Shivaa",Profession:"Sooooftware Engineer"}).then(getDatas)
*/
/*
//Promises with true condition
const datas=[
{name: "Shiv",Profession: "Software Engineer"},
{name: "Shivjha",Profession: "Software Engineer"}

];


function getDatas()
{
setTimeout(() => {
	let output="";
	datas.forEach((data,index)=> {
	output+=	`<li>${data.name}</li>`;
		
	})
	document.body.innerHTML=output
}, 1000);
	
}

function createdata(newdata)
{
	
return new Promise((resolve,reject)=>{
	setTimeout(() => {
	
	datas.push(newdata);
	let error=true;
	if(!error){
		resolve();
		
	}else{reject("kuch shi nhi hi !!!!")}
	
	
	
}, 2000);
	
	
})
	

	
	
}

createdata({name:"Shivaa",Profession:"Sooooftware Engineer"}).then(getDatas).catch(err => console.log(err))

*/

//Async & Await
const datas=[
{name: "Shiv",Profession: "Software Engineer"},
{name: "Shivjha",Profession: "Software Engineer"}

];


function getDatas()
{
setTimeout(() => {
	let output="";
	datas.forEach((data,index)=> {
	output+=	`<li>${data.name}</li>`;
		
	})
	document.body.innerHTML=output
}, 1000);
	
}

function createdata(newdata)
{
	
return new Promise((resolve,reject)=>{
	setTimeout(() => {
	
	datas.push(newdata);
	let error=false;
	if(!error){
		resolve();
		
	}else{reject("kuch shi nhi hi !!!!")}
	
	
	
}, 2000);
	
	
})
	

	
	
}
/*
createdata({name:"Shivaa",Profession:"Sooooftware Engineer"}).then(getDatas).catch(err => console.log(err))
*/


async function start(){
	
	await createdata({name:"hhhhh",Profession:"fgfgfgfgfgfg" })
	getDatas();
}
start();


