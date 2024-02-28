/**vscode 서블릿
 * script.js
 */
console.log("script.js");
console.log(document);

document.querySelector('button.btn').addEventListener('click',clickFnc);//button태그를 찾아오는데 btn태그를 가진 button을 찾음.
function clickFnc(e){//e는 이벤트이며 변수임)
	console.log(e);	
	let userValue = document.querySelector('input#name').value;
	let liTag = document.createElement('li');
	let btn = document.createElement('button');
	btn.innerText = "삭제";
	liTag.innerText=userValue + ' ';
	liTag.append(btn);
	document.querySelector('#list').appendChild(liTag);//append나 appendChild나 정상작동하나 appendChild가 더 명확한 표현임.
	//init.
	document.querySelector('#name').value = '';
};

function makeTr(){
	//tr생성
	for(let student of str){
		
	
	document.querySelector('#studList').appendChild(makeRow(student));//<tr><td>${student[prop]}</td><td>${student[prop]}</td><td>${student[prop]}</td></tr>
		
	};
};
makeTr();
document.querySelector('#addBtn').addEventListener('click',addRow);

function addRow(){
	let sno, sname, score;
	sno = document.querySelector('#sno').value
	sname = document.querySelector('#sname').value
	score = document.querySelector('#score').value
	if(!sno||!sname||!score){//값이 없으면 false 있으면 true로 취급함.
		alert('빈값을 채워주세요.');
		return;
	}
	let obj = {sno,sname,score};
	document.querySelector('#studList').appendChild(makeRow(obj));
	//document.querySelector('#sno').value='';
	//document.querySelector('#sname').value='';
	//document.querySelector('#score').value='';
	document.querySelectorAll('#studlist input').forEach(function(item,idx,ary){item.value='';});
}
function makeRow(student={sno:1,sname:'test',score:90}){
	let Tr = document.createElement('tr');
	Tr.addEventListener('click',displayRow,false)
	for(let prop in student){
			let Td=document.createElement('td');//<td></td>
			Td.innerText=student[prop];//<td>${student[prop]}</td>
			Tr.appendChild(Td);//<tr><td>${student[prop]}</td></tr>
		};
        let btn = document.createElement('button');
        btn.addEventListener('click',deleteRow, false);
		btn.innerText = "삭제";
		let td=document.createElement('td')
		td.appendChild(btn);
		Tr.appendChild(td);
	return Tr
}
function deleteRow(e){
	e.stopPropagation();//하->상위 이벤트 전파 차단. stopPropagation은 이벤트 전파를 더이상 하지 않는다는 의미의 구문임.
	e.target.parentElement.parentElement.remove();
}
function displayRow(e){
	//console.log(e.target, this);
	document.querySelector('#sno').value = this.children[0].innerText;
	document.querySelector('#sname').value = this.children[1].innerText;
	document.querySelector('#score').value = this.children[2].innerText;
}
document.querySelector('#editBtn').addEventListener('click',editRow);
function editRow(e){
	let list = document.querySelectorAll('#studList tr');
	for(let std of list){
		if(std.children[0].innerText == document.querySelector('#sno').value){
			std.children[2].innerText=document.querySelector('#score').value ;
			std.children[1].innerText=document.querySelector('#sname').value;
		}
	}
}