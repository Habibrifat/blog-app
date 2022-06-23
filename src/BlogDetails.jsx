import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

   const { id } = useParams();
   const {data: blog, isPending, error} = useFetch('http://localhost:8000/blogs/' + id);
   const history = useHistory();

//    use different style from ninja

   const handleDelete = (id) => {
       fetch('http://localhost:8000/blogs/'+id,{
           method:'DELETE'
       }).then(() => {
           history.push('/');
       })
   } 

    return ( 
        <div className="blog-details">
            <h2>Blog Details - { id }</h2>
            { error && <div>{ error }</div> }
            { isPending && <div>Loading.......</div> }
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by { blog.author }</p>
                    <div>{blog.body}</div>
                    <button onClick={() => handleDelete(blog.id)}>delete blog</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;