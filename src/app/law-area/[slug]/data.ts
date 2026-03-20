import commercialCorporateCPD from "@/components/Areas-of-law/pages/commercial-corporate-cpd";
import crimeLawCPD from "@/components/Areas-of-law/pages/crime-law-cpd";
import employmentLawCPD from "@/components/Areas-of-law/pages/employment-law-cpd";
import familyLawCPD from "@/components/Areas-of-law/pages/family-law-cpd";
import immigrationLawCPD from "@/components/Areas-of-law/pages/immigration-law-cpd";

import litigationDisputeResolutionCPD from "@/components/Areas-of-law/pages/litigation-dispute-resolution-cpd";
import privateClientCPD from "@/components/Areas-of-law/pages/private-client-cpd";
import propertyLawCPD from "@/components/Areas-of-law/pages/property-law-cpd";
import regulatoryComplianceCPD from "@/components/Areas-of-law/pages/regulatory-compliance-cpd";

type AreaOfLaw = {
  title: string;
  answer: string;
  link?: string;
  component?: React.FC;
};

export const areaOfLaw: AreaOfLaw[] = [
  {
    title: "Commercial & Corporate CPD",
    answer:
      "Monthly legal CPD updates for lawyers in Commercial & Corporate law.  Law Edge Professional CPD provides concise, structured monthly updates designed specifically for solicitors and legal professionals working in commercial and corporate practice.",
    link: "/law-area/commercial-corporate-cpd",
    component:commercialCorporateCPD
  },
  {
    title: "Litigation & Dispute Resolution CPD",
    answer:
      "Monthly legal CPD updates for solicitors in litigation and dispute resolution. Stay current with concise, practical monthly updates covering civil procedure, case law developments, litigation strategy, costs, and dispute resolution techniques. Each issue is designed to highlight what has changed, why it matters, and how it impacts day-to-day contentious work.",
      link: "/law-area/litigation-dispute-resolution-cpd",
      component:litigationDisputeResolutionCPD
  },
  {
    title: "Employment Law CPD",
    answer:
      "Monthly legal CPD updates for solicitors in employment law. Stay current with concise, practical monthly updates covering tribunal decisions, legislative developments, workplace rights, discrimination law, and employer obligations. Each issue focuses on what has changed, why it matters, and how it affects day-to-day advisory and contentious employment work.",
    link: "/law-area/employment-law-cpd",
    component: employmentLawCPD
  },
  {
    title: "Property Law (Residential & Commercial) CPD",
    answer:
      "Stay current with concise, practical monthly updates covering residential and commercial property transactions, landlord and tenant law, planning developments, and key case law affecting property practice. Each issue focuses on what has changed, why it matters, and how it impacts day-to-day transactional and advisory work.",
    link: "/law-area/property-law-cpd",
    component: propertyLawCPD 
  },
  {
    title: "Family Law CPD",
    answer:
      "Stay current with concise, practical monthly updates covering divorce, financial remedies, children law, and procedural developments in the family courts. Each issue focuses on what has changed, why it matters, and how it impacts day-to-day advisory and contentious family work.",
    link: "/law-area/family-law-cpd",
    component: familyLawCPD
  },
  {
    title: "Immigration Law CPD",
    answer:
      "Stay current with concise, practical monthly updates covering changes to the Immigration Rules, Home Office policy, tribunal decisions, and developments affecting visa routes, asylum claims, and compliance obligations. Each issue is designed to explain what has changed, why it matters, and how it impacts real client work.",
    link: "/law-area/immigration-law-cpd",
    component: immigrationLawCPD
  },
  {
    title: "Regulatory & Compliance CPD",
    answer:
      "Stay current with concise, practical monthly updates covering regulatory developments, enforcement trends, governance obligations, and compliance frameworks across regulated sectors. Each issue focuses on what has changed, why it matters, and how it impacts advisory work, internal compliance, and risk management.",
    link: "/law-area/regulatory-compliance-cpd",
    component: regulatoryComplianceCPD
  },
  {
    title: "Private Client CPD",
    answer:
      "Stay current with concise, practical monthly updates covering wills, trusts, estates, tax developments, and key case law affecting succession planning and probate. Each issue focuses on what has changed, why it matters, and how it impacts day-to-day private client work.",
    link: "/law-area/private-client-cpd",
    component: privateClientCPD
  },
  {
    title: "Crime Law CPD",
    answer:
      "Stay current with concise, practical monthly updates covering developments in criminal law, sentencing guidance, procedural changes, and key appellate decisions. Each issue focuses on what has changed, why it matters, and how it impacts day-to-day criminal practice.",
    link: "/law-area/crime-law-cpd",
    component: crimeLawCPD
  },
];
