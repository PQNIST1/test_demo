import { useSelector } from 'react-redux';


const Result = () => {
    const { className, imageUrl} = useSelector((state) => state.image);
    return (
        <div className="flex-1 bg-green-100 text-center hidden lg:flex items-center justify-center">
            {className && (
                <div>
                <img src={`${import.meta.env.VITE_BACKEND_URL}/media/${imageUrl}`} className="" width="500" alt="Uploaded" />
                    <h3>Class: {className}</h3>
                </div>
            )}
        </div>
    )
}
export default Result