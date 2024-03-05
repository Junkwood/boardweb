/**
 * boardService.js
 */
//pagination>a 클릭이벤트
let page = 1;
function pagingFunc(){
	

document.querySelectorAll('.pagination>a')//NodeList
.forEach(item=>{
	item.addEventListener('click',function(e){
		e.preventDefault();
		page=item.dataset.page;

		replyList(page);
		pageList();
	})
});
};
//등록이벤트
document.querySelector('.addReply').addEventListener('click',addReplyFnc);
function addReplyFnc(e){
	let reply = document.querySelector('input[name="reply"]').value;
	if(!reply){
		alert('댓글입력하세요.')
		return;
	}
	if(!replyer){
		alert('로그인이 필요합니다.')
		return;
	}
	fetch('addReply.do',{
		method:'post',
		headers :{
			'Content-Type' : 'application/x-www-form-urlencoded'
		},
		body : 'bno='+bno+'&reply='+reply+'&replyer='+replyer
	}).then(resolve=>resolve.json())
	.then(result=>{
		if(result.retCode=='OK'){
			alert('등록성공');
			fetch('getTotal.do?bno='+bno,{
				method:'get'
			})
			.then(resolve=>resolve.json())
			.then(result=>{
				let totalCnts=result.totalCount;
				let realend=Math.ceil(totalCnts/5);
				page=realend
				replyList(page);
			})
			pageList();
			document.querySelector('#reply').value='';
		}else{
			alert('등록실패');
		}
	})

	
}
//댓글목록
function makeRow(obj={}){
	let fields = ['replyNo','reply','replyer'];
	let liTag = document.createElement('li');
	liTag.setAttribute('data-rno',obj.replyNo)
	fields.forEach(prop => {
		let span=document.createElement('span');
		span.innerText=obj[prop];
		if(prop=='reply'){
			span.className = 'col-sm-5';
		}else{
			span.className = 'col-sm-2';
		}
		liTag.appendChild(span);
	});
	let span=document.createElement('span');
	span.className = 'col-sm-2';
	let btn=document.createElement('button');
	btn.addEventListener('click',deleteRow);
	btn.setAttribute('class','btn btn-danger')
	btn.innerText='삭제';
	span.appendChild(btn);
	liTag.appendChild(span);
	return liTag;
}
function makeRow2(obj = {}){
	let clon=document.querySelector('.content>ul>li:nth-of-type(1)').cloneNode(true);
	console.log(clon)
	clon.setAttribute('data-rno',obj.replyNo);
	clon.querySelector('span:nth-of-type(1)').innerText = obj.replyNo;
	clon.querySelector('span:nth-of-type(2)').innerText = obj.reply;
	clon.querySelector('span:nth-of-type(3)').innerText = obj.replyer;
	//삭제버튼
	let btn=document.createElement('button');
	btn.addEventListener('click',deleteRow);
	btn.setAttribute('class','btn btn-danger')
	btn.innerText='삭제';
	clon.querySelector('span:nth-of-type(4)').innerText='';
	clon.querySelector('span:nth-of-type(4)').appendChild(btn);
	return clon;
}
//삭제함수
function deleteRow(e){
	let rno=this.parentElement.parentElement.dataset.rno;
	let li = this.parentElement.parentElement;
	let user = this.parentElement.previousElementSibling.innerText;
	console.dir(this.parentElement)//console.dir하면 js 전체표현 볼 수 있음.
	if(user != replyer){
		alert('삭제권한이 없습니다!')
		return;
	}
	
fetch('removeReply.do',{
			method : 'post',
			headers : {
				'Content-Type' : 'application/x-www-form-urlencoded'
			},
			body : 'rno='+rno
		})
		.then(resolve=>resolve.json())
		.then(result=>{
			if(result.retCode=='OK'){
				alert(result.retMsg)
				replyList(page);
				pageList();
			}else{
				alert(result.retMsg)
			}
		})
		.catch(err=>console.log(err));
} 
//목록함수
function replyList(rpage = 1){
	fetch('replyList.do?bno='+bno+'&page='+rpage,{
		method : 'get'
	})
	.then(resolve=>resolve.json())
	.then(result=>{
		document.querySelectorAll('li[data-rno]').forEach(item=>item.remove());
		result.forEach(item=>{
			document.querySelector('.reply ul').appendChild(makeRow2(item));
		});
	})

	
}
replyList();
//페이징목록.
function pageList(){
	fetch('getTotal.do?bno='+bno,{
		method:'get'
	}).then(resolve=>resolve.json())
	.then(result=>{
		document.querySelector('div.pagination').innerHTML='';
		let totalCnt=result.totalCount;
		let startPage, endPage;
		let next,prev;
		let realEnd=Math.ceil(totalCnt/5);
		endPage=Math.ceil(page/5)*5;
		startPage = endPage-4;
		endPage = endPage>realEnd? realEnd:endPage;
		next = endPage<realEnd ? true : false;
		prev = startPage>1;
		if(prev){
			let aTag=document.createElement('a');
			aTag.innerHTML='&laquo;';
			aTag.setAttribute('data-page',startPage-1);
			aTag.href='#';
			document.querySelector('div.pagination').appendChild(aTag);
		}
		for(let p = startPage; p<=endPage;p++){
			let aTag=document.createElement('a');
			aTag.innerText=p;
			aTag.setAttribute('data-page',p)
			aTag.href='#';
			if(p==page){
				aTag.className = 'active';
			}
			document.querySelector('div.pagination').appendChild(aTag);
		}
		if(next){
			let aTag=document.createElement('a');
			aTag.innerHTML='&raquo;';
			aTag.setAttribute('data-page',endPage+1)
			aTag.href='#';
			document.querySelector('div.pagination').appendChild(aTag);
		}
		pagingFunc()
	})	
}
pageList();