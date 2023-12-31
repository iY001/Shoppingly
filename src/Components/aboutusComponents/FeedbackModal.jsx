import React, { useState } from "react";

export default function FeedbackModal() {
  const [show, setshow_modal_XV] = useState(true);
  return (
    <>
      <div className="bg-gray-200">
        <div className="px-4 py-12">
          <div
            className={`${
              show ? "hidden" : "flex"
            } container mx-auto justify-center items-center px-4 md:px-10 py-20`}
          >
            <div className="container mx-auto flex justify-center items-center px-4 md:px-10 py-20 relative">
              <button
                onClick={() => setshow_modal_XV(true)}
                className="bg-white text-gray-800 py-5 px-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white rounded"
              >
                Open Modal
              </button>
            </div>
          </div>
          <div
            className={`${
              show ? "" : "hidden"
            } lg:max-w-[842px] md:max-w-[744px] max-w-[375px] w-full mx-auto bg-white lg:px-[109px] md:px-12 px-3 py-20 relative`}
          >
            <div>
              <svg
                onClick={() => setshow_modal_XV(false)}
                className="cursor-pointer absolute right-4 top-4 z-10"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.28033 6.21967C6.98744 5.92678 6.51256 5.92678 6.21967 6.21967C5.92678 6.51256 5.92678 6.98744 6.21967 7.28033L10.9393 12L6.21967 16.7197C5.92678 17.0126 5.92678 17.4874 6.21967 17.7803C6.51256 18.0732 6.98744 18.0732 7.28033 17.7803L12 13.0607L16.7197 17.7803C17.0126 18.0732 17.4874 18.0732 17.7803 17.7803C18.0732 17.4874 18.0732 17.0126 17.7803 16.7197L13.0607 12L17.7803 7.28033C18.0732 6.98744 18.0732 6.51256 17.7803 6.21967C17.4874 5.92678 17.0126 5.92678 16.7197 6.21967L12 10.9393L7.28033 6.21967Z"
                  fill="#373737"
                />
              </svg>
              <p className="text-center lg:text-4xl md:text-3xl text-3xl text-gray-800 font-semibold">
                Your feedback is valueable to us
              </p>
              <p className="text-gray-600 text-base text-center lg:mt-8 md:mt-6 mt-6">
                Would you mind taking a moment to please share you feedback?
              </p>
              <p className="text-gray-800 text-xl font-semibold text-center mt-12">
                How likely are you to recommend this product to your friends
                &amp; colleagues?
              </p>
              <div className="flex md:justify-between justify-center pt-10 md:flex-nowrap flex-wrap md:gap-0 gap-3">
                <div className="flex flex-col items-center">
                  <input
                    type="radio"
                    name="radio"
                    className="accent-gray-800 border border-red-900 cursor-pointer md:h-6 md:w-6 h-4 w-4"
                  />
                  <p className="text-gray-600 text-base">1</p>
                </div>
                <div className="flex flex-col items-center">
                  <input
                    type="radio"
                    name="radio"
                    className="accent-gray-800 cursor-pointer md:h-6 md:w-6 h-4 w-4"
                  />
                  <p className="text-gray-600 text-base">2</p>
                </div>
                <div className="flex flex-col items-center">
                  <input
                    type="radio"
                    name="radio"
                    className="accent-gray-800 cursor-pointer md:h-6 md:w-6 h-4 w-4"
                  />
                  <p className="text-gray-600 text-base">3</p>
                </div>
                <div className="flex flex-col items-center">
                  <input
                    type="radio"
                    name="radio"
                    className="accent-gray-800 cursor-pointer md:h-6 md:w-6 h-4 w-4"
                  />
                  <p className="text-gray-600 text-base">4</p>
                </div>
                <div className="flex flex-col items-center">
                  <input
                    type="radio"
                    name="radio"
                    className="accent-gray-800 cursor-pointer md:h-6 md:w-6 h-4 w-4"
                  />
                  <p className="text-gray-600 text-base">5</p>
                </div>
                <div className="flex flex-col items-center">
                  <input
                    type="radio"
                    name="radio"
                    className="accent-gray-800 cursor-pointer md:h-6 md:w-6 h-4 w-4"
                  />
                  <p className="text-gray-600 text-base">6</p>
                </div>
                <div className="flex flex-col items-center">
                  <input
                    type="radio"
                    name="radio"
                    className="accent-gray-800 cursor-pointer md:h-6 md:w-6 h-4 w-4"
                  />
                  <p className="text-gray-600 text-base">7</p>
                </div>
                <div className="flex flex-col items-center">
                  <input
                    type="radio"
                    name="radio"
                    className="accent-gray-800 cursor-pointer md:h-6 md:w-6 h-4 w-4"
                  />
                  <p className="text-gray-600 text-base">8</p>
                </div>
                <div className="flex flex-col items-center">
                  <input
                    type="radio"
                    name="radio"
                    className="accent-gray-800 cursor-pointer md:h-6 md:w-6 h-4 w-4"
                  />
                  <p className="text-gray-600 text-base">9</p>
                </div>
                <div className="flex flex-col items-center">
                  <input
                    type="radio"
                    name="radio"
                    className="accent-gray-800 cursor-pointer md:h-6 md:w-6 h-4 w-4"
                  />
                  <p className="text-gray-600 text-base">10</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-8">
              <p className="text-gray-600 text-base">Not likely</p>
              <p className="text-gray-600 text-base">Extreme likely</p>
            </div>
            <div className="mt-8">
              <textarea
                className="md:w-[643px] w-full md:h-[208px] h-[340px] resize-none focus:outline-none border border-gray-300 placeholder-gray-600 py-4 px-4"
                placeholder="Why do you feel that way?"
                defaultValue={""}
              />
            </div>
            <div className="lg:flex justify-center gap-8 text-center lg:mt-6 md:mt-8 mt-8">
              <button className="bg-gray-800 hover:bg-gray-700 transition duration-300 ease-out lg:max-w-[187px] w-full text-white py-3 font-medium text-base">
                Submit
              </button>
              <button className="border border-gray-300 hover:bg-gray-50 transition duration-300 ease-out text-gray-600 py-3 lg:max-w-[187px] w-full lg:mt-0 md:mt-4 mt-4">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
