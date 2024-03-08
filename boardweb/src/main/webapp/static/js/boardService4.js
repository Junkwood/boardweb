/**
 * boardService4.js
 */
import service from './boardAjax.js';
let page = 1;
service.replyList({ bno: bno, page: page }, replyListCall//인자값1
	,
	function(err) {
		console.log('error=>', err)
	});
function replyListCall(result) {
	let ul = $('.content>ul')
	$('.content>ul>li:gt(1)').remove();
	$(result).each(function(idx, item) {
		let clon = $('.content>ul>li').eq(0).clone()
		let delBtn = $('<button class="btn btn-danger">삭제</button>');
		delBtn.click(function(e) {
			if($(this).parent().prev().text()!=replyer){
				alert('삭제권한이 없습니다.')
				return;
			}
			service.removeReply(item.replyNo, function(result) {
				if (result.retCode == 'OK') {
					alert(result.retMsg)
					service.pageList(bno, function(result) {
						let totalCnt = result.totalCount;
						let realEnd = Math.ceil(totalCnt / 5);
						if(page>realEnd){
							page=realEnd
						}
						service.replyList({ bno: bno, page: page }, replyListCall//인자값1
							,
							function(err) {
								console.log('error=>', err)
							})

					}, function(err) {
						console.log('err=>', err)
					})
				} else {
					alert(result.retMsg)
				}
			}, function(err) {
				console.log('err=>', err)
			})
		})
		clon.find('span:eq(0)').text(item.replyNo);
		clon.find('span:eq(1)').text(item.reply);
		clon.find('span:eq(2)').text(item.replyer);
		clon.find('span:eq(3)').html(delBtn);
		ul.append(clon);
	});
	//페이지리스트 생성
	service.pageList(bno, createPageElement, err => console.log('err=>', err)
	)
}

//페이지 목록 생성
function createPageElement(result) {
	let pagination = $('div.pagination')
	pagination.html('');
	let totalCnt = result.totalCount;
	let startPage, endPage;
	let next, prev;
	let realEnd = Math.ceil(totalCnt / 5);
	endPage = Math.ceil(page / 5) * 5;
	startPage = endPage - 4;
	endPage = endPage > realEnd ? realEnd : endPage;
	next = endPage < realEnd ? true : false;
	prev = startPage > 1;

	if (prev) {
		$('<a/>').attr('href', '#').attr('data-page', startPage - 1).html('&laquo;').appendTo(pagination);
	}
	for (let p = startPage; p <= endPage; p++) {
		let aTag = $('<a/>').attr('href', '#').attr('data-page', p).html(p).appendTo(pagination);
		if (p == page) {
			aTag.addClass('active');
		}
	}
	if (next) {
		$('<a/>').attr('href', '#').attr('data-page', endPage + 1).html('&raquo;').appendTo(pagination);
	}
}
//페이지이동
$('.pagination').on('click', 'a', function(e) {
	page = $(this).data('page');
	service.replyList({ bno: bno, page: page }, replyListCall),
		err => console.log(err)
})
//등록

//등록버튼 이벤트
$('div.header button').on('click', function(e) {
	let reply = $('#reply').val();
	if (!reply) {
		alert('댓글입력하세요.')
		return;
	}
	if (!replyer) {
		alert('로그인이 필요합니다.')
		return;
	}
	let param = { bno: bno, reply: reply, replyer: replyer };
	service.addReply(param, function(result) {
		if (result.retCode == 'OK') {
			alert('댓글등록 완료')
			$('#reply').val('')
			service.pageList(bno, function(result) {
				let totalCnt = result.totalCount;
				let realEnd = Math.ceil(totalCnt / 5);
				page = realEnd;
				service.replyList({ bno: bno, page: page }, replyListCall//인자값1
					,
					function(err) {
						console.log('error=>', err)
					})

			}, function(err) {
				console.log('err=>', err)
			})

		} else {
			alert('댓글등록 실패')
		}
	}, function(err) {
		console.log('err=>', err)
	})

})


