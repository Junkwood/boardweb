/**
 * boardAjax.js
 */
const service = {
	//댓글목록
	replyList(param={bno:1,page:1},successCall,errorCall){
		$.ajax({
			url:'replyList.do',
			method:'get',//get이 디폴트값임.입력없으면 get
			data:param,
			dataType:'json'
		})
		.done(successCall)//successCall는 boardService에서 구현
		.fail(errorCall)//errorCall도 boardService에서 구현
	},
	pageList(bno=1,successCall,errorCall){
				$.ajax({
			url:'getTotal.do?bno='+bno,
			method:'get',//get이 디폴트값임.입력없으면 get
			dataType:'json'
		})
		.done(successCall)//successCall는 boardService에서 구현
		.fail(errorCall)//errorCall도 boardService에서 구현
		
	},
	//삭제
	removeReply(rno=1,successCall,errorCall){
		$.ajax({
			url:'removeReply.do',
			method:'post',
			data: {rno},
			dataType:'json'
		})
		.done(successCall)
		.fail(errorCall)
	},
	//댓글등록
	addReply(param={bno:1,reply:'reply',replyer:'replyer'},successCall,errorCall){
		$.ajax({
			url:'addReply.do',
			method:'post',
			data:param,
			dataType:'json'
		})
		.done(successCall)
		.fail(errorCall)
	}
}
function test(){};
export default service;
//html 또는 jsp에 type="module" 넣어야 export,import가능