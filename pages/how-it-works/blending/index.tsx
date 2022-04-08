import type { GetStaticProps, GetStaticPropsContext, NextPage } from 'next'
import Head from 'next/head'
import * as React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import i18n from '../../../next-i18next.config.js'
import BlendingOrigin from '../../../src/origins/blending/BlendingOrigin'

const BlendingPage: NextPage = (): JSX.Element => {
  const { t } = useTranslation([`common`])

  return (
    <React.Fragment>
      <Head>
        <title>{`${t(`common:app.paths.index.root`)} - ${t(
          `common:app.root`
        )} -`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlendingOrigin />
    </React.Fragment>
  )
}

export default BlendingPage

export const getStaticProps: GetStaticProps = async ({
  locale,
}: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, [`common`], i18n)),
    },
  }
}
