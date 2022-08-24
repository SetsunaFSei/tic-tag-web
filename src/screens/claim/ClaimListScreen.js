import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../../assets/claim.json";

export default function ClaimListScreen() {
  const [claims] = useState(data);

  return (
    <>
      <div className="px-4  overflow-auto rounded-lg shadow hidden md:block">
        <table className="w-full ">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="w-30 p-3 text-sm font-semibold tracking-wide text-center">
                Id
              </th>
              <th className="w-20 p-3 text-sm font-semibold tracking-wide text-center">
                Claim Number
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-center">
                Customer Name
              </th>
              <th className=" p-3 text-sm font-semibold tracking-wide text-center">
                Product Name
              </th>
              <th className=" p-3 text-sm font-semibold tracking-wide text-center">
                Serial Number
              </th>
              <th className="w-30 p-3 text-sm font-semibold tracking-wide text-center">
                Claim Date
              </th>
              <th className="w-50 p-3 text-sm font-semibold tracking-wide text-center">
                Status
              </th>
              <th className="w-50 p-3 text-sm font-semibold tracking-wide text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {claims.map((claim) => (
              <>
                <tr className="bg-white ">
                  <td className="p3 py-8 text-sm text-gray-700 whitespace-nowrap text-center">
                    {claim.id}
                  </td>
                  <td className="p3 text-sm text-gray-700 whitespace-nowrap ">
                    {claim.claimNumber}
                  </td>
                  <td className="p3 text-sm text-gray-700 whitespace-nowrap ">
                    {claim.userName}
                  </td>
                  <td className="p3 text-sm text-gray-700 whitespace-nowrap ">
                    {claim.productName}
                  </td>
                  <td className="p3 text-sm text-gray-700 whitespace-nowrap text-center">
                    {claim.serialNumber}
                  </td>
                  <td className="p3 text-sm text-gray-700 whitespace-nowrap ">
                    {claim.claimDate}
                  </td>
                  <td className="p3 text-sm text-gray-700 whitespace-nowrap text-center">
                    {claim.status === "Proses" ? (
                      <span className="p-3 text-sm font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-30">
                        {claim.status}
                      </span>
                    ) : claim.status === "Reject" ? (
                      <span className="p-3 text-sm font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-30 ">
                        {claim.status}
                      </span>
                    ) : (
                      <span className="p-3 text-sm font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-30">
                        {claim.status}
                      </span>
                    )}
                  </td>
                  <td className="p3 text-sm text-gray-700 text-center">
                    <Link className="font-bold text-blue-500" to={``}>
                      Edit
                    </Link>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
