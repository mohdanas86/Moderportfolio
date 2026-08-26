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
            className='h-9 sm:h-10 group inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 rounded-xl bg-white/5 hover:bg-[#FF7A00]/10 text-white/80 hover:text-[#FF7A00] transition-all duration-200 border border-white/10 hover:border-[#FF7A00]/40 text-xs sm:text-sm font-medium shrink-0'
        >
            <ArrowLeftIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
            <span>All Projects</span>
        </button>
    );
}