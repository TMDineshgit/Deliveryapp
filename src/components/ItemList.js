
import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/slices/cartSlice";

const ItemList = ({ items, actionLable="ADD", onAction }) => {

  const dispatch = useDispatch()
  
  const handleAddCartItem = (item) =>{
    dispatch(addItem(item))
  }

  return (
    <div className="item-list">
      {items.map((item) => {
        const info = item.card.info;

        return (
          <div className="menu-item mb-2 p-2 border-b border-gray-200 last:border-0 flex items-start justify-between" key={info.id}>
            <div className="w-10/12">
              <h4 className="text-md font-bold mb-1">{info.name}</h4>

              <p>
                ₹
                {(
                  (info.defaultPrice ?? info.price) / 100
                ).toFixed(2)}
              </p>

              <p>{info.description}</p>
            </div>
            <div className="w-2/12">
            {info.imageId && (
              
                <img
                src={`https://namastedev.com/images/${info.imageId}`}
                alt={info.name}
                className="w-full object-cover"
              />
            )}
            <button onClick={()=>handleAddCartItem(item)} type="button" className="cursor-pointer bg-orange-600 text-white font-medium px-4 py-2 rounded-lg">Add +</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
