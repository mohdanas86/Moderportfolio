import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from "@/components/ui/mdx-components"

import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

export default function AboutTheProject() {
    const post = {
        content: `## Unifying Online and In-Store Retail Experiences

> *A Cloud-Based Project Using Microservices*

---

## 1. Project Overview

### **Project Title**

**Unifying Online and In-Store Retail Experiences Using Cloud Technologies**

### **Business Challenge**

Large retailers usually have:

* Physical (offline) stores
* Online (e-commerce) platforms

These systems often work **independently**, causing:

* Different prices online and offline
* Inconsistent promotions
* Incorrect inventory availability

This leads to **poor customer experience** and **loss of sales**.

---

## 2. Project Objective

* Integrate online and in-store retail systems
* Provide **real-time inventory visibility**
* Ensure **consistent pricing and promotions**
* Build a **scalable and reliable cloud architecture**
* Perform **data analytics and demand forecasting**

---

## 3. Technology Stack

| Technology                         | Purpose                                 |
| ---------------------------------- | --------------------------------------- |
| **Cloud CDN**                      | Fast delivery of static website content |
| **Google Kubernetes Engine (GKE)** | Run scalable microservices              |
| **Apigee**                         | API management and security             |
| **Cloud Spanner**                  | Real-time inventory database            |
| **BigQuery**                       | Analytics and forecasting               |

---`
    }

    return (
        <>
            <MDXRemote
                source={post.content}
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