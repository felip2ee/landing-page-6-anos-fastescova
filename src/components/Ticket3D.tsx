import type { PointerEvent } from "react";
import { useRef } from "react";
import { campaign } from "../lib/constants";
import { useReducedMotion } from "../hooks/useReducedMotion";

type Ticket3DProps = {
  className?: string;
  compact?: boolean;
};

export function Ticket3D({ className = "", compact = false }: Ticket3DProps) {
  const ticketRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reducedMotion || event.pointerType === "touch") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    ticketRef.current?.style.setProperty("--ticket-rotate-y", `${x * 12}deg`);
    ticketRef.current?.style.setProperty("--ticket-rotate-x", `${y * -10}deg`);
    ticketRef.current?.style.setProperty("--shine-x", `${(x + 0.5) * 100}%`);
    ticketRef.current?.style.setProperty("--shine-y", `${(y + 0.5) * 100}%`);
  };

  const resetTilt = () => {
    ticketRef.current?.style.setProperty("--ticket-rotate-y", "0deg");
    ticketRef.current?.style.setProperty("--ticket-rotate-x", "0deg");
    ticketRef.current?.style.setProperty("--shine-x", "25%");
    ticketRef.current?.style.setProperty("--shine-y", "15%");
  };

  return (
    <div
      ref={ticketRef}
      className={`ticket ${compact ? "ticket--compact" : ""} ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      aria-label={`Bilhete promocional: ${campaign.prize}`}
    >
      <div className="ticket__shine" aria-hidden="true" />
      <div className="ticket__topline">
        <span>FAST ESCOVA</span>
        <span>FE · 06 · JK</span>
      </div>
      <div className="ticket__body">
        <div>
          <span className="ticket__anniversary">6 ANOS</span>
          <strong>1 CHANCE</strong>
        </div>
        <div className="ticket__prize">
          <span>1 ANO DE</span>
          <strong>ESCOVA +</strong>
          <strong>HIDRATAÇÃO</strong>
        </div>
      </div>
      <div className="ticket__bottomline">
        <span>PALMAS AVENIDA JK</span>
        <span>Nº FE06JK</span>
      </div>
      <span className="ticket__notch ticket__notch--top" aria-hidden="true" />
      <span className="ticket__notch ticket__notch--bottom" aria-hidden="true" />
    </div>
  );
}
