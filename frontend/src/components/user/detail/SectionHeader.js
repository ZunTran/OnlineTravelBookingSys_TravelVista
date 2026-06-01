const SectionHeader = ({ title, content }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold">
                {title}
            </h2>

            <p className="text-muted-foreground">
                {content}
            </p>
        </div>
    );
};

export default SectionHeader;