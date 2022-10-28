function Categories(props) {
  const {categories, selectedCategory, updateSelectedCategory} = props;

  return <div>
    <select onChange={(e) => {updateSelectedCategory(e.target.value)}} value={selectedCategory}>
      <option></option>
      {categories.map((category) => <option>{category}</option>)}
    </select>
    <button onClick={() => updateSelectedCategory("")}>
      Réinitialiser
    </button>
  </div>
}

export default Categories;
