import React from 'react';
import {Button, ConstructorElement, CurrencyIcon, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import Distance from "../Distance";
import {data} from "../../utils/data";
import './burger-constructor.css'

// type BurgerConstructorProps = {}
const BurgerConstructor = () => {
  const totalOrderSum  = data.map(item => item.price).reduce((partialSum, a) => partialSum + a, 0);
  return (
      <div className="w-48">
        <Distance w={null} h={25}/>
        <div className="flex f-d-column f-a-center gap-10">
          <ConstructorElement
              type="top"
              isLocked={true}
              text="Краторная булка N-200i (верх)"
              price={200}
              thumbnail={'https://code.s3.yandex.net/react/code/bun-01-large.png'}
          />
          <div className="constructor-body flex f-d-column gap-10">
            {
              data.map((item:any, index ) => {
                return (
                    <div className="flex f-a-center" key={index}>
                      <DragIcon type={"primary"}/><Distance w={1} h={null}/>
                      <ConstructorElement key={index}
                        text={item.name}
                        price={item.price}
                        thumbnail={item.image_mobile}/>
                    </div>
                )
              })
            }
          </div>
          <ConstructorElement
              type="bottom"
              isLocked={true}
              text="Краторная булка N-200i (низ)"
              price={200}
              thumbnail={'https://code.s3.yandex.net/react/code/bun-01-large.png'}
          />
        </div>
        <Distance w={null} h={10}/>
        <div className="flex j-c-end f-a-center">
          <p className="text text_type_digits-medium total-sum flex">{totalOrderSum}
            <CurrencyIcon type="primary" /></p><Distance w={10} h={10}/>
          <Button type="primary" size="large">Оформить заказ</Button>
        </div>
      </div>
  );
};

export default BurgerConstructor;