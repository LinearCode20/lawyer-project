import commercialCorporateCPD from "@/components/Areas-of-law/pages/commercial-corporate-cpd";
import crimeLawCPD from "@/components/Areas-of-law/pages/crime-law-cpd";
import employmentLawCPD from "@/components/Areas-of-law/pages/employment-law-cpd";
import familyLawCPD from "@/components/Areas-of-law/pages/family-law-cpd";
import immigrationLawCPD from "@/components/Areas-of-law/pages/immigration-law-cpd";

import litigationDisputeResolutionCPD from "@/components/Areas-of-law/pages/litigation-dispute-resolution-cpd";
import privateClientCPD from "@/components/Areas-of-law/pages/private-client-cpd";
import propertyLawCPD from "@/components/Areas-of-law/pages/property-law-cpd";
import regulatoryComplianceCPD from "@/components/Areas-of-law/pages/regulatory-compliance-cpd";

export type AreaOfLaw = {
  title: string;
  answer: string;
  link?: string;
  component?: React.FC;
  tags?: string[];
  discriptions?: string;
};

export const areaOfLaw: AreaOfLaw[] = [
  {
    title: "Private Client",
    answer:
      "Wills, probate, trusts, and estate planning updates with practical application.",
    link: "/law-area/private-client-cpd",
    component: privateClientCPD,
    tags: [
      "Wills and estate planning",
      "Trusts and fiduciary duties",
      "Probate and estate administration",
      "Tax and succession planning",
      "Court decisions",
      "Private client risk issues",
    ],
    discriptions:
      "Monthly private client updates covering wills, trusts, probate, estates, tax developments, and succession planning. Focused on practical application for drafting, estate administration, fiduciary decision-making, and tax-aware advice. Designed to be read quickly while delivering one hour of CPD and supporting SRA competence and record keeping.",
  },
  {
    title: "Litigation & Dispute Resolution",
    answer:
      "Key procedural and case law developments relevant to contentious work.",
    link: "/law-area/litigation-dispute-resolution-cpd",
    component: litigationDisputeResolutionCPD,
    tags: [
      "Recent case law anecung migation strategy",
      "CIVIL Proceture Rules",
      "Disclosure and evidence",
      "Costs and funding",
      "Mediation and ADR",
      "Court practice changes",
    ],
    discriptions:
      "Monthly CPD updates covering civil procedure, case law, litigation strategy, costs, and dispute resolution. Focused on practical impact, including how developments affect live cases, risk, and client advice. Structured for quick reading with one hour of CPD and easy recording for SRA requirements.",
  },
  {
    title: "Commercial & Corporate",
    answer:
      "Developments in company, contract, and commercial advisory work.",
    link: "/law-area/commercial-corporate-cpd",
    component: commercialCorporateCPD,
    tags: [
      "Company law developments and statutory changes",
      "Corporate governance",
      "Shareholder disputes and minority protection",
      "Transactional structures and commercial risks",
      "Directors' duties",
      "Compliance and regulatory developments",
    ],
    discriptions:
      "Concise monthly CPD updates focused on the most relevant developments in commercial and corporate law. Covers company law, governance, shareholder issues, transactions, and directors' duties, with clear explanation of practical impact. Designed to be read in under 20 minutes while delivering one hour of CPD and supporting SRA competence and record keeping.",
  },

  {
    title: "Employment Law",
    answer: "Workplace law updates, including tribunal decisions, policy issues, and compliance.",
    link: "/law-area/employment-law-cpd",
    component: employmentLawCPD,
    tags: [
      "Tribunal decisions",
      "Legislative reforms",
      "Discrimination and equality",
      "Dismissals and contracts",
      "Workplace rights",
      "Employer obligations",
    ],
    discriptions:
      "Monthly updates covering tribunal decisions, legislation, discrimination law, and workplace obligations. Focused on practical application for advisory and contentious work, including contracts, dismissals, and policies. Designed for fast reading with one hour of CPD and structured reflection support.",
  },
  {
    title: "Property Law",
    answer:
      "Residential and commercial property updates affecting transactions and risk.",
    link: "/law-area/property-law-cpd",
    component: propertyLawCPD,
    tags: [
      "Residential conveyancing",
      "Commercial property",
      "Landlord and tenant",
      "Planning and development",
      "Transaction risk",
      "Title and compliance",
    ],
    discriptions:
      "Monthly CPD updates covering residential and commercial property transactions, landlord and tenant issues, planning developments, and property risk. Focused on practical application for conveyancing and commercial property work, including drafting, due diligence, title, and compliance. Designed for quick reading with one hour of CPD and easy recording for SRA requirements.",
  },
  {
    title: "Family Law",
    answer: "Updates on financial remedies, children matters, and evolving case law.",
    link: "/law-area/family-law-cpd",
    component: familyLawCPD,
    tags: [
      "Financial remedies",
      "Children law",
      "Divorce and separation",
      "Family procedure",
      "Dispute resolution",
      "Relevant case law",
    ],
    discriptions:
      "Monthly updates covering divorce, financial remedies, children law, and family court procedure. Focused on practical impact for advisory and contentious work, including client strategy, negotiation, and case management. Designed to be read in under 20 minutes while providing one hour of CPD and structured reflection support.",
  },
  {
    title: "Immigration",
    answer:
      "Developments in visa routes, sponsorship, and Home Office policy, with practical application.",
    link: "/law-area/immigration-law-cpd",
    component: immigrationLawCPD,
    tags: [
      "Immigration Rules and policy",
      "Visa routes",
      "Asylum and protection",
      "Appeals and judicial review",
      "Sponsorship and compliance",
      "Tribunal decisions",
    ],
    discriptions:
      "Monthly immigration law updates covering rule changes, Home Office policy, tribunal decisions, visa routes, and compliance obligations. Focused on practical use in applications, appeals, and sponsor compliance, with clear explanation of risk and next steps. Structured for quick reading with one hour of CPD and support for SRA competence records.",
  },
  {
    title: "Regulatory & Compliance",
    answer:
      "Regulatory developments affecting firms and clients, with a focus on compliance and risk.",
    link: "/law-area/regulatory-compliance-cpd",
    component: regulatoryComplianceCPD,
    tags: [
      "Regulatory developments",
      "Enforcement and investigations",
      "Governance and risk",
      "Compliance systems",
      "Professional regulation",
      "Conduct and ethics",
    ],
    discriptions:
      "Monthly updates on regulatory developments, enforcement trends, governance obligations, and compliance frameworks. Focused on practical impact for advisory work, internal controls, and risk management, with clear guidance on what changes in practice. Designed for efficient reading with one hour of CPD and structured record keeping support.",
  },

  {
    title: "Crime",
    answer: "Developments in criminal law and procedure, with practical impact on case strategy.",
    link: "/law-area/crime-law-cpd",
    component: crimeLawCPD,
    tags: [
      "Criminal case law",
      "Sentencing",
      "Procedure",
      "Evidence and disclosure",
      "Advocacy and strategy",
      "Court practice updates",
    ],
    discriptions:
      "Monthly criminal law updates covering appellate decisions, sentencing, procedure, evidence, disclosure, and advocacy strategy. Focused on practical impact for defence and prosecution work, including case preparation, risk, and courtroom decision-making. Designed for concise reading with one hour of CPD and straightforward recording for SRA requirements.",
  },
];
