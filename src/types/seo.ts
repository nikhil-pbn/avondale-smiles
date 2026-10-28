export type Breadcrumb = {
  name: string;
  /** Omit on the last crumb (the current page). */
  path?: string;
};

export type PageGraphInput = {
  /** Site path, e.g. "/about". */
  path: string;
  /** Full <title> text, including the site suffix. */
  title: string;
  description: string;
  /** ISO date the page first existed on the old site. */
  datePublished: string;
  breadcrumbs: Breadcrumb[];
};
