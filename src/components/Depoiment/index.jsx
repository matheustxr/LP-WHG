import iconChat from '../../assets/image/icons/icon-chat.svg'
import chat from '../../assets/image/chat.png'

export default function Depoiment(props){
    return (
        <div className='p-5 w-full flex flex-col items-center my-10'>
            <div className='flex flex-col w-full lg:max-w-[70%] p-5 shadow-lg rounded bg-white text-black'>
                <div className='flex items-center gap-5 mb-5'>
                    <img src={iconChat} alt="icone caixa de texto" />
                    <h2 className='font-bold'>Colaborador</h2>
                </div>
                <div className='mb-5'>
                    <p>
                        {props.depoiment}
                    </p>
                </div>
                <img src={chat} alt="ilustração baão de fala" />
                <div className='flex items-center gap-5'>
                    <img src={props.image} alt="foto do colaborador" className='w-20'/>
                    <div>
                        <strong className='text-lg'>{props.name}</strong>
                        <p className='text-gray-500'>{props.cargo}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}