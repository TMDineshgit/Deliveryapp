const Contact = () =>{
    return (
        <div>
            <h1>Contact</h1>
            <form action="">
                <div>
                <input type="text" className="border border-gray-200 px-3 py-2 font-medium text-md" />
                </div>
                <div className="my-2">
                <textarea className="border border-gray-200 px-3 py-2 font-medium text-md" placeholder="write messages"></textarea>
                </div>
                <button className="bg-black text-white p-2" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact