import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const TermsAndConditions = () => {
    return (
        <>
            <Navbar
                backgroundColor="white"
                textColor="black"
                buttonColor="#E15E2E"
                hoverColor="#E15E2E"
                dropdownBgColor="white"
                dropdownTextColor="black"
            />
            <div className="bg-gradient-to-b from-gray-50 via-white to-gray-100 py-16">
                <div className="p-6 md:p-12 max-w-5xl mx-auto bg-white shadow-lg rounded-2xl border border-gray-200">
                    <h1 className="text-5xl font-bold text-gray-900 mb-10 text-center">
                        Terms and Conditions
                    </h1>
                    <p className="text-gray-700 text-lg leading-relaxed mb-10">
                        By accessing or using <strong>My Trip Mates</strong>, you agree to the
                        following terms and conditions. Please read them carefully.
                    </p>

                    <h2 className="text-3xl font-semibold text-gray-800 mt-10 mb-5">
                        1. Booking and Payments
                    </h2>
                    <ul className="list-disc pl-10 space-y-4 text-gray-700 text-base leading-relaxed">
                        <li>
                            Bookings are confirmed upon receipt of the advance payment.
                        </li>
                        <li>
                            Full payment must be made by the deadlines communicated during booking.
                        </li>
                    </ul>

                    <h2 className="text-3xl font-semibold text-gray-800 mt-10 mb-5">
                        2. Cancellations and Refunds
                    </h2>
                    <ul className="list-disc pl-10 space-y-4 text-gray-700 text-base leading-relaxed">
                        <li>
                            Cancellation fees apply as per the trip itinerary.
                        </li>
                        <li>
                            Refunds, if applicable, are processed within 14 business days.
                        </li>
                    </ul>

                    <h2 className="text-3xl font-semibold text-gray-800 mt-10 mb-5">
                        3. User Conduct
                    </h2>
                    <ul className="list-disc pl-10 space-y-4 text-gray-700 text-base leading-relaxed">
                        <li>
                            Users must adhere to the age restrictions (18-32 years).
                        </li>
                        <li>
                            Disruptive behavior during trips may result in removal without refund.
                        </li>
                    </ul>

                    <h2 className="text-3xl font-semibold text-gray-800 mt-10 mb-5">
                        4. Liability
                    </h2>
                    <p className="text-gray-700 text-base leading-relaxed mb-10">
                        <strong>My Trip Mates</strong> is not responsible for personal losses,
                        delays, or unforeseen events during trips. Travel insurance is
                        recommended.
                    </p>

                    <h2 className="text-3xl font-semibold text-gray-800 mt-10 mb-5">
                        5. Changes to Itinerary
                    </h2>
                    <p className="text-gray-700 text-base leading-relaxed mb-10">
                        We reserve the right to modify itineraries due to unforeseen
                        circumstances. Users will be informed promptly of any changes.
                    </p>

                    <p className="text-gray-700 text-base leading-relaxed mt-10">
                        For queries, contact us at{" "}
                        <a
                            href="mailto:info@[yourappname].com"
                            className="text-blue-600 hover:text-blue-800 font-medium underline"
                        >
                            info@[yourappname].com
                        </a>
                        .
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default TermsAndConditions;
