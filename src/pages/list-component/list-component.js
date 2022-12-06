import ListItem from "./list-item";

const ListComponent = ({
  title,
  isList,
  lists = [
    {img: "/images/bookship.jpeg", title: "BOOKLIST1", _id: "123"},
    {img: "/images/bookship.jpeg", title: "BOOKLIST1", _id: "123321"},
    {img: "/images/bookship.jpeg", title: "BOOKLIST1", _id: "12332"},
    {img: "/images/bookship.jpeg", title: "BOOKLIST1", _id: "1233"}
  ]
}) => {
  return (
      <ul className="list-group list-group-horizontal wd-bg-blue">
        <li className="list-group-item wd-bg-blue col-4 d-flex align-items-center">
          <h4 className="fw-bold m-3">
            {title.split(' ')[0]}<br/>{title.split(' ')[1]}
          </h4>
        </li>
        <div className="row">
          {lists ?
              lists.map((ele, idx) =>
                  <div key={idx} className="col-lg-3 col-md-6 col-sm-12">
                    <ListItem ele={ele} isList={isList}/>
                  </div>)
              : <div>No Content</div>}
        </div>
      </ul>
  );
}

export default ListComponent;