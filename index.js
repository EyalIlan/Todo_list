

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
        this.isCheck = false,
        this.editMode = false,
        this.edit = ''
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

const UpdateMode = (id) =>{
    let post = PostsArr.find(p => p.id === id)
    post.editMode = true
    showPosts()
    
    
}


const Update = () =>{
  

}
const Delete = (id) =>{
    let index = PostsArr.map(p => p.id).indexOf(id)
    PostsArr.splice(index,1)
    showPosts()
}

const showPosts = () =>{
    POSTS.innerHTML = ''
    
    for(let post of PostsArr){   
        if(!post.editMode){
            POSTS.innerHTML += `<div class="post">
            <div class="flex side">
                <input type="checkbox">
            </div>
            <div class="flex">
                <p>${post.post}</p>
            </div>
            
            <div class="flex side">
                <img src="./images/g1.png" onclick= "Delete(${post.id})" alt="">
                <img src="./images/n1.png" onclick= "UpdateMode(${post.id})" alt="">
            </div>
            </div>`
        }
        else{
            POSTS.innerHTML += `<div class="post">
            <div class="flex side">
                <input type="checkbox">
            </div>
            <div class="flex">
                <input type="text" placeHolder class="editValue" postID="${post.id}"/>
            </div>
            
            <div class="flex side">
                <img src="./images/cancel.png" onclick= "Update(${post.id})" alt="">
                <img src="./images/check.png" onclick=  "Update()" alt="">
            </div>
            </div>`
        }
    }
    const EditValues = document.querySelectorAll('.editValue')
    for(let post of EditValues){
        post.addEventListener('input', p =>{
          let ID = parseInt(p.target.getAttribute('postID'))
          let POST = PostsArr.find(p => p.id === ID)
          POST.edit = p.target.value
        })  
    }
}  
showPosts()

// Update('EYal',1)

Create('eyal')
Create('eyal2')
// Create('eyal3')

// Read()


