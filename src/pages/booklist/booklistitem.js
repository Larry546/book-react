import axios from 'axios';

const BooklistItem = (item) => {
    fetch(`https://api.itbook.store/1.0/books/${item.item}`).then(result => result.json())
        .then(json =>console.log(json));
    let example = {error:"0", title:"MongoDB Notes for Professionals", subtitle:"this is a subtitle",
        authors:"Stack Overflow Community", publisher:"Self-publishing",language:"English",
        isbn10:"1650286198",isbn13:"1001650286196",pages:"72",year:"2018",rating:"0",
        desc:"The MongoDB Notes for Professionals book is compiled from Stack Overflow Documentation, the content is written by the beautiful people at Stack Overflow....",
        price:"$0.00",image:"https://itbook.store/img/books/1001650286196.png",
        url:"https://itbook.store/books/1001650286196",
        pdf:{"Free eBook":"https://www.dbooks.org/d/1531-1650286163-970a73daa281b041/"}};
    return(
        <div className="col-6 d-flex flex-row">
            <img className="rounded" height={200} src={example.image} alt={"cover"}/>
            <div className="d-flex flex-column">
                <p className="fw-bold m-3">{example.title}</p>
                <p className="ms-3">{example.subtitle}</p>
                <p className="ms-3">Authors: {example.authors}</p>
                <p className="mt-auto ms-3">
                    <i className="bi bi-star-fill text-warning"></i>
                    <span className="ms-2">4.0</span>
                </p>
            </div>
        </div>
    );
};
export default BooklistItem;