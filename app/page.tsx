import Link from 'next/link'
import { FeatureCard } from './components/featureCard'
import styles from './page.module.css'
import Image from 'next/image'

export default async function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.headerLogoContainer}>
        <Image height={36} width={36} src="/logo.svg" alt="Logo" className={styles.headerLogo} />
        <span className={styles.headerAppName}>Every Little Twig</span>
      </div>
      <div className={styles.sectionSpacing} />
      <div className={styles.landingContainer}>
        <div className={styles.landingLeft}>
          <h1>Introducing <br/><span className={styles.landingAppName}>Every Little Twig</span></h1>
          <div className={styles.landingDescription}>The power of a pocket diary now at your fingertips! Manage your daily lives together with your friends and family</div>
          <Link href={"https://apps.apple.com/in/app/every-little-twig/id6467673413"}><div className='download-button'>Download now</div></Link>
        </div>
        <div className={styles.landingRight}>
          <Image height={500} width={500} src="/landing.svg" alt="Landing" />
        </div>
      </div>
      <div className={styles.sectionSpacing} />
      <div className={styles.featuresSectionContainer}>
        <FeatureCard type="groups"/>
        <FeatureCard type="shopping"/>
        <FeatureCard type="reading"/>
        <FeatureCard type="reminders"/>
        <FeatureCard type="more"/>
      </div>
      <div className={styles.sectionSpacing} />
      <div className={styles.downloadSection}>
        <div className={styles.downloadSectionLeft}>
          <div className={styles.downloadLeftTitle}>
            Managing your time with others has never been easier!
          </div>
          <div className={styles.downloadLeftSubtitle}>
            Available on the iOS App store now! <br/>(Android coming soon)
          </div>
        </div>
        <div className={styles.downloadSectionRight}>
          <Link href={"https://apps.apple.com/in/app/every-little-twig/id6467673413"}><div className='download-button'>Download now</div></Link>
        </div>
      </div>
      <div className={styles.sectionSpacing} />
      <div className={styles.footerContainer}>
        <div className={styles.footerLogoContainer}>
          <Image height={36} width={36} src="/logo.svg" alt="Logo" className={styles.headerLogo} />
          <span className={styles.headerAppName}>Every Little Twig</span>
        </div>
        <div className={styles.footerSocialContainer}>
          <Image height={36} width={36} src="/social/email.svg" alt="Logo" className={styles.footerSocialIcon} />
          <Image height={36} width={36} src="/social/instagram.svg" alt="Logo" className={styles.footerSocialIcon} />
          <Image height={36} width={36} src="/social/twitter.svg" alt="Logo" className={styles.footerSocialIcon} />
        </div>
      </div>
    </main>
  )
}
