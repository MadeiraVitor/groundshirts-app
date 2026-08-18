export const LoginForm = () => {
  return (
    <body className="bg-background text-on-background font-body-md min-h-screen flex flex-col antialiased">
      {/* <!-- SUPPRESSED TOPNAVBAR - Transactional Page Intent --> */}
      <main className="grow relative flex items-center justify-center py-20 px-4 md:px-margin-desktop min-h-screen">
        {/* <!-- Background Image --> */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            alt=""
            className="w-full h-full object-cover object-center opacity-90 scale-105 transform origin-center transition-transform duration-[20s] ease-out hover:scale-100"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ5At72OptUZOabYYeQHtN9ZBMDMiMLlxuqAEQFT-mS7Lsuenm6k2h52Mt22N2mn_hxoIMWq1BCDiHD-GNRT10UfGBxELwiUuvjemmtSPepaUaWNkZ2rH-CZ8hI6jkxMWm6Ut4IG18BakkK7B2trqVSI78Df82fagyzZzDIjUlYQ321DZkzrl03WkRsmwRT9RAITIDmPPPVuyS-1UvXu3WPNJDppJFQ-fg_vH9X1woxLb47O3MCGUk"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        {/* <!-- Login Container --> */}
        <div className="relative z-10 w-full max-w-md mx-auto">
          <div className="glass-panel p-8 md:p-12 shadow-[0px_10px_30px_rgba(0,0,0,0.08)]">
            <div className="text-center mb-10">
              <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-black tracking-tighter text-on-surface mb-2 uppercase">
                SYNTAXWEAR
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Sign in to your account
              </p>
            </div>
            <form action="#" className="space-y-6" method="POST">
              <div>
                <label className="block font-label-sm text-label-sm uppercase tracking-widest text-on-surface mb-2">
                  Email Address
                </label>
                <input
                  className="w-full border-0 border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-3 font-body-lg text-body-lg text-on-surface transition-colors bg-transparent placeholder:text-on-surface-variant/50"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block font-label-sm text-label-sm uppercase tracking-widest text-on-surface">
                    Password
                  </label>
                  <a
                    className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors hover:underline decoration-1 underline-offset-4"
                    href="#"
                  >
                    Forgot?
                  </a>
                </div>
                <input
                  className="w-full border-0 border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-3 font-body-lg text-body-lg text-on-surface transition-colors bg-transparent placeholder:text-on-surface-variant/50"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  type="password"
                />
              </div>
              <div className="pt-4">
                <button
                  className="w-full bg-primary-container text-on-primary py-4 px-8 font-label-sm text-label-sm uppercase tracking-widest hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-2 group"
                  type="submit"
                >
                  <span>Login</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
            </form>
            <div className="mt-8 text-center">
              <p className="font-body-md text-body-md text-on-surface-variant">
                New to SYNTAXWEAR?
                <a
                  className="text-primary hover:underline decoration-1 underline-offset-4 ml-1"
                  href="#"
                >
                  Create an account
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      {/* <!-- SUPPRESSED FOOTER - Transactional Page Intent --> */}
    </body>
  );
};
