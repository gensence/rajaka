import React from 'react'
import { Helmet } from 'react-helmet'
import { Layout as AntLayout } from 'antd'

const Layout = ({ children, title, description, keywords, article }) => (
  <AntLayout className="bg-transparent min-h-screen">
    <Helmet>
      <html lang="ja" prefix="og: http://ogp.me/ns#" />
      <title>{title}</title>
      <meta charset="UTF-8" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      {article && <meta property="og:type" content="article" />}
      {article && article.title && <meta property="og:title" content={article.title} />}
      {article && article.description && (
        <meta property="og:description" content={article.description} />
        <script data-ad-client="ca-pub-6835600394159446" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      )}
    </Helmet>
    {children}
  </AntLayout>
)

export default Layout
