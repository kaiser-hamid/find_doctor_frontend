import PaginationNP from "@/components/ui/PaginationPN";

export default function DoctorsSection() {
  return (
    <section className="pb-24">
      <div className="container">
        <div
          className="grid lg:grid-cols-3 gap-6 lg:py-16 py-14"
          data-aos="fade-up"
        >
          <div>
            <img
              src="assets/images/blog/blog-1.png"
              className="rounded-md mb-5"
            />
            <span className="bg-orange-500/10 text-orange-500 font-medium rounded-md text-xs py-1 px-2">
              <a href="#">Announcement</a>
            </span>
            <h1 className="text-lg my-3 transition-all hover:text-primary">
              <a href="#">Introducing new blazzing fast user interface</a>
            </h1>
            <p className="text-sm/relaxed tracking-wider text-gray-500">
              Introducing the blazzing fast user interface. The new UI is fast,
              secure and most user friendly...
              <a href="#" className="text-primary">
                read more
              </a>
            </p>
          </div>
          <div>
            <img
              src="assets/images/blog/blog-2.png"
              className="rounded-md mb-5"
            />
            <span className="bg-green-500/10 text-green-500 font-medium rounded-md text-xs py-1 px-2">
              <a href="#">Tutorial</a>
            </span>
            <h1 className="text-lg my-3 transition-all hover:text-primary">
              <a href="#">What you should know before considering the Prompt</a>
            </h1>
            <p className="text-sm/relaxed tracking-wider text-gray-500">
              We are giving a pretty extensive guideline and context before you
              make your decision to consider Prompt...
              <a href="#" className="text-primary">
                read more
              </a>
            </p>
          </div>
          <div>
            <img
              src="assets/images/blog/blog-3.png"
              className="rounded-md mb-5"
            />
            <span className="bg-teal-500/10 text-teal-500 font-medium rounded-md text-xs py-1 px-2">
              <a href="#">Community</a>
            </span>
            <h1 className="text-lg my-3 transition-all hover:text-primary">
              <a href="#">Your Way to a Successful Sales Campaigns</a>
            </h1>
            <p className="text-sm/relaxed tracking-wider text-gray-500">
              Explore a latest guideline for creating a successful online sales
              campaign using google adwords or facebook ads ...
              <a href="#" className="text-primary">
                read more
              </a>
            </p>
          </div>
        </div>
        <PaginationNP />
      </div>
    </section>
  );
}
