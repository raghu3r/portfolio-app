import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am Raghu Rami Reddy. Specialised in Web Development and a Photographer if I get a Lens on! I love playing football and Volleyball.</p>
      </section>
    </Layout>
  )
}
