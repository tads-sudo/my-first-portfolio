import React from "react";
import { Button, ButtonText, TextProperty } from "../../components";
import { projectCategories } from "../../config";

export const Categories = ({ filter }) => {
  return (
    <>
      {projectCategories.categories.map((category, index) => {
        return (
          <Button
            onClick={() => {
              filter(category.id);
            }}
            size="SM"
            corner={8}
            color="SECONDARY"
            key={`category-${index}`}
            whileHover={{
              boxShadow: "0 0 0 2px rgba(255,113,41,1)",
            }}
            whileFocus={{
              boxShadow: "0 0 0 2px rgba(255,113,41,1)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <ButtonText>
              <TextProperty color="TERTIARY">{category.label}</TextProperty>
            </ButtonText>
          </Button>
        );
      })}
    </>
  );
};
