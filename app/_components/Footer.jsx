"use client";
import Link from "next/link";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react"; // Import useEffect

import "@/app/_styles/style.css";
import Logo from "./Logo";

function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in ms
    });
  }, []);

  return (
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-about">
          {/* <h2>Pepe Memes Coin</h2> */}
          <Logo pClassName="text-4xl text-primary-heading-color" />
          <p>
            Your gateway to the most fun and rewarding meme coin. Join us on our
            journey to the moon!
          </p>
          <ul class="social-icons-footer">
            <li>
              <a href="https://x.com/pepelayer_2?t=jSnhsG27za6KV4CVWsRP8A&s=09">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/pepe_layer_2?igsh=MXQxcWJtYXMwb2xudQ%3D%3D&utm_source=qr">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://t.me/PEPELAYER_2">
                <i class="fab fa-telegram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-facebook"></i>
              </a>
            </li>
          </ul>
        </div>

        <div class="footer-links">
          <h3>Quick Support</h3>
          <ul>
            <li>
              <a href="mailto:support@pepelayer2.com">Support</a>
            </li>
            <li>
              <a href="mailto:marketing@pepelayer2.com">Marketing</a>
            </li>
            <li>
              <a href="mailto:info@pepelayer2.com">info</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
          </ul>
        </div>

        <div class="footer-newsletter">
          <h3>Stay Updated</h3>
          <p>
            Subscribe to get the latest Pepe news, events, and mooning
            opportunities.
          </p>
          <form class="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div class="footer-bottom">
        <p>
          &copy; {`${new Date().getFullYear()}`} Pepe Layer2 Campaign. All
          rights reserved.
        </p>
        <ul class="footer-bottom-links">
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">User Agreement</a>
          </li>
          <li>
            <a href="#">Developer @dustinAbhishek</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

// <footer className="footer mt-24">
//   <div className="container-div grid grid-cols-3 justify-items-center">
//     <div data-aos="fade-up">
//       {" "}
//       {/* Add fade-up animation to the first column */}
//       <ul className="footer-main-list">
//         <li>
//           <Link href="/" className="text-white text-base cursor-pointer">
//             $PEPE Whitepaper
//           </Link>
//         </li>
//         <li>
//           <Link href="/" className="text-white text-base cursor-pointer">
//             Solidproof Certification
//           </Link>
//         </li>
//         <li>
//           <Link href="/" className="text-white text-base cursor-pointer">
//             Coinsult Certification
//           </Link>
//         </li>
//         <li>
//           <Link href="/" className="text-white text-base cursor-pointer">
//             Help Center
//           </Link>
//         </li>
//       </ul>
//     </div>
//     <div data-aos="fade-up">
//       {" "}
//       {/* Add fade-up animation to the second column */}
//       <ul className="footer-main-list">
//         <li>
//           <Link href="/" className="text-white text-base cursor-pointer">
//             User Agreement
//           </Link>
//         </li>
//         <li>
//           <Link href="/" className="text-white text-base cursor-pointer">
//             Privacy &amp; Cookies
//           </Link>
//         </li>
//         <li>
//           <Link href="/" className="text-white text-base cursor-pointer">
//             Risk Advisory
//           </Link>
//         </li>
//         <li>
//           <Link href="/" className="text-white text-base cursor-pointer">
//             Disclaimer
//           </Link>
//         </li>
//         <li>
//           <Link href="/" className="text-white text-base cursor-pointer">
//             User Commitments
//           </Link>
//         </li>
//       </ul>
//     </div>
//     <div data-aos="fade-up">
//       {" "}
//       {/* Add fade-up animation to the third column */}
//       <ul className="footer-main-list">
//         <li>
//           <Link href="/" className="text-white text-base cursor-pointer">
//             Twitter
//           </Link>
//         </li>
//         <li>
//           <Link href="/" className="text-white text-base cursor-pointer">
//             Telegram
//           </Link>
//         </li>
//       </ul>
//     </div>
//   </div>
//   <div className="copyright">
//     {" "}
//     {/* Add fade-up animation to the copyright section */}
//     <p>
//       &copy; {`${new Date().getFullYear()}`} Pepe Layer2 Campaign. All
//       rights reserved.
//     </p>
//   </div>
// </footer>
