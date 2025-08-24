const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postContent = document.getElementById("feed")

console.log(posts[1].name)

function render() {
    for (let i=0; i<posts.length; i++) {
        postContent.innerHTML+=`
         <section class="post-container">
            <section class="publisher-info">
                    <img src=${posts[i].avatar} class="avatar-img">
                    <p>${posts[i].name}</p>
                    <p><span class="regular-text">${posts[i].location}</span></p>
            </section>
            
             <section class="post">
                    <img src=${posts[i].post} id="post-img">
             </section>
        </section>
        
        <section class="feedback">
            <img src="images/icon-heart.png" class="reaction">
            <img src="images/icon-comment.png" class="reaction">
            <img src="images/icon-dm.png" class="reaction">
            <p>${posts[i].likes} likes</p>
            <p>vincey1853<span class="regular-text"> ${posts[i].comment}</span></p>
        </section>
        `
    }
    
}

render()