import { Spinner } from "@/components/ui/spinner";

const Loading = ({ content }) => {
    return (

        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40">
            <div className="flex flex-col items-center gap-3 rounded-2xl bg-white px-8 py-6 shadow-lg">
                <Spinner className="size-10" />
                <p className="text-sm font-medium">
                    {content}
                </p>
            </div>
        </div>
    );
}
export default Loading;