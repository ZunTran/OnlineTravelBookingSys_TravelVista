import HotelServiceFields from "@/components/provider/services/form/HotelServicesFields";
import ServiceBaseFields from "@/components/provider/services/form/ServiceBaseFields";
import TourServiceFields from "@/components/provider/services/form/TourServiceFields";
import TransportServiceFields from "@/components/provider/services/form/TransportServiceFields";
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
                handleChange={onChange}
                updateField={updateField}
                handleServiceTypeChange={onServiceTypeChange}
                handleChangeFile={onChangeFile}
            />

            {formService.serviceType === "TRANSPORT" && (
                <TransportServiceFields
                    formService={formService}
                    handleChange={onChange}
                />
            )}

            {formService.serviceType === "TOUR" && (
                <TourServiceFields
                    formService={formService}
                    handleChange={onChange}
                />
            )}

            {formService.serviceType === "HOTEL" && (
                <HotelServiceFields
                    formService={formService}
                    handleChange={onChange}
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