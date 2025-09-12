export const EVENT_START = new Date(2025, 6, 7);
export const EVENT_END   = new Date(2025, 6, 13);

function formatDateRange(startDate: Date, endDate: Date) {
    function getYearNumber(date: Date): number {
        return date.getFullYear();
    }

    function getMonthString(date: Date, locale = 'en-US'): string {
        return new Intl.DateTimeFormat(locale, { month: 'long' }).format(date);
    }

    function getDayNumber(date: Date): number {
        return date.getDate();
    }

    const sameMonth = startDate.getMonth() === endDate.getMonth();

    if (sameMonth) {
        return `${getMonthString(startDate)} ${getDayNumber(startDate)} - ${getDayNumber(endDate)}, ${getYearNumber(startDate)}`;
    }
    
    return `${getMonthString(startDate)} ${getDayNumber(startDate)} - ${getMonthString(endDate)} ${getDayNumber(endDate)}, ${getYearNumber(startDate)}`;
}

export const EVENT_RANGE_STRING = formatDateRange(EVENT_START, EVENT_END);