import Sidebar from '../components/Sidebar';
import Top from '../components/Top';
import Card from '../components/Card';
import Cs16FullInstall from '../components/content/Cs16FullInstall';
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
        <div className='basis-1/3 pt-10 lg:pt-0'>
          <Sidebar />
        </div>
        <div className='basis-2/3'>
          <Card>
            <div className='p-4 font-medium'>
              <Cs16FullInstall />
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

Page.layoutProps = {
  meta: {
    title: 'CS 1.6 Download - Counter-Strike 1.6 Full install',
    description:
      'CS 1.6 Servers can not change your configuration, The installation is clean and free of viruses! Counter-Strike 1.6 Engine version is 1.1.2.6 (build 4554) The installation takes only 200Mb. Works great with Windows 10, Vista, 7, 8, 8.1. 100% Steam GCFs (Game cache files) copy. 47 + 48 protocol client'
  }
};
