/**
 * Indonesian month name mapping for reliable cross-platform date parsing.
 *
 * JavaScript's `new Date("22 Des 2025")` may work on some OS locales
 * (e.g. Windows, Linux Mint) but fails on others (e.g. Ubuntu Server)
 * because "Des", "Okt", etc. are not recognized English month tokens.
 */

const INDONESIAN_MONTHS: Record<string, string> = {
    jan: "Jan",
    feb: "Feb",
    mar: "Mar",
    apr: "Apr",
    mei: "May",
    jun: "Jun",
    jul: "Jul",
    agu: "Aug",
    ags: "Aug",
    sep: "Sep",
    okt: "Oct",
    nov: "Nov",
    des: "Dec",
};

/**
 * Parse a date string that may contain Indonesian month abbreviations
 * (e.g. "22 Des 2025", "08 Okt 2025") into a proper Date object.
 *
 * Also handles standard ISO strings and English dates.
 */
export function parseDate(dateStr: string): Date {
    // Try standard parsing first – works for ISO / English dates
    const direct = new Date(dateStr);
    if (!isNaN(direct.getTime())) {
        return direct;
    }

    // Replace Indonesian month abbreviation with English equivalent
    const normalized = dateStr.replace(
        /\b([A-Za-z]{3,})\b/,
        (match) => INDONESIAN_MONTHS[match.toLowerCase()] ?? match,
    );

    const parsed = new Date(normalized);
    if (!isNaN(parsed.getTime())) {
        return parsed;
    }

    throw new Error(`Unable to parse date string: "${dateStr}"`);
}
