import { orgs } from "@/app/data/experience";

const catalog = {
  lang: {
    title: orgs.lang.title,
    href: orgs.lang.href,
    icon: orgs.lang.icon,
    crest: true,
  },
  guelph: {
    title: orgs.guelph.title,
    href: orgs.guelph.href,
    icon: orgs.guelph.icon,
    crest: true,
  },
  tangerine: {
    title: orgs.tangerine.title,
    href: orgs.tangerine.href,
    icon: orgs.tangerine.icon,
  },
  td: {
    title: orgs.td.title,
    href: orgs.td.href,
    icon: orgs.td.icon,
  },
  hackcanada: {
    title: orgs.hackcanada.title,
    href: orgs.hackcanada.href,
    icon: orgs.hackcanada.icon,
    round: true,
  },
  bnb: {
    title: "b&b ai",
    href: "",
    icon: "",
  },
};

export default function WorkNote({
  role,
  org,
}: {
  role: string;
  org: string;
}) {
  const company = catalog[org as keyof typeof catalog];
  if (!company) return null;

  const logo = company.icon ? (
    <img
      src={company.icon}
      alt=""
      className={`work-note-logo${"round" in company && company.round ? " is-round" : ""}${
        "crest" in company && company.crest ? " is-crest" : ""
      }`}
    />
  ) : null;

  const companyLabel = (
    <>
      {company.title}
      {logo}
    </>
  );

  return (
    <div className="work-note">
      {role} <span className="work-note-at">@</span>{" "}
      {company.href ? (
        <a
          href={company.href}
          className="work-note-company"
          target="_blank"
          rel="noopener noreferrer"
        >
          {companyLabel}
        </a>
      ) : (
        <span className="work-note-company">{companyLabel}</span>
      )}
    </div>
  );
}
