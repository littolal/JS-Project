// Load posts from localStorage or use default data
var posts = JSON.parse(localStorage.getItem("posts")) || [
    { id: 1, title: 'Daily JS News' },
    { id: 2, title: 'Daily Python News' },
    { id: 3, title: 'Daily C News' },
    { id: 4, title: 'Daily Java News' }
];

var tableBody = document.querySelector(".postsTable tbody");

// Function to render posts in the table
function renderPosts() {
    var rowsHTML = "";
    posts.forEach(post => {
        rowsHTML += `<tr>
                        <td>${post.id}</td>
                        <td>${post.title}</td>
                    </tr>`;
    });
    tableBody.innerHTML = rowsHTML;
}

// Initial render
renderPosts();

var form = document.querySelector(".form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    var idValue = document.getElementById("id").value.trim();
    var textValue = document.getElementById("value").value.trim();

    posts.push({ id: idValue, title: textValue });

    // Save updated data to localStorage
    localStorage.setItem("posts", JSON.stringify(posts));

    // Redirect back to the main page
    window.location.assign("index.html");
});
