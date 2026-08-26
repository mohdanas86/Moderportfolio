import { ReactNode } from "react";
import { CopyCodeButton } from "./CopyCodeButton";

/**
 * Portfolio MDX Components
 * Optimized for black theme with white text
 */

export const mdxComponents = {
    /* ---------------- Headings ---------------- */

    h2: ({ children, ...props }: { children: ReactNode }) => (
        <h2
            className="
                mt-4 mb-2
                text-xl md:text-2xl
                font-semibold
                leading-tight
                text-white
                scroll-mt-20
            "
            {...props}
        >
            {children}
        </h2>
    ),

    h3: ({ children, ...props }: { children: ReactNode }) => (
        <h3
            className="
                mt-3 mb-2
                text-lg md:text-xl
                font-semibold
                leading-tight
                text-white
                scroll-mt-20
            "
            {...props}
        >
            {children}
        </h3>
    ),

    h4: ({ children, ...props }: { children: ReactNode }) => (
        <h4
            className="
                mt-3 mb-1.5
                text-base md:text-lg
                font-semibold
                leading-snug
                text-white
                scroll-mt-20
            "
            {...props}
        >
            {children}
        </h4>
    ),

    h5: ({ children, ...props }: { children: ReactNode }) => (
        <h5
            className="
                mt-2 mb-1
                text-sm md:text-base
                font-semibold
                leading-snug
                text-white
                scroll-mt-20
            "
            {...props}
        >
            {children}
        </h5>
    ),

    h6: ({ children, ...props }: { children: ReactNode }) => (
        <h6
            className="
                mt-2 mb-1
                text-sm md:text-base
                font-semibold
                leading-snug
                text-gray-300
                scroll-mt-20
            "
            {...props}
        >
            {children}
        </h6>
    ),

    /* ---------------- Paragraphs ---------------- */

    p: ({ children, ...props }: { children: ReactNode }) => (
        <p
            className="
                mb-2
                text-sm md:text-base
                leading-relaxed
                text-gray-300
            "
            {...props}
        >
            {children}
        </p>
    ),

    /* ---------------- Links ---------------- */

    a: ({ children, ...props }: { children: ReactNode; href?: string }) => (
        <a
            className="
                text-white
                underline
                decoration-gray-500
                underline-offset-2
                hover:decoration-white
                hover:text-gray-200
                transition-colors duration-200
            "
            target={props.href?.startsWith('http') ? '_blank' : undefined}
            rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
            {...props}
        >
            {children}
        </a>
    ),

    /* ---------------- Inline Code ---------------- */

    code: ({ children, className, ...props }: { children: ReactNode; className?: string }) => {
        const isCodeBlock = className && className.includes('language-');

        if (isCodeBlock) {
            return <code className={className} {...props}>{children}</code>;
        }

        return (
            <code
                className="
                    px-2 py-0.5
                    rounded-md
                    bg-white/10
                    text-xs sm:text-sm
                    font-mono
                    text-[#FF7A00]
                    border border-white/10
                "
                {...props}
            >
                {children}
            </code>
        );
    },

    /* ---------------- Code Blocks ---------------- */

    pre: ({ children, ...props }: { children: ReactNode }) => {
        const getTextContent = (node: ReactNode): string => {
            if (typeof node === 'string') return node;
            if (typeof node === 'number') return String(node);
            if (Array.isArray(node)) return node.map(getTextContent).join('');
            if (node && typeof node === 'object' && 'props' in node) {
                const reactNode = node as { props: { children?: ReactNode } };
                return getTextContent(reactNode.props.children);
            }
            return '';
        };

        const textContent = getTextContent(children);

        return (
            <div className="my-3 relative group">
                <CopyCodeButton code={textContent} />
                <pre
                    className="
                        overflow-x-auto
                        rounded-lg
                        bg-black
                        p-1
                        border border-black
                        text-sm
                        leading-relaxed
                        font-mono
                        text-gray-200
                    "
                    {...props}
                >
                    {children}
                </pre>
            </div>
        );
    },

    /* ---------------- Blockquote ---------------- */

    blockquote: ({ children, ...props }: { children: ReactNode }) => (
        <blockquote
            className="
                my-3
                border-l-4 border-white/70
                pl-3
                py-1
                text-sm md:text-base
                italic
                leading-relaxed
                text-gray-400
            "
            {...props}
        >
            {children}
        </blockquote>
    ),

    /* ---------------- Lists ---------------- */

    ul: ({ children, ...props }: { children: ReactNode }) => (
        <ul
            className="
                mb-2
                pl-5
                space-y-1
                text-sm md:text-base
                leading-relaxed
                text-gray-300
                list-disc
                marker:text-gray-500
            "
            {...props}
        >
            {children}
        </ul>
    ),

    ol: ({ children, ...props }: { children: ReactNode }) => (
        <ol
            className="
                mb-2
                pl-5
                space-y-1
                text-sm md:text-base
                leading-relaxed
                text-gray-300
                list-decimal
                marker:text-gray-500
            "
            {...props}
        >
            {children}
        </ol>
    ),

    li: ({ children, ...props }: { children: ReactNode }) => (
        <li className="pl-0.5" {...props}>
            {children}
        </li>
    ),

    /* ---------------- Horizontal Rule ---------------- */

    hr: (props: object) => (
        <hr
            className="
                my-4
                border-0
                h-px
                bg-white
            "
            {...props}
        />
    ),

    /* ---------------- Tables ---------------- */

    table: ({ children, ...props }: { children: ReactNode }) => (
        <div className="my-3 overflow-x-auto rounded-lg border border-black/80">
            <table
                className="
                    w-full
                    border-collapse
                    text-sm
                    min-w-[600px]
                "
                {...props}
            >
                {children}
            </table>
        </div>
    ),

    thead: ({ children, ...props }: { children: ReactNode }) => (
        <thead className="bg-black/80" {...props}>
            {children}
        </thead>
    ),

    th: ({ children, ...props }: { children: ReactNode }) => (
        <th
            className="
                px-3 py-2
                text-left
                text-xs
                font-semibold
                uppercase
                tracking-wider
                text-white
                border-b border-white
            "
            {...props}
        >
            {children}
        </th>
    ),

    tbody: ({ children, ...props }: { children: ReactNode }) => (
        <tbody className="bg-black divide-y divide-white/30" {...props}>
            {children}
        </tbody>
    ),

    tr: ({ children, ...props }: { children: ReactNode }) => (
        <tr className="hover:bg-gray-900/50 transition-colors" {...props}>
            {children}
        </tr>
    ),

    td: ({ children, ...props }: { children: ReactNode }) => (
        <td
            className="
                px-3 py-2
                text-gray-300
                leading-relaxed
            "
            {...props}
        >
            {children}
        </td>
    ),

    /* ---------------- Emphasis & Strong ---------------- */

    em: ({ children, ...props }: { children: ReactNode }) => (
        <em className="italic text-gray-300" {...props}>
            {children}
        </em>
    ),

    strong: ({ children, ...props }: { children: ReactNode }) => (
        <strong className="font-semibold text-white" {...props}>
            {children}
        </strong>
    ),

    /* ---------------- Images ---------------- */

    img: ({ alt, ...props }: { alt?: string; src?: string }) => (
        <span className="block my-3">
            <span className="block overflow-hidden rounded-lg border border-gray-800">
                <img
                    className="
                        w-full
                        h-auto
                        object-cover
                    "
                    alt={alt}
                    loading="lazy"
                    {...props}
                />
            </span>
            {alt && (
                <span className="block mt-1 text-center text-sm text-gray-500 italic">
                    {alt}
                </span>
            )}
        </span>
    ),
};
