const [category, setCategory] = useState([]);

const fetchCategories = async () => {
  try {
    const response = await fetch(`${BACKEND_ENDPOINT}/category`);
    const data = await response.json();
    setCategory(data?.data);
    console.log(data.data);
  } catch (error) {
    console.log("Category error", error);
  }
};

// {filteredRecords?.map((record) => {
//   return (
//     <div
//       key={record.id}
//       className="flex items-center justify-between px-6 py-4 bg-white rounded-[12px]"
//     >
//       <div className="flex gap-4">
//         <div
//           className="rounded-full w-10 h-10 flex justify-center items-center"
//           style={{
//             backgroundColor: record.icon_color,
//           }}
//         >
//           {icons[record?.category_icon]}
//         </div>
//         <div className="flex flex-col gap-4 justify-center items-center">
//           <p className="text-[16px] font-[400] leading-6">
//             {record?.name}
//           </p>
//           <p className="text-[12px] font-[400] leading-4 text-[#6B7280]">
//             {record?.date}
//           </p>
//         </div>
//       </div>
//       <div
//         className={`flex items-center gap-2 ${
//           record?.transaction_type == "INC"
//             ? "text-[#84CC16]"
//             : "text-[red]"
//         }  text-[16px] font-[600] leading-6`}
//       >
//         <p>{record.transaction_type == "INC" ? "+" : "-"}</p>
//         <p className="number">{record?.amount}₮</p>
//       </div>
//     </div>
//   );
// })}

// const router = useRouter();

// const formik = useFormik({
//   initialValues: {
//     name: "",
//     icon_color: "",
//     category_icon: "",
//   },
//   validationSchema: Yup.object({
//     name: Yup.string().name("Please insert name".required("Required")),
//   }),
//   onSubmit: async (values) => {
//     try {
//       const response = await fetch("http://localhost:1234/category", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(values),
//       });
//       console.log(request.name);
//       const data = await response.json();
//     } catch (error) {
//       console.log("Category error", error);
//     }
//   },
// });

// const fetchCategories = async (values) => {
//   try {
//     const response = await fetch("http://localhost:1234/category", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(values),
//     });
//     const data = await response.json();
//     setCategory(data?.data);
//   } catch (error) {
//     console.log("Category error", error);
//   }
// };
