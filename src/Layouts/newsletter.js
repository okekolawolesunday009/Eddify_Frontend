export const Subscribe = () => {
    return(
        <>
            <div className="px-[20px] lg:px-0 w-full mx-auto gap-4 mt-[20px] bg-black text-white flex flex-col justify-center h-[400px] text-center ">
                <h1>Subscribe to our NewsLetter & Get Latest NewsLetter</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Malesuada a tempus cursus nunc augue. Convallis suscipit morbi et pretium purus.</p>

                <div className="w-full  lg:w-[80%] flex justify-center gap-4 mx-auto">
                <input className="lg:w-[20%] flex gap-2 p-2 rounded-lg" type="text" placeholder="Your email addess"/>
                <button>Subscribe</button>
                </div>
            </div>
        </>
    )
}