import { useSelector } from "react-redux"
import { selectAllPosts } from "./postSlice"

const PostList = () => {
    const posts = useSelector(selectAllPosts)

    const renderedPosts = posts.map(post =>(
        <article key={post.id}>
            <div className="post-header">
                <h4>{post.title}</h4>
                <p>{post.content.substring(0,100)}</p>
            </div>
        </article>
    ))
  return (
    <section>
        <h2>Posts</h2>
        {renderedPosts.length ? renderedPosts : <p>No posts found</p>}
    </section>
  )
}

export default PostList