import React from "react";

import { Category } from "../Category";

import { categories } from "../../shared/utils";

import * as S from "./styles";

type Props = {
  categorySelected: string;
  hasCheckBox?: boolean;
  setCategory: (categoryId: string) => void;
};

export function CategorySelect({
  categorySelected,
  hasCheckBox = false,
  setCategory,
}: Props) {
  return (
    <S.Container
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          hasCheckBox={hasCheckBox}
          checked={category.id === categorySelected}
          onPress={() => {
            setCategory(category.id);
          }}
        />
      ))}
    </S.Container>
  );
}
