'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export function CopyCodeButton({ code }: { code: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <button
            onClick={handleCopy}
            className="absolute top-0 right-0 p-2"
            aria-label="Copy code to clipboard"
            title={copied ? "Copied!" : "Copy code"}
        >
            {copied ? (
                <Check className="w-4 h-4 text-green-600" />
            ) : (
                <Copy className="w-4 h-4 text-white hover:text-white/50 " />
            )}
        </button>
    );
}
