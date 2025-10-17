import { useNavigate } from "react-router";
import { useStore } from "../../../store/store";

interface ProfileProps {
  setShowProfileDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}

const Profile: React.FC<ProfileProps> = ({ setShowProfileDropdown }) => {
  const store = useStore();
  const nav = useNavigate();
  return (
    <div className="absolute right-7 mt-1 w-44 bg-[#393E46] rounded-lg shadow-lg text-white z-50">
      <button
        onClick={() => {
          setShowProfileDropdown(false);
          nav(`/profile/${store.username}`);
        }}
        className="block w-full text-left px-4 py-3 hover:bg-blue-700 hover:text-black transition font-semibold rounded-t-lg"
      >
        Profile
      </button>
      <button
        onClick={() => nav("/logout")}
        className="block w-full text-left px-4 py-3 hover:bg-blue-700 hover:text-black transition font-semibold rounded-b-lg"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
