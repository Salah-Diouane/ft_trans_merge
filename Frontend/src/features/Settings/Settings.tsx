import { Link, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Settings() {
  const { t } = useTranslation();
  return (
    //Russo One
    <div className="pt-20 flex justify-center px-4 sm:px-6">
      <div
        className="bg-[#393E46] rounded-[20px] w-full max-w-[1105px] min-h-[945px]"
        style={{ boxShadow: "0 8px 30px rgba(0, 0, 0, 0.8)" }}
      >
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-lg sm:text-2xl font-russo p-4 text-white">
          <NavLink
            to="/settings/profile"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "hover:text-blue-600"
            }
          >
            {" "}
            {t("profile")}{" "}
          </NavLink>
          <NavLink
            to="/settings/game"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "hover:text-blue-600"
            }
          >
            {t("game")}
          </NavLink>
          <NavLink
            to="/settings/security"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "hover:text-blue-600"
            }
          >
            {t("security")}
          </NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
