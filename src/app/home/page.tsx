import { DefaultButton } from '@/components/button/DefaultButton'
import { WEB_INFO } from '@/core/util/constants'

const HomePage = () => {
  return (
    <div className="flex flex-wrap justify-center items-center text-center my-32 p-4">
      <h1 className="w-full mb-3">Axel Christopher</h1>
      <div className="w-1/3">
        <p>
          Hi. I&apos;m a Software Engineer. I&apos;m currently working with
          <span className="underline ml-1">React</span> in a private company
          based in Jakarta.
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
