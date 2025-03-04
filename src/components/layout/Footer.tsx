import React from "react";
import { Link } from "react-router-dom";
import {
  IconBrandTwitter,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Money<span className="text-secondary">Wise</span>
            </h3>
            <p className="text-gray-300 mb-4">
              AI-powered application designed to simplify personal financial
              management.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-secondary">
                <IconBrandTwitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary">
                <IconBrandFacebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary">
                <IconBrandInstagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary">
                <IconBrandLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-secondary">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="text-gray-300 hover:text-secondary"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-secondary"
                >
                  About
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-secondary">
                  Team
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-secondary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-secondary">
                  Automated Tracking
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-secondary">
                  AI Categorization
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-secondary">
                  Goal-Based Savings
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-secondary">
                  Real-time Insights
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-secondary">
                  M-Pesa Integration
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">School of Computing</li>
              <li className="text-gray-300">JKUAT</li>
              <li className="text-gray-300">Nairobi, Kenya</li>
              <li className="text-gray-300">info@moneywise.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} MoneyWise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
