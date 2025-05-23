import React, { useState } from "react";

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [usersAccordionOpen, setUsersAccordionOpen] = useState(false);
  const [subMenu1Open, setSubMenu1Open] = useState(false);
  const [subMenu2Open, setSubMenu2Open] = useState(false);
  const [accountAccordionOpen, setAccountAccordionOpen] = useState(false);

  return (
    <>
      {/* Navigation Toggle Button (Mobile) */}
      <div className="lg:hidden py-16 text-center">
        <button
          type="button"
          onClick={() => setSidebarOpen(true)}
          className="py-2 px-3 inline-flex justify-center items-center gap-x-2 text-start bg-gray-800 border border-gray-800 text-white text-sm font-medium rounded-lg shadow-2xs align-middle hover:bg-gray-950 focus:outline-none focus:bg-gray-900 dark:bg-white dark:text-neutral-800 dark:hover:bg-neutral-200 dark:focus:bg-neutral-200"
          aria-haspopup="dialog"
          aria-expanded={sidebarOpen}
          aria-controls="sidebar"
          aria-label="Toggle navigation"
        >
          Open
        </button>
      </div>

      {/* Sidebar Overlay */}
      <div
        id="sidebar"
        role="dialog"
        tabIndex={-1}
        aria-label="Sidebar"
        className={`fixed top-0 left-0 bottom-0 z-60 w-64 bg-white border-r border-gray-200 dark:bg-neutral-800 dark:border-neutral-700 h-full transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:block`}
      >
        <div className="relative flex flex-col h-full max-h-full">
          {/* Header */}
          <header className="p-4 flex justify-between items-center gap-x-2">
            <a
              href="#"
              className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white"
              aria-label="Brand"
            >
              Brand
            </a>

            {/* Close Button (Mobile) */}
            <div className="lg:hidden -mr-2">
              <button
                type="button"
                onClick={() => setSidebarOpen(false)}
                className="flex justify-center items-center gap-x-3 w-6 h-6 bg-white border border-gray-200 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
              >
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18" />
                  <path d="M6 6L18 18" />
                </svg>
                <span className="sr-only">Close</span>
              </button>
            </div>
          </header>

          {/* Body / Navigation */}
          <nav className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300 scrollbar-track-gray-100 dark:scrollbar-track-neutral-700 dark:scrollbar-thumb-neutral-500">
            <ul className="flex flex-col space-y-1 px-2">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-white"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 9L12 2L21 9V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  Dashboard
                </a>
              </li>

              {/* Users Accordion */}
              <li>
                <button
                  type="button"
                  onClick={() => setUsersAccordionOpen(!usersAccordionOpen)}
                  aria-expanded={usersAccordionOpen}
                  aria-controls="users-accordion-collapse"
                  className="w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  Users

                  {/* Accordion icon */}
                  <svg
                    className={`ml-auto w-4 h-4 text-gray-600 dark:text-neutral-400 ${
                      usersAccordionOpen ? "rotate-180" : ""
                    } transition-transform`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                {/* Users Submenus */}
                {usersAccordionOpen && (
                  <div
                    id="users-accordion-collapse"
                    className="pl-7 space-y-1"
                    role="region"
                  >
                    {/* Sub Menu 1 */}
                    <li>
                      <button
                        type="button"
                        onClick={() => setSubMenu1Open(!subMenu1Open)}
                        aria-expanded={subMenu1Open}
                        aria-controls="sub-menu-1-collapse"
                        className="w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                      >
                        Sub Menu 1
                        <svg
                          className={`ml-auto w-4 h-4 text-gray-600 dark:text-neutral-400 ${
                            subMenu1Open ? "rotate-180" : ""
                          } transition-transform`}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </button>

                      {/* Links under Sub Menu 1 */}
                      {subMenu1Open && (
                        <ul className="pt-1 pl-2 space-y-1">
                          <li>
                            <a
                              href="#"
                              className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                            >
                              Link 1
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                            >
                              Link 2
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                            >
                              Link 3
                            </a>
                          </li>
                        </ul>
                      )}
                    </li>

                    {/* Sub Menu 2 */}
                    <li>
                      <button
                        type="button"
                        onClick={() => setSubMenu2Open(!subMenu2Open)}
                        aria-expanded={subMenu2Open}
                        aria-controls="sub-menu-2-collapse"
                        className="w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                      >
                        Sub Menu 2
                        <svg
                          className={`ml-auto w-4 h-4 text-gray-600 dark:text-neutral-400 ${
                            subMenu2Open ? "rotate-180" : ""
                          } transition-transform`}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </button>

                      {/* Links under Sub Menu 2 */}
                      {subMenu2Open && (
                        <ul className="pt-1 pl-2 space-y-1">
                          <li>
                            <a
                              href="#"
                              className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                            >
                              Link 1
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                            >
                              Link 2
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                            >
                              Link 3
                            </a>
                          </li>
                        </ul>
                      )}
                    </li>
                  </div>
                )}
              </li>

              {/* Account Accordion */}
              <li>
                <button
                  type="button"
                  onClick={() => setAccountAccordionOpen(!accountAccordionOpen)}
                  aria-expanded={accountAccordionOpen}
                  aria-controls="account-accordion-collapse"
                  className="w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <path d="M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                  </svg>
                  Account

                  <svg
                    className={`ml-auto w-4 h-4 text-gray-600 dark:text-neutral-400 ${
                      accountAccordionOpen ? "rotate-180" : ""
                    } transition-transform`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                {/* Account Links */}
                {accountAccordionOpen && (
                  <ul
                    id="account-accordion-collapse"
                    className="pl-7 space-y-1"
                    role="region"
                  >
                    <li>
                      <a
                        href="#"
                        className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                      >
                        My Profile
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
