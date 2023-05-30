import InnerHero from "../../components/InnerHero/InnerHero";
import AllBlogs from "../../components/Section/Blogs/AllBlogs";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs-page ">
      <InnerHero>Blogs</InnerHero>
      <AllBlogs></AllBlogs>
    </div>
  );
};

export default Blogs;
