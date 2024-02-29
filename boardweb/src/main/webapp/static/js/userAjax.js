/**
 *userAjax.js 
 */

console.log('userAjax.js')
document.addEventListener('DOMContentLoaded', function(e) {
	//등록 이벤트(click)
	document.getElementById('addBtn').addEventListener('click', function(e) {
		//서블릿 호출, 화면 제어.
		let bookCode = document.getElementById('bcode').value;
		let bname = document.getElementById('bname').value;
		let author = document.getElementById('bauth').value;
		let press = document.getElementById('bpress').value;
		let price = document.getElementById('bprice').value;
		let obj = { bookCode, bname, author, press, price };
		const addAjax = new XMLHttpRequest();
		//addAjax.open('get','addBook.do?bcode='+bcode+'&bname='+bname+'&bauth='+author+'&bpress='+press+'&bprice='+price);
		addAjax.open('post', 'addBook.do');
		addAjax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		addAjax.send('bcode=' + bookCode + '&bname=' + bname + '&bauth=' + author + '&bpress=' + press + '&bprice=' + price);
		addAjax.onload = function(e) {
			let result = JSON.parse(addAjax.responseText)
			console.log(result)
			if (result.retCode == 'OK') {
				document.querySelector('#show tbody').appendChild(makeRow(obj));
			} else if (result.retCode == 'NG') {
				alert('처리중 에러.');
			}
		};
	});


	//Asynchronous JAvascript and Xml : AJAX
	let json = "";
	const xhtp = new XMLHttpRequest();
	xhtp.open('get', 'bookList.do');
	xhtp.send();
	xhtp.onload = function(e) {
		json = JSON.parse(xhtp.responseText);
		console.log('onload', json);
		//타이틀.
		let title = ['도서코드','도서명','저자','출판사','가격'];
		let tr = document.createElement('tr');
		for (let prop of title) {
			let th = document.createElement('th');
			th.innerText = prop;
			tr.appendChild(th);
		};
		let th = document.createElement('th');
		th.innerText = '삭제';
		tr.appendChild(th)
		document.querySelector('#tableList thead').appendChild(tr);
		//데이터.
		json.reduce((acc, item) => {
			acc.appendChild(makeRow(item));
			return acc;
		}, document.querySelector('#show tbody'));


	}//end of onload
});//end of DOMContentLoaded.
function makeRow(obj) {
	let tr = document.createElement('tr');
	tr.setAttribute('id', 'book_' + obj.bookCode);
	tr.setAttribute('data-code', obj.bookCode);
	for (let prop in obj) {
		let td = document.createElement('td');
		td.innerText = obj[prop];
		tr.appendChild(td);
	};
	//삭제버튼.
	let btn = document.createElement('button');
	btn.addEventListener('click', deleteRow, true);
	btn.innerText = "삭제";
	btn.setAttribute('class', 'btn btn-danger')
	let td = document.createElement('td')
	td.appendChild(btn);
	tr.appendChild(td);
	return tr;
}//end of makeRow

//삭제함수.
function deleteRow(e) {
	let tr = this.parentElement.parentElement;
	let bcode = tr.dataset.code;
	const delAjax = new XMLHttpRequest();
	delAjax.open('post', 'removeBook.do')
	delAjax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	delAjax.send('bcode=' + bcode);
			delAjax.onload = function(e) {
			console.log(delAjax.responseText)
			let result = JSON.parse(delAjax.responseText)
			console.log(result)
			if (result.retCode == 'OK') {
				tr.remove();
			} else if (result.retCode == 'NG') {
				alert('처리중 에러.');
			}
		};
	
};