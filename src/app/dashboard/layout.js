import Sidebar from './Sidebar';

export const metadata = {
    title: 'Dashboard | My Next Project',
    description: 'This is my first next js project',
  }

const DashboardLayout = ({children}) => {
    return (
        <div className='flex max-w-screen-xl mx-auto'>
            <div><Sidebar /></div>
            {children}
        </div>
    );
};

export default DashboardLayout;