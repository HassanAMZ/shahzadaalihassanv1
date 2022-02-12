import headerNavLinks from '@/data/headerNavLinks'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import PortfolioIntroductionSummary from '@/components/PortfolioIntroductionSummary'
import { Box, Image, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'

const LayoutWrapper = ({ children }) => {
  return (
    <div className="flex flex-col">
      <SectionContainer>
        <div className="flex flex-col justify-between">
          <Flex
            as="header"
            direction="row "
            justifyContent="space-between"
            alignItems="center"
            pt="6"
            pb="3"
          >
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="py-2 font-medium text-gray-900 sm:pr-4  dark:text-gray-100"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <Link href="/">
              <a>
                <Box borderRadius="100" w="8" bgColor="teal">
                  <Image src="/static/images/avatar.png" />
                </Box>
              </a>
            </Link>

            <MobileNav />
          </Flex>
          <PortfolioIntroductionSummary />
          <main className="mb-auto">{children}</main>
          <Footer />
        </div>
      </SectionContainer>
    </div>
  )
}

export default LayoutWrapper
