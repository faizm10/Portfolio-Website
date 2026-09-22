import type { ReactNode } from "react";

export default function CourseNote({
  code,
  prof,
  children,
}: {
  code: string;
  prof?: string;
  children?: ReactNode;
}) {
  return (
    <li>
      <strong>{code}</strong>
      {prof ? <>, {prof}</> : null}
      {children ? (
        <div className="text-neutral-600 text-sm">{children}</div>
      ) : null}
    </li>
  );
}
