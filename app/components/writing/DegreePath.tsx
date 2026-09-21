type Term = { sem: string; detail: string };
type Year = { label: string; terms: Term[] };

const TERMS = ["fall", "winter", "summer"] as const;

const typical: Year[] = [
  {
    label: "year 1",
    terms: [
      { sem: "fall", detail: "intro cs + math + electives" },
      { sem: "winter", detail: "intermediate programming + discrete + linear algebra" },
      { sem: "summer", detail: "off" },
    ],
  },
  {
    label: "year 2",
    terms: [
      { sem: "fall", detail: "microcomputers + oop + data structures" },
      { sem: "winter", detail: "software systems + os + algorithms" },
      { sem: "summer", detail: "off" },
    ],
  },
  {
    label: "year 3",
    terms: [
      { sem: "fall", detail: "theory + systems analysis + stats" },
      { sem: "winter", detail: "software engineering + upper year cis + electives" },
      { sem: "summer", detail: "off" },
    ],
  },
  {
    label: "year 4",
    terms: [
      { sem: "fall", detail: "upper year cis + 4000 level cis" },
      { sem: "winter", detail: "compilers + final cis + electives" },
      { sem: "summer", detail: "off" },
    ],
  },
];

const mine: Year[] = [
  {
    label: "year 1",
    terms: [
      { sem: "fall", detail: "5 courses" },
      { sem: "winter", detail: "5 courses" },
      { sem: "summer", detail: "4 courses + ura" },
    ],
  },
  {
    label: "year 2",
    terms: [
      { sem: "fall", detail: "4 courses + ura + ta" },
      { sem: "winter", detail: "4 courses + ta + os pivot" },
      { sem: "summer", detail: "7 courses across 3 schools + swe" },
    ],
  },
  {
    label: "year 3",
    terms: [
      { sem: "fall", detail: "6 courses across 2 schools + swe + ta + hackcanada" },
      { sem: "winter", detail: "td work term + 3 courses + research" },
      { sem: "summer", detail: "tangerine + final course" },
    ],
  },
];

function detailFor(year: Year | undefined, sem: string) {
  return year?.terms.find((term) => term.sem === sem)?.detail ?? "done";
}

function Cell({ label, value }: { label: string; value: string }) {
  const quiet = value === "off" || value === "done";
  return (
    <p data-label={label} className={quiet ? "is-quiet" : undefined}>
      {value}
    </p>
  );
}

export default function DegreePath() {
  const mineByLabel = new Map(mine.map((year) => [year.label, year]));

  return (
    <div className="degree-compare not-prose">
      <div className="degree-compare-legend" aria-hidden="true">
        <span />
        <span>typical</span>
        <span>mine</span>
      </div>
      {typical.map((year) => (
        <section key={year.label}>
          <h4>{year.label}</h4>
          {TERMS.map((sem) => (
            <div key={sem} className="degree-row">
              <div className="degree-sem">{sem}</div>
              <Cell label="typical" value={detailFor(year, sem)} />
              <Cell
                label="mine"
                value={detailFor(mineByLabel.get(year.label), sem)}
              />
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}
