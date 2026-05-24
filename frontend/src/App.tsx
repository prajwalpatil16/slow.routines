import React, { useState, useCallback } from 'react';
// @ts-ignore
import video1 from './assets/video1.mp4';
// @ts-ignore
import video2 from './assets/video2.mp4';
// @ts-ignore
import video3 from './assets/video3.mp4';
// @ts-ignore
import image1 from './assets/image1.png';
// @ts-ignore
import image2 from './assets/image2.png';
// @ts-ignore
import image3 from './assets/image3.png';
// @ts-ignore
import profilePic from './assets/image.png';

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



const SparkleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z"/>
    <path d="M19 3l.5 1.5L21 5l-1.5.5L19 7l-.5-1.5L17 5l1.5-.5z"/>
    <path d="M5 17l.5 1.5L7 19l-1.5.5L5 21l-.5-1.5L3 19l1.5-.5z"/>
  </svg>
);
const CheckCircleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--rose)', flexShrink: 0 }}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    <polyline points="8 12 11 15 16 9" />
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
  const [copied, setCopied] = useState(false);

  const handleShare = useCallback(async () => {
    const shareData = {
      title: 'slow.routines — Pranathi',
      text: 'Beauty, wellness & slow living ✨ — UGC creator & brand collaborator',
      url: window.location.href,
    };
    if (navigator.share) {
      try { await navigator.share(shareData); } catch (_) {}
    } else {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, []);

  const handleCopyLink = useCallback(async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--warm-white)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >

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
              src={profilePic}
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
          
         
         

          {/* Social quick-links */}
          <div
            style={{
              display: 'flex',
              gap: '10px',
              marginTop: '14px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {[
              {
                href: 'https://www.instagram.com/slow.routines/',
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                ),
              },
              {
                href: 'https://youtube.com/@slow.routine?si=hpkdSBhJLf8LFFRE',
                
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 1.96C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
                  </svg>
                ),
              },
              {
                href: 'https://pin.it/3TlXlH4zK',
                
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                  </svg>
                ),
              },
              {
                href: 'mailto:collab.slowroutines@gmail.com',
                
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                ),
              },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="header-social-btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 14px',
                  borderRadius: '12px',
                  background: 'white',
                  border: '1px solid var(--border)',
                  color: 'var(--rose)',
                  fontSize: '12px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.25s cubic-bezier(0.34,1.56,0.64,1)',
                  letterSpacing: '0.01em',
                }}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </header>

        {/* ── ABOUT ME CARD ── */}
        <div
          className="anim-fade-up delay-1 glass-card"
          style={{
            padding: '32px 24px',
            marginBottom: '32px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '26px',
              fontWeight: 600,
              color: 'var(--rose-dark)',
              margin: 0,
              letterSpacing: '-0.02em',
            }}
          >
            About Me
          </h2>
          <div
            style={{
              width: '48px',
              height: '2px',
              background: 'var(--rose-light)',
              borderRadius: '2px',
              opacity: 0.8,
              marginBottom: '4px',
            }}
          />
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '17px',
              color: 'var(--text-mid)',
              lineHeight: '1.7',
              margin: 0,
              fontWeight: 400,
            }}
          >
            I'm Pranathi, I love creating content about beauty, where I share my everyday routines with makeup and skincare! One of my dream goals is working with huge brands that are well known, and to explore new ways of connecting with creators and brands too!
          </p>
        </div>

        {/* ── STATS CARD (ANALYTICS OVERVIEW) ── */}
        <div
          className="anim-fade-up delay-2 glass-card"
          style={{
            padding: '32px 24px',
            marginBottom: '32px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '26px',
                fontWeight: 600,
                color: 'var(--rose-dark)',
                margin: '0 0 10px',
                letterSpacing: '-0.02em',
              }}
            >
              Analytics Overview
            </h2>
            <div
              style={{
                width: '48px',
                height: '2px',
                background: 'var(--rose-light)',
                borderRadius: '2px',
                opacity: 0.8,
                margin: '0 auto 8px',
              }}
            />
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              gap: '12px',
            }}
          >
            {[
              { value: "25.4K", label: "Followers" },
              { value: "6.2%", label: "Eng. Rate" },
              { value: "180K", label: "Avg. Reach" }
            ].map((stat, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '4px',
                  flex: 1,
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
                  {stat.value}
                </span>
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    color: 'var(--text-soft)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    textAlign: 'center',
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── SERVICES OFFERED CARD ── */}
        <div
          className="anim-fade-up delay-2 glass-card"
          style={{
            padding: '32px 24px',
            marginBottom: '32px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '26px',
                fontWeight: 600,
                color: 'var(--rose-dark)',
                margin: '0 0 10px',
                letterSpacing: '-0.02em',
              }}
            >
              Services Offered
            </h2>
            <div
              style={{
                width: '48px',
                height: '2px',
                background: 'var(--rose-light)',
                borderRadius: '2px',
                opacity: 0.8,
                margin: '0 auto 8px',
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left' }}>
            {[
              { title: "UGC Content", desc: "User-generated content creation" },
              { title: "Instagram Stories/Highlights", desc: "24-hour story content showcasing your products" },
              { title: "Reels/Videos", desc: "Short-form video content" },
              { title: "Paid Collaboration", desc: "Creating videos as exchange for products and payment" },
              { title: "Product Reviews", desc: "Honest reviews and testimonials" },
              { title: "Posts", desc: "Sharing brand collaborations on main profile grids" }
            ].map((service, idx) => (
              <div
                key={idx}
                className="service-card-item"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '16px 20px',
                  borderRadius: '16px',
                  background: 'rgba(201, 112, 126, 0.015)',
                  border: '1px solid var(--border-soft)',
                  transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
              >
                <CheckCircleIcon />
                <div>
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: '14.5px',
                      color: 'var(--text-dark)',
                      lineHeight: 1.2,
                    }}
                  >
                    {service.title}
                  </div>
                  <div
                    style={{
                      fontSize: '12px',
                      color: 'var(--text-soft)',
                      marginTop: '4px',
                      fontWeight: 400,
                    }}
                  >
                    {service.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CONTENT SHOWCASE CARD ── */}
        <div
          className="anim-fade-up delay-3 glass-card"
          style={{
            padding: '32px 24px',
            marginBottom: '32px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '26px',
                fontWeight: 600,
                color: 'var(--rose-dark)',
                margin: '0 0 10px',
                letterSpacing: '-0.02em',
              }}
            >
              Content Showcase
            </h2>
            <div
              style={{
                width: '48px',
                height: '2px',
                background: 'var(--rose-light)',
                borderRadius: '2px',
                opacity: 0.8,
                margin: '0 auto 8px',
              }}
            />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '10px',
            }}
          >
            {[
              { type: 'video', src: video1, link: 'https://www.instagram.com/reels/DXRW9WNkj7m/' },
              { type: 'video', src: video2, link: 'https://www.instagram.com/reel/DXmhMLtDfd9/?igsh=MXg0NHg3MXViaTBvcw==' },
              { type: 'video', src: video3, link: 'https://www.instagram.com/reel/DWGypbtElOO/?igsh=MTNnY3BvcjliaGY0dg==' },
              { type: 'image', src: image1 },
              { type: 'image', src: image2 },
              { type: 'image', src: image3 },
            ].map((item, idx) => {
              const content = item.type === 'video' ? (
                <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                  <video
                    src={item.src}
                    muted
                    loop
                    playsInline
                    autoPlay
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(0, 0, 0, 0.08)',
                      zIndex: 2,
                    }}
                  >
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.85)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.12)',
                        color: 'var(--rose-dark)',
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="6 3 20 12 6 21 6 3"/>
                      </svg>
                    </div>
                  </div>
                </div>
              ) : (
                <img
                  src={item.src}
                  alt={`Showcase item ${idx + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              );

              if (item.type === 'video' && item.link) {
                return (
                  <a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="showcase-item"
                    style={{
                      aspectRatio: '3/4',
                      borderRadius: '14px',
                      overflow: 'hidden',
                      border: '1px solid var(--border-soft)',
                      position: 'relative',
                      display: 'block',
                    }}
                  >
                    {content}
                  </a>
                );
              }

              return (
                <div
                  key={idx}
                  className="showcase-item"
                  style={{
                    aspectRatio: '3/4',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    border: '1px solid var(--border-soft)',
                    position: 'relative',
                  }}
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>

        {/* ── BRAND COLLABORATIONS CARD (list style like reference) ── */}
        <div
          className="anim-fade-up delay-3 glass-card"
          style={{
            padding: '32px 24px',
            marginBottom: '32px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Shimmer top accent */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0,
            height: '3px',
            background: 'linear-gradient(90deg, transparent, var(--rose-light), var(--rose), var(--rose-light), transparent)',
            borderRadius: '24px 24px 0 0',
          }} />

          <div>
            {/* <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              background: 'rgba(201,112,126,0.08)', border: '1px solid rgba(201,112,126,0.15)',
              borderRadius: '100px', padding: '4px 12px', marginBottom: '12px',
            }}>
              <span style={{ fontSize: '12px' }}>✦</span>
              <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--rose)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Worked With</span>
            </div> */}
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '26px', fontWeight: 600,
              color: 'var(--rose-dark)', margin: '0 0 10px',
              letterSpacing: '-0.02em',
            }}>Brand Collaborations</h2>
            <div style={{
              width: '48px', height: '2px',
              background: 'linear-gradient(90deg, var(--rose-light), var(--rose))',
              borderRadius: '2px', margin: '0 auto',
            }} />
          </div>

          {/* List-style brand rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'left' }}>
            {[
              { name: 'Dot&Key',      type: 'Campaign Collaboration',
                icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg> },
              { name: 'Joy',          type: 'Brand Partnership',
                icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
              { name: 'Lotus',        type: 'Gifted Collaboration',
                icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22V12"/><path d="M12 12C12 7 8 3 3 3c0 5 4 9 9 9"/><path d="M12 12c0-5 4-9 9-9c0 5-4 9-9 9"/><path d="M12 12c-3 0-5 2-5 5s2 5 5 5 5-2 5-5-2-5-5-5"/></svg> },
              { name: "A'Dash of Me", type: 'UGC Content',
                icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> },
            ].map((brand, idx) => (
              <div
                key={idx}
                className="brand-row-item"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '14px 18px',
                  borderRadius: '16px',
                  background: 'white',
                  border: '1px solid rgba(201,112,126,0.1)',
                  boxShadow: '0 2px 10px rgba(180,80,100,0.04)',
                  transition: 'all 0.25s cubic-bezier(0.34,1.56,0.64,1)',
                }}
              >
                <div style={{
                  width: '36px', height: '36px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--blush) 0%, var(--blush-mid) 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--rose)', flexShrink: 0,
                }}>
                  {brand.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: '14.5px', color: 'var(--text-dark)', lineHeight: 1.2 }}>
                    {brand.name}
                  </div>
                  <div style={{ fontSize: '11.5px', color: 'var(--text-soft)', marginTop: '2px', fontWeight: 500 }}>
                    {brand.type}
                  </div>
                </div>
                <div style={{ color: 'var(--rose-light)', opacity: 0.6 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RATES CARD ── */}
        <div
          className="anim-fade-up delay-4 glass-card"
          style={{
            padding: '32px 24px',
            marginBottom: '32px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '26px', fontWeight: 600,
              color: 'var(--rose-dark)', margin: '0 0 10px',
              letterSpacing: '-0.02em',
            }}>Rates</h2>
            <div style={{
              width: '48px', height: '2px',
              background: 'var(--rose-light)',
              borderRadius: '2px', opacity: 0.8,
              margin: '0 auto 8px',
            }} />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-around', gap: '8px', flexWrap: 'wrap' }}>
            {[
              { value: 'Custom', label: 'Gifted Collab' },
              { value: '₹5K+',   label: 'Paid Reel' },
              { value: '₹3K+',   label: 'Story / Post' },
              { value: 'Open',   label: 'UGC Content' },
            ].map((rate, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', gap: '4px', flex: '1 1 80px',
                  padding: '14px 8px',
                  borderRadius: '16px',
                  background: 'rgba(201,112,126,0.04)',
                  border: '1px solid rgba(201,112,126,0.1)',
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '20px', fontWeight: 700,
                  color: 'var(--rose-dark)',
                  letterSpacing: '-0.02em', lineHeight: 1,
                }}>{rate.value}</span>
                <span style={{
                  fontSize: '10px', fontWeight: 600,
                  color: 'var(--text-soft)',
                  textTransform: 'uppercase', letterSpacing: '0.06em',
                  textAlign: 'center',
                }}>{rate.label}</span>
              </div>
            ))}
          </div>

          <p style={{
            fontSize: '12px', color: 'var(--text-soft)',
            fontStyle: 'italic', lineHeight: 1.6, margin: 0,
          }}>
            Rates are flexible — let’s connect and create something beautiful together ✨
          </p>
        </div>
        <div
          className="anim-fade-up delay-4 glass-card"
          style={{
            padding: '32px 24px',
            marginBottom: '32px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '26px',
                fontWeight: 600,
                color: 'var(--rose-dark)',
                margin: '0 0 10px',
                letterSpacing: '-0.02em',
              }}
            >
              Find Me Here
            </h2>
            <div
              style={{
                width: '48px',
                height: '2px',
                background: 'var(--rose-light)',
                borderRadius: '2px',
                opacity: 0.8,
                margin: '0 auto 8px',
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left' }}>
            {[
              {
                href: "https://www.instagram.com/slow.routines/",
                icon: InstagramIcon,
                label: "Instagram",
                sublabel: "@slow.routines · 25.4K followers",
              },
              {
                href: "https://youtube.com/@slow.routine?si=hpkdSBhJLf8LFFRE",
                icon: YoutubeIcon,
                label: "YouTube",
                sublabel: "Slow living vlogs",
              },
              {
                href: "https://pin.it/3TlXlH4zK",
                icon: PinterestIcon,
                label: "Pinterest",
                sublabel: "Curated boards & mood boards",
              },
            ].map((link, idx) => {
              const Icon = link.icon;
              return (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card-item"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '14px',
                    padding: '16px 20px',
                    borderRadius: '16px',
                    background: 'rgba(201, 112, 126, 0.03)',
                    border: '1px solid rgba(201, 112, 126, 0.1)',
                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    cursor: 'pointer',
                    textDecoration: 'none',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '12px',
                        background: 'var(--blush)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--rose)',
                        flexShrink: 0,
                      }}
                    >
                      <Icon />
                    </div>
                    <div>
                      <div
                        style={{
                          fontWeight: 600,
                          fontSize: '15px',
                          color: 'var(--text-dark)',
                          lineHeight: 1.2,
                        }}
                      >
                        {link.label}
                      </div>
                      <div
                        style={{
                          fontSize: '12px',
                          color: 'var(--text-soft)',
                          marginTop: '2px',
                          fontWeight: 400,
                        }}
                      >
                        {link.sublabel}
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      color: 'var(--rose-light)',
                      transition: 'transform 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                    className="arrow-icon"
                  >
                    <ChevronRightIcon />
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* ── CONTACT / COLLAB CTA ── */}
        <div className="anim-fade-up delay-8" style={{ marginBottom: '0' }}>
          <SectionLabel>✦ Connect</SectionLabel>
          <LinkButton
                      href="mailto:collab.slowroutines@gmail.com"
            icon={MailIcon}
            label="collab.slowroutines@gmail.com"
            sublabel="Brand inquiries & collaborations"
            delay=""
          />
        </div>

        {/* ── QUOTE / TAGLINE ── */}
        <div
          className="anim-fade-up delay-8 glass-card"
          style={{
            marginTop: '36px',
            textAlign: 'center',
            padding: '24px 20px',
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
              { icon: InstagramIcon, href: 'https://www.instagram.com/slow.routines/' },
              { icon: PinterestIcon, href: 'https://pin.it/3TlXlH4zK' },
              { icon: MailIcon,      href: 'mailto:collab.slowroutines@gmail.com' },
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
          <p style={{ fontSize: '10px', color: '#c4aaae', letterSpacing: '0.06em', fontWeight: 500 }}>
            © 2026 SLOW.ROUTINES · ALL RIGHTS RESERVED
          </p>
        </footer>
      </div>

      {/* ── STICKY SHARE / COPY BUTTONS ── */}
      <div className="sticky-actions">
        {copied && (
          <div className="copy-toast">✓ Link copied!</div>
        )}
        <button className="sticky-btn" onClick={handleShare} aria-label="Share">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3"/>
            <circle cx="6" cy="12" r="3"/>
            <circle cx="18" cy="19" r="3"/>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
          </svg>
          Share
        </button>
        <button className="sticky-btn sticky-btn--outline" onClick={handleCopyLink} aria-label="Copy link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
          </svg>
          Copy Link
        </button>
      </div>

      {/* Global styles for .link-btn hover and card items */}
      <style>{`
        .link-btn { display: flex; }
        @media (max-width: 520px) {
          .link-btn { border-radius: 16px !important; padding: 16px 18px !important; }
        }
        .social-card-item:hover {
          background: rgba(201, 112, 126, 0.07) !important;
          border-color: rgba(201, 112, 126, 0.22) !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(180, 80, 100, 0.05);
        }
        .social-card-item:hover .arrow-icon {
          transform: translateX(3px);
          color: var(--rose) !important;
        }
        .service-card-item {
          transition: all 0.25s ease-out;
        }
        .service-card-item:hover {
          transform: translateY(-1px);
          background: rgba(201, 112, 126, 0.035) !important;
          border-color: rgba(201, 112, 126, 0.18) !important;
          box-shadow: 0 4px 12px rgba(180, 80, 100, 0.03);
        }
        .showcase-item {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .showcase-item:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 24px rgba(180, 80, 100, 0.12);
        }
        .header-social-btn:hover {
          background: var(--blush) !important;
          border-color: var(--rose-light) !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(180, 80, 100, 0.1);
          color: var(--rose-dark) !important;
        }
        .brand-card:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 10px 28px rgba(180, 80, 100, 0.12);
          border-color: rgba(201, 112, 126, 0.25) !important;
        }

        /* ── Sticky action buttons ── */
        .sticky-actions {
          position: fixed;
          bottom: 28px;
          right: 20px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 10px;
          z-index: 100;
        }
        .sticky-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 11px 18px;
          border-radius: 100px;
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.01em;
          cursor: pointer;
          border: none;
          background: linear-gradient(135deg, var(--rose) 0%, var(--rose-dark) 100%);
          color: white;
          box-shadow: 0 6px 20px rgba(168, 85, 99, 0.32);
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
          white-space: nowrap;
        }
        .sticky-btn:hover {
          transform: translateY(-2px) scale(1.04);
          box-shadow: 0 10px 28px rgba(168, 85, 99, 0.42);
        }
        .sticky-btn:active {
          transform: translateY(0) scale(0.97);
        }
        .sticky-btn--outline {
          background: white;
          color: var(--rose-dark);
          border: 1.5px solid rgba(201, 112, 126, 0.25);
          box-shadow: 0 4px 14px rgba(180, 80, 100, 0.1);
        }
        .sticky-btn--outline:hover {
          background: var(--blush);
          border-color: var(--rose-light);
          box-shadow: 0 8px 20px rgba(180, 80, 100, 0.14);
        }
        .copy-toast {
          background: var(--rose-dark);
          color: white;
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          padding: 8px 16px;
          border-radius: 100px;
          box-shadow: 0 4px 16px rgba(168, 85, 99, 0.3);
          animation: toastIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          letter-spacing: 0.02em;
        }
        @keyframes toastIn {
          from { opacity: 0; transform: translateY(8px) scale(0.92); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}

export default App;
