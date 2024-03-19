import { useUserContext } from "../context";

export default function Header() {
  const context = useUserContext();
  return (
    <div>
      <div className="flex flex-row items-center justify-between w-[375px]">
        <img src={"public/assets/shared/logo.svg"} alt="" />
        {context.close ? (
          <img
            onClick={() => {
              context.setClose(false);
            }}
            src={"public/assets/shared/icon-hamburger.svg"}
            alt=""
          />
        ) : (
          <img
            onClick={() => {
              context.setClose(true);
            }}
            src={"public/assets/shared/icon-close.svg"}
            alt=""
          />
        )}
      </div>
    </div>
  );
}
