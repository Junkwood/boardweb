/**
 * center.js
 */
console.log('center.js');

let url = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=s9yJh8S9jfsEBDbnkedyTAz%2BWaP%2F2WTvWloBP8YgAPTSJxc3t4ieqd8xf1MifgPwChNTgM47j6Q%2F2UHsfbBvcQ%3D%3D';

let showFields = ['id', 'centerName', 'phoneNumber', 'sido']
let tbody = document.querySelector('#list');
fetch(url)
	.then(resolve => resolve.json())
	.then(result => {
		//console.log(result.data[0]);
		result.data.forEach(center => {
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
		})
	})
	.catch(err => console.log(err));

//조회이벤트 처리
document.querySelector('#searchBtn').addEventListener('click', searchFnc);
function searchFnc(e) {
	tbody.remove();
	tbody = document.createElement('tbody');
	tbody.setAttribute('id','list'); 
	document.querySelector('table').append(tbody)
	let search=document.querySelector('#keyword').value;
	fetch(url)
		.then(resolve => resolve.json())
		.then(result => {
			//console.log(result.data[0]);
			result.data.forEach(center => {
				if(center['sido']==search){
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