export function getType(notif: any): string {
  switch (notif.type) {
    case "friend_request":
      return "Friend Request";
    case "friend_request_accepted":
      return "Request Accepted";
    case "Invite":
      return "Invite";
    default:
      return "New message";
  }
}

export function getNotificationColor(type: string): string {
  switch (type) {
    case "friend_request":
      return "border-l-4 border-l-sky-400 bg-gray-800";
    case "friend_request_accepted":
      return "border-l-4 border-l-emerald-500 bg-gray-800";
    case "New message":
      return "border-l-4 border-l-indigo-500 bg-gray-800";
    case "Invite":
      return "border-l-4 border-l-indigo-500 bg-gray-800";
    default:
      return "border-l-4 border-l-gray-500 bg-gray-800";
  }
}

export function formatTime(timestamp: string): string {
  const now = new Date();
  const notifTime = new Date(timestamp);
  const diffInMs = now.getTime() - notifTime.getTime();
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInMinutes < 1) return "Just now";
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
  if (diffInHours < 24) return `${diffInHours}h ago`;
  if (diffInDays < 7) return `${diffInDays}d ago`;
  return notifTime.toLocaleDateString();
}
