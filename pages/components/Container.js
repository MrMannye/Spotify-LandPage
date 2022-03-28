import Card from './Card'
import Middle from './Middle'
import RightBar from './RightBar'
import World from './World'

const Container = () => {
    return (
        <div className=" bg-whie p-8 w-full flex justify-between items-center bg-black" >
            <div className="px-8 w-full flex flex-col mt-4">
                <div className='my-6'>
                    <p className="text-gray-400 text-lg">
                        Hola
                    </p>
                    <p className="font-bold text-2xl text-gray-600 transform -translate-y-2">
                        Miguel!
                    </p>
                </div>
                
                <div className="grid grid-cols-2 grid-rows-3">
                    <Card title="POP" balance={409} icon={0} />
                    <Card title="HIP-HOP" balance={300} icon={2} />
                    <Card title="CLAIMABLE REWARD" balance={100} icon={1} />
                    <Card title="SONIDERO" balance={339} icon={3} />
                    <Card title="MAS ESCUCHADAS" balance={100} icon={2} />
                    <Card title="REGGETON" balance={339} icon={0} />
                </div>
            </div>

            <div className="flex items-center mt-6 mr-8 justify-center">
                <World></World>
            </div>
        </div>
    )
}

export default Container
