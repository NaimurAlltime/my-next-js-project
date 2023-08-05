
const SinglePage = ({params}) => {
    // console.log(params.segments);
    const [year, id] = params.segments || [];
    return (
        <div>
            <h2>SinglePage {year || new Date().getFullYear()} {id && id}</h2>
        </div>
    );
};

export default SinglePage;