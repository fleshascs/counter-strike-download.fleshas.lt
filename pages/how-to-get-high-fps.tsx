import Sidebar from '../components/Sidebar';
import Top from '../components/Top';
import Card from '../components/Card';
import HowToGetHighFPS from '../components/content/HowToGetHighFPS';
import NavBar from '../components/NavBar';

export default function Page() {
  return (
    <>
      <Top />
      <NavBar />
      <div className='flex flex-col lg:flex-row lg:space-x-4 pb-24 pt-6 bg-gray-900'>
        <div className='basis-1/3 pt-10 lg:pt-0'>
          <Sidebar />
        </div>
        <div className='basis-2/3'>
          <Card>
            <div className='p-4  font-medium'>
              <HowToGetHighFPS />
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

Page.layoutProps = {
  meta: {
    title: 'CS 1.6 Download - CS 1.6 high FPS settings',
    description: 'CS 1.6 high FPS settings settup a cs cofing to get high fps and less lag'
  }
};
