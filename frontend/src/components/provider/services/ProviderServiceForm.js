import HotelServiceFields from "@/components/provider/services/form/ProviderHotelServicesFields";
import ServiceBaseFields from "@/components/provider/services/form/ProviderServiceBaseFields";
import TourServiceFields from "@/components/provider/services/form/ProviderTourServiceFields";
import TransportServiceFields from "@/components/provider/services/form/ProviderTransportServiceFields";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";



const ProviderServiceForm = (
    {
        formService,
        images,

        onChange,
        updateField,
        onServiceTypeChange,
        onChangeFile,

        onSubmit,
        isLoading,
    }
) => {

    return (
        <form onSubmit={onSubmit} className="space-y-6">
            <ServiceBaseFields
                formService={formService}
                images={images}
                onChange={onChange}
                updateField={updateField}
                onServiceTypeChange={onServiceTypeChange}
                onChangeFile={onChangeFile}
            />

            {formService.serviceType === "TRANSPORT" && (
                <TransportServiceFields
                    formService={formService}
                    onChange={onChange}
                />
            )}

            {formService.serviceType === "TOUR" && (
                <TourServiceFields
                    formService={formService}
                    onChange={onChange}
                />
            )}

            {formService.serviceType === "HOTEL" && (
                <HotelServiceFields
                    formService={formService}
                    onChange={onChange}
                />
            )}
            <div className="flex justify-end ">
                <Button type="submit" disabled={isLoading}>
                    {isLoading ? <Spinner /> : "Lưu dịch vụ"}
                </Button>
            </div>
        </form>
    );
};

export default ProviderServiceForm;