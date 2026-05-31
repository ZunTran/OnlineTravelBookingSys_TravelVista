import { SERVICE_TYPES } from "@/constants/provider/FilterMenu";

export const getServiceTypeLabel = (type) => {
    return (
        SERVICE_TYPES.find(
            (item) => item.value === type
        )?.label || type
    );
};


export const updateItemInListCache = (
    queryClient,
    queryKey,
    itemId,
    updater,
    idField = "id"
) => {
    queryClient.setQueriesData(
        { queryKey },
        (oldData) => {
            if (!oldData?.content) return oldData;

            return {
                ...oldData,
                content: oldData.content.map((item) =>
                    item[idField] === itemId
                        ? updater(item)
                        : item
                ),
            };
        }
    );
};
