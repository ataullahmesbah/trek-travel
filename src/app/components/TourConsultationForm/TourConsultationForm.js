

const TourConsultationForm = () => {

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-sky-900 mb-4">Get Free Tour Consultation</h2>
            <form className="space-y-4">
                <div>

                    <input type="text" name="name" id="name" placeholder="First Name" className="border-[#e5eaf2] border-b outline-none px-4 w-[80%] py-3 focus:border-[#1f5b93] transition-colors duration-300"
                    />

                </div>
                <div>

                    <input type="text" name="name" id="name" placeholder="Last Name" className="border-[#e5eaf2] border-b outline-none px-4 w-[80%] py-3 focus:border-[#3B9DF8] transition-colors duration-300"
                    />

                </div>
                <div>

                    <input type="text" name="name" id="name" placeholder="Email Address" className="border-[#e5eaf2] border-b outline-none px-4 w-[80%] py-3 focus:border-[#3B9DF8] transition-colors duration-300"
                    />

                </div>
                <div>

                    <div className="flex">
                        <select className="border-gray-300 rounded-l-md shadow-sm">
                            <option value="+880">+880</option>
                            {/* Add more options here */}
                        </select>
                        <input type="text" name="number" id="name" placeholder="1XXX XXXXXXX" className="border-[#e5eaf2] border-b outline-none px-4 w-[80%] py-3 focus:border-[#3B9DF8] transition-colors duration-300" />
                    </div>
                </div>
                <div>


                    <input type="date" name="number" id="name" placeholder="Journey Date" className="border-[#e5eaf2] border-b outline-none px-4 w-[80%] py-3 focus:border-[#3B9DF8] transition-colors duration-300" />
                </div>
                <div>


                    <textarea type="text" name="comment" id="name" placeholder="Additional Requirements" className="border-[#e5eaf2] border-b outline-none px-4 w-[80%] py-3 focus:border-[#3B9DF8] transition-colors duration-300"></textarea>
                </div>
                <div>
                    <button type="submit" className="w-full bg-sky-900 text-white py-2 rounded-md shadow-sm hover:bg-sky-950">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default TourConsultationForm;