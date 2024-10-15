import Image from "next/image";
import Link from "next/link";

export default function ClaimAirdrop() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#121212",
        color: "#fff",
        padding: "0",
        margin: "0",
      }}
    >
      {/* Back Button */}
      <div style={{ position: "absolute", top: "64px", left: "113px" }}>
        <Link href="/" legacyBehavior>
          <a
            style={{
              textDecoration: "none",
              color: "#fff",
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* <Image
              src="/public/AirdropClaim.jpg"
              alt="Back"
              width={80}
              height={80}
            /> */}
            <span style={{ marginLeft: "10px", fontSize: "20px" }}>Back</span>
          </a>
        </Link>
      </div>

      <section
        style={{
          width: "100%",
          maxWidth: "1200px",
          padding: "50px",
          backgroundColor: "#1f1f1f",
          borderRadius: "15px",
          boxShadow: "0 0 15px rgba(0, 0, 0, 0.6)",
          marginTop: "40px",
          marginBottom: "20px",
        }}
      >
        {/* Content Box */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "40px",
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              color: "#00e676",
              marginBottom: "10px",
              textShadow: "2px 2px 10px #000",
            }}
          >
            Pepe Layer 2 Airdrop Claim
          </h1>

          <p
            style={{
              fontSize: "1.4rem",
              color: "#fff",
              lineHeight: "1.6",
              marginBottom: "30px",
            }}
          >
            The Airdrop Claim is{" "}
            <span style={{ color: "#ff5722" }}>coming soon</span>! Complete your
            tasks, share with friends, and get ready to claim your points.
          </p>

          <Image
            src="/AirdropClaim.jpg"
            alt="Airdrop Coming Soon"
            style={{
              maxWidth: "100%",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
            width={1200}
            height={300}
          />

          {/* Airdrop Announcement Section */}
          <div
            style={{
              backgroundColor: "#1c1c1c",
              padding: "25px",
              height: "195px",
              marginBottom: "30px",
              borderRadius: "15px",
              textAlign: "center",
              width: "100%",
              maxWidth: "1200px",
              boxShadow: "0 0 15px rgba(0, 0, 0, 0.7)",
            }}
          >
            <h1
              style={{
                fontSize: "2.5rem",
                color: "#00e676",
                marginBottom: "10px",
              }}
            >
              Wait is Going to Over
            </h1>
            <p style={{ fontSize: "1.4rem", color: "#fff", lineHeight: "1.5" }}>
              <span style={{ color: "#ff5722" }}>Exciting news!</span> The
              Airdrop Claim for Pepe Layer 2 is launching soon! Complete your
              tasks, share with friends, and keep an eye on this space for when
              the claim goes live.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#1e1e1e",
              padding: "20px 30px",
              borderRadius: "10px",
              marginBottom: "30px",
              width: "100%",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "1.5rem",
                color: "#ff5722",
                fontWeight: "bold",
              }}
            >
              Claim your points once the Airdrop goes live! Stay tuned for more
              updates.
            </p>
          </div>

          <button
            style={{
              backgroundColor: "#ff5722",
              color: "white",
              padding: "15px 30px",
              fontSize: "1.2rem",
              border: "none",
              borderRadius: "50px",
              cursor: "not-allowed",
              opacity: "0.8",
              marginBottom: "30px",
              transition: "all 0.3s ease",
            }}
            disabled
          >
            Claim Airdrop - Coming Soon
          </button>

          <div
            style={{
              backgroundColor: "#1e1e1e",
              padding: "30px",
              borderRadius: "15px",
              width: "100%",
              textAlign: "left",
            }}
          >
            <h2
              style={{ fontSize: "2rem", marginBottom: "20px", color: "#fff" }}
            >
              Here's what you can do now:
            </h2>
            <ul
              style={{
                listStyle: "none",
                marginBottom: "30px",
                color: "#bbb",
                fontSize: "1.2rem",
              }}
            >
              <li>Complete tasks to earn more airdrop points.</li>
              <li>
                Share your referral link with friends to increase your rewards.
              </li>
              <li>
                <span style={{ color: "#00e676" }}>Buy Pepe Layer 2 Coin</span>{" "}
                now to boost your benefits!
              </li>
            </ul>
            <Link href="/buy" legacyBehavior>
              <a
                style={{
                  textDecoration: "none",
                  backgroundColor: "#00e676",
                  color: "black",
                  padding: "15px 30px",
                  fontSize: "1.2rem",
                  borderRadius: "50px",
                  transition: "background-color 0.3s ease",
                }}
              >
                Buy Pepe Layer 2 Coin
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
