import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div>
      <div class="container my-auto mx-auto sm:px-4 pt-10 pb-32">
        <div class="lg:h-full content-center grid grid-cols-3 gap-3">
          <div class="md:max-w-sm rounded-lg overflow-hidden shadow-xl mx-4 mb-4">
            <div class="bg-cover h-64">
              <img
                class="h-full w-full"
                src="https://ravii-dev.s3.eu-west-2.amazonaws.com/photos/strumble_head.jpg"
                alt="Strumble head lighthouse overlooking the sea"
              />
            </div>
            <div class="px-6 py-4">
              <div class="font-bold text-2xl mb-2 text-gray-700">
                Strumble Head Lighthouse
              </div>
              <p class="text-gray-700 md:h-40 pt-2 text-lg">
                Strumble Head is a rocky headland in the community of Pencaer in
                Pembrokeshire, Wales, within the Pembrokeshire Coast National
                Park. It marks the southern limit of Cardigan Bay.
              </p>
            </div>
            <div class="px-6 mt-2 py-2">
              <div class="w-full inline-block py-2 text-right border-t-2 border-blue-600 text-gray-700 font-semibold">
                <Link
                  to={"/bookDetail/12"}
                  className="mx-1  hover:text-green-600 active:text-black"
                >
                  Detail
                </Link>
                <Link
                  to={"/"}
                  className="mx-1  hover:text-blue-700 active:text-black"
                >
                  Update
                </Link>
                <Link
                  to={"/"}
                  className="mx-1  hover:text-red-600 active:text-black"
                >
                  Delete
                </Link>
              </div>
            </div>
          </div>
          <div class="md:max-w-sm rounded-lg overflow-hidden shadow-xl mx-4 mb-4">
            <div class="bg-cover h-64">
              <img
                class="h-full w-full"
                src="https://ravii-dev.s3.eu-west-2.amazonaws.com/photos/porthgain.JPG"
                alt="Porthgain harbour"
              />
            </div>
            <div class="px-6 py-4">
              <div class="font-bold text-2xl mb-2 text-gray-700">Porthgain</div>
              <p class="text-gray-700  md:h-40 pt-2 text-lg">
                Porthgain is a village in the Pembrokeshire Coast National Park
                in Wales, located between St David's and Goodwick, and just
                north of Llanrhian.
              </p>
            </div>
            <div class="px-6 mt-2 py-2">
              <div
                href="https://www.visitpembrokeshire.com/explore-pembrokeshire/towns-and-villages/porthgain"
                target="_blank"
                class="w-full inline-block py-2 text-right border-t-2 border-green-600 text-gray-700 font-semibold"
              >
                <Link
                  to={"/bookDetail/12"}
                  className="mx-1  hover:text-green-600 active:text-black"
                >
                  Detail
                </Link>
                <Link
                  to={"/"}
                  className="mx-1  hover:text-blue-700 active:text-black"
                >
                  Update
                </Link>
                <Link
                  to={"/"}
                  className="mx-1  hover:text-red-600 active:text-black"
                >
                  Delete
                </Link>
              </div>
            </div>
          </div>
          <div class="md:max-w-sm rounded-lg overflow-hidden shadow-xl mx-4 mb-4">
            <div class="bg-cover h-64">
              <img
                class="h-full w-full"
                src="https://ravii-dev.s3.eu-west-2.amazonaws.com/photos/pentre_ifan.JPG"
                alt="Pentre Ifan"
              />
            </div>
            <div class="px-6 py-4">
              <div class="font-bold text-2xl mb-2 text-gray-700">
                Pentre Ifan
              </div>
              <p class="text-gray-700  md:h-40 pt-2 text-lg">
                Pentre Ifan is the name of an ancient manor in the community and
                parish of Nevern, Pembrokeshire, Wales. It contains and gives
                its name to the largest and best preserved neolithic dolmen in
                Wales.
              </p>
            </div>
            <div class="px-6 mt-2 py-2">
              <div
                target="_blank"
                class="w-full inline-block py-2 text-right border-t-2 border-red-600 text-gray-700 font-semibold"
              >
                <Link
                  to={"/bookDetail/12"}
                  className="mx-1   hover:text-green-600 active:text-black"
                >
                  Detail
                </Link>
                <Link
                  to={"/"}
                  className="mx-1  hover:text-blue-700 active:text-black"
                >
                  Update
                </Link>
                <Link
                  to={"/"}
                  className="mx-1  hover:text-red-600 active:text-black"
                >
                  Delete
                </Link>
              </div>
            </div>
          </div>
          <div class="md:max-w-sm rounded-lg overflow-hidden shadow-xl mx-4 mb-4">
            <div class="bg-cover h-64">
              <img
                class="h-full w-full"
                src="https://ravii-dev.s3.eu-west-2.amazonaws.com/photos/strumble_head.jpg"
                alt="Strumble head lighthouse overlooking the sea"
              />
            </div>
            <div class="px-6 py-4">
              <div class="font-bold text-2xl mb-2 text-gray-700">
                Strumble Head Lighthouse
              </div>
              <p class="text-gray-700  md:h-40 pt-2 text-lg">
                Strumble Head is a rocky headland in the community of Pencaer in
                Pembrokeshire, Wales, within the Pembrokeshire Coast National
                Park. It marks the southern limit of Cardigan Bay.
              </p>
            </div>
            <div class="px-6 mt-2 py-2">
              <div class="w-full inline-block py-2 text-right border-t-2 border-blue-600 text-gray-700 font-semibold">
                <Link
                  to={"/bookDetail/12"}
                  className="mx-1   hover:text-green-600 active:text-black"
                >
                  Detail
                </Link>
                <Link
                  to={"/"}
                  className="mx-1  hover:text-blue-700 active:text-black"
                >
                  Update
                </Link>
                <Link
                  to={"/"}
                  className="mx-1  hover:text-red-600 active:text-black"
                >
                  Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
