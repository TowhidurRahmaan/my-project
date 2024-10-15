const ContactForm = () => {
    return (
      <div className="flex justify-center min-h-screen bg-gray-100">
        <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md md:max-w-2xl lg:max-w-3xl">
          <h2 className="text-2xl font-bold mb-6 text-left text-gray-900">
            Drop Us a <span className="text-green-500">Line</span>
          </h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700">Name*</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
  
            <div>
              <label className="block text-gray-700">Email*</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700">Phone Number <span className="text-gray-500">(Optional)</span></label>
              <input
                type="text"
                placeholder="Enter Your Phone Number"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
  
            <div>
              <label className="block text-gray-700">Company Name <span className="text-gray-500">(Optional)</span></label>
              <input
                type="text"
                placeholder="Enter Your Company Name"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
  
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Services You Need <span className="text-gray-500">(You can chose multiple)</span></label>
            <div className="font-semibold grid grid-cols-2 md:grid-cols-4 gap-2">
              {[
                "Mobile Development",
                "Web Development",
                "SQA Solution",
                "Web UX/UI Design",
                "API Integration",
                "Mobile UX/UI Design",
                "Software Development",
                "Custom Service",
              ].map((service, index) => (
                <button
                  key={index}
                  className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg border hover:bg-green-100 focus:bg-green-300"
                >
                  {service}
                </button>
              ))}
            </div>
          </div>
  
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Your Budget <span className="text-gray-500">(Optional)</span>)</label>
            <div className="flex space-x-2">
              {["<$500", "$500-$1000", "$1001-$1500", "$1500-$2000"].map(
                (budget, index) => (
                  <button
                    key={index}
                    className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg border hover:bg-green-100 focus:bg-green-100"
                  >
                    {budget}
                  </button>
                )
              )}
            </div>
          </div>
  
          <div className="mb-4">
            <label className="block text-gray-700">Deep Details About Your Query <span className="text-gray-500">(Optional)</span></label>
            <textarea
              placeholder="Tell us more about your query"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              rows="4"
            />
          </div>
  
          <div className="mb-4">
            <label className="block text-gray-700">Add Attachment<span className="text-gray-500">(Optional)</span></label>
            <textarea
              placeholder="(a brief, idea,branding guideline,old design,...)"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              rows="4"
            />
            <input type="file" className="w-full text-gray-600" />
          </div>
  
          <div className="text-left">
  <button
    type="submit"
    className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
  >
    Send Inquiry
  </button>
</div>

        </form>
      </div>
    );
  };
  
  export default ContactForm;
  