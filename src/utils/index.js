export const formatLastSeen = (lastSeen) => {
  if (!lastSeen) return "Uzoq vaqt oldin tarmoqda bo'lgan";

  const lastSeenDate = lastSeen.toDate ? lastSeen.toDate() : new Date(lastSeen);
  const now = new Date();
  const diffInMs = now - lastSeenDate;
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInMinutes < 1) {
    return "hozirgina";
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes} daqiqa oldin`;
  } else if (diffInHours < 24) {
    return `${diffInHours} soat oldin`;
  } else if (diffInDays === 1) {
    return "kecha";
  } else if (diffInDays < 7) {
    return `${diffInDays} kun oldin`;
  } else {
    const options = {
      day: "numeric",
      month: "short",
      year:
        lastSeenDate.getFullYear() !== now.getFullYear()
          ? "numeric"
          : undefined,
    };
    return lastSeenDate.toLocaleDateString("uz-UZ", options);
  }
};
