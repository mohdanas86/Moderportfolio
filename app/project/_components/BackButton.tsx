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
            className='group inline-flex items-center gap-1.5 sm:gap-2 px-4 py-1.5 lg:py-2 rounded-md sm:rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-all duration-200 border border-white/10 hover:border-white/30 '
        >
            <ArrowLeftIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
            <span>Back</span>
        </button>
    );
}