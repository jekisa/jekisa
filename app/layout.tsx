import type { Metadata } from 'next'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'
import NavTransitionProvider from '@/components/NavTransitionContext'
import PageTransitionOverlay from '@/components/PageTransitionOverlay'
import QueryProvider from '@/components/QueryProvider'

export const metadata: Metadata = {
  title: 'Jeki Sauwani — Web Developer & Digital Marketer',
  description:
    'Portfolio Jeki Sauwani — Web Developer, Digital Marketing Specialist, dan AI Integration Engineer berbasis di Tangerang, Indonesia.',
  keywords: ['web developer', 'digital marketing', 'next.js', 'tangerang', 'jeki sauwani', 'react', 'typescript'],
  authors: [{ name: 'Jeki Sauwani', url: 'https://www.linkedin.com/in/jekisauwani-17382a129' }],
  openGraph: {
    title: 'Jeki Sauwani — Web Developer & Digital Marketer',
    description: 'Membangun pengalaman digital yang bermakna dari Tangerang untuk dunia.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');if(s==='light'||s==='dark'){document.documentElement.setAttribute('data-theme',s);}else if(window.matchMedia('(prefers-color-scheme: light)').matches){document.documentElement.setAttribute('data-theme','light');}}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <QueryProvider>
          <ThemeProvider>
            <NavTransitionProvider>
              <PageTransitionOverlay />
              {children}
            </NavTransitionProvider>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
