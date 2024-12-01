import { DefaultButton } from '@/components/button/DefaultButton'
import { WEB_INFO } from '@/core/util/constants'

const HomePage = () => {
  return (
    <div className="flex flex-wrap justify-center items-center text-center my-36">
      <h1 className="w-full text-[#272343] mb-3">Axel Christopher</h1>
      <div className="w-1/3">
        <p className="text-[#2d334a]">
          Hi. I&apos;m a Software Engineer. I&apos;m currently working with
          React in a private company based in Jakarta.
        </p>
        <DefaultButton>See my resume</DefaultButton>
      </div>
    </div>
  )
}

export default HomePage

export const metadata = {
  title: WEB_INFO().HOME_PAGE.TITLE,
  description: WEB_INFO().HOME_PAGE.DESC,
}
