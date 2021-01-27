import React from "react";
import {
  Button,
  ButtonText,
  SocialIcon,
  TextProperty,
  Text,
  SmallText,
  Image,
} from "../../components";
import { projectCategories } from "../../config";
import { Icon } from "../../resources";

export const Categories = ({ setFilterValue }) => {
  const filter = (value) => {
    setFilterValue(value);
  };

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

export const Functionalities = ({ project, classes, projectIndex }) => {
  return (
    <>
      {project.functionalities.map((functionality, index) => {
        return (
          <div
            className={classes.item}
            key={`functionalities-${projectIndex}-${index}`}
          >
            <SocialIcon>
              <Icon.Bullet />
            </SocialIcon>
            <Text bold>{functionality}</Text>
          </div>
        );
      })}
    </>
  );
};

export const Technologies = ({ project, projectIndex, setFilterValue }) => {
  const filter = (value) => {
    setFilterValue(value);
  };

  return (
    <>
      {project.technologies.map((technology, index) => {
        return (
          <Button
            onClick={() => {
              filter(technology.id);
            }}
            key={`technologies-${projectIndex}-${index}`}
            type="OUTLINE"
            size="SM"
            color="SUBTLE"
            corner={8}
            whileHover={{
              boxShadow: "0 0 0 2px rgba(130,130,118,1)",
            }}
            whileFocus={{
              boxShadow: "0 0 0 2px rgba(130,130,118,1)",
            }}
            whileTap={{ scale: 0.9 }}
          >
            <SmallText>
              <TextProperty color="TERTIARY">{technology.label}</TextProperty>
            </SmallText>
          </Button>
        );
      })}
    </>
  );
};

export const Images = ({ project, projectIndex }) => {
  return (
    <>
      {project.images.map((image, index) => {
        return (
          <Image
            src={process.env.PUBLIC_URL + image}
            key={`images-${projectIndex}-${index}`}
            widthM="100%"
            heightM="100%"
            widthT="100%"
            heightT="100%"
            widthD="auto"
            heightD="auto"
          />
        );
      })}
    </>
  );
};
