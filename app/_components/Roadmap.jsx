"use client";
import "@/app/_styles/style.css";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";

function Roadmap() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in ms
    });
  }, []);

  return (
    <section className="roadmaps ">
      <div className="container-div">
        <h2
          className="text-3xl lg:text-6xl font-bold text-[#e1a313] leading-tight uppercase text-center py-12 text-shadow"
          data-aos="fade-left"
        >
          Roadmap
        </h2>
        <div className="timeline-section">
          <div className="timeline">
            <article className="timeline-item" data-aos="fade-left">
              <img
                src="/roadmap/one.png"
                alt="frog image"
                className="timeline-icon-left hidden lg:block"
              />
              <div className="timeline-content">
                <h3 className="timeline-date">
                  <span>Phase 1</span>
                </h3>
                <h3 className="timeline-date">
                  <span>•</span> Building team
                </h3>
                <h3 className="timeline-date">
                  <span>•</span>
                  Website launch
                </h3>
                <h3 className="timeline-date">
                  <span>•</span>
                  {/* Airdrop launch */}
                  Pre-sale launch
                </h3>
                <h3 className="timeline-date">
                  <span>•</span>
                  Huge marketing campaign
                </h3>
              </div>
            </article>

            <article className="timeline-item" data-aos="fade-left">
              <img
                src={"/roadmap/two.png"}
                alt="frog image"
                className="timeline-icon-right hidden lg:block"
              />
              <div className="timeline-content">
                <h3 className="timeline-date">
                  <span>Phase 2</span>
                </h3>
                <h3 className="timeline-date">
                  <span>•</span> Token Generation Event (TGE)
                </h3>
                <h3 className="timeline-date">
                  <span>•</span>
                  Airdrop distribution 50% at TGE 50% after CEX listing
                </h3>
                {/* <h3 className="timeline-date">
                  <span>•</span>
                  Pre-sale launch
                </h3> */}
              </div>
            </article>

            <article className="timeline-item" data-aos="fade-left">
              <img
                src="/roadmap/three.png"
                alt="frog image"
                className="timeline-icon-left hidden lg:block"
              />
              <div className="timeline-content">
                <h3 className="timeline-date">
                  <span>Phase 3</span>
                </h3>

                <h3 className="timeline-date">
                  <span>•</span> Tier-1 CEX Listing
                </h3>
                <h3 className="timeline-date">
                  <span>•</span>
                  Airdrop for game users.
                </h3>
                <h3 className="timeline-date">
                  <span>•</span>
                  Marketing campaign
                </h3>
                <h3 className="timeline-date">
                  <span>•</span>
                  Influencers Campaign
                </h3>
                <h3 className="timeline-date">
                  <span>•</span>
                  New merchandising collection
                </h3>
              </div>
            </article>

            <article className="timeline-item" data-aos="fade-left">
              <img
                src="/roadmap/four.png"
                alt="frog image"
                className="timeline-icon-right hidden lg:block"
              />
              <div className="timeline-content">
                <h3 className="timeline-date">
                  <span>Phase 4</span>
                </h3>
                <h3 className="timeline-date">
                  <span>•</span> CEX Listings
                </h3>
                <h3 className="timeline-date">
                  <span>•</span>
                  Our PlayerTAP Launch Game
                </h3>
                <h3 className="timeline-date">
                  <span>•</span>
                  Bonus Campaign for Loyal Holders
                </h3>
                <h3 className="timeline-date">
                  <span>•</span>
                  NFT collection Launch
                </h3>
                <h3 className="timeline-date">
                  <span>•</span>
                  Focus on partnership.
                </h3>
              </div>
            </article>

            <article className="timeline-item" data-aos="fade-left">
              <img
                src="/roadmap/six.png"
                alt="frog image"
                className="timeline-icon-left hidden lg:block"
              />
              <div className="timeline-content">
                <h3 className="timeline-date">
                  <span>Phase 5</span>
                </h3>
                <h3 className="timeline-date">
                  <span>•</span> Marketing and influencers campaign
                </h3>
                <h3 className="timeline-date">
                  <span>•</span>
                  Pre-sale distribution claim
                </h3>
                <h3 className="timeline-date">
                  <span>•</span>
                  List On DEXes
                </h3>
                <h3 className="timeline-date">
                  <span>•</span>
                  CMC &amp; CoinGecko
                </h3>
                <h3 className="timeline-date">
                  <span>•</span>
                  Vested Airdrop distribution 100%
                </h3>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* Bubbles Section */}
      <div className="bubbles">
        <div className="bubble bubble1">
          <img
            src="/bubble/one.png"
            alt="frog image"
            className="bubble-size "
          />
        </div>
        <div className="bubble bubble2">
          <img
            src="/bubble/three.png"
            alt="frog image"
            className="bubble-size "
          />
        </div>
        <div className="bubble bubble3">
          <img
            src="/bubble/four.png"
            alt="frog image"
            className="bubble-size "
          />
        </div>
        <div className="bubble bubble4">
          <img
            src="/bubble/five.png"
            alt="frog image"
            className="bubble-size "
          />
        </div>
        <div className="bubble bubble5">
          <img
            src="/bubble/two.png"
            alt="frog image"
            className="bubble-size "
          />
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
