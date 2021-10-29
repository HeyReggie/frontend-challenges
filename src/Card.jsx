import { HeroImage } from "./HeroImage";
import { Header } from "./Header";
import { Details } from "./Details";
import { Pricing } from "./Pricing";
import { PrimaryButton } from "./PrimaryButton";
import { CancelButton } from "./CancelButton";

export function Card() {
  return (
    <div className="w-96 mx-5 rounded-3xl flex flex-col items-center justify-start bg-white drop-shadow-xl shadow-xl pb-6">
      <HeroImage />
      <Header />
      <Details />
      <Pricing />
      <PrimaryButton />
      <CancelButton />
    </div>
  );
}
