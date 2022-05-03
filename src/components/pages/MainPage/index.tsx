import Button from '../../common/Button';
import React, { useEffect, useState } from 'react';
import { data } from '../../../helpers';
import style from './MainPage.module.scss';
import { Link, useLocation } from 'react-router-dom';

const MainPage = () => {
  const [listVisible, setListVisible] = useState(false);
  const handler = () => {
    setListVisible((prev) => !prev);
  };

  const location: any = useLocation();

  useEffect(() => {
    if (location?.state?.isOpen) {
      setListVisible(true);
    }
  }, [location?.state?.isOpen]);

  return (
    <>
      <div className={style.main}>
        <h1>User List</h1>

        <div>
          {listVisible ? (
            <ul>
              {data.map((el) => {
                {
                  return (
                    <Link to={`${el.name}`}>
                      <li key={el.id}>{el.name}</li>
                    </Link>
                  );
                }
              })}
            </ul>
          ) : (
            <p>Текст скрыт</p>
          )}
        </div>
        <Button title={listVisible ? 'Cкрыть список' : 'Показать список'} onClick={handler} />
      </div>
    </>
  );
};

export default MainPage;
