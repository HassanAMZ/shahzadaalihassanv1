import PageTitle from '@/components/PageTitle'
import SectionContainerPost from '@/components/SectionContainerPost'
import { PageSEO } from '@/components/SEO'
import formatDate from '@/lib/utils/formatDate'
import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'
import NewsletterForm from '@/components/NewsletterForm'
import YoutubeEmbed from '@/components/YoutubeEmbed'
import { useEffect } from 'react'

const WebinarSimple = ({
  title,
  description,
  imgSrc,
  href,
  date,
  time,
  host,
  speaker,
  wid,
  embedId,
}) => {
  useEffect(() => {
    let dataLayer = window.dataLayer || []
    dataLayer.push({
      event: 'CustomEvent',
      category: 'singleWebinar',
      action: wid,
      label: title,
      details: {
        title,
        description,
        imgSrc,
        href,
        date,
        time,
        host,
        speaker,
        wid,
        embedId,
      },
    })
    console.log(dataLayer)
  }, [])

  let YoutubeVideo = ''
  if (embedId === 'null') {
    YoutubeVideo = (
      <div className="pt-10 pb-8 prose dark:prose-dark max-w-none">
        <Image alt={title} src={imgSrc} width={1080} height={1080} />
      </div>
    )
  } else {
    YoutubeVideo = (
      <div className="pt-10 pb-8 prose dark:prose-dark max-w-none">
        <YoutubeEmbed embedId="rokGy0huYEA" />
      </div>
    )
  }
  return (
    <SectionContainerPost>
      <PageSEO title={title} description={description} />
      <article>
        <div>
          <header>
            <div className="pb-10 space-y-1 text-center border-b border-gray-200 dark:border-gray-700">
              <dl>
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>{formatDate(date)}</time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>

          <div
            className="pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 "
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2">
              {YoutubeVideo}
              <div className="pt-10 pb-8 prose dark:prose-dark max-w-none">
                Title: {title}
                <br />
                Date: {date}
                <br />
                Time: {time}
                <br />
                Host: {host}
                <br />
                Speaker: {speaker}
                <br />
                Webniar ID: {wid}
                <br />
              </div>
              <div className="pt-10 pb-8 prose dark:prose-dark max-w-none">{description}</div>
              <div className="pt-10 pb-8 prose dark:prose-dark max-w-none">
                {siteMetadata.newsletter.provider !== '' && (
                  <div className="flex items-center justify-center pt-4">
                    <NewsletterForm />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    </SectionContainerPost>
  )
}

export default WebinarSimple
