const teamMembers = [
  {
    name: 'NICK GROVES',
    role: 'Founder & CEO',
    bio: "Eight years across futures, FX, and digital assets. Former crypto arbitrage systems architect turned systems-driven strategist. Founded Pelican to challenge the industry's dependence on opaque tools and build an AI that thinks the way real traders operate—structured, contextual, and brutally honest.",
  },
  {
    name: 'RAY CAMPBELL',
    role: 'Senior Architect',
    bio: "Two decades building mission-critical financial infrastructure. Led NYSE's transition to electronic trading at Labranche, architecting ultra-low latency systems across 800+ symbols. Deep expertise in C++ high-performance systems, exchange connectivity, and modern crypto infrastructure.",
  },
];

export function TeamSection() {
  return (
    <section id="team">
      <div className="section-inner">
        <div className="section-header animate-on-scroll">
          <div className="section-tag">Team</div>
          <h2 className="section-title">WHO BUILT THIS</h2>
        </div>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.name} className="team-card bracket-box animate-on-scroll">
              <div className="team-name">{member.name}</div>
              <div className="team-role">{member.role}</div>
              <p className="team-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
