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
