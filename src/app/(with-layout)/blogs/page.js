import Link from "next/link";
import loadBlogsData from './../../../utils/loadBlogsData';

// const blogs = [
//     {
//         id: 1,
//         year: 2020,
//         title: 'title-1'
//     },
//     {
//         id: 2,
//         year: 2010,
//         title: 'title-2'
//     },
//     {
//         id: 3,
//         year: 2021,
//         title: 'title-3'
//     },
//     {
//         id: 4,
//         year: 2023,
//         title: 'title-4'
//     },
// ]

export const metadata = {
    title: 'Blogs | My Next Project',
    description: 'This is my first next js project',
  }

const BlogPage = async () => {
   const blogs = await loadBlogsData();
    return (
        <div className="mt-5">
            {/* {
                blogs.map(({id, year, title}) => <Link className="block border border-red-200 m-2" href={{
                    pathname: `/blogs/${year}/${id}`,
                    query: title
                }} key={id}> {title} </Link>)
            } */}
             {
                blogs.map(({id, body, title}) =>
                 <div className="block border border-red-200 m-2 p-4" key={id}>
                     <h2 className="text-xl font-medium" href={`/blogs/${id}`}> 
                        {title}
                      </h2>
                     <p>
                        {body}
                     </p>
                     <Link href={`/blogs/${id}`}>
                          <button className="bg-blue-500 px-3 py-1 rounded-md mt-3">
                             Details 
                          </button>
                     </Link>
                </div>)
            }
        </div>
    );
};

export default BlogPage;