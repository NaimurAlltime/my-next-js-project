export const metadata = {
    title: 'Dashboard | My Next Project',
    description: 'This is my first next js project',
  }

const DashboardLayout = ({children}) => {
    return (
        <div>
            <div>Sidebar</div>
            {children}
        </div>
    );
};

export default DashboardLayout;