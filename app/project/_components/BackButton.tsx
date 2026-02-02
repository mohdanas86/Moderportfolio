'use client';

import { ArrowLeftIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function BackButton() {
    const router = useRouter();

    const handleBack = () => {
        if (window.history.length > 1) {
            router.back();
        } else {
            router.push('/');
        }
    };

    return (
        <button
            onClick={handleBack}
            className='inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-transparent hover:bg-white/10 text-white transition-colors duration-200'
        >
            <ArrowLeftIcon className="w-4 h-4" />
            <span className="text-sm">Back</span>
        </button>
    );
}