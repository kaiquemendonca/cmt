'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export default function TourPageClient({ tour }: { tour: any }) {
    const router = useRouter();
    const [disabledDates, setDisabledDates] = useState<Date[]>([]);
    const [selectedDate, setSelectedDate] = useState<Date>();
    const [quantity, setQuantity] = useState(1);

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const total = tour.price;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
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
                date: format(selectedDate, 'yyyy-MM-dd'),
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
        }
    };

    const image = tour.images[0]?.url;

    // Fetch das datas bloqueadas no Strapi
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
                const dates = data.data.map((item: any) => new Date(item.date));
                setDisabledDates(dates);
                console.log('Datas bloqueadas:', dates);
            } catch (error) {
                console.error('Erro ao buscar datas bloqueadas:', error);
            }
        };

        fetchDisabledDates();
    }, [tour.id]);

    return (
        <div className="flex flex-col md:flex-row gap-8 p-10 md:max-w-7xl mx-auto md:pt-5 md:px-0">
            <div className="md:w-2/3">
                <img src={image} alt={tour?.name} className="w-full h-[70%] rounded-xl" />
                <h1 className="text-3xl font-bold mt-4">{tour?.name}</h1>
                <p className="mt-4 text-gray-600">{tour?.description}</p>
            </div>

            <div className="md:w-1/3 bg-white shadow-lg rounded-xl p-5 pt-2">
                <h2 className="text-2xl font-bold mb-4">Reserve seu passeio</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Nome"
                        required
                        value={form?.name}
                        onChange={handleChange}
                        className="border rounded p-2"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Seu e-mail"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="border rounded p-2"
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="WhatsApp (DDD + número)"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        className="border rounded p-2"
                    />

                    <div className='w-full'>
                        <p className="font-bold mb-1">{
                            selectedDate ? `Data escolhida: ${selectedDate.toLocaleDateString()}` : "Escolha a data que deseja fazer esse passeio."
                        }</p>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            fromDate={new Date()}
                            disabled={disabledDates}
                            locale={ptBR}
                            modifiersClassNames={{
                                selected: 'bg-blue-600 text-white',
                                disabled: 'text-gray-400 line-through',
                            }}
                            className="rounded border w-full flex justify-center items-center"
                        />

                    </div>


                    <div>
                        <p className="font-bold mb-1">Quantidade de pessoas:</p>
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

                    <div className="font-semibold text-xl">
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
        </div>
    );
}
