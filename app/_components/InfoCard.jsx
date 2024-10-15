function InfoCard() {
  return (
    <section className="flex items-center justify-center">
      <div class="bg-white rounded-[15px] shadow-lg overflow-hidden  text-center transform translate-y-0 transition-transform duration-300 ease-in-out w-[815px]  ">
        <p class="text-white p-5 border-b-2 border-white text-center text-[24px] font-bold rounded-t-[15px] gradient-refer-infoCard ">
          Welcome!
        </p>
        <div class="p-5">
          <h1 class=" text-[#888] text-[28px] m-0 font-semibold ">
            Instruction 📢
          </h1>
          <p class="text-[#f06595] text-[18px] leading-[1.6] my-[15px] mb-[20px] font-medium tracking-wide  delay-[0.5s]">
            Please follow the Instruction these Points will converted into pepe
            coin.... <br />
            <strong>POINT RATIO 1:1</strong>
            <br />
            <strong>
              Note.Connect metamask wallet and go down to Activate account
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}

export default InfoCard;
