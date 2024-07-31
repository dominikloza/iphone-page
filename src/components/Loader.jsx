import { Html } from '@react-three/drei';

const Loader = () => {
    return (
        <Html>
            <div className='absolute inset-0 flex items-center justify-center'>
                <svg className="animate-spin h-10 w-10 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                </svg>
            </div>
        </Html>
    )
}

export default Loader
