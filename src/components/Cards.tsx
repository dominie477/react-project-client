import { FunctionComponent, useEffect, useState } from "react";
import { Card } from "../interfaces/Card";
import { deleteCard, getAllCards } from "../services/cardsService";
import Navbar from "./Navbar";
import { getIsAdmin } from "../services/userService";
import { Link } from "react-router-dom";
import { errorMsg, successMsg } from "../services/feedbacksService";
// import { addToUserCart } from "../services/cartService";

interface CardsProps {}

const Cards: FunctionComponent<CardsProps> = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [isChanged, setIsChanged] = useState<boolean>(false);

  useEffect(() => {
    getAllCards()
      .then((result) => setCards(result.data))
      .catch((error) => console.log(error));
  }, [isChanged]);

  const handleDelete = (card: Card) => {
    if (window.confirm(`Are you sure you want to delete ${card.name}`))
      deleteCard(card._id as string)
        .then(() => {
          setIsChanged(!isChanged);
          successMsg("Card deleted succssfully");
        })
        .catch((err) => errorMsg(err));
  };

  //   const handleAddToCart = (card: Card) => {
  //     card.quantity = 1;
  //     addToUserCart(card)
  //       .then(() => {
  //         successMsg("Card wass added to cart");
  //       })
  //       .catch((err) => errorMsg(err));
  //   };
  return (
    <>
      <Navbar />
      <div
       
      >
        <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Cards</h1>

        {getIsAdmin() ? (
          <div>
            <Link className="btn btn-success" to="add">
              <i className="fa-solid fa-plus"></i> Add New Card
            </Link>
          </div>
        ) : null}
        <div className="row">
          {cards.length ? (
            cards.map((card: Card) => (
              <div
                key={card._id}
                className="card col-md-6 col-12 m-5"
                style={{ width: "18rem" }}
              >
                <img src={card.image} alt="Basa" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Brand: {card.name}</h5>
                  <p className="card-text">Phone: +{card.phone}</p>
                  <p className="card-text">Address: {card.address}</p>
                </div>
                <div className="card-footer text-center">
                  <h5 className="card-title display-5 fs-3">{card.description}</h5>
                  {getIsAdmin() ? (
                    <>
                      <Link
                        to={`edit/${card._id}`}
                        className="btn btn-warning mx-1"
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                      </Link>
                      <a
                        onClick={() => handleDelete(card)}
                        className="btn btn-danger mx-1"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </a>
                    </>
                  ) : null}
                  {/* <button
                  onClick={() => handleAddToCart(card)}
                  className="btn btn-primary w-100"
                >
                  Add To Cart
                </button> */}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No cards on store</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Cards;
