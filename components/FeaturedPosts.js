import GAPageView from '@/components/GAPageView'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import formatDate from '@/lib/utils/formatDate'

const FeaturedPosts = ({ posts }) => {
  let featuredBlogIDs = ['00003', '00004', '00009']
  let blogIDs = []
  posts.map((frontMatter, index) => {
    const { slug, date, title, summary, tags, blogID } = frontMatter
    featuredBlogIDs.map((featuredBlogID, indexA) => {
      if (blogID == featuredBlogID) {
        blogIDs[indexA] = (
          <article
            key={index}
            className="flex flex-col justify-between borderColorGradient bg-red-100 rounded bg-white dark:bg-gray-900 p-2"
          >
            <div>
              <div className="sr-only">Published on</div>
              <div className="flex flex-row justify-between  text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                <time className="pb-3" dateTime={date}>
                  {formatDate(date)}
                </time>
                <GAPageView slug={slug} />
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold tracking-tight">
                <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                  {title}
                </Link>
              </h2>
              <div className="flex flex-wrap ">
                {tags.map((tag) => (
                  <Tag key={tag} text={tag} />
                ))}
              </div>
            </div>
            <div className=" text-sm text-gray-500 max-w-none dark:text-gray-400">{summary}</div>

            <div className="text-base font-medium leading-6">
              <Link
                href={`/blog/${slug}`}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label={`Read "${title}"`}
              >
                Read more &rarr;
              </Link>
            </div>
          </article>
        )
      }
    })
  })
  return (
    <div>
      <h1 className="text-3xl mb-4 font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
        Featured Posts
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">{blogIDs}</div>
    </div>
  )
}

export default FeaturedPosts
