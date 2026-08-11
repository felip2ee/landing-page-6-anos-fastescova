export function Intro() {
  return (
    <div className="intro" aria-hidden="true">
      <div className="intro__logo">
        <img
          src="/assets/logo-fast-escova-palmas.png"
          alt=""
          width="1040"
          height="540"
          fetchPriority="high"
        />
      </div>
      <strong className="intro__number">6</strong>
      <span className="intro__years">ANOS</span>
    </div>
  );
}
