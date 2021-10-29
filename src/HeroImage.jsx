const hero = new URL("../images/illustration-hero.svg", import.meta.url);

export function HeroImage() {
  return (
    <img
      className="w-full rounded-t-3xl"
      src={hero}
      alt="illustration of a happy person"
    ></img>
  );
}
