$(document).ready(function () {
    // 제출 버튼 클릭 시 이벤트
    $("#writePostForm").submit(function (event) {
        event.preventDefault();

        const postData = {
            title: $("#title").val(),
            author: $("#author").val(),
            content: $("#content").val()
        };

        $.ajax({
            url: 'http://your-backend-server-url.com/posts',
            method: 'POST',
            data: postData,
            success: function () {
                alert('글 작성이 완료되었습니다.');
                location.href = 'index.html'; // 게시판 페이지로 이동
            },
            error: function (error) {
                console.log('Error:', error);
            }
        });
    });

    // 취소 버튼 클릭 시 이벤트
    $("#cancelBtn").click(function () {
        if (confirm('작성을 취소하시겠습니까?')) {
            location.href = 'index.html'; // 게시판 페이지로 이동
        }
    });
});