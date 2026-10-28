import Link from "next/link";

export default function AboutEHCPsPage() {
  const allSections = [
    {
      code: "Section A",
      title: "Views, Interests & Aspirations",
      desc: "Captures the child/young person's views, interests, and aspirations, as well as the parents' views.",
      badge: "Context & Aspirations",
      badgeColor: "bg-blue-50 text-brand-blue",
      appealable: false,
    },
    {
      code: "Section B",
      title: "Special Educational Needs (SEN)",
      desc: "Details all of the child or young person's special educational needs. Every need identified here must have corresponding provision in Section F.",
      badge: "Appealable to Tribunal",
      badgeColor: "bg-orange-100 text-brand-orange",
      appealable: true,
    },
    {
      code: "Section C",
      title: "Health Needs Related to SEN",
      desc: "Outlines any health care needs that relate to the child's special educational needs or disability.",
      badge: "Health Needs",
      badgeColor: "bg-blue-50 text-brand-blue",
      appealable: false,
    },
    {
      code: "Section D",
      title: "Social Care Needs Related to SEN",
      desc: "Details social care needs relating to the child's SEN or disability, including respite care requirements.",
      badge: "Social Care Needs",
      badgeColor: "bg-blue-50 text-brand-blue",
      appealable: false,
    },
    {
      code: "Section E",
      title: "Desired Outcomes",
      desc: "Sets out SMART outcomes (Specific, Measurable, Achievable, Realistic, Time-bound) sought for the child across education, health, and care.",
      badge: "Target Outcomes",
      badgeColor: "bg-blue-50 text-brand-blue",
      appealable: false,
    },
    {
      code: "Section F",
      title: "Special Educational Provision (Critical)",
      desc: "Specifies the extra help required to meet the SEN in Section B. Must be highly specific, quantified (e.g., hours of support, staff ratios), and legally binding on the Local Authority.",
      badge: "Legally Binding & Appealable",
      badgeColor: "bg-red-100 text-red-700 font-bold",
      appealable: true,
      highlight: true,
    },
    {
      code: "Section G",
      title: "Health Provision Required",
      desc: "Details the health provision reasonably required by the learning difficulties or disabilities which result in SEN (e.g., Speech Therapy, Occupational Therapy, Mental Health support).",
      badge: "Health Provision",
      badgeColor: "bg-blue-50 text-brand-blue",
      appealable: false,
    },
    {
      code: "Section H",
      title: "Social Care Provision Required (H1 & H2)",
      desc: "H1 specifies statutory social care provisions (under CSDPA 1970). H2 specifies other social care provisions reasonably required.",
      badge: "Social Care Provision",
      badgeColor: "bg-blue-50 text-brand-blue",
      appealable: false,
    },
    {
      code: "Section I",
      title: "School or Placement Named",
      desc: "Names the specific school, college, or type of institution the child will attend. Must be left blank in a draft plan and only filled in the final plan.",
      badge: "Legally Binding & Appealable",
      badgeColor: "bg-orange-100 text-brand-orange",
      appealable: true,
    },
    {
      code: "Section J",
      title: "Personal Budget Details",
      desc: "Details how any Personal Budget or direct payments will be allocated and managed to deliver provisions in the plan.",
      badge: "Funding & Budget",
      badgeColor: "bg-blue-50 text-brand-blue",
      appealable: false,
    },
    {
      code: "Section K",
      title: "Advice & Information Appendices",
      desc: "Lists and attaches all official reports, medical evidence, therapist reports, and assessment advice gathered during the EHC needs assessment.",
      badge: "Evidence & Reports",
      badgeColor: "bg-gray-100 text-gray-600",
      appealable: false,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {/* Hero Header */}
      <div className="space-y-4 text-center sm:text-left">
        <span className="bg-orange-50 text-brand-orange px-3 py-1 rounded-full text-xs font-semibold">
          Legal Framework Guide
        </span>
        <h1 className="text-4xl font-extrabold text-brand-navy tracking-tight">
          What is an EHCP?
        </h1>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-3xl">
          An Education, Health and Care Plan (EHCP) is a legally binding document in England that outlines a child or young person&apos;s special educational, health, and social care needs, and the specific provision that must be put in place to meet them.
        </p>
      </div>

      {/* Top 2 Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-2">
          <div className="flex items-center space-x-2 text-brand-orange font-bold text-sm">
            <span>ℹ️</span>
            <span>Who is it for?</span>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            Children and young people aged 0 to 25 who need more support than is normally available through standard Special Educational Needs (SEN) support in school or college.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-2">
          <div className="flex items-center space-x-2 text-brand-orange font-bold text-sm">
            <span>🛡️</span>
            <span>Legal Protection</span>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            Unlike standard school support, an EHCP is a statutory legal document. The Local Authority is legally mandated under the Children and Families Act 2014 to secure and fund whatever is specified in Section F.
          </p>
        </div>
      </div>

      {/* Full 11 Sections Breakdown */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-brand-navy">
              All 11 Statutory Sections of an EHCP (Sections A – K)
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Every official EHCP in England must contain these 11 sections. Sections B, F, and I carry statutory rights of appeal to the SEND Tribunal.
            </p>
          </div>
          <div className="flex items-center space-x-2 text-[10px] font-semibold text-gray-500">
            <span className="w-3 h-3 bg-red-100 border border-red-300 rounded"></span>
            <span>Critical Provision Section</span>
          </div>
        </div>

        {/* Sections List */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm divide-y divide-gray-100 overflow-hidden">
          {allSections.map((sec, idx) => (
            <div
              key={idx}
              className={`p-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4 transition-colors ${
                sec.highlight ? "bg-orange-50/50" : "hover:bg-gray-50/50"
              }`}
            >
              <div className="space-y-2 flex-grow">
                <div className="flex items-center space-x-3 flex-wrap gap-y-1">
                  <span className="text-sm font-extrabold text-brand-navy bg-gray-100 px-2.5 py-0.5 rounded-md">
                    {sec.code}
                  </span>
                  <h3 className={`text-base font-bold ${sec.highlight ? "text-brand-orange" : "text-brand-navy"}`}>
                    {sec.title}
                  </h3>
                  <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${sec.badgeColor}`}>
                    {sec.badge}
                  </span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed sm:pr-8">{sec.desc}</p>
              </div>

              {sec.appealable && (
                <span className="text-[10px] font-bold text-brand-orange bg-orange-100 px-2.5 py-1 rounded-md whitespace-nowrap self-start">
                  ⚖️ Tribunal Appealable
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Official Government & Legal Sources Links Box */}
      <div className="bg-blue-50/60 border border-blue-100 p-6 rounded-2xl space-y-3">
        <h4 className="font-bold text-brand-navy text-sm">Official Statutory Guidance & External Resources</h4>
        <p className="text-xs text-gray-600 leading-relaxed">
          For further legal reading on statutory duties, you can review official UK government resources:
        </p>
        <div className="flex flex-wrap gap-4 text-xs">
          <a
            href="https://www.gov.uk/government/publications/send-code-of-practice-0-to-25"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-orange hover:underline font-semibold flex items-center space-x-1"
          >
            <span>📄 UK SEND Code of Practice 2015 (GOV.UK)</span>
            <span>↗</span>
          </a>
          <a
            href="https://www.ipsea.org.uk/what-sections-should-an-ehc-plan-have"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-orange hover:underline font-semibold flex items-center space-x-1"
          >
            <span>🏛️ IPSEA Section-by-Section Legal Guidance</span>
            <span>↗</span>
          </a>
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <div className="bg-brand-navy text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
        <div>
          <h3 className="font-bold text-lg">Need help reviewing your child&apos;s draft EHCP?</h3>
          <p className="text-xs text-gray-300 mt-1">
            Our independent SEND Social Workers analyze all 11 sections to ensure provisions in Section F are properly quantified and legally compliant.
          </p>
        </div>
        <Link
          href="/consultation"
          className="bg-brand-orange hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl text-xs transition-colors whitespace-nowrap shadow"
        >
          Book 1:1 Draft Review
        </Link>
      </div>
    </div>
  );
}