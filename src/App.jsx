function App() {

    return (
      <div className='flex flex-col text-gray-900 mt-10 text-center h-full w-full'>
        <h1 className=" text-2xl md:text-3xl font-bold lg:text-4xl">ER Sabadisto Bookkeeping Services</h1>
        <p className="pt-3 text-lg">"Affordable bookkeeping services while keeping your profits in check."</p>


        <div className="flex justify-center flex-col py-7 my-5 bg-gray-800 mx-auto rounded text-white">
          <form action="/"> 
 
            <h1 className="text-2xl text-center font-bold">MESSAGE US</h1>

            <div className="pt-3">
              <label htmlFor="name" className="mr-3">NAME</label>
              <input type="name" id="name" type="name" className="text-black"/>
            </div>
            
            <div className="py-3">
              <label htmlFor="email"  className="mr-3" id="email" type="email">EMAIL</label>
              <input type="email" className="text-black" />
            </div>

            <div className="ml-3">
              <textarea name="message" className="mr-3 p-2 text-black" id="message" cols="30" rows="5" input="text" placeholder="Write your message"></textarea>
            </div>

            <button className="bg-gray-600 mt-3 py-3 px-5 font-bold rounded-lg text-white hover:bg-white hover:text-black hover:translate-y-1.5 transition ease">SEND MESSAGE</button>
          </form>
        </div>

        <div className="text-sm p-2 text-gray-900">
          <h2 className="font-bold text-md">ER Sabadisto Bookkeeping Services</h2>
          <p>Vitas St. Tondo, Manila Philippines</p>
          <p>Tel No. (028) 663-1100</p>
          <p>email: sabadistoernesto@gmail.com</p>
          <p className="font-bold text-sky-500"><a href="https://ersabadistobookkeeping.netlify.app/#">VISIT OUR WEBSITE</a></p>
        </div>

      </div>
    )
}

export default App
