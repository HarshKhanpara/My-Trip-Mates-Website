import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const PrivacyPolicy = () => {
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
            <div className="bg-gradient-to-b from-blue-50 via-white to-gray-50 py-16">
                <div className="p-6 md:p-12 max-w-5xl mx-auto bg-white shadow-xl rounded-2xl border border-gray-200">
                    <h1 className="text-5xl font-bold text-gray-900 mb-10 text-center">
                        Privacy Policy
                    </h1>
                    <p className="text-gray-700 text-lg leading-relaxed mb-10">
                        Welcome to <strong>My Trip Mates!</strong> Your privacy is of utmost
                        importance to us. This Privacy Policy outlines the types of personal
                        information we collect, how we use it, and your rights regarding your data.
                    </p>

                    <h2 className="text-3xl font-semibold text-gray-800 mt-10 mb-5">
                        1. Information We Collect
                    </h2>
                    <ul className="list-disc pl-10 space-y-4 text-gray-700 text-base leading-relaxed">
                        <li>
                            <strong>Personal Information:</strong> Name, email address, phone
                            number, etc.
                        </li>
                        <li>
                            <strong>Travel Preferences:</strong> Trip destinations, activity
                            preferences.
                        </li>
                        <li>
                            <strong>Device Information:</strong> IP address, browser type,
                            operating system.
                        </li>
                        <li>
                            <strong>Location Data:</strong> To provide personalized trip
                            recommendations.
                        </li>
                    </ul>

                    <h2 className="text-3xl font-semibold text-gray-800 mt-10 mb-5">
                        2. How We Use Your Information
                    </h2>
                    <ul className="list-disc pl-10 space-y-4 text-gray-700 text-base leading-relaxed">
                        <li>To personalize your travel experience.</li>
                        <li>To communicate trip updates and promotions.</li>
                        <li>To enhance app functionality and improve user experience.</li>
                        <li>To ensure the safety of all users during group trips.</li>
                    </ul>

                    <h2 className="text-3xl font-semibold text-gray-800 mt-10 mb-5">
                        3. Sharing Your Information
                    </h2>
                    <p className="text-gray-700 text-base leading-relaxed mb-10">
                        We do not sell or rent your information to third parties. Data is shared
                        only with trusted partners (e.g., accommodations or transport providers)
                        essential for trip execution.
                    </p>

                    <h2 className="text-3xl font-semibold text-gray-800 mt-10 mb-5">
                        4. Your Rights
                    </h2>
                    <ul className="list-disc pl-10 space-y-4 text-gray-700 text-base leading-relaxed">
                        <li>Access your data.</li>
                        <li>Request correction or deletion of your data.</li>
                        <li>Opt out of marketing communications.</li>
                    </ul>

                    <p className="text-gray-700 text-base leading-relaxed mt-10">
                        For queries, email us at{" "}
                        <a
                            href="mailto:privacy@[yourappname].com"
                            className="text-blue-600 hover:text-blue-800 font-medium underline"
                        >
                            privacy@mytripmates.com
                        </a>
                        .
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default PrivacyPolicy;
