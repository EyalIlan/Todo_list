

// VARIBALS
const POSTS = document.querySelectorAll('.element-list')[0]
const AddPost = document.querySelectorAll('.add-elemnt button')[0]
const PostInput = document.querySelectorAll('.add-elemnt input')[0]


let PostsArr =[]
let post = ''


// CLASSES
class Posts{
    static id =1
    constructor(post){
        this.post = post
        this.id = Posts.id++
        this.isCheck = false
    }

}

// EVENTS
AddPost.addEventListener('click',(p) =>{
    Create(post)
})

PostInput.addEventListener('input',p =>{
    post = p.target.value
})


// FUNCTIONS
const Create = (post) =>{
    PostsArr.push(new Posts(post))
    showPosts()
}

const Read = () =>{
    for(let i=0;i<PostsArr.length;i++){
        console.log(PostsArr[i].post)
    }
}

const Update = (UpdatePost,id) =>{
    let post = PostsArr.find(p => p.id === id)
    post.post = UpdatePost
}

const Delete = (id) =>{
    console.log(id);
    let index = PostsArr.map(p => p.id).indexOf(id)
    PostsArr.splice(index,1)
    showPosts()
}

const showPosts = () =>{
    POSTS.innerHTML = ''
    
    for(let post of PostsArr){
       
        POSTS.innerHTML += `<div class="post">
        <div class="flex side">
            <input type="checkbox">
        </div>
        <div class="flex">
            <p>${post.post}</p>
        </div>
        
        <div class="flex side">
            <img src="./images/g1.png" id="delete" alt="">
            <img src="./images/n1.png" id="edit" alt="">
        </div>
        </div>`

    }
   
}  
showPosts()


// Update('EYal',1)

Create('eyal')
Create('eyal2')
Create('eyal3')

// Read()


