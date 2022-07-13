import Sidebar from '../components/Sidebar';
import Top from '../components/Top';
import Card from '../components/Card';
import HomePage from '../components/content/HomePage';
import NavBar from '../components/NavBar';
import Head from 'next/head';
import { schema } from '../csSchema';

export default function Page() {
  return (
    <>
      <Head>
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: schema }} />
      </Head>
      <Top />
      <NavBar />
      <div className='flex flex-col lg:flex-row lg:space-x-4 pb-24 pt-6 bg-gray-900'>
        <div className='basis-1/3'>
          <Sidebar />
        </div>
        <div className='basis-2/3'>
          <Card>
            <div className='p-4 font-medium'>
              <HomePage />
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

Page.layoutProps = {
  meta: {
    title: 'CS 1.6 Download - Counter Strike 1.6 Download',
    description:
      'Download Counter-Strike 1.6 by clicking one of the download buttons, this CS 1.6 setup contains full version of the game. The game does not contains any ads or additional modifications. CS 1.6 install contains default maps, game models (player, gun skins).'
  }
};
