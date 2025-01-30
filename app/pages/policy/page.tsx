import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

export default function Policy() {
  return (
    <div>
      <Navbar />
      <div className="max-w-3xl align mx-auto py-10 px-6 bg-white shadow-lg rounded-lg mt-10">
        <div className="w-full" >

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Return & Refund Policy
        </h1>

        <p className="text-gray-700">
          Thank you for shopping at <strong>Our Store</strong>. If you are not
          completely satisfied with your purchase, we’re here to help.
        </p>

        <h2 className="text-xl font-semibold mt-6">Returns</h2>
        <p className="text-gray-700">
          You have **30 days** to return an item from the date you received it.
          To be eligible for a return, your item must be:
        </p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Unused and in the same condition that you received it.</li>
          <li>In the original packaging.</li>
          <li>Accompanied by a receipt or proof of purchase.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">Refunds</h2>
        <p className="text-gray-700">
          Once we receive your item, we will inspect it and notify you about the
          status of your refund. If your return is approved, we will initiate a
          refund to your original payment method within **7-10 business days**.
        </p>

        <h2 className="text-xl font-semibold mt-6">Exchanges</h2>
        <p className="text-gray-700">
          We only replace items if they are **defective or damaged**. If you
          need an exchange, send us an email at support@example.com.
        </p>

        <h2 className="text-xl font-semibold mt-6">Shipping</h2>
        <p className="text-gray-700">
          You will be responsible for paying **return shipping costs**, which
          are non-refundable. If you receive a refund, the cost of return
          shipping will be deducted from your refund.
        </p>

        <h2 className="text-xl font-semibold mt-6">Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions about our **Return & Refund Policy**,
          contact us at:
        </p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Email: support@example.com</li>
          <li>Phone: +1 (123) 456-7890</li>
          <li>
            {" "}
            21 New York Street
            <br />
            New York City
            <br />
            United States of America
            <br />
            432 34
          </li>
        </ul>

        <div className="text-center mt-8">
          <a href="/pages/home" className="text-blue-600 hover:underline">
            ← Back to Home
          </a>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
