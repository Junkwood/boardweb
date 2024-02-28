/**
 * userList.js
 */
console.log('userList.js');
let str = `[{"id":1,"first_name":"Berri","last_name":"Trotton","email":"btrotton0@reddit.com","gender":"Female","salary":3060},
{"id":2,"first_name":"Farlie","last_name":"Gaitley","email":"fgaitley1@japanpost.jp","gender":"Male","salary":4075},
{"id":3,"first_name":"Dawna","last_name":"Biswell","email":"dbiswell2@drupal.org","gender":"Female","salary":3186},
{"id":4,"first_name":"Odille","last_name":"Ianno","email":"oianno3@bigcartel.com","gender":"Female","salary":3972},
{"id":5,"first_name":"Bent","last_name":"Treweke","email":"btreweke4@ca.gov","gender":"Male","salary":2590},
{"id":6,"first_name":"Riordan","last_name":"Astley","email":"rastley5@businesswire.com","gender":"Male","salary":4997},
{"id":7,"first_name":"Cristine","last_name":"Bowich","email":"cbowich6@1und1.de","gender":"Female","salary":4241},
{"id":8,"first_name":"Viva","last_name":"Itzhaiek","email":"vitzhaiek7@msn.com","gender":"Female","salary":4141},
{"id":9,"first_name":"Eimile","last_name":"Gindghill","email":"egindghill8@archive.org","gender":"Female","salary":4295},
{"id":10,"first_name":"Gerik","last_name":"Probert","email":"gprobert9@delicious.com","gender":"Male","salary":2201},
{"id":11,"first_name":"Ber","last_name":"McKerrow","email":"bmckerrowa@sohu.com","gender":"Male","salary":2843},
{"id":12,"first_name":"Franny","last_name":"Hanway","email":"fhanwayb@washingtonpost.com","gender":"Female","salary":3587},
{"id":13,"first_name":"Ingeberg","last_name":"Colvill","email":"icolvillc@wikipedia.org","gender":"Female","salary":3525},
{"id":14,"first_name":"Barrie","last_name":"Marousek","email":"bmarousekd@ameblo.jp","gender":"Male","salary":2533},
{"id":15,"first_name":"Annice","last_name":"Housaman","email":"ahousamane@fotki.com","gender":"Female","salary":4750}]`;

let json = JSON.parse(str);//문자열을 object타입으로 변환.

document.addEventListener('DOMContentLoaded', function(e) {
	document.querySelector('#name').value = '홍길동';
	//thead생성
	let title = json[0];
	let tr = document.createElement('tr');
	for (let prop in title) {
		let th = document.createElement('th');
		th.innerText = prop;
		tr.appendChild(th);
	}
	document.querySelector('#tableList thead').appendChild(tr);
	//tbody영역
	json.forEach(function(item, idx) {
		//console.log(item, idx);//item=>{}
			let tr = document.createElement('tr');
			for (let prop in item) {
				let td = document.createElement('td');
				td.innerText = item[prop];
				tr.appendChild(td);
			};
	document.querySelector('#genderList').addEventListener('change',gender)
			document.querySelector('#tableList tbody').appendChild(tr);
		
		function gender(e) {
			document.querySelector('#tableList tbody').innerHTML = '';
			if (item.gender == "Female") {
				let tr = document.createElement('tr');
				for (let prop in item) {
					let td = document.createElement('td');
					td.innerText = item[prop];
					tr.appendChild(td);
				};
				document.querySelector('#tableList tbody').appendChild(tr);
			}
			if(this.value == "Male"){
				
			}
		}
	});//end  of foreach

});//DOMContentLoaded : 페이지가 모두 로딩이 되었을때 이벤트 발생.