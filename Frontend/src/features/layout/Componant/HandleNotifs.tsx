
import { formatTime, getNotificationColor, getType } from "../Utils/NotificationUtils";

interface HandleNotifsProps {
  setShowNotifs: React.Dispatch<React.SetStateAction<boolean>>;
  notifications: any[];
  clearNotifs: () => void;
  notifRef?: any;
}

const HandleNotifs: React.FC<HandleNotifsProps> = ({
  setShowNotifs,
  notifications,
  clearNotifs,
  notifRef,
}) => {
  const filteredNotifications = notifications.filter(
    (notif) => notif.type !== "pong_invite"
  );

  return (
    <div
      className="absolute top-16 right-24 flex flex-col w-[380px] max-h-[500px] bg-[#222831] bg-opacity-90 text-black rounded-2xl shadow-2xl border border-gray-700 z-[99999] overflow-hidden  custom-scroll"
      // onClick={(e) => e.stopPropagation()}
      ref={notifRef}
    >
      <div className="flex justify-between items-center px-6 py-4 bg-gray-800 border-b border-gray-700">
        <div>
          <h2 className="text-2xl font-extrabold text-white">Notifications</h2>
          <p className="text-sm font-light text-gray-400 mt-1">
            {filteredNotifications?.length || 0}{" "}
            {(filteredNotifications?.length || 0) === 1
              ? "new alert"
              : "new alerts"}
          </p>
        </div>
        <button
          onClick={clearNotifs}
          className="px-4 py-2 text-xs font-semibold text-gray-400 hover:text-white rounded-xl transition-all duration-300"
        >
          Clear All
        </button>
        <button
          onClick={() => setShowNotifs(false)}
          className="p-2 text-xs font-semibold text-gray-400 hover:text-white rounded-xl transition-all duration-300"
        >
          Close
        </button>
      </div>

      <div className="flex-1 overflow-y-auto max-h-[70vh] p-4 space-y-3">
        {(filteredNotifications?.length || 0) === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center text-gray-500">
            <span className="text-4xl mb-4">🔔</span>
            <h3 className="text-xl font-semibold text-gray-200 mb-2">
              All caught up!
            </h3>
            <p className="text-sm text-gray-400">
              You have no new notifications right now.
            </p>
          </div>
        ) : (
          (filteredNotifications || []).map((notif, i) => (
            <div
              key={i}
              className={`relative p-4 rounded-xl ${getNotificationColor(
                notif.type
              )} cursor-pointer transition-all duration-300 transform hover:scale-[1.01] hover:shadow-lg`}
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-sm font-semibold text-gray-200">
                  {getType(notif)}
                </h4>
                <span className="text-xs text-gray-500 font-medium">
                  {formatTime(notif.timestamp)}
                </span>
              </div>

              {notif.type !== "Invite" && (
                <p className="text-sm text-gray-400 mb-3 leading-relaxed truncate max-w-60">
                  {notif.text || notif.message || "No message"}
                </p>
              )}

              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-md font-bold text-gray-300">
                    {(notif.sender || "U")[0].toUpperCase()}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-200 truncate">
                    {notif.sender || "Unknown"}
                  </p>

                  <p className="text-xs text-gray-500">
                    {notif.type === "New message"
                      ? "Sent you a message"
                      : notif.type === "friend_request"
                      ? "Wants to be friends"
                      : "Accepted your request"}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HandleNotifs;
