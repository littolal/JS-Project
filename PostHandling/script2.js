var posts=[
    {id:1,title:'Daily JS News'},
    {id:2,title:'Daily Python News'},
    {id:3,title:'Daily C News'},
    {id:4,title:'Daily Java News'}
];

var tableBody=document.querySelector(".postsTable tbody");//try only tbody as well
var rowsHTML="";
posts.forEach(post =>{
    rowsHTML+= `<tr>
                <td>${post.id}</td>
                <td>${post.title}</td>
                </tr>`;
});
tableBody.innerHTML=rowsHTML;

var form=document.querySelector(".form");
var addButton=document.querySelector(".btn");

form.addEventListener("submit",function(event){
    event.preventDefault();
    var idvalue=document.getElementById("id").value.trim();
    var textvalue=document.getElementById("value").value.trim();
    posts.push({id:idvalue,title:textvalue});
})

function renderPosts() {
    tableBody.innerHTML = "";
    posts.forEach(post => {
        const li = document.createElement('li');
        li.textContent = `ID: ${post.id}, Title: ${post.title}`;
        postList.appendChild(li);
    });
}