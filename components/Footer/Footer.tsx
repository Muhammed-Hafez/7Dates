export default function Footer() {
  return (
    <footer className="w-full max-w-[1600px] mx-auto py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <div className="">
          <h3>Our Office</h3>
          <ul>
            <li>123 Street, New York, USA</li>
            <li>+01114181442</li>
            <li>info@sevendates.com</li>
            <li>
              <ul className="flex items-center justify-start gap-2">
                <li>F</li>
                <li>X</li>
                <li>I</li>
                <li>Y</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="">
          <h3>Quick Links</h3>
          <ul>
            <li>About</li>
            <li>Products</li>
            <li>Contact</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="">
          <h3>Business Hours</h3>
          <ul>
            <li>
              <p>Monday - Friday</p>
              <span>9:00 AM - 7:00 PM</span>
            </li>
            <li>
              <p>Saturday</p>
              <span>9:00 AM - 12:00 PM</span>
            </li>
            <li>
              <p>Sunday</p>
              <span>Closed</span>
            </li>
          </ul>
        </div>

        <div className="">
          <h3>Newsletter</h3>
          <p>
            Subscribe to our newsletter and get 10% off your first purchase.
          </p>
          <form className="flex items-center justify-start gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 px-2 py-1"
            />
            <button className="bg-gray-900 text-white px-2 py-1">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="w-full flex items-center justify-center mt-8">
        <p className="text-gray-400 text-sm">
          &copy; 2024 7Dates. All Rights Reserved. Powered by Triangles
        </p>
      </div>
    </footer>
  );
}
