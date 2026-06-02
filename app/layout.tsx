import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GitHub AI Agent',
  description: 'AI-powered GitHub agent for automated repository management',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
