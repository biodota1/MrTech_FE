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
    <div className="h-[200px] bg-slate-50 px-[100px]">
      <ul className="grid grid-cols-7 my-[100px]">
        <li className="flex">
          <Link className="h-[80px] m-auto">
            <img className="h-[80px]" src={monitorIcon} alt="" />
          </Link>
        </li>
        <li className="flex">
          <Link className="h-[80px] m-auto">
            <img className="h-[80px]" src={headphoneIcon} alt="" />
          </Link>
        </li>
        <li className="flex">
          <Link className="h-[80px] m-auto">
            <img className="h-[80px]" src={keyboardIcon} alt="" />
          </Link>
        </li>
        <li className="flex">
          <Link className="h-[80px] m-auto">
            <img className="h-[80px]" src={mouseIcon} alt="" />
          </Link>
        </li>
        <li className="flex">
          <Link className="h-[80px] m-auto">
            <img className="h-[80px]" src={cpuIcon} alt="" />
          </Link>
        </li>
        <li className="flex">
          <Link className="h-[80px] m-auto">
            <img className="h-[80px]" src={motherboardIcon} alt="" />
          </Link>
        </li>
        <li className="flex">
          <Link className="h-[80px] m-auto">
            <img className="h-[80px]" src={ramIcon} alt="" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
