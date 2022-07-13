import Sidebar from '../components/Sidebar';
import Top from '../components/Top';
import Card from '../components/Card';
import NavBar from '../components/NavBar';

export default function Contact() {
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
            <div className='p-4 pb-[20rem] font-medium'>
              <h2 className='pb-2 text-md font-medium'>Have any questions?</h2>
              Email: cs.fleshas.lt@gmail.com
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
