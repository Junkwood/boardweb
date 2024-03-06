/**
 * center.js
 */
console.log('center.js');

let url = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=s9yJh8S9jfsEBDbnkedyTAz%2BWaP%2F2WTvWloBP8YgAPTSJxc3t4ieqd8xf1MifgPwChNTgM47j6Q%2F2UHsfbBvcQ%3D%3D';

let showFields = ['id', 'centerName', 'phoneNumber', 'sido']
let tbody = document.querySelector('#list');
let searchSido = document.querySelector('#searchSido');
let centerList = [];
function makeRow(center = {}) {
	let tr = document.createElement('tr');
	tr.addEventListener('click',function(e){
		//location.href='map.jsp?lat='+center.lat+'&lng='+center.lng
		window.open('map.jsp?lat='+center.lat+'&lng='+center.lng+'&cname='+center.centerName)
	})
	let showFields = ['id', 'centerName', 'phoneNumber', 'sido']
	showFields.forEach(field => {
		let td = document.createElement('td');
		if (field == 'centerName') {
			td.innerText = center[field].substring('코로나19 '.length);
		} else {
			td.innerText = center[field]
		}
		tr.append(td);
	})
	return tr;
}

fetch(url).then(resolve => resolve.json())
	.then(result => {
		let opt = document.createElement('option')
			opt.innerText = '전체';
			searchSido.append(opt)
		centerList = result.data
		let filterAry = [];
		result.data.forEach(center => {
			tbody.append(makeRow(center))
			if (filterAry.indexOf(center.sido) == -1) {
				filterAry.push(center.sido);
			}
		})
		filterAry.forEach(sido => {
			let opt = document.createElement('option')
			opt.innerText = sido;
			searchSido.append(opt)
		})
		
	}).catch(err => {
		console.log(err => err)
	})




/*
fetch(url)
	.then(resolve => resolve.json())
	.then(result => {
		ceterList=result.data;
		//console.log(result.data[0]);
		result.data.forEach(center => {
			let tr = document.createElement('tr');
			showFields.forEach(field => {
				let td = document.createElement('td');
				if (field == 'centerName') {
					td.innerText = center[field].substring('코로나19 '.length);
				} else {
					if (field == 'sido') {

					}
					td.innerText = center[field]
				}
				tr.append(td);
			})
			tbody.append(tr);
		})
	})
	.catch(err => console.log(err));
*/

//조회이벤트 처리
/*
document.querySelector('#searchBtn').addEventListener('click', searchFnc);
function searchFnc(e) {
	tbody.innerHTML = '';
	let search = document.querySelector('#keyword').value;
	fetch(url)
		.then(resolve => resolve.json())
		.then(result => {
			//console.log(result.data[0]);
			result.data.forEach(center => {
				if (center['sido'] == search) {
					let tr = document.createElement('tr');
					showFields.forEach(field => {
						let td = document.createElement('td');
						if (field == 'centerName') {
							td.innerText = center[field].substring('코로나19 '.length);
						} else {
							td.innerText = center[field]
						}
						tr.append(td);
					})
					tbody.append(tr);
				}


			})
		})
		.catch(err => console.log(err));
}
*/
//조회버튼 클릭시 입력값(keyword)와 비교해서 동일한 시도 정보만 출력
/*document.querySelector('#searchBtn').addEventListener('click', function(e) {
	tbody.innerHTML = '';
	let kw = document.querySelector('#keyword').value;
	centerList.filter(center => center.sido == kw)
		.forEach(center => tbody.append(makeRow(center))
		)
})*/
//조회버튼 클릭 또는 enter 입력시 입력값(keyword)와 비교해서 동일한 시도 정보만 출력
document.querySelector('#keyword').addEventListener('change', function(e) {
	tbody.innerHTML = '';
	let kw = document.querySelector('#keyword').value;
	centerList.filter(center => center.sido.indexOf(kw)>=0)
	.forEach(center => tbody.append(makeRow(center))
		)
})
//시도 목록이 변경되면 동일한 시도정보만 출력
document.querySelector('#searchSido').addEventListener('change', function(e) {
	tbody.innerHTML = '';
	let kw = this.value;
	if(kw=='전체'){
		centerList.forEach(center=>tbody.append(makeRow(center)))
	}
	centerList.filter(center => center.sido == kw)
		.forEach(center => tbody.append(makeRow(center))
		)
})
//json전송 db입력기능
document.getElementById('registerData').addEventListener('click',function(e){
	//console.log(centerList)
	fetch('../registerCenter.do',{
		method:'post',
		headers:{
			'Content-Type' : 'application/json'
		},
		body:JSON.stringify(centerList)
	})
	.then(resolve=>resolve.text())
	.then(result=>console.log(result))
	.catch(err=>console.log(err))
	
})
