const Stroke = ({ size = 16, children, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    {children}
  </svg>
);

const Filled = ({ size = 16, d, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d={d} />
  </svg>
);

export const MoonIcon = (p) => (
  <Stroke {...p}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </Stroke>
);

export const SunIcon = (p) => (
  <Stroke {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </Stroke>
);

export const ArrowDownIcon = (p) => (
  <Stroke {...p}>
    <path d="M12 5v14M19 12l-7 7-7-7" />
  </Stroke>
);

export const ArrowRightIcon = (p) => (
  <Stroke {...p}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </Stroke>
);

export const ArrowUpRightIcon = (p) => (
  <Stroke {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </Stroke>
);

export const ArrowUpIcon = (p) => (
  <Stroke {...p}>
    <path d="M12 19V5M5 12l7-7 7 7" />
  </Stroke>
);

export const SearchIcon = (p) => (
  <Stroke {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </Stroke>
);

export const CopyIcon = (p) => (
  <Stroke {...p}>
    <rect x="9" y="9" width="12" height="12" rx="2.5" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </Stroke>
);

export const CheckIcon = (p) => (
  <Stroke {...p}>
    <path d="M20 6 9 17l-5-5" />
  </Stroke>
);

export const MailIcon = (p) => (
  <Stroke {...p}>
    <rect x="2" y="4" width="20" height="16" rx="3" />
    <path d="m3 7 8.2 5.6a1.4 1.4 0 0 0 1.6 0L21 7" />
  </Stroke>
);

export const PinIcon = (p) => (
  <Stroke {...p}>
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </Stroke>
);

export const SendIcon = (p) => (
  <Stroke {...p}>
    <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
  </Stroke>
);

export const SignalIcon = (p) => (
  <Stroke {...p}>
    <circle cx="12" cy="19" r="1.4" fill="currentColor" stroke="none" />
    <path d="M8.6 15.6a5 5 0 0 1 6.8 0" />
    <path d="M5.9 12.9a9 9 0 0 1 12.2 0" />
    <path d="M3.2 10.2a13 13 0 0 1 17.6 0" />
  </Stroke>
);

export const CodeIcon = (p) => (
  <Stroke {...p}>
    <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
  </Stroke>
);

export const GradCapIcon = (p) => (
  <Stroke {...p}>
    <path d="m22 9-10-5L2 9l10 5 10-5Z" />
    <path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" />
  </Stroke>
);

export const GithubIcon = ({ size = 18, ...p }) => (
  <Filled
    size={size}
    {...p}
    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
  />
);

export const LinkedinIcon = ({ size = 18, ...p }) => (
  <Filled
    size={size}
    {...p}
    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
  />
);
