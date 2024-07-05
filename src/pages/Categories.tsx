import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCategories } from "@store/categories/categoriesSlice";
import { Category } from "@components/ecommerce";
import { GridList } from "@components/common";
import { Loading } from "@components/feedback";
import { TCategory } from "@customTypes/category";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    if (!records.length) {
      dispatch(actGetCategories());
    }
  }, [dispatch, records]);

  return (
    <Loading loading={loading} error={error}>
      <GridList<TCategory>
        records={records}
        renderItem={(record) => <Category {...record} />}
      />
    </Loading>
  );
};

export default Categories;
