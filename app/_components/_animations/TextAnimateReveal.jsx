"use client"

import { TextAnimate } from "@/components/ui/text-animate"

export default function TextAnimateReveal({ text = "Wavy Motion!" }) {
    return (
        <>
            <TextAnimate animation="slideLeft" by="character">
                {text}
            </TextAnimate>
        </>
    )
}
