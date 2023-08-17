import loadSingleBlogsData from './../../../../utils/loadSingleBlogsData';

 export const generateMetadata = async ({params}) => {
    const {title} = await loadSingleBlogsData(params.id)
    return {
        title: title
    }
}

const SinglePage = async ({params}) => {

    const {title, body} = await loadSingleBlogsData(params.id)

    return (
        <div>
            <h2 className="text-xl font-medium text-center mt-7">SinglePage {params.id}</h2>
            <div className="block border border-red-200 m-2 p-4">
                     <h2 className="text-xl font-medium"> 
                        {title}
                      </h2>
                     <p>
                        {body}
                     </p>
                </div>
        </div>
    );
};

export default SinglePage;