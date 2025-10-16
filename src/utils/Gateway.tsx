export default function getAllPosts() {
    return(
        fetch(" https://jsonplaceholder.typicode.com/posts/1/comments")
        .then((response) => response.json())
        .catch((error) => console.log('Error fetching API', error))
    )
}