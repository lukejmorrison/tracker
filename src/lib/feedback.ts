const REPO = "https://github.com/lukejmorrison/tracker";

export const FEEDBACK_REPO = REPO;

export type FeedbackLane = "correction" | "proceeding" | "duties" | "product";

const TEMPLATES: Record<FeedbackLane, string> = {
  correction: "correction.yml",
  proceeding: "missing-proceeding.yml",
  duties: "named-duties.yml",
  product: "product.yml",
};

export function issueUrl(lane: FeedbackLane, country?: string): string {
  const url = new URL(`${REPO}/issues/new`);
  url.searchParams.set("template", TEMPLATES[lane]);
  if (country) url.searchParams.set("country", country);
  return url.toString();
}

export function chooseIssueUrl(): string {
  return `${REPO}/issues/new/choose`;
}

export const LANES: {
  id: FeedbackLane;
  title: string;
  body: string;
}[] = [
  {
    id: "correction",
    title: "Correction",
    body: "A number, date, status, statute, or still-allowed line is wrong.",
  },
  {
    id: "proceeding",
    title: "Missing proceeding",
    body: "A named court, regulator, or legislative file is public and not on the docket.",
  },
  {
    id: "duties",
    title: "Named duties",
    body: "X or a government published a category list or split we did not compile.",
  },
  {
    id: "product",
    title: "Product",
    body: "The facts are right and the page still reads like a total.",
  },
];
