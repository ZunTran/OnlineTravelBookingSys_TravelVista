import MyBreadcrumb from "@/components/common/MyBreadcrumb";

const DetailHeader = ({ title }) => {

    return (
        <div className="flex items-end justify-between">
            <div>
                <MyBreadcrumb path={title} />
                <h1 className="text-3xl font-bold">{title}</h1>
            </div>

        </div>
    );
};

export default DetailHeader;