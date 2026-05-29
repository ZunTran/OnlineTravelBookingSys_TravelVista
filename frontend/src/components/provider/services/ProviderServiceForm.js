import HotelServiceFields from "@/components/provider/services/services-form/HotelServicesFields";
import ServiceBaseFields from "@/components/provider/services/services-form/ServiceBaseFields";
import TourServiceFields from "@/components/provider/services/services-form/TourServiceFields";
import TransportServiceFields from "@/components/provider/services/services-form/TransportServiceFields";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";



const ProviderServiceForm = (
    {
        formService,
        images,

        handleChange,
        updateField,
        handleServiceTypeChange,
        handleChangeFile,

        onSubmit,
        isLoading, }
) => {

    return (
        <form onSubmit={onSubmit} className="space-y-6">
            <ServiceBaseFields
                formService={formService}
                images={images}
                handleChange={handleChange}
                updateField={updateField}
                handleServiceTypeChange={handleServiceTypeChange}
                handleChangeFile={handleChangeFile}
            />

            {formService.serviceType === "TRANSPORT" && (
                <TransportServiceFields
                    formService={formService}
                    handleChange={handleChange}
                />
            )}

            {formService.serviceType === "TOUR" && (
                <TourServiceFields
                    formService={formService}
                    handleChange={handleChange}
                />
            )}

            {formService.serviceType === "HOTEL" && (
                <HotelServiceFields
                    formService={formService}
                    handleChange={handleChange}
                />
            )}
            <div className="flex justify-end">
                <Button type="submit" disabled={isLoading}>
                    {isLoading ? <Spinner /> : "Lưu dịch vụ"}
                </Button>
            </div>
        </form>
    );
};

export default ProviderServiceForm;