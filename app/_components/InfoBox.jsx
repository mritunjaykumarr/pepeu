import Link from "next/link";
import Button from "./Button";

function InfoBox() {
  return (
    <section class="mt-24">
      <div class="grid grid-cols-2 items-center justify-center bg-[#333] p-5 ">
        <img
          src="/refers/pepe-referss.png"
          alt="Pepe Coin"
          class=" p-5 w-[80%]"
        />
        <div class="space-y-10">
          <h2 class="text-8xl font-semibold text-white referjk-h2">
            Earn More with Pepe Coin
          </h2>
          <p class="text-white text-2xl">
            Join our referral programme and earn Pepe Coins by inviting your
            friends!
          </p>
          <div class="space-x-6">
            <Button id="joinNowButton " className="bg-primary-btn-color">
              Invite Now
            </Button>
            <Link href="/claimairdrops">
              <Button id="joinNowButton" className="bg-primary-btn-color">
                Claim AirDrop
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoBox;
