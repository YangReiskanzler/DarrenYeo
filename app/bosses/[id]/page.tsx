import {notFound} from "next/navigation";
import HomeButton from "../../components/homeButton";


interface Boss {
    id: string;
    name: string;
    description: string;
    location: string;
    drops: string;
    healthPoints: number;
    image: string;
}

async function getBoss(id: string): Promise<Boss | null> {
    const res = await fetch(`https://eldenring.fanapis.com/api/bosses/${id}`);
    const data = await res.json();

    if (!data.data) return null;
    return data.data;
}


type Params = Promise <{ id: string }>;

export default async function BossPage({params}: { params: Params }) {
    const { id } = await params;
    const boss = await getBoss(id);


    if (!boss) {
        notFound();
    }


    return (
        <div>
            <div
                className="flex flex-col bg-black/80 rounded-lg shadow-md border-2 border-gray-800 container mx-auto mt-4 mb-4">
                <h1 className="text-4xl font-bold mb-4 mt-6 text-center">
                    {boss.name}
                </h1>
            </div>
            <div
                key={boss.id}
                className="container mx-auto bg-black/80 text-white p-4 rounded-lg shadow-md border-2 border-gray-800"
            >
                <div className="p-4 rounded-lg shadow-md flex items-center justify-center mb-4">
                    <img
                        src={boss.image}
                        alt={boss.name}
                        className="w-130 h-100 rounded-md"
                    />
                </div>
                <div className="p-4 rounded-lg shadow-md flex flex-col gap-4 mt-4">
                    <p className="text-xl mt-1 flex gap-4">
                        <span className="font-bold">Description:</span> {boss.description}
                    </p>
                    <p className="text-xl mt-1 flex gap-4">
                        <span className="font-bold">Location:</span> {boss.location}
                    </p>
                    <p className="text-xl mt-1 flex gap-4">
                        <span className="font-bold">Drops:</span> {boss.drops}
                    </p>
                    <p className="text-xl mt-1 flex gap-4">
                        <span className="font-bold">HealthPoints:</span> {boss.healthPoints}
                    </p>
                </div>
            </div>
            <HomeButton/>
        </div>
    );
}
