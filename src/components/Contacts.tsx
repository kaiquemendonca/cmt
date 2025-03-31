export const Contacts = () => {
    return (
        <div id="contacts" className="relative h-screen w-full">
            <img className="absolute left-0 top-0 h-full w-full object-cover object-top brightness-50" src="/assets/iago-2.png"></img>
            <div className="relative flex flex-col md:flex-row h-full items-center justify-center">
                <div className="flex flex-col h-52 min-w-[252px] rounded-2xl shadow-md md:h-80 md-min-w-[250px] bg-white my-10 md:mx-10">
                    <div className="flex flex-1 justify-center items-end">
                        <img className="w-30" src="/assets/wapp.svg" />
                    </div>
                    <div  className="flex flex-1 justify-center items-center">
                        <a href="https://api.whatsapp.com/send?l=pt&phone=5582991432144" className="text-black text-center">WHATSAPP 24 HORAS <br /> (82) 99143-2144</a>

                    </div>
                </div>
                <div className="flex flex-col h-52 min-w-[252px] rounded-2xl shadow-md md:h-80 md-min-w-[250px] bg-white">
                    <div className="flex flex-1 justify-center items-end">
                        <img className="w-30" src="/assets/insta.svg" />
                    </div>
                    <div className="flex flex-1 justify-center items-center">
                        <p className="text-black text-center">INSTAGRAM <br /> @cesarmaceiotur</p>

                    </div>
                </div>
            </div>
        </div>
    )
}