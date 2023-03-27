export const GOOGLE_BOOK_API_URL = import.meta.env.VITE_GOOGLE_BOOK_API_URL;
export const GOOGLE_BOOK_API_KEY = import.meta.env.VITE_GOOGLE_BOOK_API_KEY;

export const BASE_GOOGLE_BOOK_API_URL = `${GOOGLE_BOOK_API_URL}?key=${GOOGLE_BOOK_API_KEY}`;

export const DEFAULT_START_INDEX = 0;
export const DEFAULT_MAX_RESULTS = 30;
