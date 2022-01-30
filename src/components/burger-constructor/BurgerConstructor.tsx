import React from 'react';
import {Button, ConstructorElement, CurrencyIcon, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {data} from "../../utils/data";
import classnames from "classnames";
import main from '../app/app.module.css'
import style from './burger-constructor.module.css'

// type BurgerConstructorProps = {}
const BurgerConstructor = () => {
  const totalOrderSum  = data.map(item => item.price).reduce((partialSum, a) => partialSum + a, 0);
  return (
      <section className={classnames('mb-10', main.w_48)}>
        <div className={classnames(main.flex,  main.f_d_column, main.f_a_center, main.gap_10)}>
          <ConstructorElement
              type="top"
              isLocked={true}
              text="Краторная булка N-200i (верх)"
              price={200}
              thumbnail={'https://code.s3.yandex.net/react/code/bun-01-large.png'}
          />
          <div className={classnames(main.flex,  main.f_d_column, style.constructor_body, main.gap_10)}>
            {
              data.map((item:any, index ) => {
                if(item.type !== 'bun') {
                  return (
                    <div className={classnames(main.flex, main.f_a_center, main.f_j_between)}  key={`${item._id}_${index}`} >
                      <DragIcon type={"primary"}/>
                      <ConstructorElement
                        text={item.name}
                        price={item.price}
                        thumbnail={item.image_mobile}/>
                    </div>
                  )
                }
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
        <div className={classnames(main.flex, main.f_a_center, main.j_c_end, 'mt-5 mb-5')}>
          <p className={classnames(main.flex, 'text text_type_digits-medium mr-10', style.total_sum)}>
            {totalOrderSum}
            <CurrencyIcon type="primary" />
          </p>
          <Button type="primary" size="large">Оформить заказ</Button>
        </div>
      </section>

  );
};

export default BurgerConstructor;