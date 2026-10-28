/** What the "text us" form sends to /api/text-requests. */
export type TextRequestInput = {
  name: string;
  /** Digits only, 10 to 15 of them. */
  phone: string;
  message: string;
  /** Path of the page the form was sent from. */
  page: string;
};

/** One stored submission in data/text-requests.json. */
export type TextRequest = TextRequestInput & {
  id: string;
  /** ISO 8601 timestamp in the server's local time with its UTC offset. */
  createdAt: string;
};
