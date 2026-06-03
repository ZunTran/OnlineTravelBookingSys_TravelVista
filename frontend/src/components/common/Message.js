import { memo } from "react";

const Message = ({ message, currentUsername, }) => {

    const isMine =
        message.senderId === currentUsername;

    return (
        <div
            className={`flex ${isMine
                ? "justify-end"
                : "justify-start"
                }`}
        >
            <div
                className={`max-w-[75%] rounded-2xl px-4 py-2 text-sm shadow-sm ${isMine
                    ? "rounded-br-sm bg-primary text-primary-foreground"
                    : "rounded-bl-sm bg-white text-foreground"
                    }`}
            >
                {!isMine && (
                    <p className="mb-1 text-xs font-semibold text-muted-foreground">
                        {message.senderName}
                    </p>
                )}

                <p className="whitespace-pre-wrap break-words">
                    {message.text}
                </p>

                <p
                    className={`mt-1 text-right text-[10px] ${isMine
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground"
                        }`}
                >
                    {new Date(
                        message.createdAt
                    ).toLocaleTimeString(
                        "vi-VN",
                        {
                            hour: "2-digit",
                            minute: "2-digit",
                        }
                    )}
                </p>
            </div>
        </div>
    );
};

export default memo(Message);