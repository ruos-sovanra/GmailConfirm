import PageDetailComponent from "@/Components/detailPage/PageDetailComponent";


type PropsParams = {
    params: {
        id: number;
    };
    searchParams: any;
};

const ENDPOINT = "https://fakestoreapi.com/products/";

 const getData = async (id: number) => {
    const res = await fetch(`${ENDPOINT}${id}`,{next: {revalidate: 3600}});
    const data = await res.json();
    console.log(data);
    return data;
};


const  AboutPageDetail = async (props:PropsParams) =>{

    let data = await getData(props.params.id);
    console.log(data)
    return (
       <>
       <div>
            <PageDetailComponent title={data?.title || "Default Title"} description={data?.description || "Default Description"} image={data?.image || "No Image "}   price={data?.price || "00"}  />
       </div>
       </>
    )
}

export default AboutPageDetail;