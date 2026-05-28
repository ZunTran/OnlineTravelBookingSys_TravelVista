import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils" // Nếu CRA thuần chưa config alias, Han đổi thành "../../lib/utils" nha

const Table = React.forwardRef(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto rounded-lg border border-zinc-200 bg-white">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
))
Table.displayName = "Table"

const TableHeader = React.forwardRef(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b bg-zinc-50/75", className)} {...props} />
))
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
))
TableBody.displayName = "TableBody"

// ==========================================
// ĐỊNH NGHĨA CÁC BIẾN THỂ (VARIANTS) CHO ROW
// ==========================================
const tableRowVariants = cva(
  "border-b transition-colors data-[state=selected]:bg-muted",
  {
    variants: {
      variant: {
        default: "hover:bg-muted/50",
        // odd: cho hàng lẻ, even: cho hàng chẵn giúp tạo hiệu ứng mượt mắt khi bảng có 30-40 chuyến xe
        striped: "odd:bg-white even:bg-zinc-50/60 hover:bg-zinc-100/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const TableRow = React.forwardRef(({ className, variant, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(tableRowVariants({ variant }), className)}
    {...props}
  />
))
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-10 px-3 text-left align-middle font-semibold text-zinc-600 [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
))
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      "p-3 align-middle text-zinc-700 [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
))
TableCell.displayName = "TableCell"

export { Table, TableHeader, TableBody, TableRow, TableHead, TableCell }