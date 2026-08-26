import { ExternalLink, Github, Lock } from "lucide-react";

export default function DemoLinks({ githubRepo, livePreview }: { githubRepo?: string, livePreview?: string }) {
    const hasGithub = githubRepo && githubRepo.trim() !== "" && githubRepo !== "#";
    const hasPreview = livePreview && livePreview.trim() !== "" && livePreview !== "#";

    return (
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mt-2">
            {hasPreview && (
                <a
                    href={livePreview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 sm:h-10 inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 rounded-xl bg-[#FF7A00] hover:bg-[#FF7A00]/90 text-white font-semibold text-xs sm:text-sm transition-all duration-200 shadow-md shadow-[#FF7A00]/20 hover:scale-[1.02] shrink-0"
                >
                    <span>Live Preview</span>
                    <ExternalLink size={14} />
                </a>
            )}

            {hasGithub ? (
                <a
                    href={githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 sm:h-10 inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white/90 hover:text-white font-medium text-xs sm:text-sm border border-white/10 hover:border-white/25 transition-all duration-200 hover:scale-[1.02] shrink-0"
                >
                    <span>Source Code</span>
                    <Github size={14} />
                </a>
            ) : (
                <div className="h-9 sm:h-10 inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 rounded-xl bg-white/5 text-white/50 text-xs border border-white/10 shrink-0">
                    <Lock size={12} />
                    <span>Private Code</span>
                </div>
            )}
        </div>
    );
}