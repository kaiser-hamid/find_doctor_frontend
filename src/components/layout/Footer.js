export default function Footer() {
  return (
    <>
      <footer className="bg-gray-100">
        <div className="container">
          <div className="grid xl:grid-cols-5 gap-6 py-12">
            <div className="xl:col-span-2">
              <a href="index.html">
                <img src="assets/images/logo-dark.png" className="h-8" />
              </a>
              <p className="text-gray-500/80 mt-5 lg:w-4/5">
                Make your web application stand out with high-quality landing
                page
              </p>
            </div>
            <div className="xl:col-span-3 col-span-4">
              <div className="flex flex-col sm:flex-row gap-6 flex-wrap justify-between">
                <div>
                  <div className="flex flex-col gap-3">
                    <h5 className="mb-3 uppercase">Platform</h5>
                    <div className="text-gray-500/80">
                      <a href="#">Demo</a>
                    </div>
                    <div className="text-gray-500/80">
                      <a href="#">Pricing</a>
                    </div>
                    <div className="text-gray-500/80">
                      <a href="#">Integrations</a>
                    </div>
                    <div className="text-gray-500/80">
                      <a href="#">Status</a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col gap-3">
                    <h5 className="mb-3 uppercase">Knowledge Base</h5>
                    <div className="text-gray-500/80">
                      <a href="#">Blog</a>
                    </div>
                    <div className="text-gray-500/80">
                      <a href="#">Help Center</a>
                    </div>
                    <div className="text-gray-500/80">
                      <a href="#">Sales Tools catalog</a>
                    </div>
                    <div className="text-gray-500/80">
                      <a href="#">API</a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col gap-3">
                    <h5 className="mb-3 uppercase">Company</h5>
                    <div className="text-gray-500/80">
                      <a href="#">About us</a>
                    </div>
                    <div className="text-gray-500/80">
                      <a href="#">Career</a>
                    </div>
                    <div className="text-gray-500/80">
                      <a href="#">Contact Us</a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col gap-3">
                    <h5 className="mb-3 uppercase">Legal</h5>
                    <div className="text-gray-500/80">
                      <a href="#">Usage Policy</a>
                    </div>
                    <div className="text-gray-500/80">
                      <a href="#">Privacy Policy</a>
                    </div>
                    <div className="text-gray-500/80">
                      <a href="#">Terms of Service</a>
                    </div>
                    <div className="text-gray-500/80">
                      <a href="#">Trust</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t py-6">
            <div className="grid sm:grid-cols-2 text-center sm:text-start gap-6">
              <div>
                <p className="text-gray-500/80 text-sm">
                  © Prompt. All rights reserved. Crafted by{" "}
                  <a
                    href="#"
                    className="text-gray-800 hover:text-primary transition-all"
                  >
                    Coderthemes
                  </a>
                </p>
              </div>
              <div className="flex justify-center sm:justify-end gap-7">
                <div>
                  <a href="#">
                    <svg
                      className="w-5 h-5 text-gray-500 hover:text-primary transition-all"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <svg
                      className="w-5 h-5 text-gray-500 hover:text-primary transition-all"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    </svg>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <svg
                      className="w-5 h-5 text-gray-500 hover:text-primary transition-all"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x={2} y={9} width={4} height={12} />
                      <circle cx={4} cy={4} r={2} />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
