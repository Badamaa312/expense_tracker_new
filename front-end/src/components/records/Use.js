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

<div className="">
  {categories.map((category, index) => {
    if (category.id === record.category_id)
      return (
        <div key={index} className="flex items-center justify-between">
          <div
            className="rounded-full w-10 h-10 flex justify-center items-center"
            style={{
              backgroundColor: category.icon_color,
            }}
          >
            {icons[category?.category_icon]}
          </div>
          <p className="text-[16px] font-[400] leading-6">{record?.name}</p>
          <p className="text-[12px] font-[400] leading-4 text-[#6B7280]">
            {record?.date}
          </p>
          <p className="text-[12px] font-[400] leading-4 text-[#6B7280]">
            {record?.time}
          </p>
          <div
            className={`flex items-center justify-end gap-2 ${
              record?.transaction_type == "INC"
                ? "text-[#84CC16]"
                : "text-[red]"
            }  text-[16px] font-[600] leading-6`}
          >
            <p className="flex justify-end">
              {record.transaction_type == "INC" ? "+" : "-"}
            </p>
            <p className="flex justify-end number">{record?.amount}₮</p>
          </div>
        </div>
      );
  })}
</div>;
