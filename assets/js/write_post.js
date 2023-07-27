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
            //url: 'https://port-0-java-springboot-signup-cu6q2blkawvrek.sel4.cloudtype.app/posts',
            url: 'http://localhost:8080/posts',
            method: 'POST',
            data: JSON.stringify(postData),
            contentType: 'application/json',
            success: function () {
                alert('글 작성이 완료되었습니다.');
                location.href = 'Community.html'; // 게시판 페이지로 이동
            },
            error: function (error) {
                console.log('Error:', error);
            }
        });
    });

    // 취소 버튼 클릭 시 이벤트
    $("#cancelBtn").click(function () {
        if (confirm('작성을 취소하시겠습니까?')) {
            location.href = 'Community.html'; // 게시판 페이지로 이동
        }
    });
});


$(document).ready(function () {
    $("#writePostForm").submit(function (e) {
        e.preventDefault();
        // 게시글 전송을 처리하는 코드를 작성합니다.
    });

    $("#cancelBtn").click(function () {
        window.location.href = "index.html";
    });
});