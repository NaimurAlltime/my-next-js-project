import Link from "next/link";

const blogs = [
    {
        id: 1,
        year: 2020,
        title: 'title-1'
    },
    {
        id: 2,
        year: 2010,
        title: 'title-2'
    },
    {
        id: 3,
        year: 2021,
        title: 'title-3'
    },
    {
        id: 4,
        year: 2023,
        title: 'title-4'
    },
]

const BlogPage = () => {
    return (
        <div>
            {
                blogs.map(({id, year, title}) => <Link className="block border border-red-200 m-2" href={{
                    pathname: `/blogs/${year}/${id}`,
                    query: title
                }} key={id}> {title} </Link>)
            }
        </div>
    );
};

export default BlogPage;