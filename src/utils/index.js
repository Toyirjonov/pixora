export function formatLastSeen(input) {
  // Input mavjudligini tekshiramiz
  if (!input) return "ancha vaqt oldin onlayn bo'lgan";

  let date;

  // Firebase Timestamp bo'lsa
  if (input?.seconds !== undefined && input?.nanoseconds !== undefined) {
    date = new Date(input.seconds * 1000 + Math.floor(input.nanoseconds / 1e6));
  } else if (input instanceof Date) {
    date = input;
  } else {
    return "ancha vaqt oldin onlayn bo'lgan";
  }

  // Sananing to'g'riligini tekshiramiz
  if (isNaN(date.getTime())) {
    return "ancha vaqt oldin onlayn bo'lgan";
  }

  const now = new Date();
  const diffMs = now - date;
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHrs = Math.floor(diffMin / 60);
  const diffDays = Math.floor(diffHrs / 24);

  // Vaqt farqiga qarab javob qaytaramiz
  if (diffSec < 60) return "bir oz oldin onlayn edi";
  if (diffMin < 60) return `${diffMin} daqiqa oldin onlayn bo'lgan`;
  if (diffHrs < 24) return `${diffHrs} soat oldin onlayn bo'lgan`;
  if (diffDays === 1)
    return `kecha ${date.getHours().toString().padStart(2, "0")}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")} da onlayn bo'lgan`;
  if (diffDays < 7) return `${diffDays} kun oldin onlayn bo'lgan`;

  return `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}.${date.getFullYear()} ${date
    .getHours()
    .toString()
    .padStart(2, "0")}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")} da onlayn bo'lgan`;
}
