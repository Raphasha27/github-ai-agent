import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GitHub AI Agent',
  description: 'AI-powered GitHub agent for automated repository management',
};

export default function Page() {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{
        fontFamily: "'Inter', -apple-system, sans-serif",
        background: '#0d1117',
        color: '#c9d1d9',
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}>
        <main style={{
          maxWidth: 800,
          padding: '2rem',
          textAlign: 'center',
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 700,
            color: '#58a6ff',
            marginBottom: '0.5rem',
          }}>
            🤖 GitHub AI Agent
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#8b949e',
            marginBottom: '2rem',
          }}>
            AI-powered agent for automated repository management, PR review, and workflow optimization
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
            margin: '2rem 0',
          }}>
            {[
              { title: 'Smart PR Review', desc: 'AI analyzes pull requests for bugs, security issues, and code quality' },
              { title: 'Auto-merge', desc: 'Intelligent merge decisions based on test results and review criteria' },
              { title: 'Issue Triage', desc: 'Automatically categorize and assign issues using ML' },
              { title: 'Changelog Gen', desc: 'Generate release notes from conventional commits' },
            ].map((card) => (
              <div key={card.title} style={{
                background: '#161b22',
                border: '1px solid #30363d',
                borderRadius: 8,
                padding: '1.5rem',
                textAlign: 'left',
                transition: 'border-color 0.2s',
              }}>
                <h3 style={{ color: '#e6edf3', margin: '0 0 0.5rem' }}>{card.title}</h3>
                <p style={{ color: '#8b949e', fontSize: '0.9rem', margin: 0 }}>{card.desc}</p>
              </div>
            ))}
          </div>
          <div style={{
            background: '#161b22',
            border: '1px solid #30363d',
            borderRadius: 8,
            padding: '2rem',
            marginTop: '1rem',
          }}>
            <p style={{ color: '#8b949e', marginBottom: '1rem' }}>
              Connect your repositories and let AI handle the routine work.
            </p>
            <a href="https://github.com/apps/github-ai-agent" style={{
              display: 'inline-block',
              padding: '0.75rem 2rem',
              background: '#238636',
              color: '#fff',
              borderRadius: 6,
              fontWeight: 600,
              textDecoration: 'none',
              fontSize: '1rem',
            }}>
              Install GitHub App
            </a>
          </div>
          <footer style={{ marginTop: '3rem', color: '#484f58', fontSize: '0.8rem' }}>
            Powered by Raphasha27 &middot; Open source on GitHub
          </footer>
        </main>
      </body>
    </html>
  );
}
