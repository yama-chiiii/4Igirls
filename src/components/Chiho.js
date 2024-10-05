export const Chiho = () => {
    return (
        // ながやま専用ページだよ
        <div className="w-full h-screen flex flex-col justify-center items-center bg-pink-100">
            <div className="w-3/4 h-screen bg-white flex flex-col justify-center items-center">
                <div className="text-4xl my-8 text-pink-500 font-black">くるくるはーと</div>
                <div className="scene relative">
                    <div className="regular-tetrahedron transform-style-3d animate-rotate sticky top-[25dvh] w-120 h-120 flex justify-center items-center">
                        <div className="text-7xl text-red-600">♥</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
