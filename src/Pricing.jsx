const iconMusic = new URL("../images/icon-music.svg", import.meta.url);

export function Pricing() {
  return (
    <div className="bg-blue-verypale rounded-xl w-10/12 drop-shadow-sm">
      <div className="flex flex-row flex-nowrap p-5">
        <img src={iconMusic} />
        <div className="flex flex-col pl-2 pr-6 pt-1 w-1/2 ml-3">
          <span className="font-extrabold text-blue-dark text-sm">
            Annual Plan{" "}
          </span>
          <span className="text-blue-desaturated text-sm">$59.99/year </span>
        </div>
        <a
          href=""
          className="mx-auto underline text-blue-bright hover:text-indigo-400 hover:no-underline font-bold py-3 text-sm"
        >
          Change
        </a>
      </div>
    </div>
  );
}
