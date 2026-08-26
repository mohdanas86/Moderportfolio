import { ExternalLink, Github, Lock } from "lucide-react";

export default function DemoLinks({ githubRepo, livePreview }: { githubRepo?: string, livePreview?: string }) {
    const hasGithub = githubRepo && githubRepo.trim() !== "" && githubRepo !== "#";
    const hasPreview = livePreview && livePreview.trim() !== "" && livePreview !== "#";

    return (
        <div className="flex flex-wrap items-center gap-3.5 mt-2">
            {hasPreview && (
                <a
                    href={livePreview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FF7A00] hover:bg-[#FF7A00]/90 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#FF7A00]/20 hover:scale-[1.02]"
                >
                    <span>Live Preview</span>
                    <ExternalLink size={15} />
                </a>
            )}

            {hasGithub ? (
                <a
                    href={githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-sm border border-white/20 hover:border-white/40 transition-all duration-200 hover:scale-[1.02]"
                >
                    <span>Source Code</span>
                    <Github size={15} />
                </a>
            ) : (
                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 text-white/50 text-xs border border-white/10">
                    <Lock size={13} />
                    <span>Private / Proprietary Code</span>
                </div>
            )}
        </div>
    );
}