import React from 'react';
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {data} from "../../utils/data";
import classnames from "classnames";
import main from '../app/app.module.css'
import style from './ingredient-list.module.css'

type IngredientListProps = {
  name: string
  type: string
}

const IngredientList  = ({ name, type }: IngredientListProps) => {
  function useCounter(initialValue: number = 0) {
    const [value, setValue] = React.useState(initialValue);
    const increment = React.useCallback(
        () => setValue((v) => ( v + 1)),
        []
    );
    return [value, increment] as const;
  }
  const [counter, setCounter] = useCounter(0)
  const handleCounterClick = () => {
    setCounter()
  }
  return (
      <div className={classnames(style.ingredients, 'mb-5')}>
        <h3 className="title-md">{name}</h3>
        <div className={classnames(main.row, main.f_wrap)}>
          { data.filter((ingredient) =>ingredient.type === type).map((item: any, index) => {
            return (
              <article key={`${item._id}`}
                   onClick={handleCounterClick}
                   className={classnames(main.w_45, main.flex, main.f_d_column, main.f_a_center, style.ingredient, 'mb-10')}>
                  {item.calories < 1200 && (<Counter count={counter}/>)} {/*Временное условия чтобы видеть счетчики*/}
                  <img className={classnames(main.w_100, 'mb-2')} src={item.image_large} alt="neo burger"/>
                  <p className={classnames(main.flex, style.ingredient_price, 'mb-1')}>
                    <span className={classnames('text text_type_digits-default', 'mb-3')}>{item.price}</span>
                    <CurrencyIcon type="primary" />
                  </p>
                  <p className={classnames('text text_type_main-default', 'mb-3')}>{item.name}</p>
              </article>
            )
          })
        }
        </div>
    </div>
  );
};

export default IngredientList;