import DashboardIcon from '@material-ui/icons/Dashboard';
import CropLandscapeIcon from '@material-ui/icons/CropLandscape';
import AppsIcon from '@material-ui/icons/Apps';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Header = () => {

    const user = useSelector((state) => state.login.user);
    console.log(user)

    return (
        <div className="flex shadow-sm items-center px-8 p-4 bg-white w-screen justify-between fixed top-0 z-10">
            <div className="flex items-center space-x-4">
                <p className="text-xl text-gray-800 font-semibold">Songs</p>
                <p className="text-xl text-gray-800 ">|</p>
                <p className="text-gray-800 text-lg">Dash</p>
            </div>
            
            <div className="flex space-x-3">
                <p className="text-gray-800">Adress </p>
                <CropLandscapeIcon className="text-gray-800" />
                <DashboardIcon className="text-gray-800" />

            </div>
            <div className="flex space-x-4 text-gray-800">
                <AppsIcon />
                <ExitToAppIcon />
                {user ? 
                    <Link href='/dashboard'>
                        <p className="text-gray-600 cursor-pointer font-semibold">{user}</p>
                    </Link>
                :
                    <Link href='/login'>
                        <p className="text-gray-600 cursor-pointer font-semibold">Login</p>
                    </Link>
                }
            </div>
        </div>
    )
}

export default Header
