const [isValue, setValue] = useState("");

setValue("Movie");

const [isList, setList] = useState([]);

function abc() {
  setList([...isList, isValue]);
}

function deleteHandler(index) {
 const newData= isList.filter((item,i) => i !== index);
 setList(newData)
}

