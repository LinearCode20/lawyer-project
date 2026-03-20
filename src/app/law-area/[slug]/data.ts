type AreaOfLaw = {
  title: string;
  answer: string;
  link: string;
  component?: React.FC;
};

export const areaOfLaw: AreaOfLaw[] = [
  {
    title: "Commercial & Corporate",
    answer:
      "Monthly updates covering company law developments, corporate governance, shareholder issues, transactional structures, and key case law affecting directors’ duties and corporate compliance. Topics include directors’ duties, shareholder disputes, and corporate governance.",
    link: "/law-area/commercial-corporate",
  },
  {
    title: "Litigation & Dispute Resolution",
    answer:
      "Focused summaries of procedural developments, civil procedure case law, disclosure, costs, and litigation strategy. Topics include costs updates, disclosure strategy, and procedure reforms.",
    link: "/law-area/litigation-dispute-resolution",
  },
  {
    title: "Employment Law",
    answer:
      "Updates on tribunal decisions, legislative reforms, workplace rights, discrimination law, and   employer obligations affecting contracts, dismissals, and workplace disputes.",
    link: "/law-area/employment-law",
  },
  {
    title: "HProperty Law (Residential & Commercial)",
    answer:
      "Coverage of property transactions, landlord and tenant law, planning developments, and case law affecting conveyancing and commercial property practice.",
    link: "/law-area/hproperty-law",
  },
  {
    title: "Family",
    answer:
      "Insights into divorce, financial remedies, children law, and procedural developments in family courts with practical implications for client advice.",
    link: "/law-area/family",
  },
  {
    title: "Immigration",
    answer:
      "Updates on immigration rules, Home Office policy changes, tribunal decisions, visa routes, asylum claims, and compliance obligations.",
    link: "/law-area/immigration",
  },
  {
    title: "Regulatory & Compliance",
    answer:
      "Developments in professional regulation, compliance frameworks, regulatory enforcement, and governance obligations across regulated sectors.",
    link: "/law-area/regulatory-compliance",
  },
  {
    title: "Private Client",
    answer:
      "Coverage of wills, trusts, estates, tax developments, and court decisions affecting succession planning and probate.",
    link: "/law-area/private-client",
  },
  {
    title: "Crime",
    answer:
      "Key developments in criminal law, sentencing guidance, procedural changes, and appellate decisions affecting criminal practitioners.",
    link: "/law-area/crime",
  },
];
