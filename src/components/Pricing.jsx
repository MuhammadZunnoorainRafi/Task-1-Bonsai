import React, { useState } from 'react';

function Pricing() {
  const [month, setMonth] = useState('MONTH');
  return (
    <div className="max-w-4xl mx-auto px-2 pb-14">
      <div className="flex items-center justify-between py-10">
        <h3 className="font-bold text-2xl">Plans & Pricing</h3>
        <div className="flex space-x-2">
          <p className=" font-medium">Monthly</p>
          <input
            type="checkbox"
            onClick={() =>
              setMonth((prevValue) =>
                prevValue === 'MONTH' ? 'YEAR' : 'MONTH'
              )
            }
            className="toggle bg-primary "
          />
          <p className=" font-medium">Yearly</p>
        </div>
      </div>
      <div class="flex justify-center items-center min-h-screen ">
        <div class="flex flex-col py-6 space-y-6 lg:flex-row lg:py-0 lg:space-x-6 lg:space-y-0">
          <div class=" rounded-md shadow-2xl">
            <div class="p-8 mx-3 dark:bg-gray-800 mt-3 rounded-t-xl">
              <div class="text-left uppercase">Workflow</div>

              <h3 class="mt-2 pb-8 text-5xl text-center">
                {month === 'YEAR' ? '$200' : '$19'}/
                <span className=" text-base">{month}</span>
              </h3>
              <div class=" border border-primary"></div>
            </div>

            <div class="pb-8 mx-3 mb-3 dark:bg-gray-800 rounded-b-xl">
              <div class="flex flex-col px-6 items-start space-y-2">
                <div class="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-primary"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                  <span class="text-sm ml-1">Proposals</span>
                </div>
                <div class="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-primary"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                  <span class="text-sm ml-1">Contacts</span>
                </div>
                <div class="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-primary"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                  <span class="text-sm ml-1">Project Managements</span>
                </div>
                <div class="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-primary"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                  <span class="text-sm ml-1">Expense Tracking</span>
                </div>
                <div class="ml-2 ">
                  <button class="inline-block py-3 px-10 my-6 text-center   hover:text-primary border border-primary bg-primary hover:bg-white text-white  duration-200 rounded-sm">
                    START FREE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="  bg-yellow-500  rounded-md shadow-2xl ">
            <p className=" text-xs text-white text-center pt-1">
              Best Value For Money
            </p>
            <div class="p-8 mx-3 mt-3 bg-white dark:bg-gray-800 rounded-t-xl">
              <div class="text-left uppercase">Workflow Plus</div>
              <h3 class="pb-8 mt-2 text-5xl text-center">
                {month === 'YEAR' ? '$300' : '$29'}/
                <span className=" text-base">{month}</span>
              </h3>
              <div class="border border-primary"></div>
            </div>
            <div class="pb-8 bg-white dark:bg-gray-800 mx-3 mb-3 rounded-b-xl ">
              <div class="flex flex-col px-6 items-start space-y-2">
                <div class="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-primary"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                  <span class="text-sm ml-1">Client Portal</span>
                </div>
                <div class="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-primary"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                  <span class="text-sm ml-1">Custom Branding</span>
                </div>
                <div class="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-primary"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                  <span class="text-sm ml-1">Invoicing</span>{' '}
                  <span className="text-xs px-1 rounded-sm bg-yellow-500 text-white  ml-1">
                    NEW
                  </span>
                </div>
                <div class="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-primary"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                  <span class="text-sm ml-1">Zapier Integration</span>
                </div>
                <div class="ml-2">
                  <button
                    href="#"
                    class="inline-block py-3 px-10 my-6 text-center   hover:text-primary border border-primary bg-primary hover:bg-white text-white   duration-200 rounded-sm"
                  >
                    START FREE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class=" rounded-md shadow-2xl">
            <div class="p-8 mx-3 dark:bg-gray-800 mt-3 rounded-t-xl">
              <div class="text-left uppercase">Workflow</div>

              <h3 class="mt-2 pb-8 text-5xl text-center">
                {month === 'YEAR' ? '$200' : '$19'}/
                <span className=" text-base">{month}</span>
              </h3>
              <div class=" border border-primary"></div>
            </div>

            <div class="pb-8 mx-3 mb-3 dark:bg-gray-800 rounded-b-xl">
              <div class="flex flex-col px-6 items-start space-y-2">
                <div class="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-primary"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                  <span class="text-sm ml-1">Proposals</span>
                </div>
                <div class="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-primary"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                  <span class="text-sm ml-1">Contacts</span>
                </div>
                <div class="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-primary"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                  <span class="text-sm ml-1">Project Managements</span>
                </div>
                <div class="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-primary"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                  <span class="text-sm ml-1">Expense Tracking</span>
                </div>
                <div class="ml-2 ">
                  <button class="inline-block py-3 px-10 my-6 text-center   hover:text-primary border border-primary bg-primary hover:bg-white text-white  duration-200 rounded-sm">
                    START FREE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
