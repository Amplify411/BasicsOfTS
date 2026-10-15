import type { ReactNode } from "react";

type HintBoxProp = {
  mode: "hint";
  children: ReactNode;
};

type WarningBoxProp = {
  mode: "hint" | "warning";
  severity: "low" | "high" | "medium";
  children: ReactNode;
};

// type InfoBoxProp = {
//   mode: "hint" | "warning";
//   severity?: "low" | "high" | "medium"; // while defining an optional prop, have a '?' before the colon
//   children: ReactNode;
// };

type InfoBoxProp = HintBoxProp | WarningBoxProp; // this method is called discriminated union

export default function InfoBox(props: InfoBoxProp) {
  const { mode, children } = props;
  if (mode === "hint")
    return (
      <aside className="infobox infobox-hint">
        <h2>WARNING</h2>
        <p>{children}</p>
      </aside>
    );

  const { severity } = props;

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>WARNING</h2>
      <p>{children}</p>
    </aside>
  );
}
