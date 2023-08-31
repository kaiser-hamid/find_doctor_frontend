import { FaQuoteLeft } from "react-icons/fa";

export default () => {
  return (
    <section className="py-12">
      <div className="container">
        <div className="mt-14">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            <div className="p-10 border rounded-xl bg-slate-100 shadow">
              <FaQuoteLeft className="text-3xl" />
              <p className="my-4">
                It is one of the very convenient to use project manager ever! I
                have tried many project management apps for my daily tasks, but
                this one is far better than others. Simply loved it!
              </p>
              <div className="border-b border-gray-200 w-full my-7" />
              <div className="flex items-center gap-2">
                <img
                  src="assets/images/avatars/img-2.jpg"
                  alt="avatar"
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <h1 className="text-sm mb-1">Cersei Lannister</h1>
                  <p className="text-gray-500 text-xs">Senior Consaltant</p>
                </div>
              </div>
            </div>
            <div className="p-10 border rounded-xl bg-slate-100 shadow">
              <FaQuoteLeft className="text-3xl" />
              <p className="my-4">
                It is one of the very convenient to use project manager ever! I
                have tried many project management apps for my daily tasks, but
                this one is far better than others. Simply loved it!
              </p>
              <div className="border-b border-gray-200 w-full my-7" />
              <div className="flex items-center gap-2">
                <img
                  src="assets/images/avatars/img-2.jpg"
                  alt="avatar"
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <h1 className="text-sm mb-1">Cersei Lannister</h1>
                  <p className="text-gray-500 text-xs">Senior Consaltant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
