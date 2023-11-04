
let post = [
    {
        tilte : "this is title 1",
        body : "this is body 1"
    },
    {
        tilte : "this is title 2",
        body : "this is body 2"
    },
    {
        tilte : "this is title 3",
        body : "this is body 3"
    },
    {
        tilte : "this is title 4",
        body : "this is body 4"
    },
    {
        tilte : "this is title 5",
        body : "this is body 5"
    },
    {
        tilte : "this is title 6",
        body : "this is body 6"
    },
    {
        tilte : "this is title 7",
        body : "this is body 7"
    },
    {
        tilte : "this is title 8",
        body : "this is body 8"
    },
    {
        tilte : "this is title 9",
        body : "this is body 9"
    },
    {
        tilte : "this is title 10",
        body : "this is body 10"
    },
    {
        tilte : "this is title 11",
        body : "this is body 11"
    },
    {
        tilte : "this is title 12",
        body : "this is body 12"
    }
    
]

//selections

/* <div class="post">
    <h4 class="post_title">
        Post Title
    </h4>
    <p class="post_body">
        post description 1
    </p>
</div> */


let posts = document.getElementsByClassName("posts")[0];


let load = () => {
    post.map((x) => {
        let postCreation = document.createElement("div");
        postCreation.classList.add("post");
        postCreation.innerHTML = `

        <h4>
        Post Title : ${x.tilte}
        </h4>
        
        <p>
            post description : ${x.body}
        </p>

        `
        posts.appendChild(postCreation)

    })
}
load()








