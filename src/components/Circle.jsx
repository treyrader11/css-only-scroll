import { forwardRef } from "react";
import { cn } from "../lib/utils";

function Circle({ className, onClick }, ref) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "circle",
        "bg-yellow-400",
        "size-20",
        "rounded-full",
        // "mt-3",
        "cursor-pointer",
        className
      )}
      ref={ref}
    />
  );
}

export default forwardRef(Circle);

// import { forwardRef } from "react";
// import { cn } from "../lib/utils";

// const Circle = forwardRef(({ className }, ref) => {
//   return (
//     <div
//       className={cn(
//         "circle",
//         "bg-yellow-400",
//         "size-20",
//         "rounded-full",
//         // "mt-3",
//         "cursor-pointer",
//         className
//       )}
//       ref={ref}
//     />
//   );
// });

// export default Circle;
