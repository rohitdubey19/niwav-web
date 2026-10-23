import { Link } from 'react-router-dom';
import { Shield, ArrowLeft } from 'lucide-react';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Niwav
        </Link>

        <div className="bg-white rounded-xl shadow-sm p-8 sm:p-12">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
          <p className="text-sm text-gray-500 mb-8">Last updated: October 23, 2026</p>

          <div className="prose prose-gray max-w-none text-sm leading-relaxed space-y-6">
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-3">1. Introduction</h2>
              <p>Niwav ("we", "us", "our") is a proprietorship based in India; its incorporation as a private limited company is in progress. This Privacy Policy explains how we collect, use, and protect your personal information when you visit niwav.in or use any of our products and services.</p>
              <p>We comply with the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023 (DPDPA) of India.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-3">2. Scope</h2>
              <p>This policy covers the Niwav corporate website (niwav.in). Our individual products have their own privacy policies:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>FinAsor:</strong> <a href="https://finasor.niwav.in/privacy" className="text-blue-600 hover:underline">finasor.niwav.in/privacy</a></li>
                <li><strong>CyPhyS:</strong> <a href="https://cyphys.niwav.in" className="text-blue-600 hover:underline">cyphys.niwav.in</a></li>
                <li><strong>LeapKnowlogy MES:</strong> <a href="https://mes.niwav.in" className="text-blue-600 hover:underline">mes.niwav.in</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-3">3. Information We Collect</h2>
              <p>On this corporate website, we collect minimal information:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Contact form submissions:</strong> Name, email, message content (when you contact us)</li>
                <li><strong>Usage data:</strong> Pages visited, device type, browser, IP address (standard server logs)</li>
              </ul>
              <p className="text-gray-600 mt-2">We do not use third-party analytics, tracking pixels, or advertising cookies on this site.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-3">4. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Respond to your inquiries and provide requested services</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="text-gray-600 mt-2">We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-3">5. Data Storage & Security</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Data stored on servers hosted in India</li>
                <li>All communication over HTTPS (TLS 1.3)</li>
                <li>Access restricted to authorized personnel</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-3">6. Your Rights (DPDPA 2023)</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Right to access:</strong> Request a copy of your personal data</li>
                <li><strong>Right to correction:</strong> Update or correct inaccurate data</li>
                <li><strong>Right to erasure:</strong> Request deletion of your data</li>
                <li><strong>Right to withdraw consent:</strong> Opt out of data processing at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-3">7. Cookies</h2>
              <p>This website uses only essential cookies for basic site functionality. We do not use tracking cookies, third-party analytics, or advertising cookies.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-3">8. Changes to This Policy</h2>
              <p>We may update this policy from time to time. Material changes will be posted on this page with an updated date.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-3">9. Contact</h2>
              <p>For privacy-related queries:</p>
              <p className="mt-2">
                <strong>Niwav</strong><br />
                Email: <a href="mailto:privacy@niwav.in" className="text-blue-600 hover:underline">privacy@niwav.in</a><br />
                India
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-3">10. Grievance Officer</h2>
              <p>For any grievance about how we process your personal data, including under the Digital Personal Data Protection Act, 2023, contact our Grievance Officer:</p>
              <p className="mt-2">
                Grievance Officer: Rohit Dubey<br />
                Email: <a href="mailto:dubey.rohit@gmail.com" className="text-blue-600 hover:underline">dubey.rohit@gmail.com</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
