import { useSelector } from 'react-redux';
import RadarChart from './radarChart';


const Result = () => {
    const { className, imageUrl, probabilities } = useSelector((state) => state.image);
    return (
        <div className="flex-1  text-center hidden lg:flex items-center justify-center">
            {className && probabilities && (
                <div className=''>
                    <div className='w-[500px] h-[300px] mt-5'>
                        <img src={`${import.meta.env.VITE_BACKEND_URL}/media/${imageUrl}`} className="w-full h-full object-cover" alt="Uploaded" />
                    </div>
                    <h3 className='mt-2'>Class: {className}</h3>
                    <RadarChart dataValues={probabilities} />
                </div>
            )}
        </div>
    )
}
export default Result