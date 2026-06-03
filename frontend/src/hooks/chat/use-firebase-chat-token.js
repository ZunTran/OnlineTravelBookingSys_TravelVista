import { firebaseAuth } from "@/configs/firebase";
import { getChatTokenApi } from "@/services/chat.service";
import { signInWithCustomToken } from "firebase/auth";
import { useEffect, useState } from "react";


export const useFirebaseChatToken = (enabled = true) => {
    const [isReady, setIsReady] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!enabled)
            return;

        const loginFirebase = async () => {
            try {
                setIsLoading(true);

                const res = await getChatTokenApi();
                const token = res?.firebaseToken;

                console.log(token);

                if (!token || typeof token !== "string") {
                    throw new Error("token không hợp lệ ở frontend");
                }

                await signInWithCustomToken(
                    firebaseAuth,
                    token.trim()
                );

                setIsReady(true);
            } finally {
                setIsLoading(false);
            }
        };

        loginFirebase();
    }, [enabled]);

    return {
        isReady,
        isLoading,
    };
};