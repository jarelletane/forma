import type { Stage } from "../types";
import { stageOrder } from "../data/products";

export function Header({
  stage,
  onHome,
}: {
  stage: Stage;
  onHome: () => void;
}) {
  const status =
    stage === "start"
      ? "A considered way to furnish your home"
      : stage === "results"
        ? "Your furnishing plan"
        : stage === "checkout"
          ? "Your final reference board"
          : stage === "plan-loading"
            ? "Composing your plan"
            : `Set up your home · ${Math.max(stageOrder.indexOf(stage) + 1, 1)} / 4`;

  return (
    <header className="topbar">
      <button className="logo" onClick={onHome} aria-label="Forma home">
        <svg className="logo-mark" viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16 27.5C9.1 27.5 4.5 23 4.5 16.8 4.5 9.9 9.4 4.5 16.4 4.5c6.6 0 11.1 4.4 11.1 10.2 0 5.5-3.8 9.2-8.6 9.2-4.5 0-7.6-3-7.6-6.9 0-3.6 2.5-6 5.6-6 2.9 0 4.8 1.9 4.8 4.3 0 2.2-1.4 3.6-3.3 3.6-1.6 0-2.7-1-2.7-2.3" />
        </svg>
        <span className="logo-type">Forma</span>
      </button>
      <span>{status}</span>
      <span className="user">JM</span>
    </header>
  );
}
