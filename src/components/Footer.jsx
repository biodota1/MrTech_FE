import React from "react";

export default function Footer() {
  return (
    <footer className="relative footer p-10 bg-base-200 text-base-content">
      <aside>
        <p>
          JMG Co.
          <br />
          Started since 2020
        </p>
      </aside>
      <nav>
        <h6 className="footer-title text-xs xl:text-xl">Services</h6>
        <a className="link link-hover text-xs xl:text-xl">Branding</a>
        <a className="link link-hover text-xs xl:text-xl">Design</a>
        <a className="link link-hover text-xs xl:text-xl">Marketing</a>
        <a className="link link-hover text-xs xl:text-xl">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title text-xs xl:text-xl">Company</h6>
        <a className="link link-hover text-xs xl:text-xl">About us</a>
        <a className="link link-hover text-xs xl:text-xl">Contact</a>
        <a className="link link-hover text-xs xl:text-xl">Jobs</a>
        <a className="link link-hover text-xs xl:text-xl">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title text-xs xl:text-xl">Legal</h6>
        <a className="link link-hover text-xs xl:text-xl">Terms of use</a>
        <a className="link link-hover text-xs xl:text-xl">Privacy policy</a>
        <a className="link link-hover text-xs xl:text-xl">Cookie policy</a>
      </nav>
    </footer>
  );
}
