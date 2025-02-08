"use client";
import React, { useState } from "react";
import { CreditCard, Lock, ChevronDown, Shield } from "lucide-react";

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Payment method
              </h2>

              {/* Payment Method Selection */}
              <div className="space-y-4">
                <div
                  className={`border rounded-lg p-4 cursor-pointer transition ${
                    paymentMethod === "card"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => setPaymentMethod("card")}
                >
                  <div className="flex items-center space-x-3">
                    <CreditCard className="w-6 h-6 text-blue-600" />
                    <span className="font-medium text-gray-700">
                      Credit card
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Details Form */}
              <div className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Card number
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="1234 5678 9012 3456"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Expiration
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="MM / YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      CVC
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="123"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Billing Information */}
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Billing information
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Country or region
                  </label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 appearance-none">
                      <option>Select a country</option>
                      <option>Afghanistan</option>
                      <option>Albania</option>
                      <option>Algeria</option>
                      <option>American Samoa</option>
                      <option>Andorra</option>
                      <option>Angola</option>
                      <option>Anguilla</option>
                      <option>Antarctica</option>
                      <option>Antigua and Barbuda</option>
                      <option>Argentina</option>
                      <option>Armenia</option>
                      <option>Aruba</option>
                      <option>Australia</option>
                      <option>Austria</option>
                      <option>Azerbaijan</option>
                      <option>Bahamas</option>
                      <option>Bahrain</option>
                      <option>Bangladesh</option>
                      <option>Barbados</option>
                      <option>Belarus</option>
                      <option>Belgium</option>
                      <option>Belize</option>
                      <option>Benin</option>
                      <option>Bermuda</option>
                      <option>Bhutan</option>
                      <option>Bolivia</option>
                      <option>Bosnia and Herzegovina</option>
                      <option>Botswana</option>
                      <option>Brazil</option>
                      <option>British Indian Ocean Territory</option>
                      <option>British Virgin Islands</option>
                      <option>Brunei</option>
                      <option>Bulgaria</option>
                      <option>Burkina Faso</option>
                      <option>Burundi</option>
                      <option>Cabo Verde</option>
                      <option>Cambodia</option>
                      <option>Cameroon</option>
                      <option>Canada</option>
                      <option>Cayman Islands</option>
                      <option>Central African Republic</option>
                      <option>Chad</option>
                      <option>Chile</option>
                      <option>China</option>
                      <option>Christmas Island</option>
                      <option>Cocos (Keeling) Islands</option>
                      <option>Colombia</option>
                      <option>Comoros</option>
                      <option>Cook Islands</option>
                      <option>Costa Rica</option>
                      <option>Croatia</option>
                      <option>Cuba</option>
                      <option>Curaçao</option>
                      <option>Cyprus</option>
                      <option>Czechia</option>
                      <option>Democratic Republic of the Congo</option>
                      <option>Denmark</option>
                      <option>Djibouti</option>
                      <option>Dominica</option>
                      <option>Dominican Republic</option>
                      <option>Ecuador</option>
                      <option>Egypt</option>
                      <option>El Salvador</option>
                      <option>Equatorial Guinea</option>
                      <option>Eritrea</option>
                      <option>Estonia</option>
                      <option>Eswatini</option>
                      <option>Ethiopia</option>
                      <option>Fiji</option>
                      <option>Finland</option>
                      <option>France</option>
                      <option>Gabon</option>
                      <option>Gambia</option>
                      <option>Georgia</option>
                      <option>Germany</option>
                      <option>Ghana</option>
                      <option>Greece</option>
                      <option>Grenada</option>
                      <option>Guatemala</option>
                      <option>Guinea</option>
                      <option>Guyana</option>
                      <option>Haiti</option>
                      <option>Honduras</option>
                      <option>Hungary</option>
                      <option>Iceland</option>
                      <option>India</option>
                      <option>Indonesia</option>
                      <option>Iran</option>
                      <option>Iraq</option>
                      <option>Ireland</option>
                      <option>Israel</option>
                      <option>Italy</option>
                      <option>Jamaica</option>
                      <option>Japan</option>
                      <option>Jordan</option>
                      <option>Kazakhstan</option>
                      <option>Kenya</option>
                      <option>Kuwait</option>
                      <option>Kyrgyzstan</option>
                      <option>Laos</option>
                      <option>Latvia</option>
                      <option>Lebanon</option>
                      <option>Libya</option>
                      <option>Liechtenstein</option>
                      <option>Lithuania</option>
                      <option>Luxembourg</option>
                      <option>Madagascar</option>
                      <option>Malawi</option>
                      <option>Malaysia</option>
                      <option>Maldives</option>
                      <option>Mali</option>
                      <option>Malta</option>
                      <option>Mauritania</option>
                      <option>Mauritius</option>
                      <option>Mexico</option>
                      <option>Moldova</option>
                      <option>Monaco</option>
                      <option>Mongolia</option>
                      <option>Montenegro</option>
                      <option>Morocco</option>
                      <option>Mozambique</option>
                      <option>Myanmar</option>
                      <option>Namibia</option>
                      <option>Nepal</option>
                      <option>Netherlands</option>
                      <option>New Zealand</option>
                      <option>Nicaragua</option>
                      <option>Niger</option>
                      <option>Nigeria</option>
                      <option>North Korea</option>
                      <option>North Macedonia</option>
                      <option>Norway</option>
                      <option>Oman</option>
                      <option>Pakistan</option>
                      <option>Palestine</option>
                      <option>Panama</option>
                      <option>Papua New Guinea</option>
                      <option>Paraguay</option>
                      <option>Peru</option>
                      <option>Philippines</option>
                      <option>Poland</option>
                      <option>Portugal</option>
                      <option>Qatar</option>
                      <option>Romania</option>
                      <option>Russia</option>
                      <option>Rwanda</option>
                      <option>Saudi Arabia</option>
                      <option>Senegal</option>
                      <option>Serbia</option>
                      <option>Singapore</option>
                      <option>Slovakia</option>
                      <option>Slovenia</option>
                      <option>Somalia</option>
                      <option>South Africa</option>
                      <option>South Korea</option>
                      <option>Spain</option>
                      <option>Sri Lanka</option>
                      <option>Sudan</option>
                      <option>Sweden</option>
                      <option>Switzerland</option>
                      <option>Syria</option>
                      <option>Taiwan</option>
                      <option>Tanzania</option>
                      <option>Thailand</option>
                      <option>Tunisia</option>
                      <option>Turkey</option>
                      <option>Uganda</option>
                      <option>Ukraine</option>
                      <option>United Arab Emirates</option>
                      <option>United Kingdom</option>
                      <option>United States</option>
                      <option>Uruguay</option>
                      <option>Uzbekistan</option>
                      <option>Venezuela</option>
                      <option>Vietnam</option>
                      <option>Yemen</option>
                      <option>Zambia</option>
                      <option>Zimbabwe</option>
                    </select>

                    <ChevronDown className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 sticky top-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Order summary
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">$99.00</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">$9.90</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-lg font-semibold">$108.90</span>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition flex items-center justify-center space-x-2">
                  <Lock className="w-4 h-4" />
                  <span>Pay now</span>
                </button>

                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mt-4">
                  <Shield className="w-4 h-4" />
                  <span>Payments are secure and encrypted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
