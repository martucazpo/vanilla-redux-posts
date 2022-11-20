export const getPosts = async () =>{
    let posts = await fetch("assets/data/posts.json").then(response => response.json())
    return posts
}