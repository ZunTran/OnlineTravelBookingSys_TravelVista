import { BreadcrumbList, Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { LucideHome } from "lucide-react";
import { Link } from "react-router-dom";

const MyBreadcrumb = ({ path }) => {

    return (
        <Breadcrumb className="pb-5 pl-5">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link to="/"><LucideHome className="w-5 h-5" /></Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage className="text-sm text-gray-500">{path}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>

    );
}

export default MyBreadcrumb;