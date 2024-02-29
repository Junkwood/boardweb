/**
 * userService.js
 */
function filterList() {
	let gender=this.value;
	
	document.querySelector('#tableList tbody').innerHTML = '';//tbody 비우기.
	
	json.filter(function(item) {
		return item.gender == gender || gender == 'All';
	}).forEach(function(item) {
		document.querySelector('#tableList tbody').appendChild(makeRow(item));
	})
}
function reduceList(){
	let gender = this.value;
	let tbody = document.querySelector('tobdy');
	
	
	json.reduce((acc,item)=>{
		if(item.gender==gender){
			console.log(item)
			let tr = makeRow(item);
			tbody.appendChild(tr)
		}
		return acc;
	}, tbody)
}
document.addEventListener('DOMContentLoaded', function(e) {
	console.clear();
	console.log('userService.js')
	//forEach()=>반환값이 없음.
	let fAry = json.filter(function(item, idx, ary) {
		return (item.gender == 'Male');
	});//.filter()는 새로운 배열로 값을 반환함.return에 조건을 주면 해당 조건이 참인값만 반환, true를 넣으면 전체값을 배열로 반환.
	
	//map() 은 참조값을 반환 A->A'
	let mAry=fAry.map(item=>
				{return {id:item.id, name:item.first_name+'-'+item.last_name,salary:item.salary}}
				);
	console.log(mAry);
	//reduce()=>새로운 값을 생성
	//json.reduce();
	let result = [1,3,2,4,5].reduce((acc,item,idx,ary)=>{
		console.log(acc,item,idx);
		acc.push(item*2)
		return acc;
	},[]);//reduce(a,b)b는 초기값
	result = json.reduce((acc,item,idx)=>{
		if(item.gender=='Male'){
			acc.push(item);
		};
		return acc;
	}, []);
	console.log(result)
})//end of DOMContentLoaded