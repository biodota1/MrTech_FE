import React from "react";
import { Link } from "react-router-dom";

import monitorIcon from "../assets/monitor.png";
import headphoneIcon from "../assets/headphone.png";
import keyboardIcon from "../assets/keyboard.png";
import motherboardIcon from "../assets/motherboard.png";
import mouseIcon from "../assets/mouse.png";
import cpuIcon from "../assets/cpu.png";
import ramIcon from "../assets/ram.png";

export default function HomeGadgetWidget() {
  return (
    <div className="h-[200px] bg-slate-50 px-[20px] md:px-[100px]">
      <ul className="grid grid-cols-4 my-[100px] xl:grid-cols-7">
        <li className="flex">
          <Link to="products/monitor" className="h-[80px] m-auto">
            <img className="h-[35px] md:h-[80px]" src={monitorIcon} alt="" />
          </Link>
        </li>
        <li className="flex">
          <Link to="products/headphone" className="h-[80px] m-auto">
            <img className="h-[35px] md:h-[80px]" src={headphoneIcon} alt="" />
          </Link>
        </li>
        <li className="flex">
          <Link to="products/keyboard" className="h-[80px] m-auto">
            <img className="h-[35px] md:h-[80px]" src={keyboardIcon} alt="" />
          </Link>
        </li>
        <li className="flex">
          <Link to="products/mouse" className="h-[80px] m-auto">
            <img className="h-[35px] md:h-[80px]" src={mouseIcon} alt="" />
          </Link>
        </li>
        <li className="flex">
          <Link to="products/cpu" className="h-[80px] m-auto">
            <img className="h-[35px] md:h-[80px]" src={cpuIcon} alt="" />
          </Link>
        </li>
        <li className="flex">
          <Link to="products/motherboard" className="h-[80px] m-auto">
            <img
              className="h-[35px] md:h-[80px]"
              src={motherboardIcon}
              alt=""
            />
          </Link>
        </li>
        <li className="flex">
          <Link to="products/ram" className="h-[80px] m-auto">
            <img className="h-[35px] md:h-[80px]" src={ramIcon} alt="" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
