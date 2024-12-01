import { ImageProvider } from '@/components/image/Image'
import { WEB_INFO } from '@/core/util/constants'

const AboutPage = () => {
  return (
    <div className="flex flex-wrap flex-col my-20 p-4">
      <h2 className="w-full mb-3">About Me</h2>
      <div className="flex items-center">
        <p className="w-1/3 me-5">
          I&apos;m Axel Christopher, a Front-End Developer with 5 years of
          experience spanning IT, finance, and insurance. My background includes
          roles as an IT Programmer (2+ years), QA Specialist (1.5 years), and
          developer in financial and insurance sectors. Passionate about
          software engineering, I embrace challenges, adapt to change, and
          strive for continuous growth in technology.
        </p>
        <ImageProvider
          alt="asian man"
          src="https://c.stocksy.com/a/BkpK00/z9/4965467.jpg"
          width={200}
          height={200}
        />
      </div>
      <div>skills</div>
    </div>
  )
}

export default AboutPage

export const metadata = {
  title: WEB_INFO().ABOUT_PAGE.TITLE,
  description: WEB_INFO().ABOUT_PAGE.DESC,
}
