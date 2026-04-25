import React, { useState } from 'react';

/* ─────────────────────────────────────────
   SVG Icon Components
───────────────────────────────────────── */
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 1.96C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
  </svg>
);

const PinterestIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const SparkleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z"/>
    <path d="M19 3l.5 1.5L21 5l-1.5.5L19 7l-.5-1.5L17 5l1.5-.5z"/>
    <path d="M5 17l.5 1.5L7 19l-1.5.5L5 21l-.5-1.5L3 19l1.5-.5z"/>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

/* ─────────────────────────────────────────
   Sub-Components
───────────────────────────────────────── */

/** Pill-style "link" button identical to the Aurelia Talent page links */
const LinkButton = ({
  href,
  icon: Icon,
  label,
  sublabel,
  delay,
  accent = false,
}: {
  href: string;
  icon?: React.ComponentType;
  label: string;
  sublabel?: string;
  delay: string;
  accent?: boolean;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      className={`link-btn anim-fade-up ${delay}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '12px',
        padding: '18px 22px',
        borderRadius: '18px',
        background: accent
          ? 'linear-gradient(135deg, var(--rose) 0%, var(--rose-dark) 100%)'
          : 'white',
        border: accent ? 'none' : '1px solid var(--border)',
        boxShadow: hovered
          ? accent
            ? '0 12px 40px rgba(168,85,99,0.35)'
            : '0 8px 30px rgba(180,80,100,0.12)'
          : accent
          ? '0 6px 24px rgba(168,85,99,0.22)'
          : 'var(--shadow-sm)',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        cursor: 'pointer',
        textDecoration: 'none',
        color: accent ? 'white' : 'var(--text-dark)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1 }}>
        {Icon && (
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: accent ? 'rgba(255,255,255,0.2)' : 'var(--blush)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: accent ? 'white' : 'var(--rose)',
              flexShrink: 0,
              transition: 'transform 0.3s ease',
              transform: hovered ? 'scale(1.1)' : 'scale(1)',
            }}
          >
            <Icon />
          </div>
        )}
        <div>
          <div
            style={{
              fontWeight: 600,
              fontSize: '15px',
              letterSpacing: '-0.01em',
              lineHeight: 1.2,
              color: accent ? 'white' : 'var(--text-dark)',
            }}
          >
            {label}
          </div>
          {sublabel && (
            <div
              style={{
                fontSize: '12px',
                color: accent ? 'rgba(255,255,255,0.75)' : 'var(--text-soft)',
                marginTop: '2px',
                fontWeight: 400,
              }}
            >
              {sublabel}
            </div>
          )}
        </div>
      </div>
      <div
        style={{
          color: accent ? 'rgba(255,255,255,0.7)' : 'var(--rose-light)',
          transition: 'transform 0.3s ease',
          transform: hovered ? 'translateX(3px)' : 'translateX(0)',
        }}
      >
        <ChevronRightIcon />
      </div>
    </a>
  );
};

/** Small floating stat badge */
const StatBadge = ({ value, label }: { value: string; label: string }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '2px',
      padding: '12px 20px',
      background: 'white',
      borderRadius: '16px',
      border: '1px solid var(--border)',
      boxShadow: 'var(--shadow-sm)',
      flex: 1,
      minWidth: '80px',
    }}
  >
    <span
      style={{
        fontFamily: 'var(--font-display)',
        fontSize: '22px',
        fontWeight: 700,
        color: 'var(--rose-dark)',
        letterSpacing: '-0.03em',
        lineHeight: 1,
      }}
    >
      {value}
    </span>
    <span
      style={{
        fontSize: '10px',
        fontWeight: 600,
        color: 'var(--text-soft)',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        textAlign: 'center',
      }}
    >
      {label}
    </span>
  </div>
);

/** Section heading with a decorative line */
const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      marginBottom: '16px',
    }}
  >
    <span
      style={{
        fontSize: '10px',
        fontWeight: 700,
        color: 'var(--rose)',
        textTransform: 'uppercase',
        letterSpacing: '0.15em',
      }}
    >
      {children}
    </span>
    <div
      style={{
        flex: 1,
        height: '1px',
        background: 'linear-gradient(to right, var(--border), transparent)',
      }}
    />
  </div>
);

/* ─────────────────────────────────────────
   Main App
───────────────────────────────────────── */
function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(160deg, #fff8f9 0%, #fdf2f4 40%, #fef8f5 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative blobs */}
      <div
        style={{
          position: 'fixed',
          top: '-15%',
          right: '-15%',
          width: '50vw',
          height: '50vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232,160,170,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'fixed',
          bottom: '-10%',
          left: '-10%',
          width: '40vw',
          height: '40vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249,232,234,0.4) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Page wrapper — narrow centered column like link-in-bio apps */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '480px',
          margin: '0 auto',
          padding: '48px 20px 72px',
          display: 'flex',
          flexDirection: 'column',
          gap: '0px',
        }}
      >
        {/* ── HEADER / PROFILE ── */}
        <header
          className="anim-scale-in"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: '32px',
          }}
        >
          {/* Profile image with animated ring */}
          <div
            style={{
              position: 'relative',
              width: '108px',
              height: '108px',
              marginBottom: '20px',
            }}
          >
            {/* Pulsing ring */}
            <div
              style={{
                position: 'absolute',
                inset: '-6px',
                borderRadius: '50%',
                background: 'conic-gradient(from 0deg, var(--rose-light), var(--blush-mid), var(--rose), var(--rose-light))',
                animation: 'rotate 4s linear infinite',
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: '-3px',
                borderRadius: '50%',
                background: 'var(--warm-white)',
                zIndex: 1,
              }}
            />
            <img
              src="/profile.png"
              alt="slow.routines"
              style={{
                position: 'absolute',
                inset: '0',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                objectFit: 'cover',
                zIndex: 2,
              }}
            />
            {/* Verified / sparkle badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '2px',
                right: '2px',
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--rose) 0%, var(--rose-dark) 100%)',
                border: '2px solid white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                zIndex: 3,
              }}
            >
              <SparkleIcon />
            </div>
          </div>

          {/* Name */}
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '28px',
              fontWeight: 700,
              color: 'var(--text-dark)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '6px',
            }}
          >
            slow.routines
          </h1>

          {/* Handle */}
          <p
            style={{
              fontSize: '13px',
              color: 'var(--rose)',
              fontWeight: 500,
              letterSpacing: '0.01em',
              marginBottom: '10px',
            }}
          >
            @slow.routines
          </p>

          {/* Bio */}
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '17px',
              fontStyle: 'italic',
              color: 'var(--text-mid)',
              lineHeight: 1.6,
              maxWidth: '320px',
              marginBottom: '12px',
            }}
          >
            beauty, wellness &amp; slow living ✨
            <br />
            ugc creator · brand collab inquiries below
          </p>

          {/* Star rating / collab badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              background: 'rgba(201,112,126,0.08)',
              border: '1px solid rgba(201,112,126,0.18)',
              borderRadius: '100px',
              padding: '5px 14px',
            }}
          >
            <span style={{ color: 'var(--rose)', display: 'flex', alignItems: 'center', gap: '2px' }}>
              <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
            </span>
            <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--rose-dark)', letterSpacing: '0.04em' }}>
              Open to Collabs
            </span>
          </div>
        </header>

        {/* ── STATS BAR ── */}
        <div
          className="anim-fade-up delay-2"
          style={{
            display: 'flex',
            gap: '10px',
            marginBottom: '32px',
          }}
        >
          <StatBadge value="25.4K" label="Followers" />
          <StatBadge value="6.2%" label="Eng. Rate" />
          <StatBadge value="180K" label="Avg. Reach" />
        </div>

        {/* ── FEATURED LINK (prominent CTA) ── */}
        <div style={{ marginBottom: '12px' }}>
          <SectionLabel>✦ Featured</SectionLabel>
          <LinkButton
            href="https://www.aureliatalent.com"
            icon={SparkleIcon}
            label="Work With Me — Media Kit"
            sublabel="Brand partnerships &amp; UGC inquiries"
            delay="delay-3"
            accent
          />
        </div>

        {/* ── SOCIAL LINKS ── */}
        <div style={{ marginBottom: '12px' }}>
          <SectionLabel>✦ Find me here</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <LinkButton
              href="https://instagram.com"
              icon={InstagramIcon}
              label="Instagram"
              sublabel="@slow.routines · 25.4K followers"
              delay="delay-4"
            />
            <LinkButton
              href="https://tiktok.com"
              icon={TikTokIcon}
              label="TikTok"
              sublabel="@slow.routines"
              delay="delay-5"
            />
            <LinkButton
              href="https://youtube.com"
              icon={YoutubeIcon}
              label="YouTube"
              sublabel="Slow living vlogs"
              delay="delay-6"
            />
            <LinkButton
              href="https://pinterest.com"
              icon={PinterestIcon}
              label="Pinterest"
              sublabel="Curated boards &amp; mood boards"
              delay="delay-7"
            />
          </div>
        </div>

        {/* ── CONTENT GRID — recent posts placeholder ── */}
        <div className="anim-fade-up delay-7" style={{ marginBottom: '28px' }}>
          <SectionLabel>✦ Latest Content</SectionLabel>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '8px',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid var(--border)',
              background: 'white',
              boxShadow: 'var(--shadow-sm)',
              padding: '12px',
              gap2: '8px',
            }}
          >
            {['🌸 Morning Skin', '✨ GRWM', '🕯️ Night Ritual', '🌿 Wellness', '💄 Pink OOTD', '🧖 Self Care'].map(
              (label, i) => (
                <div
                  key={i}
                  style={{
                    aspectRatio: '4/5',
                    borderRadius: '12px',
                    background: `linear-gradient(${135 + i * 20}deg, var(--blush) 0%, var(--blush-mid) 100%)`,
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    padding: '8px',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    position: 'relative',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <span
                    style={{
                      fontSize: '10px',
                      fontWeight: 600,
                      color: 'var(--rose-dark)',
                      textAlign: 'center',
                      lineHeight: 1.3,
                      background: 'rgba(255,255,255,0.75)',
                      borderRadius: '8px',
                      padding: '3px 6px',
                      backdropFilter: 'blur(6px)',
                    }}
                  >
                    {label}
                  </span>
                </div>
              )
            )}
          </div>
        </div>

        {/* ── CONTACT / COLLAB CTA ── */}
        <div className="anim-fade-up delay-8" style={{ marginBottom: '0' }}>
          <SectionLabel>✦ Connect</SectionLabel>
          <LinkButton
            href="mailto:hello@slowroutines.co"
            icon={MailIcon}
            label="hello@slowroutines.co"
            sublabel="Brand inquiries &amp; collaborations"
            delay=""
          />
        </div>

        {/* ── QUOTE / TAGLINE ── */}
        <div
          className="anim-fade-up delay-8"
          style={{
            marginTop: '36px',
            textAlign: 'center',
            padding: '24px 20px',
            background: 'white',
            borderRadius: '24px',
            border: '1px solid var(--border-soft)',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: '18px',
              color: 'var(--text-mid)',
              lineHeight: 1.65,
              marginBottom: '12px',
            }}
          >
            "slow down, show up, and let your beauty speak."
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            <div style={{ width: '32px', height: '1px', background: 'var(--blush-mid)' }} />
            <span style={{ fontSize: '11px', color: 'var(--rose)', fontWeight: 600, letterSpacing: '0.1em' }}>
              SLOW.ROUTINES
            </span>
            <div style={{ width: '32px', height: '1px', background: 'var(--blush-mid)' }} />
          </div>
        </div>

        {/* ── FOOTER ── */}
        <footer
          style={{
            marginTop: '48px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          {/* Social icon row */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '4px' }}>
            {[
              { icon: InstagramIcon, href: 'https://instagram.com' },
              { icon: TikTokIcon,    href: 'https://tiktok.com' },
              { icon: PinterestIcon, href: 'https://pinterest.com' },
              { icon: MailIcon,      href: 'mailto:hello@slowroutines.co' },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '12px',
                  background: 'white',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--rose)',
                  transition: 'all 0.25s ease',
                  boxShadow: 'var(--shadow-sm)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = 'var(--rose)';
                  el.style.color = 'white';
                  el.style.transform = 'translateY(-2px)';
                  el.style.boxShadow = '0 6px 20px rgba(168,85,99,0.28)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = 'white';
                  el.style.color = 'var(--rose)';
                  el.style.transform = 'translateY(0)';
                  el.style.boxShadow = 'var(--shadow-sm)';
                }}
              >
                <Icon />
              </a>
            ))}
          </div>

          <p style={{ fontSize: '11px', color: 'var(--text-soft)', fontWeight: 500, letterSpacing: '0.03em' }}>
            Represented by{' '}
            <a
              href="https://www.aureliatalent.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--rose)', fontWeight: 600 }}
            >
              Aurelia Talent
            </a>
          </p>

          <p style={{ fontSize: '10px', color: '#c4aaae', letterSpacing: '0.06em', fontWeight: 500 }}>
            © 2026 SLOW.ROUTINES · ALL RIGHTS RESERVED
          </p>
        </footer>
      </div>

      {/* Global styles for .link-btn hover */}
      <style>{`
        .link-btn { display: flex; }
        @media (max-width: 520px) {
          .link-btn { border-radius: 16px !important; padding: 16px 18px !important; }
        }
      `}</style>
    </div>
  );
}

export default App;
