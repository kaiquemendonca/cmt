'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { Contacts } from '@/components/Contacts';
import { motion, AnimatePresence } from 'framer-motion';
import { Righteous } from 'next/font/google';

const inter = Righteous({
    subsets: ["latin"],
    weight: ["400"],
});

export default function TourPageClient({ tour }: { tour: any }) {
    const router = useRouter();
    const [disabledDates, setDisabledDates] = useState<Date[]>([]);
    const [selectedDate, setSelectedDate] = useState<Date>();
    const [quantity, setQuantity] = useState(1);
    const [showCalendar, setShowCalendar] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const total = tour.price;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();

        if (href.startsWith("#")) {
            const targetId = href.replace("#", "");
            const elem = document.getElementById(targetId);

            if (elem) {
                elem.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            router.push(href);
        }
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!selectedDate) {
            alert('Selecione uma data válida');
            return;
        }

        const res = await fetch('/api/checkout', {
            method: 'POST',
            body: JSON.stringify({
                ...form,
                date: format(selectedDate, 'dd--MM-yyyy'),
                quantity,
                tourId: tour.id,
                tourName: tour.name,
                price: total,
            }),
        });

        const data = await res.json();

        if (data.url) {
            router.push(data.url);
        } else {
            alert('Erro ao criar checkout');
            console.error('Erro ao criar checkout:', data);
            console.error('Erro ao criar checkout:', tour.id, tour.name, format(selectedDate, 'yyyy-MM-dd'), quantity, total);
        }
    };

    const image = tour.images[0]?.url;

    // Fetch das datas bloqueadas
    useEffect(() => {
        const fetchDisabledDates = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/disabled-dates?filters[tour][id][$eq]=${tour.id}&populate=*`
                );

                if (!res.ok) {
                    throw new Error(`Erro HTTP: ${res.status}`);
                }

                const data = await res.json();

                const strapiDates = data.data.map((item: any) => {
                    const [year, month, day] = item.date.split('-');
                    return new Date(Number(year), Number(month) - 1, Number(day));
                });

                const today = new Date();
                today.setHours(0, 0, 0, 0);

                const pastDates: Date[] = [];
                const startDate = new Date(2020, 0, 1);
                let current = new Date(startDate);

                while (current <= today) {
                    pastDates.push(new Date(current));
                    current.setDate(current.getDate() + 1);
                }

                const allDisabledDates = [...strapiDates, ...pastDates];

                setDisabledDates(allDisabledDates);
            } catch (error) {
                console.error('Erro ao buscar datas bloqueadas:', error);
            }
        };

        fetchDisabledDates();
    }, [tour.id]);

    return (
        <div className={`${inter.className}
     w-full bg-white w-full h-auto`}>

            <motion.div
                className="w-full fixed top-0 z-50 flex items-start justify-between text-xs font-medium uppercase"
            >

                <motion.button
                    className="relative h-15 flex flex-col backdrop-blur-sm justify-center items-start px-8  gap-1 z-50 md:hidden bg-blue-800/50 w-40 rounded-br-3xl"
                    animate={{ background: isOpen ? "#6ABAC400" : "#6ABAC450", filter: isOpen ? "backdrop-filter(0px)" : "backdrop-filter(8px)" }}
                    onClick={toggleMenu}
                    aria-label="Menu"
                >
                    <motion.span
                        animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
                        className="w-8 h-0.5 bg-white rounded origin-center"
                        transition={{ duration: 0.3 }}
                    />
                    <motion.span
                        animate={{ opacity: isOpen ? 0 : 1 }}
                        className="w-8 h-0.5 bg-white rounded"
                        transition={{ duration: 0.3 }}
                    />
                    <motion.span
                        animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
                        className="w-8 h-0.5 bg-white rounded origin-center"
                        transition={{ duration: 0.3 }}
                    />
                </motion.button>
                <div className=" flex items-center font-medium tracking-[4px] md:hidden">
                    <img className="size-15" src="/assets/logo-cmt.png" />
                </div>

                {/* Botão de menu */}


                {/* Modal */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed w-40 left-0 top-0 bg-[#6ABAC4]/50 backdrop-blur-sm flex justify-center items-center z-40 p-8 rounded-br-3xl md:hidden"
                            onClick={toggleMenu}
                        >
                            <motion.div
                                key="modal"
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -100, opacity: 0 }}
                                transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
                                className=" text-center w-full h-full"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <ul className="space-y-1 flex flex-col items-start text-xl pt-8">
                                    {menu.map((menu, index) => {
                                        return (
                                            <motion.li
                                                layout
                                                key={index}

                                                className="cursor-pointer border-b-[#4ccbd1] transition-all duration-300 ease-in-out text-white
                     items-center"
                                            >
                                                <a href={menu.href} onClick={(e) => handleMenuClick(e, menu.href)}>
                                                    {menu.nome}
                                                </a>


                                            </motion.li>
                                        );
                                    })}
                                </ul>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="hidden md:inline-block w-[95%] mx-auto bg-blue-800/90 backdrop-blur-sm flex justify-center items-center z-40 p-4 rounded-b-3xl"
                    >
                        <motion.div
                            key="modal"
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -100, opacity: 0 }}
                            transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
                            className="flex justify-between text-center  h-full w-[85%] mx-auto"
                            onClick={(e) => e.stopPropagation()}

                        >
                            <ul className="space-x-4 flex items-start text-xl ">
                                {menu.map((menu, index) => {
                                    return (
                                        <>
                                            <motion.li
                                                layout
                                                key={index}

                                                className="cursor-pointer border-b-[#4ccbd1] transition-all duration-300 ease-in-out space-x-4 text-white
                 items-center"
                                            >
                                                <a href={menu.href} onClick={(e) => handleMenuClick(e, menu.href)}>
                                                    {menu.nome}
                                                </a>

                                                <a></a>
                                            </motion.li>

                                        </>


                                    );
                                })}
                            </ul>
                            <div className="flex space-x-6">
                                <div className="">
                                    <a className="size-15" href="https://api.whatsapp.com/send?l=pt&phone=5582994180997" target="_blank"><img className="" src="/assets/wapp.svg" /></a>
                                </div>
                                <div className="">
                                    <a className="tracking-widest" href="https://www.instagram.com/cesarmaceiotur/" target="_blank" ><img className="" src="/assets/insta2.svg" /></a>
                                </div>
                                <div className="">
                                    <img className="" src="/assets/logo-cmt.svg" />
                                </div>
                            </div>


                        </motion.div>
                    </motion.div>

                </AnimatePresence>
            </motion.div >






            <div className="flex flex-col md:flex-row gap-8 p-10 md:max-w-7xl mx-auto md:pt-20 md:px-0 pt-15 ">
                <div className="md:w-2/3">
                    <img src={image} alt={tour?.name} className="w-full h-[70%] rounded-xl" />
                    <h1 className="text-3xl font-bold mt-4 text-black">{tour?.name}</h1>
                    <p className="mt-4 text-gray-600">{tour?.description}</p>
                </div>

                <div className="md:w-1/3 bg-white shadow-lg rounded-xl p-5 pt-2">
                    <h2 className="text-2xl font-bold mb-4 text-black">Reserve seu passeio</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Nome"
                            required
                            value={form?.name}
                            onChange={handleChange}
                            className="border rounded p-2 text-black"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Seu e-mail"
                            required
                            value={form.email}
                            onChange={handleChange}
                            className="border rounded p-2 text-black"
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="WhatsApp (DDD + número)"
                            required
                            value={form.phone}
                            onChange={handleChange}
                            className="border rounded p-2 text-black"
                        />

                        {/* Campo de Data com botão que abre o calendário */}
                        <div className="w-full text-black">
                            <p className="font-bold mb-1 text-black">Data do passeio:</p>
                            <button
                                type="button"
                                onClick={() => setShowCalendar(true)}
                                className="w-full border rounded p-2 text-left hover:bg-blue-50"
                            >
                                {selectedDate
                                    ? selectedDate.toLocaleDateString('pt-BR')
                                    : 'Escolher data'}
                            </button>
                        </div>

                        <div>
                            <p className="font-bold mb-1 text-black">Quantidade de pessoas:</p>
                            <select
                                name="quantity"
                                value={quantity}
                                onChange={(e) => setQuantity(Number(e.target.value))}
                                required
                                className="border rounded p-2 w-full"
                            >
                                {[...Array(6)].map((_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                        {i + 1} pessoa{i === 0 ? '' : 's'}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="font-semibold text-xl text-black">
                            Total: <span className="text-green-600">R$ {total},00</span>
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                        >
                            Continuar para pagamento
                        </button>
                    </form>
                </div>

                {/* Modal Calendário */}
                {showCalendar && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/50 text-black">
                        <div className="bg-white rounded-xl shadow-xl p-6 animate-fadeIn">
                            <h3 className="text-xl font-semibold mb-4 text-center text-black">
                                Escolha uma data
                            </h3>
                            <DayPicker
                                mode="single"
                                selected={selectedDate}
                                onSelect={(date) => {
                                    setSelectedDate(date);
                                    setShowCalendar(false);
                                }}
                                disabled={disabledDates}
                                locale={ptBR}
                                modifiersClassNames={{
                                    selected: 'bg-blue-600 text-white',
                                    disabled: 'text-gray-400 line-through',
                                }}
                            />
                            <button
                                onClick={() => setShowCalendar(false)}
                                type="button"
                                className="mt-4 block mx-auto text-sm text-red-500 hover:underline"
                            >
                                Fechar
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <Contacts />
        </div>
    );
}

const menu = [
    { nome: "Início", href: "/" },
];
