export const metadata = {
  title: 'Simple Next.js App',
  description: 'Bare minimum Next.js webapp'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: '2rem' }}>
        {children}
      </body>
    </html>
  );
}
