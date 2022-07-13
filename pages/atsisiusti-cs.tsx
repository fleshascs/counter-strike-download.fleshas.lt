import Sidebar from '../components/Sidebar';
import Top from '../components/Top';
import Card from '../components/Card';
import AtsisiustiCS from '../components/content/AtsisiustiCS';
import NavBar from '../components/NavBar';
import { schema } from '../csSchema';
import Head from 'next/head';

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
            <div className='p-2 font-medium'>
              <AtsisiustiCS />
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

Page.layoutProps = {
  meta: {
    title: 'CS 1.6 Download - Counter-Strike 1.6 Atsisiusti',
    description:
      'Counter-Strike - buvo išleistas 1999 m. Birželio mėn. Tai žaidimas kuris pasaulyje turi savo vertę. Counter Strike vienas iš labiausiai prestižintų visų laikų šaudymo žaidimų. Pradėjus žaisti žaidimą jums leidžia pasirinkti ar norite žaisti su robotais, botais, ar su kitais žaidėjais.'
  }
};
