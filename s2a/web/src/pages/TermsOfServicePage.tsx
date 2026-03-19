import { Link } from 'react-router-dom';
import { FileText, ArrowLeft } from 'lucide-react';

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Niwav
        </Link>

        <div className="bg-white rounded-xl shadow-sm p-8 sm:p-12">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-8 h-8 text-violet-600" />
            <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
          </div>
          <p className="text-sm text-gray-500 mb-8">Last updated: March 18, 2026</p>

          <div className="prose prose-gray max-w-none text-sm leading-relaxed space-y-6">
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-3">1. Acceptance of Terms</h2>
              <p>By accessing or using the Niwav website (niwav.in) or any of our services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-3">2. About Niwav</h2>
              <p>Niwav is a proprietorship based in India, offering:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Technology products:</strong> FinAsor (AI algo trading), CyPhyS (product lifecycle platform)</li>
                <li><strong>Technology partner products:</strong> Products built and maintained for partner companies</li>
                <li><strong>Consulting services:</strong> Product engineering, technology strategy, platform architecture</li>
              </ul>
              <p className="text-gray-600 mt-2">Individual products are governed by their own terms of service, available on their respective platforms.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-3">3. Services</h2>
              <p>Niwav provides technology services including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Custom software product development</li>
                <li>Platform engineering and DevOps</li>
                <li>AI/ML model development and deployment</li>
                <li>Technology consulting and architecture review</li>
                <li>Managed hosting and ongoing maintenance</li>
              </ul>
              <p className="text-gray-600 mt-2">Specific service terms, deliverables, and pricing are defined in individual engagement agreements.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-3">4. Intellectual Property</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>The Niwav name, logo, and website content are our intellectual property</li>
                <li>Product names (FinAsor, CyPhyS) and their associated brands are trademarks of Niwav</li>
                <li>Partner product IP is governed by individual partnership agreements</li>
                <li>You may not copy, modify, or distribute our content without prior written consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-3">5. Consulting Engagements</h2>
              <p>For consulting and service engagements:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Scope, timeline, and deliverables are defined in a signed Statement of Work (SOW)</li>
                <li>Payment terms are per the SOW; standard is 50% advance, 50% on delivery</li>
                <li>Either party may terminate with 30 days written notice</li>
                <li>Work product ownership is defined in the SOW (typically client-owned)</li>
                <li>Niwav retains the right to reuse non-proprietary tools, frameworks, and methods developed during engagements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-3">6. Limitation of Liability</h2>
              <p>To the maximum extent permitted by Indian law:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Our website and corporate information are provided "as is"</li>
                <li>We are not liable for indirect, incidental, or consequential damages</li>
                <li>Our total liability is limited to the fees paid under the relevant service agreement</li>
                <li>Product-specific liabilities are governed by respective product terms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-3">7. Governing Law & Disputes</h2>
              <p>These Terms are governed by the laws of India. Disputes shall be resolved through:</p>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Good-faith negotiation (30 days)</li>
                <li>Mediation under the Indian Arbitration and Conciliation Act, 1996</li>
                <li>Courts of competent jurisdiction in India</li>
              </ol>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-3">8. Changes to Terms</h2>
              <p>We may modify these Terms at any time. Material changes will be posted on this page. Continued use after changes constitutes acceptance.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-3">9. Contact</h2>
              <p>For questions about these Terms:</p>
              <p className="mt-2">
                <strong>Niwav</strong><br />
                Email: <a href="mailto:legal@niwav.in" className="text-blue-600 hover:underline">legal@niwav.in</a><br />
                India
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
