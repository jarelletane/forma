import type { ReactNode } from "react";

export function StepCopy({
  n,
  title,
  text,
}: {
  n: string;
  title: ReactNode;
  text: string;
}) {
  return (
    <div className="step-copy">
      <span className="kicker stage-enter">Step {n} / 04</span>
      <h1 className="stage-enter">{title}</h1>
      <p className="stage-enter">{text}</p>
    </div>
  );
}

export function Next({
  onClick,
  label = "Continue",
}: {
  onClick: () => void;
  label?: string;
}) {
  return (
    <button className="primary next" onClick={onClick}>
      {label}
      <b>→</b>
    </button>
  );
}
