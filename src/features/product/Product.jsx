import React from "react";
import { useSelector } from "react-redux";
import { selectProductsById } from "./productApiSlice";

export default function Product({ productId }) {
  const product = useSelector((state) => selectProductsById(state, productId));

  if (product) {
    return (
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src="/tailwind-css-component-profile-2@56w.png"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="font-bold">{product.name}</div>
        </td>
        <td>{product.category}</td>
        <td>{product.price}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    );
  } else return null;
}
