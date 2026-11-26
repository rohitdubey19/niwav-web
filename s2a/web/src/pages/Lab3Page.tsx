// Third test page for the Concept to application flow.
// Spec: niwav-web.page.site.lab3 (specs/software/pages/lab3.md in the CyPhyS project vault).
import { Link } from 'react-router-dom';

const Lab3Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm p-8 sm:p-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Lab 3</h1>
          <p className="text-gray-700 mb-2">This page was marked built when its pull</p>
          <p className="text-gray-700 mb-6">request merged.</p>
          <p className="text-sm text-gray-500 mb-6">Built on: {__BUILD_DATE__}</p>
          <Link
            to="/lab2"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            Back to Lab 2
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lab3Page;
