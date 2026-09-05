import Image from "next/image";
import { formatDateRange } from "@/lib/format-date-range";
import { orgs, type HomepageExperience } from "@/app/data/experience";

export default function ExperienceList({
  items,
}: {
  items: HomepageExperience[];
}) {
  const employers = new Map<string, HomepageExperience[]>();
  for (const item of items) {
    const key = `${item.company}:${item.link}`;
    const positions = employers.get(key) ?? [];
    positions.push(item);
    employers.set(key, positions);
  }

  return (
    <ul className="organization-list">
      {Array.from(employers.entries()).map(([key, positions]) => {
        const org = positions[0];
        return (
          <li key={key} className="organization-entry">
            <a
              href={org.link}
              className="organization-mark"
              aria-label={org.company}
            >
              <Image
                src={org.logo}
                alt=""
                width={48}
                height={48}
                quality={85}
                className={`organization-logo ${org.logoRound ? "is-round" : ""} ${org.logo === orgs.guelph.icon ? "is-crest" : ""}`}
              />
            </a>
            <div className="organization-content">
              <div className="organization-heading">
                <h3>
                  <a href={org.link} className="organization-name">
                    {org.company}
                  </a>
                </h3>
                {positions.some((position) => position.present) && (
                  <span className="organization-current">current</span>
                )}
              </div>
              <ul className="organization-positions">
                {positions.map((position) => (
                  <li key={`${position.position}:${position.date}`}>
                    <span className="position-title">{position.position}</span>
                    <span className="position-date">
                      {formatDateRange(position.date)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
