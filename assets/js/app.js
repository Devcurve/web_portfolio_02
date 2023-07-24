$(document).ready(function () {
    // 게시글 데이터 가져오기
    function getPosts() {
        $.ajax({
            url: 'http://your-backend-server-url.com/posts',
            method: 'GET',
            success: function (data) {
                renderPosts(data);
            },
            error: function (error) {
                console.log('Error:', error);
            }
        });
    }

    // 게시글 데이터 렌더링
    function renderPosts(posts) {
        $('tbody').empty();
        posts.forEach(function (post) {
            var tableRow = `
          <tr>
            <td>${post.id}</td>
            <td>${post.title}</td>
            <td>${post.author}</td>
            <td>${post.date}</td>
            <td>${post.views}</td>
          </tr>
      `;
            $('tbody').append(tableRow);
        });
    }

    // 버튼 클릭 이벤트
    $("#writeBtn").click(function () {
        // 글 쓰기 페이지로 이동
        location.href = "write_post.html";
    });

    // 페이지 로드 시 게시글 데이터 가져오기
    getPosts();
});