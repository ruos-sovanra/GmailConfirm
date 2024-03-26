
export type DataType = {
    title: string;
    price: number;
    description: string;
    image: string;

}
// @ts-ignore
const PageDetailComponent = ({title, image , description,price}:DataType)=>{
    return (
        <>
            <h1>Detail</h1>
            <div className="p-4 bg-white shadow-lg">
                <img src={image} alt={title} className="w-full  object-cover"/>
                <h1 className="text-xl font-semibold">{title}</h1>
                <p className="text-sm text-gray-500">{description}</p>
                <p className="text-sm font-semibold">${price}</p>
            </div>
        </>
    )
}

export default PageDetailComponent;