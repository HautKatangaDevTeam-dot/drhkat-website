import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div className={align === "left" ? "text-left" : "text-center"}>
      {eyebrow ? (
        <div
          className={[
            "mb-4 inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm",
            align === "left" ? "" : "",
          ].join(" ")}
        >
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p
          className={[
            "mt-4 max-w-2xl text-lg leading-relaxed text-slate-600",
            align === "center" ? "mx-auto" : "",
          ].join(" ")}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
