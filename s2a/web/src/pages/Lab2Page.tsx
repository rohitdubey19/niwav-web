// Second test page for the Concept to application flow.
// Spec: niwav-web.page.site.lab2 (specs/software/pages/lab2.md in the CyPhyS project vault).
import { Link } from 'react-router-dom';

const Lab2Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm p-8 sm:p-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Lab 2</h1>
          <p className="text-gray-700 mb-2">This page was built by the stage agent</p>
          <p className="text-gray-700 mb-6">from its page spec.</p>
          <p className="text-sm text-gray-500 mb-6">Built on: {__BUILD_DATE__}</p>
          <Link
            to="/lab"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            Back to Lab
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lab2Page;
