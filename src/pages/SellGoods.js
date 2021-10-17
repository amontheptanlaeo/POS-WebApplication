import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";

function SellGoods() {
  const [DataSelect, setDataSelect] = useState();
  const [Goods_ID, setGoods_ID] = useState("");
  const [Count_Buy, setCount_Buy] = useState(0);
  const [Count_Stock, setCount_Stock] = useState(0)
  const menu = [];

  useEffect(() => {
    const res = axios({
      method: "GET",
      url: "https://posappserver.herokuapp.com/sellgoods",
    });
    res.then((value) => {
      console.log(value.data);

      value.data.forEach((element) => {
        console.log(element.Goods_Name);
        menu.push({ value: element.Goods_ID, label: element.Goods_Name,count:element.Count_Stock });
      });
      setDataSelect(menu)
    });
  }, []);
  const onSell = async () => {
    try {
      var Count_Current=Count_Stock-Count_Buy
    axios({
        method: "POST",
        url: "https://posappserver.herokuapp.com/sellgoods",
        data: {
          Goods_ID: Goods_ID,
          Count_Current:Count_Current
        },
      });
      console.log('SUCCESS')
      
    } catch (error) {
      console.log(error)
      
    }
      
  };
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div>
      <Select options={DataSelect} onChange={(e) => (setGoods_ID(e.value),setCount_Stock(e.count))} />
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          จำนวนที่ซื้อ:
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="จำนวนที่ซื้อ"
          onChange={(e) => {
            setCount_Buy(e.target.value);
          }}
        />
      </div>
      <button className="btn btn-primary" onClick={onSell}>
        ขาย
      </button>
    </div>
  );
}

export default SellGoods;
