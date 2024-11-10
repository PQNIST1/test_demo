import Result  from "./result"
import Import from "./importImage"

const Home = () => {
    return (
        <div className="w-screen bg-gray-100 text-gray-900 flex justify-center">
            <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1 items-center">
                <Import />
                <Result />
            </div>
        </div>
    )
}
export default Home