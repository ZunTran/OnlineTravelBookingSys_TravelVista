const ReviewHeader = ({ count = 0 }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold">
                Đánh giá từ khách hàng
            </h2>

            <p className="text-muted-foreground">
                {count > 0
                    ? `${count} đánh giá cho dịch vụ này`
                    : "Xem cảm nhận của khách hàng về dịch vụ."}
            </p>
        </div>
    );
};

export default ReviewHeader;