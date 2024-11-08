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

{
  clickedCatName === category.name ? <EyeIcon /> : <NotEye />;
}

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
