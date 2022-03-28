import React from 'react'
// import { Doughnut } from 'react-chartjs-2';

const data = {
    labels: [

    ],
    datasets: [{
        data: [10, 100],
        backgroundColor: [
            ' rgba(67, 56, 202)',
            'rgba(229, 231, 235)',

        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',

        ]
    }]
};

const Color = ["from-indigo-500 to-blue-500", "from-blue-400 to-blue-300", "from-green-500 to-green-400", "from-yellow-600 to-yellow-500"]

const RightBar = (props) => {
    return (
        <div className={`bg-gradient-to-t ${Color[props.icon]} rounded-xl`}>
            <div className="border-b p-3 border-gray-100">
                <p className="text-gray-100 font-semibold  ">Songs you Like</p>
            </div>
            <div className="flex flex-col items-center p-3">
                <p className="font-semibold text-lg text-gray-200" > 21 h 47 m 51s</p>
                <p className="text-gray-200 text-sm">until next rewards batch is distributed</p>
            </div>

            <div className="p-4 flex items-center justify-center">
                <div className="flex justify-center items-center h-48 w-48 rounded-full" style={{ borderWidth: "16px" }} >
                    <div className="flex justify-center items-center  border-gray-200 h-44 w-44 rounded-full ">
                        <div className=" flex flex-col justify-center items-center shadow-2xl h-32 w-32 rounded-full ">
                            <p className="text-gray-200 font-semibold"> 17.0216 EGLD</p>
                            <p className="text-blue-400 font-semibold text-sm">See Now</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightBar
