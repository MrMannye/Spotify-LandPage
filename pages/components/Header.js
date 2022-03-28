import DashboardIcon from '@material-ui/icons/Dashboard';
import CropLandscapeIcon from '@material-ui/icons/CropLandscape';
import AppsIcon from '@material-ui/icons/Apps';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Header = () => {
    return (
        <div className="flex shadow-sm items-center px-8 p-4 bg-black w-screen justify-between fixed top-0 z-10">
            <div className="flex items-center space-x-4">
                <p className="text-xl text-gray-400 font-semibold">Songs</p>
                <p className="text-xl text-gray-400 ">|</p>
                <p className="text-gray-400 text-lg">Dash</p>
            </div>
            
            <div className="flex space-x-3">
                <p className="text-gray-400">Adress </p>
                <CropLandscapeIcon className="text-gray-300" />
                <DashboardIcon className="text-gray-300" />

            </div>
            <div className="flex space-x-4 text-gray-400">
                <AppsIcon />
                <ExitToAppIcon />
                <p className="text-gray-600 font-semibold">Close</p>
            </div>
        </div>
    )
}

export default Header
