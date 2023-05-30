import SectionHeading from "../../SectionHeading/SectionHeading";
import "./AllBlogs.css";
import allBlogs from "../../../data/rooms.json";

const AllBlogs = () => {
  return (
    <section className="all-blogs-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHeading
              title={"Latest Blogs"}
              subtitle={"Explore our"}
            ></SectionHeading>
          </div>
        </div>

        <div className="row blogs-row " style={{ rowGap: "30px" }}>
          {allBlogs?.map((blog, index) => (
            <div className="col-lg-6" key={index}>
              <article className="single-article">
                <img src={blog.img} alt={blog.title} />
                <div className="article-body">
                  <h4>{blog.title}</h4>
                  <p>{blog.details}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllBlogs;
