import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from "@/components/ui/mdx-components"

import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

export default function AboutTheProject({ content }: { content: string }) {
    return (
        <>
            <MDXRemote
                source={content}
                components={mdxComponents}
                options={{
                    mdxOptions: {
                        remarkPlugins: [remarkGfm, remarkBreaks],
                        rehypePlugins: [
                            rehypeSlug,
                            rehypeAutolinkHeadings,
                            [
                                rehypePrettyCode,
                                {
                                    theme: 'github-dark',
                                    keepBackground: false,
                                }
                            ]
                        ],
                    },
                }}
            />
        </>
    )
}