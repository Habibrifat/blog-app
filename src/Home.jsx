
import BlogList from './BlogList'; 
import useFetch from './useFetch';

const Home = () => {
    
const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    // const handleDelete = (id) => {
    //     // console.log(id);
    //     const newBlog = blogs.filter((blog) => blog.id !== id);
    //     setBlogs(newBlog);
    // }
    return ( 
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading.......</div> }
            { blogs && <BlogList blogs={blogs} title='All Blogs!'/>}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Rifat' )} title='Rifat Blogs!'/> */}
        </div>
     );
}
 
export default Home;