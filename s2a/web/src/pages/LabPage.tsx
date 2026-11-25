// Test page for the Concept to application flow.
// Spec: niwav-web.page.site.lab (specs/software/pages/lab.md in the CyPhyS project vault).
const LabPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm p-8 sm:p-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Lab</h1>
          <p className="text-gray-700 mb-2">This page tests how a page spec becomes a pull request.</p>
          <p className="text-sm text-gray-500">Built on: {__BUILD_DATE__}</p>
        </div>
      </div>
    </div>
  );
};

export default LabPage;
