'use client'
import {useRouter} from "next/navigation";

export default function Home() {
    const router = useRouter();
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h2 className="text-2xl font-bold mb-6">E-commerce Product Card</h2>


        </main>
    );
}
